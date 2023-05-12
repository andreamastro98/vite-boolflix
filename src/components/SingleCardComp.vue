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
            },
            getVote(){
                return Math.ceil(this.dettagliFilm.vote_average / 2) //voto compreso tra 1 e 5
            }
        }
    }
</script>

<template>
    <div class="mt-4 mx-1 position-relative single-card">
        <img :src="getImages()" alt="" class="rounded-2">
        <div class="p-3 position-absolute description">
            <p><b>Titolo: </b>{{ dettagliFilm.original_title }}</p>
            
            <p><b>Descrizione: </b>{{ dettagliFilm.overview }}</p>
            
            <div class="my-3">
                <span class="white">Voto: </span>
                <i v-for="n in 5" class="fa-star" 
                :class="(n <= getVote()) ? 'fa-solid fa-star yellow' : 'fa-solid fa-star'"></i>
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

.description{
    display: none;
    bottom: 80px;
}

.single-card{
    &:hover{
        img:first-child{
            filter: brightness(10%);
        }
        .description{
            display: block;
            filter: brightness(100%);
            }
        }
    }

</style>