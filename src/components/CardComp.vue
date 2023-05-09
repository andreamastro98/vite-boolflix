<script>
    import { store } from '../store';
    import SingleCardComp from './SingleCardComp.vue';

    export default {
        name:'CardComp',
        components:{
            SingleCardComp,
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="container row">
        <SingleCardComp 
        v-for="(elem, index) in store.ArrayFilm"
        :key="index"
        :dettagliFilm="elem"/>       
    </div>
</template>

<style lang="scss" scoped>

</style>