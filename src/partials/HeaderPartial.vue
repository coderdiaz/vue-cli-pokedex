<template>
  <header class="header">
    <div class="container mx-auto">
      <nav class="text-center navigation">
        <router-link class="navigation__brand" :to="{ name: 'Home' }">
          <img
            src="../assets/logo_pokemon.svg"
            width="30"
            height="30"
            class="navigation__logotype"
            alt="">
          Pokédex Virtual
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPartial',
};
</script>
