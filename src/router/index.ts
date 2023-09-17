import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

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
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
