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

  private comparisonType: 'attacking' | 'defending' = 'defending';

  public expandedType = '';

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

  public getCompareAgainstType(): 'attacking' | 'defending' {
    return this.comparisonType === 'attacking' ? 'defending' : 'attacking';
  }

  compareTypeDamage(comparing: PxType, againstType: string): TypeDamageComparison {
    if (this.getComparisonType() === 'attacking') {
      if (comparing.damage_relations.double_damage_to.includes(againstType)) {
        return { multiplier: '2', color: green };
      } else if (comparing.damage_relations.half_damage_to.includes(againstType)) {
        return { multiplier: '½', color: yellow };
      } else if (comparing.damage_relations.no_damage_to.includes(againstType)) {
        return { multiplier: '0', color: red };
      } else {
        return { multiplier: '', color: transparent };
      }
    } else {
      if (comparing.damage_relations.double_damage_from.includes(againstType)) {
        return { multiplier: '2', color: red };
      } else if (comparing.damage_relations.half_damage_from.includes(againstType)) {
        return { multiplier: '½', color: green };
      } else if (comparing.damage_relations.no_damage_from.includes(againstType)) {
        return { multiplier: '0', color: blue };
      } else {
        return { multiplier: '', color: transparent };
      }
    }
  }

  toggleExpandedType(type: string) {
    if (!type || this.expandedType === type) {
      this.expandedType = '';
    } else {
      this.expandedType = type;
    }
  }

  compareTypesDamages(comparingA: PxType, comparingB: PxType, againstType: string): TypeDamageComparison {
    const comparisonA = this.compareTypeDamage(comparingA, againstType);
    const comparisonB = this.compareTypeDamage(comparingB, againstType);
    if (comparisonA.multiplier === '0') {
      return comparisonA;
    } else if (comparisonB.multiplier === '0') {
      return comparisonB;
    } else if (comparisonA.multiplier === '') {
      return comparisonB;
    } else if (comparisonB.multiplier === '') {
      return comparisonA;
    } else if (comparisonA.multiplier === '½') {
      if (comparisonB.multiplier === '2') {
        return { multiplier: '', color: transparent };
      } else {
        return { multiplier: '¼', color: moreGreen };
      }
    } else {
      if (comparisonB.multiplier === '2') {
        return { multiplier: '4', color: moreRed };
      } else {
        return { multiplier: '', color: transparent };
      }
    }
  }
}

interface TypeDamageComparison {
  multiplier: '0' | '½' | '2' | '' | '4' | '¼';
  color:
    | 'rgba(255,0,0,0.40)'
    | 'rgba(255,0,0,0.60)'
    | 'rgba(0,255,0,0.40)'
    | 'rgba(0,255,0,0.60)'
    | 'rgba(0,0,255,0.40)'
    | 'rgba(255,255,0,0.40)'
    | 'rgba(255,255,255,0)';
}

const red = 'rgba(255,0,0,0.40)';
const moreRed = 'rgba(255,0,0,0.60)';
const green = 'rgba(0,255,0,0.40)';
const moreGreen = 'rgba(0,255,0,0.60)';
const blue = 'rgba(0,0,255,0.40)';
const yellow = 'rgba(255,255,0,0.40)';
const transparent = 'rgba(255,255,255,0)';
