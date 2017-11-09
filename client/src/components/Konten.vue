<template>
  <div class="Konten">
    <div class="list-group" v-for="data in banyakArtikel">
      <router-link :to="data._id">
      <a class="list-group-item  list-group-item-action">
        <h4><b>{{data.title}}</b></h4>
      </a>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Konten',
  data () {
    return {
    }
  },
  computed: {
    ...mapState([
      'banyakArtikel'
    ])
  },
  methods: {
    ...mapActions([
      'semuaArtikel'
    ])
  },
  created () {
    this.semuaArtikel()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-group {
  margin-bottom: 0px
}
</style>
