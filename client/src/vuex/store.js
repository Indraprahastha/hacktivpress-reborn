import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
// import jwtDecode from 'jwt-decode'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  banyakArtikel: [],
  artikel: ''
}

const mutations = {
  semuaArtikelnya (state, payload) {
    state.banyakArtikel = payload
  },
  artikelSatuan (state, payload) {
    state.artikel = payload
  }
}

const actions = {
  semuaArtikel ({commit}) {
    http.get('/artikel').then(({data}) => {
      commit('semuaArtikelnya', data)
    })
  },
  satuanArtikel ({commit}, id) {
    // console.log(id.id)
    http.get('/artikel/' + id.id).then(({data}) => {
      commit('artikelSatuan', data)
      // console.log(data)
    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
