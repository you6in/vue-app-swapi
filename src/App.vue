<template>
<div>
<navbar></navbar>
  <b-container class="container pt-3" type="dark" variant="dark" >

    <router-view/>
  </b-container>
</div>
</template>

<script>
import Navbar from './components/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
  @import './../node_modules/bootstrap/scss/bootstrap';
  @import './../node_modules/bootstrap-vue/src/index.scss';
</style>
