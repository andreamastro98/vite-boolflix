<script>
    import { store } from '../store'

    export default {
        name:'SingleCard',
        props:['dettagliFilm'],
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="col-3 my-4">
        <img :src="store.pathImages + dettagliFilm.poster_path" alt="">
        <div>Titolo: {{ dettagliFilm.original_title }}</div>
        <div>Titolo originale: {{ dettagliFilm.original_title }}</div>
        <div>Lingua: {{ dettagliFilm.original_language }}</div>
        <div>Voto: {{ dettagliFilm.vote_average }}</div>
    </div>        
</template>

<style lang="scss" scoped>

</style>