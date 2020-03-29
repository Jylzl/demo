<!--
 * @description: Tinymce编辑器组件
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-30 17:49:09
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-13 13:53:29
 -->
<template>
  <div>
    <Editor
      id="tinymce"
      v-model="html"
      api-key="udm8u7u1w88b8yqqt0czgf3glqzet1mnbt95at9wv8u6bib3"
      :init="init"
    ></Editor>
    <div v-html="html"></div>
  </div>
</template>

<script>
import tinymce from "tinymce/tinymce";
import Editor from "@tinymce/tinymce-vue";
//主题
import "tinymce/themes/silver";
//插件
import "tinymce/plugins/advlist";
import "tinymce/plugins/anchor"; // 作者
import "tinymce/plugins/autolink";
import "tinymce/plugins/autoresize"; // 自动更改大小
import "tinymce/plugins/autosave"; // 自动保存
import "tinymce/plugins/bbcode";
import "tinymce/plugins/charmap"; // 特殊符号
import "tinymce/plugins/code"; // 代码
import "tinymce/plugins/codesample";
import "tinymce/plugins/colorpicker";
import "tinymce/plugins/contextmenu";
import "tinymce/plugins/directionality"; // 设置编写方向
import "tinymce/plugins/emoticons"; // 表情
import "tinymce/plugins/fullpage"; // 完整页面的文档属性
import "tinymce/plugins/fullscreen"; // 全屏
import "tinymce/plugins/help"; // 帮助
import "tinymce/plugins/hr"; // 水平线
import "tinymce/plugins/image"; // 插入上传图片插件
import "tinymce/plugins/imagetools"; // 图片工具
import "tinymce/plugins/importcss";
import "tinymce/plugins/insertdatetime"; // 插入时间
import "tinymce/plugins/legacyoutput";
import "tinymce/plugins/link"; // 添加和修改链接
import "tinymce/plugins/lists"; // 列表插件
import "tinymce/plugins/media"; // 插入视频插件
import "tinymce/plugins/nonbreaking"; // 不间断空格
import "tinymce/plugins/noneditable";
import "tinymce/plugins/pagebreak"; // 分页符
import "tinymce/plugins/paste"; // 粘贴
import "tinymce/plugins/preview"; // 预览
import "tinymce/plugins/print"; // 打印
import "tinymce/plugins/quickbars";
import "tinymce/plugins/save"; // 保存(ajax)
import "tinymce/plugins/searchreplace"; // 搜索
import "tinymce/plugins/spellchecker"; // 拼写检查
import "tinymce/plugins/tabfocus";
import "tinymce/plugins/table"; // 插入表格插件
import "tinymce/plugins/template"; // 插入模板
import "tinymce/plugins/textcolor"; //文本颜色|背景颜色
import "tinymce/plugins/textpattern";
import "tinymce/plugins/toc"; // 插入目录
import "tinymce/plugins/visualblocks"; // 隐藏块级区域开关
import "tinymce/plugins/visualchars"; // 隐藏字符串开关
import "tinymce/plugins/wordcount"; // 字数统计插件
// import "tinymce/plugins/powerpaste"; // 字数统计插件

