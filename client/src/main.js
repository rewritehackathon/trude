import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/es5/util/colors'

Vue.config.productionTip = false


Vue.use(Vuetify, {
  theme: {
    primary: "#D44091",
    secondary:	"#F8A41F",
    accent: "#722859",
    error: colors.red.accent3
  },
  options: {
  customProperties: true
}
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
