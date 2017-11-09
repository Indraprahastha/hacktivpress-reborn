<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      
      <div class="col-sm-4">

      </div>
      <div class="col-sm-8">
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
