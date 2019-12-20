import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/reset.css'
import '@/assets/styles/border.css'
import { Icon, Tabbar, TabbarItem, NavBar, Swipe, SwipeItem, Lazyload } from 'vant'
import 'amfe-flexible/index.js'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import axios from 'axios'

Vue.config.productionTip = false
Vue.prototype.$http = axios

Vue.use(Icon).use(Tabbar).use(TabbarItem).use(NavBar).use(Swipe).use(SwipeItem).use(Lazyload).use(VueAwesomeSwiper)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
