<template>
      <div class="bg-cover"> 
     
      <div class="flex justify-center items-center mx-auto"> 
        <div style="width: 600px;"  class="max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h1 class="text-3xl font-bold text-black text-center">Inscription</h1>
          <form @submit.prevent="register" class="space-y-6" enctype="multipart/form-data">
                <div>
                    <label for="email" class="block text-black text-sm font-medium text-gray-700">Email</label>
                    <input type="email" id="email" v-model="userData.email" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="username" class="block text-black text-sm font-medium text-gray-700">Pseudo</label>
                    <input type="text" id="username" v-model="userData.username" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="pwd" class="block text-black text-sm font-medium text-gray-700">Mot de passe</label>
                    <input type="password" id="pwd" v-model="userData.password" required
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="profileImage" class="block text-black text-sm font-medium text-gray-700">Photo de profil</label>
                    <br>
                    <input type="file" id="profileImage" accept="image/*" @change="onFileChange">
                </div>
                <br>
                <button type="submit"
                        class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-black-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
                    S'inscrire
                </button>
            </form>
        </div>
    </div>

</div>



</template>

<script>
import userService from '@/services/userService';

export default {
    data() {
        return {
            userData: {},
            profileImage: null,
            errors: null 
        };
    },
    methods: {
        async register() {
            let formData = new FormData();
            formData.append('email', this.email);
            formData.append('username', this.username);
            formData.append('password', this.password);
            formData.append('profileImage', this.profileImageFile); 

            try {
                await userService.register(formData);
                console.log('Inscription réussie');
                this.$router.push('/login');
            } catch (e) {
                console.error('Erreur lors de l\'inscription', e);
                this.errors = 'Erreur lors de l\'inscription. Veuillez réessayer.'; // Afficher une erreur générique à l'utilisateur
            }
        },
        onFileChange(event) {
            const file = event.target.files[0]; 
            this.profileImage = file; 
        }
    }
}
</script>

<style>
.bg-cover {
    background-image:  url("../assets/login.jpg");
    background-size: cover;
    background-position: bottom;
    min-height: 100vh;
    height: fit-content;
    display: flex;
    
}
</style>