<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<style lang="scss">
// import main styles (site-wide css + bulma overrides)
@import "./assets/styles/main.scss";
</style>

<script>
import Header from '@/components/UI/Header'

export default {
  components: {
    Header
  }
}
</script>
