<!--
 * @Author: your name
 * @Date: 2020-02-04 20:21:41
 * @LastEditTime: 2020-03-19 23:14:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \demo\src\components\cmsNEditor.vue
 -->
<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-16 09:13:01
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-18 22:37:47
 -->
<template>
  <vue-neditor-wrap
    v-model="content"
    :config="myConfig"
    :destroy="false"
    @ready="ready"
    @beforeInit="addCustomButtom(ue.key)"
  ></vue-neditor-wrap>
</template>
<script>
import VueNeditorWrap from "vue-neditor-wrap";
export default {
  name: "cms-neditor",
  components: {
    VueNeditorWrap
  },
  data() {
    return {
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
      ue: null
    };
  },
  methods: {
    ready(editor) {
      this.ue = editor;
      console.log(this.ue);
    },
    addCustomButtom(editorId) {
      console.log(editorId);
      window.UE.registerUI(
        "test-button",
        function(editor, uiName) {
          // 注册按钮执行时的 command 命令，使用命令默认就会带有回退操作
          editor.registerCommand(uiName, {
            execCommand: function() {
              editor.execCommand(
                "inserthtml",
                `<span>这是一段由自定义按钮添加的文字</span>`
              );
            }
          });

          // 创建一个 button
          var btn = new window.UE.ui.Button({
            // 按钮的名字
            name: uiName,
            // 提示
            title: "鼠标悬停时的提示文字",
            // 需要添加的额外样式，可指定 icon 图标，图标路径参考常见问题 2
            cssRules:
              "background-image: url('/test-button.png') !important;background-size: cover;",
            // 点击时执行的命令
            onclick: function() {
              // 这里可以不用执行命令，做你自己的操作也可
              editor.execCommand(uiName);
            }
          });

          // 当点到编辑内容上时，按钮要做的状态反射
          editor.addListener("selectionchange", function() {
            var state = editor.queryCommandState(uiName);
            if (state === -1) {
              btn.setDisabled(true);
              btn.setChecked(false);
            } else {
              btn.setDisabled(false);
              btn.setChecked(state);
            }
          });

          // 因为你是添加 button，所以需要返回这个 button
          return btn;
        },
        0 /* 指定添加到工具栏上的哪个位置，默认时追加到最后 */,
        editorId /* 指定这个 UI 是哪个编辑器实例上的，默认是页面上所有的编辑器都会添加这个按钮 */
      );
    },
    onSearchResult(pois) {
      let latSum = 0;
      let lngSum = 0;
      if (pois.length > 0) {
        pois.forEach(poi => {
          let { lng, lat } = poi;
          lngSum += lng;
          latSum += lat;
          this.markers.push({
            position: [poi.lng, poi.lat],
            address: poi.address
          });
        });
        let center = {
          lng: lngSum / pois.length,
          lat: latSum / pois.length
        };
        this.center = [center.lng, center.lat];
        this.zoom = 19;
      }
    }
  }
};
</script>
