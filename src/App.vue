<template>
  <div id="app">
    <Header/>
    <main class="main">
      <div class="container">
        <div class="row main__inner">
          <Sidebar/>
          <div class="col-12 col-sm-9">
            <Toolbar/>
            <Cards/>
          </div>
        </div>
      </div>
    </main>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Sidebar from './components/Sidebar.vue'
import Toolbar from './components/Toolbar.vue'
import Cards from './components/Cards.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    Header,
    Sidebar,
    Toolbar,
    Cards,
    Footer
  },

  created() {
    this.$store.dispatch('GET_PRODUCTS');
  }
}
</script>
