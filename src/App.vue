<template>  
  <nav class="bg-black p-4 ">
    <router-link to="/">Listes des films</router-link> |
    
    <span v-if="!isLoggedIn">
      <router-link to="/register">Inscription</router-link> |
      <router-link to="/login">Connexion</router-link> |
    </span>
    
    <span v-else>
      <p>Bonjour, {{ userEmail }}</p>
    <button class="text-white" @click="logout"><i class="fa-solid fa-right-from-bracket"></i></button>
    </span>
  </nav>

  <router-view/>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  components:{
  
  },
  computed: {
    ...mapGetters(['userEmail', 'isLoggedIn'])
  },
  methods:{
    ...mapActions(['logoutUser']),
   logout(){
    this.logoutUser();
    this.$router.push('/login');
   }
  }
}
</script>
<style>


#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000;  
}
body{
  background-color: rgba(209, 23, 42, 0.94);
}



nav a {
  font-weight: bold;
  color: #fff; 
}

nav a.router-link-exact-active {
  color: #fff; 
}
</style>
