import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue';
import store from './store.js';
import { BootstrapVue } from 'bootstrap-vue'
import DatePicker from 'vue2-datepicker';
import { ValidationProvider } from 'vee-validate';
import { ValidationObserver } from 'vee-validate';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import {  faPhone,
          faAt,
          faGlobeAfrica,
          faPencilAlt,
          faBriefcase,
          faBoxOpen,
          faUniversity,
          faWrench,
          faLanguage,
          faPlus
} from '@fortawesome/free-solid-svg-icons'

// Install FontAwesome
library.add(  faPhone,
              faAt,
              faGlobeAfrica,
              faFacebook,
              faInstagram,
              faLinkedinIn,
              faPencilAlt,
              faBriefcase,
              faBoxOpen,
              faUniversity,
              faWrench,
              faLanguage,
              faPlus
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('ValidationProvider', ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(Vuex);
Vue.use(DatePicker);
//you need to import the CSS manually (in case you want to override it)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-datepicker/index.css';

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
