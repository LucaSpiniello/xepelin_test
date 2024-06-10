<template>
  <div class="login-container">
    <h1>Login</h1>
    <form @submit.prevent="login" class="login-form">
      <input v-model="user.email" type="email" placeholder="Email" required class="input-field"/>
      <input v-model="user.password" type="password" placeholder="Password" required class="input-field"/>
      <button type="submit" class="submit-btn">Login</button>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
    </form>
    <button @click="goToRegister" class="register-btn">Crear cuenta</button>
  </div>
</template>
<script>

import { auth } from '@/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

console.log("VUE_APP_FIREBASE_MEASUREMENT_ID", process.env.VUE_APP_FIREBASE_MEASUREMENT_ID)

export default {
  name: 'LoginPage',
  data() {
    return {
      user: {
        email: '',
        password: ''
      },
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        console.log("Starting login process...")
        await signInWithEmailAndPassword(auth, this.user.email, this.user.password);
        console.log("Login successful!")
        this.$router.push('/home');
      } catch (error) {
        this.errorMessage = error.message;
      }
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #f4f4f9;
}

.login-form {
  display: flex;
  flex-direction: column;
  width: 90%;
  max-width: 400px;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  background: white;
}

.input-field {
  padding: 12px;
  margin: 10px 0;
  border-radius: 4px;
  border: 1px solid #ccc;
}

.submit-btn {
  padding: 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.submit-btn:hover {
  background-color: #45a049;
}

.register-btn {
  padding: 10px;
  margin-top: 10px;
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.register-btn:hover {
  background-color: #0056b3;
}

h1 {
  color: #333;
}

.error-message {
  color: red;
  margin-top: 10px;
}
</style>
