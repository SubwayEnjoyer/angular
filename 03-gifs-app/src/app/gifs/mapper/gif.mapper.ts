import { Gif } from "src/app/gifs/interfaces/gif.interface";
import { GiphyItem } from "src/app/gifs/interfaces/giphy.interfaces";

export class GifMapper {
    static mapGiphtItemToGif(item: GiphyItem):Gif{
        return {
            id: item.id,
            tittle: item.title,
            url: item.images.original.url
        }
    }

    static mapGiphyItemsToGifArray(items:GiphyItem[]):Gif[]{
        return items.map(this.mapGiphtItemToGif)
    }
}