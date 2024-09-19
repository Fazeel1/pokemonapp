import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ApiConfig } from '../shared/constants/api-config';
import { PokemonListApiResponse } from '../interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  constructor(private http: HttpClient) {}

  getPokemonList(
    offset: number = 0,
    limit: number = 20
  ): Observable<PokemonListApiResponse> {
    const url = `${ApiConfig.get}?offset=${offset}&limit=${limit}`;
    return this.http.get<PokemonListApiResponse>(url);
  }
}
