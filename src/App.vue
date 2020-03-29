<!--
 * @Author: your name
 * @Date: 2020-02-04 20:21:41
 * @LastEditTime: 2020-03-29 23:39:16
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\App.vue
 -->
<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      name: ""
    };
  }
};
</script>
<style>
@import url(./assets/css/rest.min.css);
@import url(./assets/css/animate.css);
@import url(./assets/iconfont/iconfont.css);
html,
body,
#app {
  width: 100%;
  height: 100%;
}

body {
  margin: 0;
}
@media (-webkit-max-device-pixel-ratio: 1) {
  ::-webkit-scrollbar-track-piece {
    background-color: #ffffff;
  }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #c2c2c2;
    background-clip: padding-box;
    min-height: 28px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background-color: #a0a0a0;
  }
}
.p-left {
  float: left;
  width: 220px;
  height: 100%;
}
.p-right {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  padding-left: 220px;
}

.h100 {
  height: 100%;
}
</style>