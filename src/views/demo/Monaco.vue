<!--
 * @Author: your name
 * @Date: 2020-02-04 20:21:41
 * @LastEditTime: 2020-03-29 23:42:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\views\demo\Monaco.vue
 -->
<template>
  <div class="h100">
    <el-card class="box-card h100">
      <div slot="header" class="clearfix">
        <el-select v-model="language" placeholder="请选择">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
      </div>
      <div class="h100">
        <MyEditor
          :language="language"
          :codes="htmlCodes"
          @onMounted="htmlOnMounted"
          @onCodeChange="htmlOnCodeChange"
        />
      </div>
    </el-card>
  </div>
</template>

<script>
import MyEditor from "@/components/Monaco.vue";
export default {
  components: {
    MyEditor
  },
  data() {
    return {
      language: "html",
      options: [
        {
          label: "html",
          value: "html"
        },
        {
          label: "js",
          value: "javascript"
        },
        {
          label: "css",
          value: "css"
        }
      ],
      htmlCodes: "<div>This is html</div>",
      htmlEditor: null
    };
  },
  methods: {
    htmlOnMounted(edit) {
      this.htmlEditor = edit;
    },
    htmlOnCodeChange(value, event) {}
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.el-card__body {
  box-sizing: border-box;
  height: calc(100% - 77px);
  padding-left: 0;
  padding-right: 0;
}
</style>