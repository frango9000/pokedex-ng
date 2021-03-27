import * as Generators from '../index';

const generateAll = async () => {
  // await new Generators.PokemonGenerator().generateResources().toPromise();
  // await new Generators.MovesGenerator().generateResources().toPromise();
  // await new Generators.MoveLearnMethodGenerator().generateResources().toPromise();
  // await new Generators.AbilitiesGenerator().generateResources().toPromise();
  // await new Generators.VersionGroupGenerator().generateResources().toPromise();
  // await new Generators.LanguageGenerator().generateResources().toPromise();
  // await new Generators.TypeGenerator().generateResources().toPromise();
  // await new Generators.ItemGenerator().generateResources().toPromise();
  await new Generators.ItemCategoryGenerator().generateResources().toPromise();
  // await new Generators.ItemPocketGenerator().generateResources().toPromise();
  // await new Generators.MachineGenerator().generateResources().toPromise();
  // await new Generators.GenerationGenerator().generateResources().toPromise();
  // await new Generators.StatGenerator().generateResources().toPromise();
};

generateAll();
