import Vue from 'vue';
import App from './App.vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import Icon from 'vue-awesome/components/Icon.vue';
import 'vue-awesome/icons';

Vue.use(Vuetify);

Vue.component('v-icon', Icon);

const vuetify = new Vuetify();

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: h => h(App),
}).$mount('#app');
