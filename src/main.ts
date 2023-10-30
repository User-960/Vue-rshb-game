import VueCompositionAPI from '@vue/composition-api'
import Vue from 'vue'
import VueClipboard from 'vue-clipboard2'

import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/styles/index.css'

Vue.use(VueClipboard)

Vue.config.productionTip = false
Vue.use(VueCompositionAPI)

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
