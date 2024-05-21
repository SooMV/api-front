<template>
    <div class="bg-cover-login"> 
      <div class="flex justify-center max-w-lg items-center mx-auto"> 
        <div class="flex items-center max-w-lg justify-center min-h-screen">
          <div style="width: 400px;" class="p-8 space-y-6 bg-white rounded-lg shadow-md"> 
            <h1 class="text-3xl font-bold text-black text-center">Connexion</h1>
            <form @submit.prevent="login" class="space-y-4">
              <div>
                <label class="block text-sm font-medium text-black" for="email">Email</label>
                <input class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="email" id="email" v-model="userData.email" required>
              </div>
              <div>
                <label class="block text-sm font-medium text-black" for="pwd">Mot de passe</label>
                <input class="mt-3 mb-12  block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                    focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" type="password" id="pwd" v-model="userData.password" required>
              </div>
              <button class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-black-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500" type="submit">Se connecter</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import userService from '@/services/userService';
  
  export default {
    data() {
      return {
        userData: {
          email: '',
          username: '',
          password: ''
        }
      };
    },
    methods: {
      async login() {
        try {
          await userService.login(this.userData)
          console.log('Connexion réussie ')
          this.$router.push('/')
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
  </script>
  
  <style>
  .bg-cover-login {
    background-image:   url("../assets/register.jpg");
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
    height: fit-content;
    display: flex;
  }
  </style>