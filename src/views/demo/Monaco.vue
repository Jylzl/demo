<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-27 17:36:45
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-17 16:38:25
 -->
<template>
	<div>
		<el-card class="box-card">
			<div slot="header" class="clearfix">
				<el-select v-model="language" placeholder="请选择">
					<el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
				<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
			</div>
			<div>
				<MyEditor :language="language" :codes="htmlCodes" @onMounted="htmlOnMounted"
					@onCodeChange="htmlOnCodeChange" />
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
				options: [{
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
<style scoped>
</style>