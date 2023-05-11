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

    //this.chiamataApi()
    //this.chiamataApi2()
    
  },
  computed:{
    

  },
  methods:{
    chiamataApi(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_API_KEY}&query=${store.testoRicerca}`).then((res)=>{

          store.Film = true
        
          //console.log(res.data.results)

          store.ArrayFilm = res.data.results
        }
      )
      axios.get(`https://api.themoviedb.org/3/search/tv?api_key=${import.meta.env.VITE_API_KEY}&query=${store.testoRicerca}`).then((res)=>{

        store.tvseries = true
        
        //console.log(res.data.results)

        store.ArrayTvSeries = res.data.results

        //console.log(store.ArrayTvSeries)

        }
      )
    }
  }
}

</script>

<template>
  <NavComp @search="chiamataApi()"/>
  <main class="px-4 py-4">
    <h2 v-if="store.Film">FILM</h2>
    <CardComp/>
    <h2 class="mt-4" v-if="store.tvseries">SERIE TV</h2>
    <CardComp2/>
  </main>
  
</template>

<style lang="scss">
@use './style/main.scss';
main{
  background-color: black;
  min-height: calc(100vh - 56px) ;

  h2{
    color: white;
  }
}

</style>
