<template>
  <div class="products-wrap">
    <paginate
    class="row"
    tag="div"
    name="cards"
    ref="paginator"
    :list="doneProducts"
    :per="perPage"
    >
    <div class="card-wrap col-12 col-md-6 col-lg-4" v-for="(item, index) in paginated('cards')" :key="index">
      <a class="card card--secondary" href="">
        <img class="card-img-top card-img-top--secondary" src="https://s23440.pcdn.co/wp-content/uploads/2017/07/magento-logo-600x400.png" alt="">
        <div class="card-body d-flex flex-column justify-content-between">
          <div class="row">
            <div class="col-8">
              <p class="card-name">{{ item.name | lowercase }}</p>
            </div>
            <div class="col-4">
              <p class="card-price">{{ item.price | currency('$', 1, { thousandsSeparator: '.' }) }}</p>
            </div>
          </div>
          <p class="card-descr">{{ item.short_description | lowercase  }}</p>
        </div>
      </a>
    </div>
  </paginate>

  <div class="row">
    <div class="col-12">
      <paginate-links for="cards" :hide-single-page="true"></paginate-links>
    </div>
  </div>
</div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {

  data: function() {
    return {
      paginate: ['cards']
    }
  },

  computed: {
    ...mapState([
      'perPage'
    ]),
    ...mapGetters([
      'doneProducts'
    ])
  }
}
</script>
