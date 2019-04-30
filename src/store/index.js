import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({

  state: {
    products: [],
    productsOrderBy: '',
    productsFilterBy: '',
    perPage: 6,
    sortOptionsByOrder: [
      'priceMin',
      'priceMax',
      'name'
    ],
    sortOptionsPerPage: [6,12,24]
  },

  getters: {
    doneProducts: state => {
      if (state.productsFilterBy !== '') {
        return state.products.filter((a) =>  a.name.toLowerCase().indexOf(state.productsFilterBy.toLowerCase()) !== -1);
      } else if (state.productsOrderBy === 'priceMin') {
        return state.products.sort((a, b) => parseFloat(a.price) - parseFloat(b.price));
      } else if (state.productsOrderBy === 'priceMax' ) {
        return state.products.sort((a, b) => parseFloat(b.price) - parseFloat(a.price));
      } else if (state.productsOrderBy === 'name') {
        return state.products.sort((a, b) => a.name !== b.name ? a.name < b.name ? -1 : 1 : 0);
      } else {
        return state.products;
      }
    },
    doneProductsCount: state => {
      return state.products.length;
    }
  },

  mutations: {
    PUSH_PRODUCTS: (state, res) => {
      state.products = Object.values(res.data);
    },
    SORT_PRODUCTS: (state, payload) => {
      state.productsOrderBy = payload;
    },
    FILTER_PRODUCTS: (state, payload) => {
      state.productsFilterBy = payload;
    },
    SORT_PRODUCTS_BY_COUNT: (state, payload) => {
      state.perPage = payload;
    }
  },

  actions: {
    GET_PRODUCTS: async ({ commit }) => {
      axios.get(`${window.location.href}/products.json`)
      .then((res) => commit('PUSH_PRODUCTS', res))
      .catch((err) => alert(err));
    },
    UPDATE_VALUE_BY_ORDER ({ commit }, value) {
      commit('SORT_PRODUCTS', value);
    },
    UPDATE_VALUE_BY_COUNT ({ commit }, value) {
      commit('SORT_PRODUCTS_BY_COUNT', value);
    }
  }
});
