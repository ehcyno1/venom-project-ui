import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
