


interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Earfquake",
    details: {
        author: "Tyler, the creator",
        year: 2019
    }
}

const song = 'New Song'
const { song: anotherSong, 
        songDuration: duration,
        details
    } = audioPlayer;

const { author } = details;

// console.log(anotherSong)
// console.log(song)
// console.log(duration)
// console.log(author)


const [, , trunks = 'not found' ]: string[] | any = ['Goku', 'Vegeta' ];




console.log(trunks || "Personaje no encontrado")





export {};