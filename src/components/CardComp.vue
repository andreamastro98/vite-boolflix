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
    <div id="container-film" class="d-flex overflow-x-auto example" @wheel.prevent="scrollHorrizontale($event, 'container-film')">
        <SingleCardComp 
        v-for="(elem, index) in store.ArrayFilm"
        :key="index"
        :dettagliFilm="elem"/>       
    </div>
</template>

<style lang="scss" scoped>

</style>