<template>
  <v-app>
    <!-- Show sidebar only when not on login/signup page -->
    <Sidebar v-if="!isLoginPage" />

    <!-- Main content -->
    <v-main app>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  name: 'App',
  components: { Sidebar },
  setup() {
    const route = useRoute()
    const isLoginPage = computed(() => route.name === 'LoginSignup' || route.path === '/')
    return { isLoginPage }
  }
}
</script>

<style>
/* Global styles here if needed */
</style>
