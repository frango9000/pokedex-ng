import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Move } from '@pokedex-ng/domain';
import { Subscription } from 'rxjs';
import { GameVersionService } from '../../../../../shared/services/game-version.service';
import { PokemonLanguageService } from '../../../../../shared/services/pokemon-language.service';
import { PokemonMoveService } from '../../../../../shared/services/pokemon-move.service';

@Component({
  selector: 'app-pokemon-move',
  templateUrl: './pokemon-move.component.html',
  styleUrls: ['./pokemon-move.component.scss'],
})
export class PokemonMoveComponent implements OnInit, OnDestroy {
  @Input() moveId: string | number;

  move: Move;

  activeVersion = 'en';
  private versionSub: Subscription;

  constructor(
    private pokemonMoveService: PokemonMoveService,
    private pokemonVersionService: GameVersionService,
    private pokemonLanguageService: PokemonLanguageService,
    private translateService: TranslateService
  ) {}

  ngOnInit(): void {
    this.versionSub = this.pokemonVersionService.activeVersion$.subscribe((value) => (this.activeVersion = value));
    this.pokemonMoveService.getApiMove(this.moveId).subscribe((move) => {
      this.move = move;
      if (move) {
        this.generateTranslations(this.move);
      }
    });
  }

  ngOnDestroy(): void {
    this.versionSub?.unsubscribe();
  }

  private generateTranslations(move: Move): void {
    move.names.forEach((name) => {
      this.translateService.setTranslation(name.language.name, { MOVE: { [move.name]: { NAME: name.name } } }, true);
    });
    move.effect_entries.forEach((entry) => {
      this.translateService.setTranslation(
        entry.language.name,
        {
          MOVE: {
            [move.name]: {
              EFFECT_ENTRY: {
                SHORT: entry.short_effect,
                EFFECT: entry.effect,
              },
            },
          },
        },
        true
      );
    });
    const defaultFlavorTextIndex = move.flavor_text_entries.findIndex((value) => value.language.name === 'en');
    const defaultFlavorText =
      defaultFlavorTextIndex > -1
        ? move.flavor_text_entries[defaultFlavorTextIndex].flavor_text
        : 'MOVE_TRANSLATE_ERROR_001';
    this.pokemonLanguageService.getLanguageList().subscribe((languages) => {
      this.pokemonVersionService.getVersionList().subscribe((versions) => {
        languages.forEach((language) => {
          const langDefaultFlavorTextIndex = move.flavor_text_entries.findIndex(
            (value) => value.language.name === language.name
          );
          const langDefaultFlavorText =
            langDefaultFlavorTextIndex > -1
              ? move.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
              : 'MOVE_TRANSLATE_ERROR_002';
          versions.forEach((version) => {
            this.translateService.setTranslation(
              language.name,
              {
                MOVE: {
                  [move.name]: {
                    FLAVOR_TEXT: {
                      [version.name]: langDefaultFlavorTextIndex > -1 ? langDefaultFlavorText : defaultFlavorText,
                    },
                  },
                },
              },
              true
            );
          });
        });
      });
    });
    move.flavor_text_entries.forEach((entry) => {
      this.translateService.setTranslation(
        entry.language.name,
        {
          MOVE: {
            [move.name]: {
              FLAVOR_TEXT: { [entry.version_group.name]: entry.flavor_text },
            },
          },
        },
        true
      );
    });
  }
}
