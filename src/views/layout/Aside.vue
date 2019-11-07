<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-27 18:01:13
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-07 13:02:38
 -->
<template>
	<el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" background-color="#545c64"
		text-color="#fff" active-text-color="#ffd04b" :router="true">
		<el-menu-item index="/">我的工作台</el-menu-item>
		<el-submenu index="1">
			<template slot="title">Demo</template>
			<el-menu-item index="/demo/neditor">富文本neditor</el-menu-item>
			<el-menu-item index="/demo/tinymce">富文本tinymce</el-menu-item>
			<el-menu-item index="/demo/monaco">代码编辑器</el-menu-item>
			<el-menu-item index="/demo/videoplayer">视频播放器</el-menu-item>
			<el-menu-item index="/demo/imgcropper">图片裁剪</el-menu-item>
			<el-menu-item index="/demo/wxaudio">微信音频</el-menu-item>
			<el-menu-item index="/demo/email">邮箱输入</el-menu-item>
		</el-submenu>
		<el-submenu index="2">
			<template slot="title">Demo2</template>
			<el-menu-item index="/demo/file">文件系统</el-menu-item>
			<el-menu-item index="/demo/deviceInf">设备信息</el-menu-item>
			<el-menu-item index="/demo/form">form</el-menu-item>
			<el-menu-item index="/demo/form2">form2</el-menu-item>
			<el-menu-item index="/demo/form3">form3</el-menu-item>
		</el-submenu>
		<el-submenu index="3">
			<template slot="title">Demo3</template>
			<el-menu-item index="/demo/split">split</el-menu-item>
			<el-menu-item index="/demo/dragDemo">dragDemo</el-menu-item>
		</el-submenu>
	</el-menu>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {}
	};
</script>