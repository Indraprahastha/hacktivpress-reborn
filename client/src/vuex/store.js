import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import jwtDecode from 'jwt-decode'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  banyakArtikel: []
}

const mutations = {
  semuaArtikelnya (state, payload) {
    state.banyakArtikel = payload
  }
}

const actions = {
  semuaArtikel ({commit}) {
    http.get('/artikel').then(({data}) => {
      commit('semuaArtikelnya', data)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
