<template>
  <div id="app">
    <Navbar/>
    <div class="container">
      <div class="col-sm-4">
        <Login/>
      </div>
      <div class="col-sm-8">
        <router-view/>
      </div>

    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import Login from '@/components/Login'
export default {
  name: 'app',
  components: {
    Navbar,
    Login
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
