import Vue from 'vue'
import App from './App.vue'
import Routers from './router.js';
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import request from './share/request';


Vue.use(iView);

Vue.config.productionTip = false

Vue.prototype.$request = request;

new Vue({
  render: h => h(App),
  router: Routers
}).$mount('#app')
