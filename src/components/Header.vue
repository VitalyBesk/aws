<template>
  <nav class="header navbar navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Logo</a>
    <div class="form-inline justify-content-end">
      <input class="form-control" type="search" placeholder="Search" aria-label="Search" v-model="productsFilterBy">
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex'

export default {

  computed: {
    productsFilterBy: {
      get () {
        return this.$store.state.productsFilterBy;
      },
      set (value) {
        this.$store.commit('FILTER_PRODUCTS', value);
      }
    },
    ...mapGetters([
      'doneProductsCount'
    ])
  }
}
</script>
