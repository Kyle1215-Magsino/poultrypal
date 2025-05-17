<template>
  <v-container>
    <h1>User Profile</h1>
    <v-card class="pa-4" max-width="500" outlined>
      <v-row>
        <v-col cols="12" sm="4" class="text-center">
          <!-- Profile Picture -->
          <v-avatar size="120" class="mx-auto">
            <v-img :src="profilePic || defaultPic" />
          </v-avatar>

          <!-- Hidden file input triggered by button -->
          <input
            ref="fileInput"
            type="file"
            accept="image/*"
            @change="onFileChange"
            style="display: none"
          />

          <v-btn
            small
            class="mt-2"
            color="primary"
            @click="$refs.fileInput.click()"
          >
            Change Profile Picture
          </v-btn>
        </v-col>

        <v-col cols="12" sm="8">
          <v-list dense>
            <v-list-item v-if="user">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Name</v-list-item-title>
                <v-list-item-subtitle>{{ user.name }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-list-item v-if="user">
              <v-list-item-content>
                <v-list-item-title class="font-weight-bold">Email</v-list-item-title>
                <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Profile",
  data() {
    return {
      user: {
        name: "John Doe",
        email: "johndoe@example.com",
      },
      profilePic: null,
      defaultPic:
        "https://cdn-icons-png.flaticon.com/512/149/149071.png", // fallback avatar
    };
  },
  methods: {
    onFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = e => {
          this.profilePic = e.target.result; // base64 image preview
        };
        reader.readAsDataURL(file);
      }
    },
  },
};
</script>

<style scoped>
h1 {
  margin-bottom: 24px;
}
</style>
