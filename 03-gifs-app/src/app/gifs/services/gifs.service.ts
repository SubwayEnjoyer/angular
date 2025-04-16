import { HttpClient } from "@angular/common/http";
import { computed, effect, inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment";
import { GiphyResponse } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";
import { map, Observable, tap } from "rxjs";


const GIF_KEY = 'gifs'


const loadFromLocalStorage = () => {
  const gifs = localStorage.getItem(GIF_KEY) ?? '{}';
  const historyGifs = JSON.parse(gifs);
  return historyGifs;
}


@Injectable({ providedIn: "root" })
export class GifService {
  private http = inject(HttpClient);

  trendingGifs = signal<Gif[]>([]);
  trendingGIfsLoading = signal(true);
  searchingGifs = signal<Gif[]>([]);
  searchHistory = signal<Record<string, Gif[]>>(loadFromLocalStorage());
  searchHistoryKeys = computed(() => {
    return Object.keys(this.searchHistory());
  });

  constructor() {
    this.loadTrendingGifs();
  }


  saveHistory = effect(() => {
    const gifs = JSON.stringify(this.searchHistory());
    localStorage.setItem(GIF_KEY,gifs);
  })

  loadTrendingGifs() {
    this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/trending`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 20,
        },
      })
      .subscribe((resp) => {
        const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
        this.trendingGifs.set(gifs);
        this.trendingGIfsLoading.set(false);
      });
  }

  searchGifs(query: string):Observable<Gif[]> {
    return this.http
      .get<GiphyResponse>(`${environment.giphyUrl}/gifs/search`, {
        params: {
          api_key: environment.giphyApiKey,
          limit: 25,
          q: query,
        },
      })
      .pipe(
        map(({ data }) => data),
        map((items) => GifMapper.mapGiphyItemsToGifArray(items)),

        //historial

        tap( items => this.searchHistory.update((history) => ({
            ...history,
            [query.toLowerCase()]: items
        })))
      );


      

  }
  getHistoryGifs(query: string): Gif[]{
    return this.searchHistory()[query] ?? [];
  }
}
