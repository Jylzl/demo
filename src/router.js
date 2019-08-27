/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 00:56:32
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-27 18:27:07
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [{
        path: '/demo/neditor',
        name: 'Neditor',
        component: () => import('@/views/Neditor.vue')
      },
      {
        path: '/demo/imgcropper',
        name: 'ImgCropper',
        component: () => import('@/views/ImgCropper.vue')
      },
      {
        path: '/demo/monaco',
        name: 'Monaco',
        component: () => import('@/views/Monaco.vue')
      }
    ]
  }]
})