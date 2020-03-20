<!--
 * @Author: your name
 * @Date: 2020-02-04 20:21:41
 * @LastEditTime: 2020-03-20 00:00:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\views\demo\Neditor.vue
 -->
<template>
  <div>
    <cms-neditor :destroy="false" v-model="html" :index="0"></cms-neditor>
  </div>
</template>

<script>
import cmsNeditor from "@/components/cmsNEditor.vue";

export default {
  components: {
    "cms-neditor": cmsNeditor
  },
  data() {
    return {
      html: "<h1>qqqq</h1>"
    };
  },
  mounted() {},
  methods: {}
};
</script>
