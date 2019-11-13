<template>
  <planet v-if="randomPlanet != undefined" :planet="randomPlanet"></planet>
</template>

<script>
// @ is an alias to /src
import axios from 'axios'
import {mapGetters, mapActions} from 'vuex'
import Planet from './../components/Planet'

export default {
  name: 'home',
  data: () => ({
    randomIndex: 0,
    planetLength: 10,
    interval: null
  }),
  components: {
    Planet
  },
  computed: {
    ...mapGetters(['allPlanets']),
    randomPlanet() {
      return this.$store.getters.randomPlanet(this.randomIndex)
    }
  },
  mounted() {
    this.getPlanets()
    this.getRandomIndex()
  },
  methods: {
    ...mapActions(['getPlanets']),
    getRandomIndex() {
      this.interval = setInterval(() => {
        const rand = 0 + Math.random() * 10
        this.randomIndex = Math.floor(rand)
        console.log(this.randomIndex);
       }, 10000)
    }
  },
  beforeDestroy() {
    clearInterval(this.interval)
  }
}
</script>
