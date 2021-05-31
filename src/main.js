import Vue from 'vue'
import App from './App.vue'
import router from './routes/index.js';
import vuetify from './plugins/vuetify';
import store from './store/index.js';

Vue.config.debug = true;
Vue.config.productionTip = false;

Vue.filter('time', timestamp => {
    return new Date(timestamp).toLocaleString();
});

new Vue({
    router,
    vuetify,
    store,
    render: h => h(App),
}).$mount('#app')
