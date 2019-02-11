import Vue from 'vue'
import Router from 'vue-router'
import Siswa from '@/components/siswa'
import Kelas from '@/components/kelas'

Vue.use(Router)

export default new Router({
	routes: [
	{
		path: '/siswa',
		name: 'Siswa',
		component : Siswa
	},
	{
		path: '/kelas',
		name: 'Kelas',
		component: Kelas
	}
	]
})