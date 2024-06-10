<template>
    <div class="register-container">
      <h1>Register</h1>
      <form @submit.prevent="register" class="register-form">
        <input v-model="user.email" type="email" placeholder="Email" required class="input-field"/>
        <input v-model="user.password" type="password" placeholder="Password" required class="input-field"/>
        <button type="submit" class="submit-btn">Register</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { auth } from '@/firebase';
  import { createUserWithEmailAndPassword } from 'firebase/auth';
  
  export default {
    name: 'RegisterPage',
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
      async register() {
        try {
          await createUserWithEmailAndPassword(auth, this.user.email, this.user.password);
          this.$router.push('/home');
        } catch (error) {
          this.errorMessage = error.message;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .register-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background-color: #f4f4f9;
  }
  
  .register-form {
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
  
  .error-message {
    color: red;
    margin-top: 10px;
  }
  
  h1 {
    color: #333;
  }
  </style>
  