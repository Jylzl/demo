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
@media (-webkit-max-device-pixel-ratio: 1) {
	::-webkit-scrollbar-track-piece {
		background-color: #ffffff;
	}

	::-webkit-scrollbar {
		width: 8px;
		height: 8px;
	}

	::-webkit-scrollbar-thumb {
		background-color: #c2c2c2;
		background-clip: padding-box;
		min-height: 28px;
	}

	::-webkit-scrollbar-thumb:hover {
		background-color: #a0a0a0;
	}
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