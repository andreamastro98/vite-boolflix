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
            }
        }
    }
</script>

<template>
    <div class="mt-4 mx-1">
        <img :src="store.pathImages + dettagliFilm.poster_path" alt="">
        <div class="p-3">
            <p>{{ dettagliFilm.original_title }}</p>

            <img :src="store.pathLang + bandierine()">           

            <p>{{ Math.ceil(Math.round((dettagliFilm.vote_average/10)*5))}}</p>
        </div>
        
    </div>        
</template>

<style lang="scss" scoped>

p{
    color: white;
    font-size: 12px;
}

</style>