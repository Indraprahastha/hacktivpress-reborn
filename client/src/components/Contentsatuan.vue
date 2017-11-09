<template>
  <div class="Contentsatuan">
    <div class="just" v-if="triger == false">
      <h3><b>{{artikel.title}}</b></h3>
      <p><b>Artikel Category: {{artikel.category}}</b></p>
      <p>{{artikel.content}}</p>
      <div class="" v-for="data in artikel.author">
        <p><b>{{data.username}} -</b></p>
      </div>
    </div>

    <div class="" v-else>
      <form @submit.prevent="editartikel()">
        <div class="form-group">

          <input v-model="title" type="text" class="kolominput form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=""></input>
        </div>
        <button type="submit" class="btn btn-default btn-lg btn-block">Login</button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: 'Contentsatuan',
  data () {
    return {
      id: this.$route.params,
      title: '',
      category: '',
      content: '',
      triger: true
    }
  },
  computed: {
    ...mapState([
      'artikel'
    ])
  },
  methods: {
    editartikel () {
      this.triger = !this.triger
    },
    ...mapActions([
      'satuanArtikel'
    ])
  },
  created () {
    this.satuanArtikel(this.id)
    this.title = this.artikel.title
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
