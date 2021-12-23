const { getJestProjects } = require('@nrwl/jest');

module.exports = {
  projects: [...getJestProjects(), '<rootDir>/apps/pokedex-ng', '<rootDir>/libs/data', '<rootDir>/libs/domain'],
};
