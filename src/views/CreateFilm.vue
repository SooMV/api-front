<template>
    <div class="flex mt-10 flex-col items-center justify-center min-h-screen">
        <div class="w-full max-w-lg p-8 space-y-6 bg-white rounded-lg shadow-md m-5">
            <h1 class="text-3xl font-bold text-black text-center">Ajouter un film</h1>
            <form @submit.prevent="submitFilm" class="space-y-6">
                <div>
                    <label for="title" class="block text-sm font-medium text-gray-700">Titre</label>
                    <input type="text" id="title" v-model="film.title"
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="duration" class="block text-sm font-medium text-gray-700">Durée (minutes)</label>
                    <input type="number" min="10" max="500" id="duration" v-model="film.duration"
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="realisateur_first_name" class="block text-sm font-medium text-gray-700">Prénom du réalisateur</label>
                    <input type="text" id="realisateur_first_name" v-model="film.realisateur_first_name"
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="realisateur_last_name" class="block text-sm font-medium text-gray-700">Nom du réalisateur</label>
                    <input type="text" id="realisateur_last_name" v-model="film.realisateur_last_name"
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="release_year" class="block text-sm font-medium text-gray-700">Année de sortie</label>
                    <input type="number" min="1950" max="2024" id="release_year" v-model="film.release_year"
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="image_name" class="block text-sm font-medium text-gray-700">Image du film</label>
                    <input type="file" id="image_name" accept="image/png, image/jpeg, image/gif"
                           @change="handleFileUpload"
                           class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500">
                </div>
                <div>
                    <label for="description" class="block text-sm font-medium text-gray-700">Description</label>
                    <textarea id="description" v-model="film.description" rows="3"
                              class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400
                                     focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"></textarea>
                </div>
                <button type="submit"
                class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-black hover:bg-black-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black-500">
                    Ajouter le film
                </button>
            </form>
        </div>
    </div>
</template>


<script>

import filmService from '@/services/filmService';
    export default {
        data(){
            return {
                film: {
                    title: '',
                    duration: '', 
                    realisateur_first_name: '',
                    realisateur_last_name: '',
                    release_year: '',
                    image_name: null,
                    description: '',
                }
            };
        },
        methods: {

            handleFileUpload(event) {
                this.film.image_name = event.target.files[0]; // Assigner le fichier sélectionné à l'objet film
            },

            submitFilm(){
                filmService.createFilm(this.film)
                .then(() => this.$router.push({ name: 'filmList' }))
                .catch(e => console.log(e))
            }

            // async addFilm() {
            //     let formData = new FormData();
            //     formData.append('title', this.film.title);
            //     formData.append('duration', this.film.duration);
            //     formData.append('realisateur_first_name', this.film.realisateur_first_name);
            //     formData.append('realisateur_last_name', this.film.realisateur_last_name);
            //     formData.append('release_year', this.film.release_year);
            //     formData.append('description', this.film.description);
            //     formData.append('image_name', this.film.image_name); // Ajouter le fichier

            //     try {
            //         let response = await fetch('URL_DE_VOTRE_API', {
            //             method: 'POST',
            //             body: formData, 
            //             headers: {
            //                 // 'Content-Type': 'application/json'
            //                 // Ne pas définir 'Content-Type' lors de l'envoi de FormData,
            //             }
            //         });

            //         if (response.ok) {
            //             let data = await response.json();
            //             console.log('Réponse du serveur:', data);
                     
            //         } else {
            //             throw new Error('Something went wrong');
            //         }
            //     } catch (error) {
            //         console.error('Erreur lors de l\'envoi du formulaire:', error);
            //     }
            // }
        }
    }
</script>

<style>

</style>