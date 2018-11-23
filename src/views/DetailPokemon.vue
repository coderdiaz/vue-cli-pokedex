<script>
import DefaultLayout from '@/layouts/DefaultLayout'
import PokedexTag from '@/components/PokedexTag'

export default {
  name: 'DetailPokemonView',
  render () {
    const pokemon = this.$route.params.pokemon
    if (!pokemon) {
      return this.$router.push({name: 'Home'})
    }

    // Creating tags for types and weekness
    const pokemonTags = _ => pokemon.type.map(type => <PokedexTag pokemonType={type}></PokedexTag>)
    const weaknessTags = _ => pokemon.weakness.map(type => <PokedexTag pokemonType={type}></PokedexTag>)

    return <DefaultLayout>
      <section slot="content" class="pokedex-item mt-5">
        <div class="row">
          <div class="col-md-12">
            <h1 class="pokedex-detail__title text-center mb-5">
              {pokemon.name}
              <span class="text-muted">#{pokemon.number}</span>
            </h1>
            <hr/>
            <div class="row">
              <div class="col-md-5">
                <img class="pokedex-detail__image" src={this.getUrlThumbnail(pokemon)}/>
              </div>
              <div class="col-md-7">
                <h4>Tipo</h4>
                {pokemonTags()}
                <h4 class="mt-3">Debilidades</h4>
                {weaknessTags()}
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  },
  methods: {
    getUrlThumbnail: (pokemon) => `https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemon.number}.png`
  }
}
</script>
