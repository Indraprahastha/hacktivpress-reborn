<template>
  <div class="Home">
      <router-view></router-view>
  </div>
</template>

<script>
import Konten from '@/components/Konten'
import Contentsatuan from '@/components/Contentsatuan'
export default {
  name: 'Home',
  components: {
    Konten,
    Contentsatuan
  },
  data () {
    return {
    }
  },
  computed: {
  },
  methods: {
  },
  created () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
