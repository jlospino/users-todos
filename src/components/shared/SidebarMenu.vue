<template>
  <!-- The sidebar -->
  <div class="sidebar" :class="{ active: active}" v-if="!collapse">
    <router-link to="/">
      <span class="text_title">
        System
      </span>
    </router-link>

    <router-link to="/">
      <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10.2 12.4L7.5 10.4C8.4 9.69999 9 8.69999 9 7.49999V6.69999C9 4.79999 7.6 3.09999 5.7 2.99999C3.7 2.89999 2 4.49999 2 6.49999V7.49999C2 8.69999 2.6 9.69999 3.5 10.4L0.8 12.5C0.3 12.9 0 13.5 0 14.1V16C0 16.6 0.4 17 1 17H10C10.6 17 11 16.6 11 16V14C11 13.4 10.7 12.8 10.2 12.4Z" fill="#3B5CE7"/>
        <path d="M15.1 7.4L13.3 6.2C13.7 5.8 14 5.2 14 4.5V3.6C14 2.4 13.1 1.2 11.9 0.999999C10.7 0.799999 9.70001 1.5 9.20001 2.4C10.3 3.4 11 4.8 11 6.4V7.4C11 8.3 10.8 9.2 10.4 9.9C10.4 9.9 11.6 10.8 11.6 10.9H15C15.6 10.9 16 10.5 16 9.9V9.1C16 8.4 15.7 7.8 15.1 7.4Z" fill="#3B5CE7"/>
      </svg>
      <span class="text">
        Users
      </span>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: "SidebarMenu",
  data () {
    return {
      active: true,
      marginLeft: '20%'
    }
  },
  computed: {
    ...mapState('navigation', ['collapse']),
  },
}
</script>
<style lang="scss">
  :root {
    --margin-content: {{ marginLeft }};
  }
  
</style>