export default {
  components: {
    Editor
  },
  data() {
    return {
      html: "",
      init: {
        language_url: "/tinymce/langs/zh_CN.min.js", // 语言包的路径
        language: "zh_CN", //语言
        skin_url: "/tinymce/skins/ui/oxide-define", // skin路径
        emoticons_database_url: "/tinymce/plugins/emoticons/emojis.min.js",
        base_url: "/tinymce", //从另一个位置加载主题和插件
        cache_suffix: "?v=5.0.0",
        body_class: "htmledit_views",
        // content_css: [
        //   "/cdn/css/rest.min.css",
        //   "/cdn/css/ck_htmledit_views.css"
        // ],
        content_style: "body { box-sizing: border-box; margin: 12px 8px; }",
        // external_plugins: {
        // 	powerpaste: "/tinymce/plugins/powerpaste/plugin.js",
        // 	formatpainter: "/tinymce/plugins/formatpainter/plugin.js",
        // 	a11ychecker: "/tinymce/plugins/a11ychecker/plugin.js"
        // },
        height: 600, //编辑器高度(autoresize开启后无效)
        max_height: 800, // 编辑器初始化最大高度
        min_height: 600, // 编辑器初始化最小高度
        branding: false, //是否禁用“Powered by TinyMCE”
        nonbreaking_force_tab: true, // 不间断空格
        paste_as_text: false, //粘贴为文本
        quickbars_selection_toolbar: "bold italic | link h2 h3 blockquote", //选中快捷工具栏
        quickbars_insert_toolbar:
          "quickimage quicktable codesample link charmap", //快捷插入工具类
        powerpaste_html_import: prompt, //clean - 保留内容的结构,merge保留原始文档的内联格式和结构,prompt清除和合并选项之间进行选择。
        font_formats:
          "微软雅黑=Microsoft YaHei; 宋体=SimSun; 新宋体=NSimSun; 仿宋=FangSong; 楷体=KaiTi;  黑体=SimHei; Arial=arial,helvetica,sans-serif; Arial Black=arial black,avant garde; Book Antiqua=book antiqua,palatino; Comic Sans MS=comic sans ms,sans-serif; Courier New=courier new,courier; Georgia=georgia,palatino; Helvetica=helvetica; Impact=impact,chicago; Symbol=symbol; Tahoma=tahoma,arial,helvetica,sans-serif; Times New Roman=times new roman,times; Verdana=verdana,geneva;",
        // fontsize_formats: "12px 14px 16px 18px 24px 36px 48px 56px 72px",
        style_formats_merge: true,
        style_formats_autohide: true,
        menubar: "file edit insert view format table tools help", //顶部菜单栏显示
        menu: {
          file: {
            title: "File",
            items: "newdocument restoredraft | preview  | print "
          },
          edit: {
            title: "Edit",
            items: "undo redo | cut copy paste | selectall"
          },
          view: {
            title: "View",
            items:
              "code | visualaid visualchars visualblocks | preview fullscreen"
          },
          insert: {
            title: "Insert",
            items:
              "image media link template codesample bdmap | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime"
          },
          format: {
            title: "Format",
            items:
              "bold italic underline strikethrough superscript subscript codeformat | blockformats fontformats fontsizes align | forecolor backcolor | removeformat"
          },
          tools: {
            title: "Tools",
            items:
              "a11ycheck spellchecker language | wordcount | fullpage | searchreplace"
          },
          table: {
            title: "Table",
            items: "inserttable tableprops deletetable row column cell"
          },
          help: {
            title: "Help",
            items: "help"
          }
        },
        plugins:
          "enclosure a11ychecker bdmap indent2em lineheight formatpainter powerpaste advlist anchor autolink autoresize autosave charmap code codesample directionality emoticons fullpage fullscreen help hr image imagetools importcss insertdatetime legacyoutput link lists media nonbreaking noneditable pagebreak preview print quickbars save searchreplace spellchecker tabfocus table template textpattern toc visualblocks visualchars wordcount",
        toolbar:
          "undo redo | formatpainter removeformat | styleselect | fontselect fontsizeselect | bold italic underline strikethrough subscript superscript | forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent indent2em lineheight | lists image media emoticons link charmap codesample table | bdmap enclosure | a11ycheck | fullscreen",
        importcss_append: true,
        images_upload_url: "postAcceptor.php", //图片上传地址
        // images_upload_handler: this.imagesUploadHandlerfunction(),
        imagetools_cors_hosts: ["mydomain.com", "otherdomain.com"],
        imagetools_proxy: "proxy.php",
        //想要哪一个图标提供本地文件选择功能，参数可为media(媒体)、image(图片)、file(文件)
        file_picker_types: "media,image,file",
        //be used to add custom file picker to those dialogs that have it.
        file_picker_callback: this.filePickerCallback(),
        autosave_ask_before_unload: false
      }
    };
  },
  methods: {
    imagesUploadHandlerfunction() {
      return function(blobInfo, success, failure) {
        setTimeout(function() {
          /* no matter what you upload, we will turn it into TinyMCE logo :)*/
          success("http://moxiecode.cachefly.net/tinymce/v9/images/logo.png");
        }, 2000);
      };
    },
    filePickerCallback() {
      return function(cb, value, meta) {
        if (meta.filetype === "file") {
          cb("https://www.baidu.com/img/bd_logo1.png", {
            text: "My text"
          });
        }
        if (meta.filetype === "image") {
          cb("http://www.xiaogan.gov.cn/u/cms/www/201903/05163932sjlh.jpg", {
            alt: "董永公园"
          });
        }
        if (meta.filetype === "media") {
          cb("http://www.xiaogan.gov.cn/u/cms/www/201902/271026196oyj.mp4", {
            source2: "alt.ogg",
            poster:
              "http://www.xiaogan.gov.cn/u/cms/www/201902/28091318ce87.png"
          });
        }
        //当点击meidia图标上传时,判断meta.filetype == 'media'有必要，因为file_picker_callback是media(媒体)、image(图片)、file(文件)的共同入口
        // if (meta.filetype == "media") {
        //   //创建一个隐藏的type=file的文件选择input
        //   let input = document.createElement("input");
        //   input.setAttribute("type", "file");
        //   input.onchange = function() {
        //     let file = this.files[0]; //只选取第一个文件。如果要选取全部，后面注意做修改
        //     let xhr, formData;
        //     xhr = new XMLHttpRequest();
        //     xhr.open("POST", self.apiUrl);
        //     xhr.withCredentials = self.credentials;
        //     xhr.upload.onprogress = function(e) {
        //       // 进度(e.loaded / e.total * 100)
        //     };
        //     xhr.onerror = function() {
        //       //根据自己的需要添加代码
        //       console.log(xhr.status);
        //       return;
        //     };
        //     xhr.onload = function() {
        //       let json;
        //       if (xhr.status < 200 || xhr.status >= 300) {
        //         console.log("HTTP 错误: " + xhr.status);
        //         return;
        //       }
        //       json = JSON.parse(xhr.responseText);
        //       //假设接口返回JSON数据为{status: 0, msg: "上传成功", data: {location: "/localImgs/1546434503854.mp4"}}
        //       if (json.status == 0) {
        //         //接口返回的文件保存地址
        //         let mediaLocation = json.data.location;
        //         //cb()回调函数，将mediaLocation显示在弹框输入框中
        //         cb(mediaLocation, {
        //           title: file.name
        //         });
        //       } else {
        //         console.log(json.msg);
        //         return;
        //       }
        //     };
        //     formData = new FormData();
        //     //假设接口接收参数为file,值为选中的文件
        //     formData.append("file", file);
        //     //正式使用将下面被注释的内容恢复
        //     xhr.send(formData);
        //   };
        //   //触发点击
        //   input.click();
        // }
      };
    }
  }
};
</script>