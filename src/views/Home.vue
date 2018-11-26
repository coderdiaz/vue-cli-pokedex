<template>
  <default-layout>
    <section slot="content" class="text-center">
      <div class="podexex-items grid-container">
        <div class="pokedex-item"
          v-for="(item, index) in filteredPokemon"
          :key="index">
          <pokedex-card
            :pokemon="item"></pokedex-card>
        </div>
      </div>
      <button
        v-if="filter == ''"
        class="btn__more"
        @click.prevent="showMorePokemon">Cargar más pokemon</button>
    </section>
  </default-layout>
</template>

<script>
import { mapGetters, mapState } from 'vuex';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import PokedexCard from '@/components/PokedexCard.vue';

export default {
  name: 'HomeView',
  created() {
    this.$store.dispatch('LOAD_POKEMON_LIST');
  },
  computed: {
    ...mapGetters([
      'filteredPokemon',
    ]),
    ...mapState([
      'filter',
    ]),
  },
  methods: {
    showMorePokemon() {
      this.$store.state.limit += 15;
    },
  },
  components: {
    DefaultLayout,
    PokedexCard,
  },
};
</script>
