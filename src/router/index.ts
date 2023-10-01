import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import aiGamePage from '@/pages/aiGamePage.vue'
import collectorGamePage from '@/pages/collectorGamePage.vue'
import geneticGamePage from '@/pages/geneticGamePage.vue'
import mainPage from '@/pages/mainPage.vue'
import pestControlGamePage from '@/pages/pestControlGamePage.vue'

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
	},
	{
		path: '/genetic-game',
		name: 'genetic-game',
		component: geneticGamePage
	},
	{
		path: '/ai-game',
		name: 'ai-game',
		component: aiGamePage
	},
	{
		path: '/pest-control',
		name: 'pest-control',
		component: pestControlGamePage
	}
]

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
})

export default router
