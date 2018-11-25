<template>
  <header class="header">
    <div class="container mx-auto">
      <nav class="navigation grid-container">
        <router-link class="navigation__brand flex items-center" :to="{ name: 'Home' }">
          <img
            src="../assets/logo_pokemon.svg"
            width="30"
            height="30"
            class="navigation__logotype mr-2"
            alt="">
          Pokédex Virtual
        </router-link>
        <li class="navigation__item flex justify-end">
          <input
            class="input__search rounded"
            type="text"
            :value="filter"
            @input="onSearch"
            placeholder="Busca un pokemón...">
        </li>
      </nav>
    </div>
  </header>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HeaderPartial',
  computed: {
    ...mapState([
      'filter',
    ]),
  },
  methods: {
    onSearch(e) {
      this.$store.dispatch('QUERY', e.target.value);
    },
  },
};
</script>
