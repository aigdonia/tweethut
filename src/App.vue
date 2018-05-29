<template lang='pug'>
  #app
    app-header
    router-view
</template>

<script>
import Header from '@/components/Header'

export default {
  components: {
    'app-header': Header
  }
}
</script>

<style lang="stylus">
@import '../node_modules/normalize.css/normalize.css';
@import './styl/_common'
#app
  font-family 'Lato', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  color #2c3e50
</style>
