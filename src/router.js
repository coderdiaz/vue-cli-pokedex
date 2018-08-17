import Vue from 'vue'
import Router from 'vue-router'

// Views
import HomeView from '@/views/Home'
import DetailPokemonView from '@/views/DetailPokemon'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: 'detail/:pokemonName',
      name: 'DetailPokemon',
      component: DetailPokemonView
    }
  ]
})
