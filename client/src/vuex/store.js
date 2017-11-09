import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import jwtDecode from 'jwt-decode'

const http = axios.create({
  baseURL: 'http://localhost:3000'
})

Vue.use(Vuex)

const state = {
  banyakArtikel: [],
  artikel: '',
  profil: []
}

const mutations = {
  semuaArtikelnya (state, payload) {
    state.banyakArtikel = payload
  },
  artikelSatuan (state, payload) {
    state.artikel = payload
  },
  DapatkanProfil (state, payload) {
    console.log('daat')
    state.profil = payload
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
  },
  login ({commit}, data) {
    http.post('/user/login', {
      username: data.username,
      password: data.password
    })
    .then(({data}) => {
      console.log(data)
      if (data === 'Fail') {
      } else {
        localStorage.setItem('token', data)
        let decoded = jwtDecode(data)
        commit('DapatkanProfil', decoded)
      }
    })
  },
  cekToken ({commit}) {
    const token = localStorage.getItem('token')
    if (token) {
      let decoded = jwtDecode(token)
      commit('DapatkanProfil', decoded)
    } else {
      commit('DapatkanProfil', '')
    }
  },
  editArtikel ({commit}, id) {
    http.put('/artikel/' + id.id, {

    })
    .then(({data}) => {

    })
  }
}

const store = new Vuex.Store({
  state,
  actions,
  mutations
})

export default store
