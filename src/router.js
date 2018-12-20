import Vue from 'vue';
import Router from 'vue-router';
import DishMatchHome from '@/components/dishMatch/index';
import DishMatch from '@/components/dishMatch/DishMatch';
import ThirdPartyConfig from '@/components/thirdPartyConfig';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/dishMatchHome',
      name: 'dishMatchHome',
      component: DishMatchHome,
    },
    {
      path: '/dishMatch',
      name: 'dishMatch',
      component: DishMatch,
    },
    {
      path: '/thirdPartyConfig',
      name: 'thirdPartyConfig',
      component: ThirdPartyConfig,
    }
  ],
});
