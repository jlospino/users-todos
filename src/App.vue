<template>
  <div id="app" :style="styles">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapState({ 
      alert: state => state.alert,
      collapse: state => state.navigation.collapse,
    }),
    styles() {
      return `--margin-left: ${ this.collapse ? '0px' : '20%' }` 
    }
  },
  methods: {
    ...mapActions({
      clearAlert: 'alert/clear' 
    })
  },
  watch: {
    $route (){
      // clear alert on location change
      this.clearAlert();
    }
  } 
}
</script>

<style lang="scss">
  .content{
    margin-left: var(--margin-left) !important;
  }
</style>