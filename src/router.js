/*
 * @Author: your name
 * @Date: 2020-02-04 20:21:41
 * @LastEditTime: 2020-03-22 13:55:32
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\router.js
 */
/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 00:56:32
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-07 13:02:27
 */
import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/demo/form',
      name: 'form',
      component: () => import('@/views/demo/form.vue')
    },
    {
      path: '/demo/form2',
      name: 'form2',
      component: () => import('@/views/demo/form2.vue')
    },
    {
      path: '/demo/form3',
      name: 'form3',
      component: () => import('@/views/demo/form3.vue')
    },
    {
      path: '/demo/split',
      name: 'split',
      component: () => import('@/views/demo/split.vue')
    },
    {
      path: '/demo/dragDemo',
      name: 'dragDemo',
      component: () => import('@/views/demo/dragDemo.vue')
    }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/page/account/Login.vue')
  }]
})