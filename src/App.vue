<script>

import NavComp from './components/NavComp.vue';
import CardComp from './components/CardComp.vue'
import { store } from './store'
import axios from 'axios';

export default{
  name:'app',
  components:{
    NavComp,
    CardComp,
  },
  data(){
    return{
      store
    }
  },
  created(){
    this.chiamataApi

  },
  computed:{
    chiamataApi(){
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${store.ApiKey}&query=${store.testoRicerca}`).then((res)=>{
        
          console.log(res.data.results)

          store.ArrayFilm = res.data.results
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
  <main class="container">
    <CardComp/>
  </main>
  
</template>

<style lang="scss">
@use './style/main.scss';
</style>
