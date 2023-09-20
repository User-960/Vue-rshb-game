import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import collectorGamePage from '@/pages/collectorGamePage.vue'
import mainPage from '@/pages/mainPage.vue'

Vue.use(VueRouter)

export const routes: Array<RouteConfig> = [
	{
		path: '/',
		name: 'home',
		component: mainPage
	},
	{
		path: '/start',
		name: 'start',
		component: () => import('../pages/startPage.vue')
	},
	{
		path: '/finish',
		name: 'finish',
		component: () => import('../pages/finishPage.vue')
	},
	{
		path: '/robot-collector',
		name: 'robot-collector',
		component: collectorGamePage
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
