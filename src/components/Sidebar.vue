<template>
  <v-navigation-drawer app permanent width="240" class="custom-drawer">
    <!-- Project Title with Chicken Icon -->
    <v-toolbar flat dense class="project-title">
      <v-icon class="mr-2">mdi-alpha-c-circle</v-icon>
      <v-toolbar-title>PoultryPal</v-toolbar-title>
    </v-toolbar>

    <v-divider class="my-2" />

    <!-- Navigation Items -->
    <v-list nav dense>
      <v-list-item to="/dashboard" link exact>
        <v-list-item-icon><v-icon>mdi-view-dashboard</v-icon></v-list-item-icon>
        <v-list-item-title>Dashboard</v-list-item-title>
      </v-list-item>

      <v-list-item to="/profile" link>
        <v-list-item-icon><v-icon>mdi-account</v-icon></v-list-item-icon>
        <v-list-item-title>User Profile</v-list-item-title>
      </v-list-item>

      <v-list-item to="/settings" link>
        <v-list-item-icon><v-icon>mdi-cog</v-icon></v-list-item-icon>
        <v-list-item-title>Settings</v-list-item-title>
      </v-list-item>

      <v-list-item to="/monitoring" link>
        <v-list-item-icon><v-icon>mdi-chart-line</v-icon></v-list-item-icon>
        <v-list-item-title>Monitoring</v-list-item-title>
      </v-list-item>

      <!-- Divider before logout -->
      <v-divider class="my-2" />

      <!-- Logout -->
      <v-list-item @click="logout" class="logout-item">
        <v-list-item-icon><v-icon>mdi-logout</v-icon></v-list-item-icon>
        <v-list-item-title>Logout</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'Sidebar',
  setup() {
    const router = useRouter()

    const logout = () => {
      // Clear auth data if needed
      router.push('/')
    }

    return { logout }
  }
}
</script>

<style scoped>
.custom-drawer {
  background-color: #1e1e1e;
  color: #fff;
}

/* Project title styles */
.project-title {
  background-color: #1e1e1e;
  display: flex !important;
  justify-content: center !important;
  align-items: center !important;
  height: 56px;
  padding: 0 16px;
}

.v-toolbar-title {
  color: #ffffff;
  margin: 0;
  font-size: 20px;
  font-weight: bold;
}

.v-list-item-title,
.v-icon {
  color: #ffffff;
}

/* Hover animation for all items */
.v-list-item {
  transition: background-color 0.3s ease;
}

.v-list-item:hover {
  background-color: rgba(255, 255, 255, 0.1);
  cursor: pointer;
}
</style>
