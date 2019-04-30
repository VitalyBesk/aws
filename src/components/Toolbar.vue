<template>
  <div class="row toolbar">
    <div class="col-12 col-md-5 d-flex align-items-center">
      <div class="toolbar__descr">Sort by:</div>
      <multiselect :value="productsOrderBy" :options="sortOptionsByOrder" :searchable="false" :show-labels="false" :allow-empty="false" placeholder="Select option" @input="UPDATE_VALUE_BY_ORDER"></multiselect>
    </div>
    <div class="col-12 col-md-7 d-flex justify-content-end align-items-center">
      <div class="toolbar__descr">Show</div>
      <multiselect :value="perPage"  :options="sortOptionsPerPage" :searchable="false" :show-labels="false" :allow-empty="false" placeholder="Select option" @input="UPDATE_VALUE_BY_COUNT" ></multiselect>
      <div class="toolbar__descr">products from {{ doneProductsCount }}</div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import {  mapState, mapActions, mapGetters } from 'vuex'

export default {
  components: { Multiselect },

  computed: {
    ...mapState([
      'sortOptionsByOrder',
      'sortOptionsPerPage',
      'productsOrderBy',
      'perPage'
    ]),
    ...mapGetters([
      'doneProductsCount'
    ])
  },

  methods: {
    ...mapActions([
      'UPDATE_VALUE_BY_ORDER',
      'UPDATE_VALUE_BY_COUNT'
    ])
  }
}
</script>
