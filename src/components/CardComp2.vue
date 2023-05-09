<script>
    import { store } from '../store';
    import SingleCardComp2 from './SingleCardComp2.vue';

    export default {
        name:'CardComp2',
        components:{
            SingleCardComp2,
        },
        data(){
            return{
                store
            }
        }
    }
</script>

<template>
    <div class="d-flex overflow-x-auto">
        <SingleCardComp2 
        v-for="(elem, index) in store.ArrayTvSeries"
        :key="index"
        :dettagliSerie="elem"/>       
    </div>
</template>

<style lang="scss" scoped>

</style>