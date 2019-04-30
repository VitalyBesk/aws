import 'bootstrap/dist/css/bootstrap.min.css'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import './css/style.scss'

import Vue from 'vue'
import VuePaginate from 'vue-paginate'
import Vue2Filters from 'vue2-filters'
import {store} from './store'
import App from './App.vue'

Vue.config.productionTip = false
Vue.use(VuePaginate)
Vue.use(Vue2Filters)

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})
