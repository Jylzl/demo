<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-16 09:13:01
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-18 22:37:47
 -->
<template>
  <div>
    <vue-neditor-wrap
      ref="neditor"
      v-model="content"
      :config="myConfig"
      :destroy="false"
      @ready="ready"
    ></vue-neditor-wrap>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="400px">
      <div>
        <el-tabs v-model="activeName">
          <el-tab-pane label="本地上传" name="first">
            <el-upload
              class="upload-demo"
              drag
              action="https://jsonplaceholder.typicode.com/posts/"
              multiple
            >
              <i class="el-icon-upload"></i>
              <div class="el-upload__text">
                将文件拖到此处，或
                <em>点击上传</em>
              </div>
              <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
            </el-upload>
            <el-form>
              <el-form-item label="同时添加至资源库">
                <el-radio-group v-model="radio">
                  <el-radio :label="1">是</el-radio>
                  <el-radio :label="0">否</el-radio>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </el-tab-pane>
          <el-tab-pane label="资源库" name="second">配置管理</el-tab-pane>
        </el-tabs>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleConfirm">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import VueNeditorWrap from "vue-neditor-wrap";
export default {
  name: "cms-neditor",
  components: {
    VueNeditorWrap
  },
  data() {
    const handler = function(editor, name) {
      console.log(name);
      try {
        this.dialogVisible = true;
      } catch (error) {}
    };
    return {
      dialogVisible: false,
      activeName: "first",
      radio: "0",
      myConfig: {
        // 如果需要上传功能,找后端小伙伴要服务器接口地址
        serverUrl: "/api/web/upload/ueditor",
        // 你的UEditor资源存放的路径,相对于打包后的index.html
        UEDITOR_HOME_URL: "/NEditor/",
        // 编辑器不自动被内容撑高
        autoHeightEnabled: false,
        // 初始容器高度
        initialFrameHeight: 240,
        // 初始容器宽度
        initialFrameWidth: "100%",
        // 关闭自动保存
        enableAutoSave: false
      },
      content: "",
      ue: null,
      buttons: []
    };
  },
  methods: {
    handleConfirm(html) {
      console.log(html);
      const html1 = `<img src='http://pic37.nipic.com/20140113/8800276_184927469000_2.png'  style='max-width:750px'/>`;
      this.ue.execCommand("insertHtml", html1);
      this.dialogVisible = false;
    },
    ready(editor) {
      this.ue = editor;
      console.log(this.ue);
    },
    init() {
      let _this = this;
      if (_this.$refs.neditor) {
        _this.$nextTick(() => {
          // _this.buttons.forEach(_this.$refs.neditor.registerButton);
          _this.$refs.neditor.registerButton({
            name: "simpleupload",
            tip: "上传图片",
            handler: function(editor, name) {
              console.log(name);
              _this.dialogVisible = true;
            }
          });
        });

        // this.$refs.neditor.registerCombox(this.importCombox)
      }
    }
  },
  updated() {
    this.init();
  }
};
</script>
