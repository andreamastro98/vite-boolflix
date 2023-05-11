<script>
    import { store } from '../store'

    export default {
        name:'SingleCard',
        props:['dettagliFilm'],
        data(){
            return{
                store
            }
        },
        methods: {
            bandierine(){
               if(this.dettagliFilm.original_language == 'en'){
                    return 'gb.png'
               }
               if(this.dettagliFilm.original_language == 'it'){
                    return 'it.png'
               }
               if(this.dettagliFilm.original_language == 'ja'){
                    return 'jp.png'
               } else {
                return this.dettagliFilm.original_language + '.png'
               }
            },
            getImages(){
                if (this.dettagliFilm.poster_path){
                    return this.store.pathImages + this.dettagliFilm.poster_path
                } else if (this.dettagliFilm.poster_path === null){
                    return '/images/alternativa.jpg'
                }
            }
        }
    }
</script>

<template>
    <div class="mt-4 mx-1">
        <img :src="getImages()" alt="">
        <div class="p-3">
            <p><b>Titolo: </b>{{ dettagliFilm.original_title }}</p>            
            
            <div class="my-3">
                <span class="white">Voto: </span>
                <span><i :class="(Math.ceil(dettagliFilm.vote_average) >= 2) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliFilm.vote_average) >= 4) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliFilm.vote_average) >= 6) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliFilm.vote_average) >= 8) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliFilm.vote_average) >= 10) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
            </div>

            <img :src="store.pathLang + bandierine()">
        </div>
        
    </div>        
</template>

<style lang="scss" scoped>

p{
    color: white;
    font-size: 12px;
}

.yellow{
    color: yellow;
}

.white{
    color: white;
    font-size: 12px;
    font-weight: bolder;
}

</style>