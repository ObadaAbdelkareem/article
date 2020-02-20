import Vue from 'vue'
import App from './App'
import Vuetify from 'vuetify'
Vue.config.productionTip = false
import ReadMore from 'vue-read-more';
 
Vue.use(ReadMore);
Vue.use(Vuetify, {
  icons: {
    iconfont: 'mdi'
  }})
export default new Vuetify({ })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  vuetify: new Vuetify(),
  components: { App },
  template: '<App/>'
})