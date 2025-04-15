import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { environment } from '@environments/environment';
import { GiphyResponse } from '../interfaces/giphy.interfaces';
import { Gif } from '../interfaces/gif.interface';
import { GifMapper } from '../mapper/gif.mapper';


@Injectable({providedIn: 'root'})
export class GifService {
    
    private http = inject(HttpClient);

    trengingGifs = signal<Gif[]>([]);
    

    constructor(){
        this.loadTrendingGifs();
    }

    loadTrendingGifs(){
        this.http.get<GiphyResponse>(`${ environment.giphyUrl }/gifs/trending`,{
            params: {
                api_key: environment.giphyApiKey,
                limit: 20
            }
        }).subscribe( (resp) => {
            const gifs = GifMapper.mapGiphyItemsToGifArray(resp.data);
            console.log({ gifs })
            
        } );
    }

    
}