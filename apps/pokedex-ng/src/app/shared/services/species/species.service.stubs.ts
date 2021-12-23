import { EggGroupService } from './egg-group.service';
import { GrowthRateService } from './growth-rate.service';
import { PokemonColorService } from './pokemon-color.service';
import { PokemonHabitatService } from './pokemon-habitat.service';
import { PokemonShapeService } from './pokemon-shape.service';
import { SpeciesService } from './species.service';

export class StubSpeciesService implements Partial<SpeciesService> {}

export const stubSpeciesServiceProvider = {
  provide: SpeciesService,
  useClass: StubSpeciesService,
};

export class StubEggGroupService implements Partial<EggGroupService> {}

export const stubEggGroupServiceProvider = {
  provide: EggGroupService,
  useClass: StubEggGroupService,
};

export class StubGrowthRateService implements Partial<GrowthRateService> {}

export const stubGrowthRateServiceProvider = {
  provide: GrowthRateService,
  useClass: StubGrowthRateService,
};

export class StubPokemonColorService implements Partial<PokemonColorService> {}

export const stubPokemonColorServiceProvider = {
  provide: PokemonColorService,
  useClass: StubPokemonColorService,
};

export class StubPokemonHabitatService implements Partial<PokemonHabitatService> {}

export const stubPokemonHabitatServiceProvider = {
  provide: PokemonHabitatService,
  useClass: StubPokemonHabitatService,
};

export class StubPokemonShapeService implements Partial<PokemonShapeService> {}

export const stubPokemonShapeServiceProvider = {
  provide: PokemonShapeService,
  useClass: StubPokemonShapeService,
};
