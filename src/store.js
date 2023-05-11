import { reactive } from "vue";

export const store = reactive(
    {
        ArrayFilm:[],
        ArrayTvSeries:[],
        testoRicerca:'',
        pathImages:'https://image.tmdb.org/t/p/w342/',
        Film:false,
        tvseries:false,
        Lang:'',
        pathLang:'https://flagcdn.com/16x12/'
        //https://flagcdn.com/16x12/gb.png
    }
)