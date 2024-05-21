import axios from 'axios';

// Assurez-vous que le token JWT est correctement inclus dans les en-têtes
const apiClient = axios.create({
    baseURL: 'http://127.0.0.1:8001/api',
    withCredentials:true ,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});


export default {
    getFilms(){
        return apiClient.get('/film')
    }, 
    getFilm(id){
        return apiClient.get(`/film/${id}`)
    },
    createFilm(filmData){
        return apiClient.post('/add_film', filmData)
    }, 
    updateFilm(id, filmData){
        return apiClient.put(`/film/${id}`, filmData )
    },
    deleteFilm(id){
        return apiClient.delete(`/film/${id}`)
    }
}