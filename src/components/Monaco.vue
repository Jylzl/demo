<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-27 17:37:20
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-27 17:54:29
 -->
<template>
	<div :id="id" :ref="id" style="height:600px;"></div>
</template>
<script>
import * as monaco from "monaco-editor";
export default {
	props: {
		codes: {
			type: String,
			default: function() {
				return "<div>请编辑html内容</div>";
			}
		},
		language: {
			type: String,
			default: function() {
				return "html";
			}
		},
		theme: {
			type: String,
			default: function() {
				return "vs"; //vs(默认)，hc-black（高亮），vs-dark（深色）
			}
		},
		editorOptions: {
			type: Object,
			default: function() {
				return {
					selectOnLineNumbers: true,
					roundedSelection: false,
					readOnly: false, // 只读
					cursorStyle: "line", //光标样式
					automaticLayout: false, //自动布局
					glyphMargin: true, //字形边缘
					useTabStops: false,
					fontSize: 28, //字体大小
					autoIndent: true, //自动布局
					quickSuggestionsDelay: 500 //代码提示延时
				};
			}
		}
	},
	data() {
		return {
			id:
				"monaco" +
				Math.random()
					.toString()
					.slice(-10),
			codesCopy: null //内容备份
		};
	},
	mounted() {
		this.initEditor();
	},
	methods: {
		initEditor() {
			let self = this;
			self.$refs[self.id].innerHTML = "";
			self.monacoEditor = monaco.editor.create(self.$refs[self.id], {
				value: self.codesCopy || self.codes,
				language: self.language,
				theme: self.theme, //vs, hc-black, or vs-dark
				editorOptions: self.editorOptions
			});
			self.$emit("onMounted", self.monacoEditor); //编辑器创建完成回调
			self.monacoEditor.onDidChangeModelContent(function(event) {
				//编辑器内容changge事件
				self.codesCopy = self.monacoEditor.getValue();
				self.$emit("onCodeChange", self.monacoEditor.getValue(), event);
			});
			//编辑器随窗口自适应
			window.addEventListener("resize", function() {
				self.initEditor();
			});
		}
	}
};
</script>
<style scoped>
#container {
	height: 100%;
	text-align: left;
}
</style>