<template>
  <div class="pokedex-card">
    <img class="pokedex-card-img" :src="pokemon.ThumbnailImage"/>
    <div class="pokedex-card-details">
      <small class="pokedex-card-details__number">#{{pokemon.number}}</small>
      <h4 class="pokedex-card-details__title">{{pokemon.name}}</h4>
      <div class="pokedex-card__types">
        <pokedex-tag
          v-for="(type, index) in pokemon.type"
          :key="index"
          :pokemon-type="type"></pokedex-tag>
      </div>
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
