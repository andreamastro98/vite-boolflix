<script>
    export default {
        name:'SingleCard',
        props:['dettagliFilm']
    }
</script>

<template>
    <div class="row">
        <div class="col-3">
            <h5>Titolo:{{ dettagliFilm.original_title }}</h5>
            <h5>Titolo originale:{{ dettagliFilm.original_title }}</h5>
            <h5>Lingua:{{ dettagliFilm.original_language }}</h5>
            <h5>Voto:{{ dettagliFilm.vote_average }}</h5>
        </div>        
    </div>
</template>

<style lang="scss" scoped>

</style>