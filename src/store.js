import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    pokemon: [],
    limit: 15,
    filter: '',
  },
  actions: {
    LOAD_POKEMON_LIST: ({ commit }) => {
      axios.get(`${process.env.VUE_APP_API_URL}/pokemon.json`)
        .then(response => commit('SET_POKEMON_LIST', { data: response.data }))
        .catch(err => console.error(err));
    },
    QUERY: ({ commit }, payload) => {
      commit('SET_FILTER_QUERY', { query: payload });
    },
  },
  mutations: {
    SET_POKEMON_LIST: (state, { data }) => {
      state.pokemon = data;
    },
    SET_FILTER_QUERY: (state, { query }) => {
      state.filter = query;
    },
  },
  getters: {
    filteredPokemon: (state) => {
      const { filter, limit, pokemon } = state;
      const filteredPokemon = (filter === '')
        ? pokemon
        : pokemon.filter(item => item.name.toLowerCase().includes(filter.toLowerCase()));
      return filteredPokemon.slice(0, limit);
    },
  },
});
