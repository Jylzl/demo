/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 00:56:32
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-21 08:58:41
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
        component: () => import('@/views/demo/Neditor.vue')
      },
      {
        path: '/demo/imgcropper',
        name: 'ImgCropper',
        component: () => import('@/views/demo/ImgCropper.vue')
      },
      {
        path: '/demo/monaco',
        name: 'Monaco',
        component: () => import('@/views/demo/Monaco.vue')
      },
      {
        path: '/demo/tinymce',
        name: 'Tinymce',
        component: () => import('@/views/demo/Tinymce.vue')
      },
      {
        path: '/demo/videoplayer',
        name: 'VideoPlayer',
        component: () => import('@/views/demo/VideoPlayer.vue')
      },
      {
        path: '/demo/wxaudio',
        name: 'wxAudio',
        component: () => import('@/views/demo/wxAudio.vue')
      },
      {
        path: '/demo/email',
        name: 'cmsEmail',
        component: () => import('@/views/demo/emailInput.vue')
      },
      {
        path: '/demo/file',
        name: 'cmsFile',
        component: () => import('@/views/demo/File.vue')
      },
      {
        path: '/demo/deviceInf',
        name: 'deviceInf',
        component: () => import('@/views/demo/deviceInf.vue')
      }
    ]
  }]
})