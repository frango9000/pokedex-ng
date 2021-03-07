export const environment = {
  production: true,
  baseHref: '/pokedex-ng',
  apiUrl: 'https://pokeapi.co/api/v2',
  maxCacheAge: 86400000,
  logNetworkResponses: false,
  logCachedResponses: false,
  logTranslations: false,
  cache: {
    active: true,
    external: true,
    local: false,
  },
};
