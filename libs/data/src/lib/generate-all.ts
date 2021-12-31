import { concat } from 'rxjs';
import * as Generators from '../index';

const generateAll = () => {
  concat(
    // new Generators.PokemonGenerator().generateResources(),
    // new Generators.MovesGenerator().generateResources(),
    // new Generators.MoveLearnMethodGenerator().generateResources(),
    new Generators.MoveDamageClassGenerator().generateResources(),
    // new Generators.AbilitiesGenerator().generateResources(),
    // new Generators.VersionGroupGenerator().generateResources(),
    // new Generators.LanguageGenerator().generateResources(),
    new Generators.TypeGenerator().generateResources()
    // new Generators.ItemGenerator().generateResources(),
    // new Generators.ItemCategoryGenerator().generateResources(),
    // new Generators.ItemPocketGenerator().generateResources(),
    // new Generators.MachineGenerator().generateResources(),
    // new Generators.GenerationGenerator().generateResources(),
    // new Generators.StatGenerator().generateResources(),
    // new Generators.EncounterMethodGenerator().generateResources(),
    // new Generators.EncounterConditionGenerator().generateResources(),
    // new Generators.EncounterConditionValueGenerator().generateResources()
  ).subscribe((list) => console.log('Done ->', list.length));
};

generateAll();
