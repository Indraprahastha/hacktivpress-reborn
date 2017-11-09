<template>
  <div class="Login">
    <div class="" v-if="profil == ''">
      <form @submit.prevent="login({ username, password})">
        <div class="form-group">
          <input v-model="username" type="text" class="kolominput form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
          <input v-model="password" type="password" class="kolominput form-control" id="exampleInputPassword1" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-default btn-lg btn-block">Login</button>
      </form>
    </div>
    <div class="sambutan" v-else>
      <h4>Anda Login Sebagai : <b>{{profil.username}}</b></h4>
      <button v-on:click="logout()" class="btn btn-default btn-lg btn-block" type="" name="button">Logout</button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  computed: {
    ...mapState([
      'profil'
    ])
  },
  methods: {
    logout () {
      localStorage.removeItem('token')
      this.cekToken()
    },
    login () {
      this.$store.dispatch('login', {
        username: this.username,
        password: this.password
      })
    },
    ...mapActions([
      'login',
      'cekToken'
    ])
  },
  created () {
    this.cekToken()
  },
  watch: {
    profil: function (harusdiisi) {
      console.log('profil berubah')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.kolominput {
  margin-bottom: 10px;
}
.Login {
  text-align: justify;
}
.sambutan {
  text-align: center;
}
</style>
