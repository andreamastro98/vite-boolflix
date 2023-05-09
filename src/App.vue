<script>

import NavComp from './components/NavComp.vue';
import CardComp from './components/CardComp.vue'
import CardComp2 from './components/CardComp2.vue';
import { store } from './store'
import axios from 'axios';

export default{
  name:'app',
  components:{
    NavComp,
    CardComp,
    CardComp2
  },
  data(){
    return{
      store
    }
  },
  created(){

    this.chiamataApi
    this.chiamataApi2
    
  },
  computed:{
    chiamataApi(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.ApiKey}&query=${store.testoRicerca}`).then((res)=>{
        
          console.log(res.data.results)

          store.ArrayFilm = res.data.results
        }
      )
    },
    chiamataApi2(){
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${store.ApiKey}&query=${store.testoRicerca}`).then((res)=>{
        
        console.log(res.data.results)

        store.ArrayTvSeries = res.data.results

        console.log(store.ArrayTvSeries)

        }
      )
    }

  },
  methods:{
    
  }
}

</script>

<template>
  <NavComp @search="chiamataApi"/>
  <main class="px-4 pt-4">
    <h2>FILM</h2>
    <CardComp/>
    <h2>SERIE TV</h2>
    <CardComp2/>
  </main>
  
</template>

<style lang="scss">
@use './style/main.scss';
main{
  background-color: black;

  h2{
    color: white;
  }
}

</style>
