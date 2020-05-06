<template>
  <div id="app">
    
    <NavbarOpen v-if='this.$route.path !== "/EmailCheck"'/>
    <router-view/>

  </div>
</template>

<script>

import NavbarOpen from '@/components/layout/NavbarOpen'
export default {
  name: 'App',

  components:{
    NavbarOpen: NavbarOpen,
  },
}

</script>

<style>

</style>
