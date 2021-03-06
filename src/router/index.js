import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import MovieDetail from '@/views/MovieDetail'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/movie/:id',
    name:"Movie",
    component:MovieDetail
  }

]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
