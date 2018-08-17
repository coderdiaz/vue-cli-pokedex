<template>
  <header class="header">
    <div class="container">
      <nav class="text-center navbar-dark">
        <router-link class="navbar-brand" :to="{ name: 'Home' }">
          <img src="../assets/logo_pokemon.svg" width="30" height="30" class="d-inline-block align-top" alt="">
          Pokédex Virtual
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderPartial'
}
</script>
