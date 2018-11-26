<template>
  <div class="pokedex-card">
    <div class="pokedex-thumbnail">
      <img class="pokedex-card-img" :src="pokemon.ThumbnailImage"/>
    </div>
    <div class="pokedex-card-details">
      <small class="pokedex-card-details__number">#{{pokemon.number}}</small>
      <h4 class="pokedex-card-details__title">{{pokemon.name}}</h4>
    </div>
  </div>
</template>

<script>
import PokedexTag from '@/components/PokedexTag.vue';

export default {
  name: 'PokedexCard',
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  components: {
    PokedexTag,
  },
};
</script>
