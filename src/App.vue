<script>

import NavComp from './components/NavComp.vue';
import CardComp from './components/CardComp.vue'

export default{
  name:'app',
  components:{
    NavComp,
    CardComp,
  }
}

</script>

<template>
  <NavComp/>
  <CardComp/>
</template>

<style lang="scss">
@use './style/main.scss';
</style>
