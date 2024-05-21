<template>
    
      <button class="bg-green-700 mt-10 text-white rounded-lg font-bold py-2 px-4" @click="updateFilm"> <i class="fa-solid fa-film"> </i>  Mettre à jour</button>
      <button class="bg-yellow-500 mt-10 ml-3 text-black rounded-lg font-bold py-2 px-4" @click="deleteFilm(film && film.id)">
    <i class="fa-solid fa-trash"></i> Supprimer
</button>

 
    <div v-if="film" class="bg-grey mt-10">
        <div class="container mx-auto px-4 py-8 ">
            <div class="rounded-lg shadow-md p-5 max-w-md mx-auto bg-white">
                <h3 class="text-xl font-bold mb-5 text-center">{{ film.title }}</h3>
                <p class="text-gray-700 text-left mt-5"><strong>Durée :</strong> {{ film.duration }} min</p>
                <p class="text-gray-700 text-left"><strong>Réalisé par :</strong> {{ film.realisateurFirstName }} {{ film.realisateurLastName }}</p>
                <p class="text-gray-700 text-left"><strong>Année de sortie :</strong> {{ film.releaseYear }}</p>
                <p class="text-gray-700 text-left"><strong>Catégories : </strong>
                    <span v-for="(category, index) in film.categories" :key="category.id">
                        {{ category.name }}<span v-if="index < film.categories.length - 1">, </span>
                    </span>
                </p>
                <br>
                <p class="text-gray-700 text-left"><strong>Description :</strong> 
                    <br>{{ film.description }}</p>
               
                <div class="container flex flex-col justify-center space-y-1 mt-5">
                <p class="text-gray-700 text-left">
                      <i class="fa-solid fa-heart" style="color: #e30d0d;"></i> <strong>{{ film.likes ? film.likes.length : 0 }}</strong>
                </p>
                <p class="text-gray-700 text-left ">
                      <i class="fa-solid fa-comment"></i> <strong>{{ film.commentaires ? film.commentaires.length : 0 }}</strong>
                </p>
                </div>
                <div class="flex col-12 space-x-4 mt-4 justify-center" >
                    <button class="border-blue-500 hover:bg-blue-500 text-blue-500 hover:text-white border-2 font-bold py-2 px-4 rounded focus:outline-none transition duration-150 ease-in-out" @click="addComment">
                        <i class="fa-solid fa-comment"></i> Commenter
                    </button>
                    <button class="border-red-500 hover:bg-red-500 text-red-500 hover:text-white border-2 font-bold py-2 px-4 rounded focus:outline-none transition duration-150 ease-in-out" @click="toggleLike(film)">
                        <i v-if="film.isLiked" class="fa-solid fa-heart"></i>
                        <i v-else class="fa-regular fa-heart"></i> Liker
                    </button>
                </div>
            </div>
            
            <div class="mt-6 space-y-4 w-full flex justify-center">
                <div class="w-full max-w-xl">
                    <h2 class="text-3xl font-bold text-center text-gray-200 mt-10 mb-10 mb-5">Commentaires</h2>
                    <div v-for="comment in film.commentaires" :key="comment.id" class="bg-white rounded-lg p-5 shadow-sm w-full mb-4"> 
                        <div class="flex items-center space-x-3">
                            <div class="bg-gray-500 rounded-full h-10 w-10"></div>
                            <p class="text-sm text-gray-700 flex-1">{{ comment.content }}</p>
                        </div>
                        <div class="flex justify-between items-center text-gray-400 text-xs mt-2">
                            <p>{{ comment.published_at }}</p>
                            <div class="flex items-center">
                                <button @click="likeComment(film, comment)" class="hover:text-red-500">
                                    <i class="fa-solid fa-heart"></i>
                                </button>
                                <span v-if="comment.likes">{{ comment.likes.length }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import filmService from '@/services/filmService'

    export default {
        props: ['id'],
        data(){
            return {
                film: null
            };
        },
        methods: {

            fetchFilm(){
                let id = this.$route.params.id
                filmService.getFilm(id)
                .then(res => this.film = res.data)
                .catch(e => console.log(e))
            },
            
            updateFilm(){
                if (this.film && this.film.id) {
                    this.$router.push({ name: 'updateFilm', params: { id: this.film.id } });
                } else {
                    console.error("Film ID is missing");
                }
            },
            deleteFilm(id) {
                confirm('Êtes-vous sur de vouloir supprimer ce film ?')
                    filmService.deleteFilm(id)
                    .then(response => {
                        console.log("Réponse de suppression:", response); 
                        console.log("Film supprimé avec succès");
                        this.$router.push({ name: 'filmsLists'})
                    })
                    .catch(error => {
                        console.error("Échec de la suppression du film", error);
                        console.log("Détail de l'erreur:", error.response); 
                    });
            },
            toggleLike(film) {
            film.isLiked = !film.isLiked;
            },
            
        },
        created(){
            this.fetchFilm();
        }
    }
</script>

<style>

</style>