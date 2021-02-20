import { Component, Input, OnChanges } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Species } from '@pokedex-ng/domain';
import { GameVersionService } from '../../../../shared/services/game-version.service';
import { PokemonLanguageService } from '../../../../shared/services/pokemon-language.service';
import { PokemonSpeciesService } from '../../../../shared/services/pokemon-species.service';

@Component({
  selector: 'app-pokemon-species',
  templateUrl: './pokemon-species.component.html',
  styleUrls: ['./pokemon-species.component.scss'],
})
export class PokemonSpeciesComponent implements OnChanges {
  @Input() pokemonSpeciesId: string | number;

  public pokemonSpecies: Species;

  constructor(
    private translateService: TranslateService,
    private pokemonSpeciesService: PokemonSpeciesService,
    private pokemonVersionService: GameVersionService,
    private pokemonLanguageService: PokemonLanguageService
  ) {}

  ngOnChanges(): void {
    this.pokemonSpecies = null;
    this.pokemonSpeciesService.getPokemonSpecies(this.pokemonSpeciesId).subscribe((specie) => {
      this.pokemonSpecies = specie;
      this.generateTranslations(this.pokemonSpecies);
    });
  }

  private generateTranslations(specie: Species): void {
    specie.genera.forEach((name) => {
      this.translateService.setTranslation(
        name.language.name,
        { SPECIES: { [specie.name]: { GENERA: name.genus } } },
        true
      );
    });
    const defaultFlavorTextIndex = specie.flavor_text_entries.findIndex((value) => value.language.name === 'en');
    const defaultFlavorText =
      defaultFlavorTextIndex > -1
        ? specie.flavor_text_entries[defaultFlavorTextIndex].flavor_text
        : 'SPECIES_TRANSLATE_ERROR_001';
    this.pokemonLanguageService.getAllLanguages().subscribe((languages) => {
      this.pokemonVersionService.getAllVersionGroups().subscribe((versions) => {
        languages.forEach((language) => {
          const langDefaultFlavorTextIndex = specie.flavor_text_entries.findIndex(
            (value) => value.language.name === language.name
          );
          const langDefaultFlavorText =
            langDefaultFlavorTextIndex > -1
              ? specie.flavor_text_entries[langDefaultFlavorTextIndex].flavor_text
              : 'SPECIES_TRANSLATE_ERROR_002';
          versions.forEach((version) => {
            this.translateService.setTranslation(
              language.name,
              {
                SPECIES: {
                  [specie.name]: {
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
        specie.flavor_text_entries.forEach((entry) => {
          const groupIndex = versions.findIndex((value) => value.name.includes(entry.version.name));
          this.translateService.setTranslation(
            entry.language.name,
            {
              SPECIES: {
                [specie.name]: {
                  FLAVOR_TEXT: {
                    [versions[groupIndex].name]: entry.flavor_text,
                  },
                },
              },
            },
            true
          );
        });
      });
    });
  }
}
