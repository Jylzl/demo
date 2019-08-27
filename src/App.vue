<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-05 00:56:32
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-27 18:15:24
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
html,
body,
#app {
	width: 100%;
	height: 100%;
}

body {
	margin: 0;
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
</style>