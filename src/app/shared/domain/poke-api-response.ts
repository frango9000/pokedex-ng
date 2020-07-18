export interface PokeApiResponse<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}
