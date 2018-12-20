<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import DishMatchHome from './components/dishMatch';
import DishMatch from './components/dishMatch/DishMatch.vue';
import ThirdPartyConfig from './components/thirdPartyConfig'
import API from './api';

export default {
  name: 'app',
  components: {
    DishMatchHome,
    DishMatch,
    ThirdPartyConfig,
  },
  data: () => {
    return ({
      shopId: '',
      brandId: ''
    })
  },
  created: function() {
    API.getUserInfo({ casRedirect: window.location.href })
    .then(data => {
      const { result } = data.data;
      this.shopId = result.currentShopId;
      this.brandId = result.brand.id;
    });
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}
</style>
