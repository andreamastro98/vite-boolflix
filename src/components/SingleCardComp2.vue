<script>
    import { store } from '../store'

    export default {
        name:'SingleCardComp2',
        props:['dettagliSerie'],
        data(){
            return{
                store
            }
        },
        methods: {
            bandierine(){
               if(this.dettagliSerie.original_language == 'en'){
                    return 'gb.png'
               }
               if(this.dettagliSerie.original_language == 'it'){
                    return 'it.png'
               }
               if(this.dettagliSerie.original_language == 'ja'){
                    return 'jp.png'
               } else {
                return this.dettagliSerie.original_language + '.png'
               }
            },
            getImages(){
                if (this.dettagliSerie.poster_path){
                    return this.store.pathImages + this.dettagliSerie.poster_path
                } else if (this.dettagliSerie.poster_path === null){
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
            <p><b>Titolo:</b> {{ dettagliSerie.original_name }}</p>            

            <div class="my-3">
                <span class="white">Voto: </span>
                <span><i :class="(Math.ceil(dettagliSerie.vote_average) >= 2) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliSerie.vote_average) >= 4) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliSerie.vote_average) >= 6) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliSerie.vote_average) >= 8) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
                <span><i :class="(Math.ceil(dettagliSerie.vote_average) >= 10) ? 'yellow' : ''" class="fa-solid fa-star"></i></span>
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