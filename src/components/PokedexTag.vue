<script>
export default {
  name: 'PokedexTag',
  props: {
    pokemonType: {
      type: String,
      required: true,
    },
  },
  render() {
    return <span class={this.getClassTag()}>
      {this.pokemonType}
    </span>;
  },
  methods: {
    getClassTag() {
      return {
        [`pokedex-tag-${this.pokemonType}`]: true,
        'pokedex-tag': true,
        badge: true,
        'mr-2': true,
      };
    },
  },
};
</script>
