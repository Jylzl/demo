<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-27 18:03:43
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-14 21:20:50
 -->
<template>
	<el-container>
		<el-header height="60px">
			<Aside></Aside>
		</el-header>
		<el-container style="height:calc(100% - 60px);">
			<el-main>
				<Main></Main>
			</el-main>
		</el-container>
	</el-container>
</template>
<script>
	// @ is an alias to /src
	import Aside from "@/views/layout/Aside.vue";
	import Main from "@/views/layout/Main.vue";
	export default {
		name: "Layout",
		components: {
			Aside,
			Main
		},
		data() {
			return {};
		},
		computed: {},
		mounted() {},
		methods: {}
	};
</script>
<style>
	.el-container {
		height: 100%;
	}

	.el-container .el-header {
		padding: 0;
	}
</style>