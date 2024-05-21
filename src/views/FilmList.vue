<template>
    <button class="bg-blue-700 mt-10 text-white rounded-lg font-bold py-2 px-4" @click="createFilm"> <i class="fa-solid fa-film"> </i>  Ajouter un film</button>
    <div class="container mx-auto px-4 py-8 ">
        <div  class="grid grid-cols-1 gap-6 justify-center w-50">
            <div v-for="film in films" :key="film.id" style="width: 500px;" class="rounded-lg shadow-md p-5 max-w-md mx-auto bg-white min-w-80">
                <h3 class="text-xl font-bold  mb-5 text-center">{{ film.title }}</h3>
                <p class="text-gray-700 text-left mt-5"><strong>Durée :</strong> {{ film.duration }} min</p>
                <p class="text-gray-700 text-left"><strong>Réalisé par :</strong> {{ film.realisateurFirstName }} {{ film.realisateurLastName }}</p>
                <p class="text-gray-700 text-left"><strong>Année de sortie :</strong> {{ film.releaseYear }}</p>
                <p class="text-gray-700 text-left"> <strong>Catégories : </strong> 
                    <span v-for="(category, index) in film.category" :key="category.id">
                         {{ category.name }}<span v-if="index < film.category.length - 1">, </span>
                    </span>
                </p>
                <div class="container flex flex-col justify-center space-y-1 mt-5">
                <p class="text-gray-700 text-left">
                      <i class="fa-solid fa-heart" style="color: #e30d0d;"></i> <strong>{{ film.likes ? film.likes.length : 0 }}</strong>
                </p>
                <p class="text-gray-700 text-left ">
                      <i class="fa-solid fa-comment"></i> <strong>{{ film.commentaires ? film.commentaires.length : 0 }}</strong>
                </p>
                </div>
        
                <br>
                <div class="flex  justify-center space-y-4 mt-4">
                <div class="flex justify-center ">
                    <button class="bg-green-700 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" @click="filmDetail(film.id)"> 
                        <i class="fa-solid fa-magnifying-glass"></i> Voir détail
                    </button>
                
                </div>
            </div>
            </div>
        </div>
    </div>
</template>


<script>
import filmService from '@/services/filmService';
export default {
    data() {
        return {
            films: [],
        }
    },
    methods: {
        async fetchFilms() {
            try {

                const res = await filmService.getFilms();
                console.log('Data received:', res.data);  
                this.films = res.data.films;  
                console.log('Films after assignment:', this.films);  

            } catch (e) {
                console.error('Failed to fetch films:', e);
            }
        }, 
        toggleLike(film) {
            film.isLiked = !film.isLiked;
        },
        createFilm(){
            this.$router.push({ name: 'createFilm' });
        },
        filmDetail(id){
            this.$router.push({ name:'filmDetail', params: {id} })
        }, 
    },
    created() {
        this.fetchFilms();
    }
}
</script>

<style >

</style>