import { Component } from '@angular/core';
import { PxType } from '@pokedex-ng/domain';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TypeService } from '../../../shared/services/pokemon/type.service';

@Component({
  selector: 'pokedex-ng-type-chart',
  templateUrl: './type-chart.component.html',
  styleUrls: ['./type-chart.component.scss'],
})
export class TypeChartComponent {
  private _getTypes$: Observable<PxType[]> = this.typeService.getAll().pipe(map((types) => types.slice(0, -2)));

  private comparisonType: 'attacking' | 'defending' = 'attacking';

  constructor(private readonly typeService: TypeService) {}

  getTypes$(): Observable<PxType[]> {
    return this._getTypes$;
  }

  public switchComparisonType() {
    this.comparisonType = this.comparisonType === 'attacking' ? 'defending' : 'attacking';
  }

  public getComparisonType(): 'attacking' | 'defending' {
    return this.comparisonType;
  }

  compareTypeDamage(comparing: PxType, against: PxType): TypeDamageComparison {
    if (this.getComparisonType() === 'attacking') {
      if (comparing.damage_relations.double_damage_to.includes(against.name)) {
        return { multiplier: '2', color: green };
      } else if (comparing.damage_relations.half_damage_to.includes(against.name)) {
        return { multiplier: '½', color: yellow };
      } else if (comparing.damage_relations.no_damage_to.includes(against.name)) {
        return { multiplier: '0', color: red };
      } else {
        return { multiplier: '', color: transparent };
      }
    } else {
      if (comparing.damage_relations.double_damage_from.includes(against.name)) {
        return { multiplier: '2', color: red };
      } else if (comparing.damage_relations.half_damage_from.includes(against.name)) {
        return { multiplier: '½', color: green };
      } else if (comparing.damage_relations.no_damage_from.includes(against.name)) {
        return { multiplier: '0', color: blue };
      } else {
        return { multiplier: '', color: transparent };
      }
    }
  }
}

interface TypeDamageComparison {
  multiplier: '0' | '½' | '2' | '';
  color:
    | 'rgba(255,0,0,0.40)'
    | 'rgba(0,255,0,0.40)'
    | 'rgba(0,0,255,0.40)'
    | 'rgba(255,255,0,0.40)'
    | 'rgba(255,255,255,0)';
}

const red = 'rgba(255,0,0,0.40)';
const green = 'rgba(0,255,0,0.40)';
const blue = 'rgba(0,0,255,0.40)';
const yellow = 'rgba(255,255,0,0.40)';
const transparent = 'rgba(255,255,255,0)';
