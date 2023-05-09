<script>
    import { store } from '../store'

    export default {
        name:'SingleCardComp2',
        props:['dettagliSerie'],
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="mt-4 mx-2">
        <img :src="store.pathImages + dettagliSerie.poster_path" alt="">
        <div class="p-3">
            <p>{{ dettagliSerie.original_name }}</p>
            <p>{{ dettagliSerie.original_name }}</p>
            <p>{{ dettagliSerie.original_language }}</p>
            <p>{{ dettagliSerie.vote_average }}</p>
        </div>
        
    </div>        
</template>

<style lang="scss" scoped>

p{
    color: white;
    font-size: 12px;
}

</style>