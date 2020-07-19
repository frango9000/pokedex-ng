import {NamedResource} from './named-resource';

export interface Pokemon {
  id: number;
  name: string;
  base_experience: number;
  height: number;
  weight: number;
  order: number;
  is_default: boolean;
  species: NamedResource;
  forms: [NamedResource];
  abilities: [{
    is_hidden: boolean,
    slot: number,
    ability: NamedResource
  }];
  game_indices: [{
    game_index: number,
    version: NamedResource
  }];
  held_items: [{
    item: NamedResource,
    version_details: [{
      rarity: number,
      version: NamedResource
    }]
  }];
  location_area_encounters: [{
    location_area: NamedResource,
    version_details: [{
      max_chance: number,
      encounter_details: [{
        min_level: number;
        max_level: number;
        condition_values: [NamedResource],
        chance: number,
        method: NamedResource;
      }],
      version: NamedResource
    }]
  }];
  moves: [{
    move: NamedResource,
    version_group_details: [{
      level_learned_at: number,
      version_group: NamedResource,
      move_learn_method: NamedResource
    }]
  }];
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
  };
  stats: [{
    base_stat: number,
    effort: number,
    stat: NamedResource
  }];
  types: [{
    slot: number,
    type: NamedResource
  }];

}
