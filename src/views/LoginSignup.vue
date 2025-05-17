<template>
  <v-container class="d-flex align-center justify-center fill-height">
    <v-card width="400" class="pa-4">
      <v-card-title class="justify-center">
        {{ isLogin ? 'Login' : 'Sign Up' }}
      </v-card-title>

      <v-form @submit.prevent="isLogin ? handleLogin() : handleSignup()">
        <v-text-field
          v-model="email"
          label="Email"
          type="email"
          required
        ></v-text-field>

        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          required
        ></v-text-field>

        <v-text-field
          v-if="!isLogin"
          v-model="confirmPassword"
          label="Confirm Password"
          type="password"
          required
        ></v-text-field>

        <v-btn
          type="submit"
          :color="sidebarColor"
          dark
          block
          class="mb-3"
        >
          {{ isLogin ? 'Login' : 'Sign Up' }}
        </v-btn>
      </v-form>

      <v-btn
        :color="sidebarColor"
        dark
        block
        class="mb-4"
        @click="signInWithGoogle"
      >
        <v-icon left>mdi-google</v-icon>
        Continue with Google
      </v-btn>

      <div class="text-center">
        <span>
          {{ isLogin ? "Don't have an account?" : "Already have an account?" }}
        </span>
        <v-btn text small @click="isLogin = !isLogin">
          {{ isLogin ? 'Sign Up' : 'Login' }}
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
// Make sure firebase is installed and configured in your project
// npm install firebase
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default {
  name: 'LoginSignup',
  data() {
    return {
      isLogin: true,
      email: '',
      password: '',
      confirmPassword: '',
      sidebarColor: '#1e1e1e',
    };
  },
  methods: {
    async handleLogin() {
      if (!this.email || !this.password) {
        alert('Please enter email and password.');
        return;
      }
      const auth = getAuth();
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error.message);
      }
    },
    async handleSignup() {
      if (!this.email || !this.password || !this.confirmPassword) {
        alert('Please fill in all fields.');
        return;
      }
      if (this.password !== this.confirmPassword) {
        alert("Passwords don't match.");
        return;
      }
      const auth = getAuth();
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error.message);
      }
    },
    async signInWithGoogle() {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      try {
        await signInWithPopup(auth, provider);
        this.$router.push('/dashboard');
      } catch (error) {
        alert(error.message);
      }
    }
  }
};
</script>

<style scoped>
.fill-height {
  min-height: 100vh;
  background-color: #f5f5f5;
}
</style>
