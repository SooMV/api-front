import { createRouter, createWebHistory } from 'vue-router'
import FilmsList from '@/views/FilmList.vue';
import FilmDetail from '@/views/FilmDetail.vue';
import CreateFilm from '@/views/CreateFilm.vue';
import UpdateFilm from '@/views/UpdateFilm.vue';
import RegisterUser from '@/views/RegisterUser.vue';
import LoginUser from '@/views/LoginUser.vue';



const routes = [
  {
    path: '/',
    name: 'filmsLists',
    component: FilmsList
  },
  {
    path: '/films/:id',
    name: 'filmDetail',
    component: FilmDetail,
    props: true
  },
  {
    path: '/create',
    name: 'createFilm',
    component: CreateFilm,
  },
  {
    path: '/update/:id',
    name: 'updateFilm',
    component: UpdateFilm,
    props: true
  },
  {
    path: '/register',
    name: 'registerUser',
    component: RegisterUser,
  },
  {
    path: '/login',
    name: 'loginUser',
    component: LoginUser,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
