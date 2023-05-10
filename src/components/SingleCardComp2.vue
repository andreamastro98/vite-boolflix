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
            }
        }
    }
</script>

<template>
    <div class="mt-4 mx-1">
        <img :src="store.pathImages + dettagliSerie.poster_path" alt="">
        <div class="p-3">
            <p>{{ dettagliSerie.original_name }}</p>

            <img :src="store.pathLang + bandierine()">

            <p>{{ Math.ceil(Math.round((dettagliSerie.vote_average/10)*5) )  }}</p>
        </div>
        
    </div>        
</template>

<style lang="scss" scoped>

p{
    color: white;
    font-size: 12px;
}

</style>