import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import vuetify from './plugins/vuetify';
import store from './store/index.js';
import {currency} from './utils/currency';

Vue.config.productionTip = false;
Vue.filter('currency', currency);


new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')
