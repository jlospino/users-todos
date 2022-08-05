<template>
  <div id="app">
    <div v-if="alert.message" :class="`alert ${alert.type}`">
      <span class="material-symbols-outlined icon">
        error
      </span>
      <div>
        <b>Error</b><br>
        {{ alert.message }}
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: "App",
  computed: {
    ...mapState({
      alert: state => state.alert
    })
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
