<template>
  <div class="Contentsatuan">
    <div class="just">
      <h3><b>{{artikel.title}}</b></h3>
      <p><b>Artikel Category: {{artikel.category}}</b></p>
      <p>{{artikel.content}}</p>
      <div class="" v-for="data in artikel.author">
        <p><b>{{data.username}} -</b></p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Contentsatuan',
  data () {
    return {
      id: this.$route.params
    }
  },
  computed: {
    ...mapState([
      'artikel'
    ])
  },
  methods: {
    ...mapActions([
      'satuanArtikel'
    ])
  },
  created () {
    this.satuanArtikel(this.id)
    // console.log(this.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.just {
  text-align: justify;
}
</style>
