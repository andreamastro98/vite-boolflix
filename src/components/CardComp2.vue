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
        },
        methods:{
            scrollHorrizontale (e, elementoHTML){

                const container = document.getElementById(elementoHTML)

                if (e.deltaY > 0){
                    container.scrollLeft += 300
                } else {
                    container.scrollLeft -= 300
                }
            }          
        }
    }
</script>

<template>
    <div id="container-serietv" class="d-flex overflow-x-auto example" @wheel.prevent="scrollHorrizontale($event, 'container-serietv')">
        <SingleCardComp2 
        v-for="(elem, index) in store.ArrayTvSeries"
        :key="index"
        :dettagliSerie="elem"/>       
    </div>
</template>

<style lang="scss" scoped>

</style>