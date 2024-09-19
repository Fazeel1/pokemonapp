
  export interface PokemonListApiResponse {
    success: boolean;
    results: any;
  }

  export interface PokemonDetailApiResponse {
    name: string;
    url: string;
  }
  export interface PokemonList {
    name: string;
    url: string;
  }