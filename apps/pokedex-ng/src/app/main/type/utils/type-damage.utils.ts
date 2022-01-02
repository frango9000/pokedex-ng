import { PxType } from '@pokedex-ng/domain';

export function calculateDefensiveTypeDamages(pokeTypes: PxType[]) {
  const defensiveTypeDamages = [];
  pokeTypes.forEach((type) => {
    type.damage_relations.double_damage_from.forEach((double) => {
      const found = defensiveTypeDamages.findIndex((value) => value.name === double);
      if (found > 0) {
        defensiveTypeDamages[found].multiplier *= 2;
      } else {
        defensiveTypeDamages.push({ name: type.name, multiplier: 2 });
      }
    });
    type.damage_relations.half_damage_from.forEach((half) => {
      const found = defensiveTypeDamages.findIndex((value) => value.name === half);
      if (found > 0) {
        defensiveTypeDamages[found].multiplier *= 0.5;
      } else {
        defensiveTypeDamages.push({ name: type.name, multiplier: 0.5 });
      }
    });
    type.damage_relations.no_damage_from.forEach((none) => {
      const found = defensiveTypeDamages.findIndex((value) => value.name === none);
      if (found > 0) {
        defensiveTypeDamages[found].multiplier *= 0;
      } else {
        defensiveTypeDamages.push({ name: type.name, multiplier: 0 });
      }
    });
  });
  return defensiveTypeDamages.filter((value) => value.multiplier !== 1);
}

export function calculateOffensiveTypeDamages(pokeTypes: PxType[]) {
  const attackingTypeDamages = [];
  pokeTypes.forEach((type) => {
    type.damage_relations.double_damage_to.forEach((double) => {
      const found = attackingTypeDamages.findIndex((value) => value.name === double);
      if (found > 0) {
        attackingTypeDamages[found].multiplier *= 2;
      } else {
        attackingTypeDamages.push({ name: type.name, multiplier: 2 });
      }
    });
    type.damage_relations.half_damage_to.forEach((half) => {
      const found = attackingTypeDamages.findIndex((value) => value.name === half);
      if (found > 0) {
        attackingTypeDamages[found].multiplier *= 0.5;
      } else {
        attackingTypeDamages.push({ name: type.name, multiplier: 0.5 });
      }
    });
    type.damage_relations.no_damage_to.forEach((none) => {
      const found = attackingTypeDamages.findIndex((value) => value.name === none);
      if (found >= 0) {
        attackingTypeDamages[found].multiplier *= 0;
      } else {
        attackingTypeDamages.push({ name: type.name, multiplier: 0 });
      }
    });
  });
  return attackingTypeDamages.filter((value) => value.multiplier !== 1);
}
