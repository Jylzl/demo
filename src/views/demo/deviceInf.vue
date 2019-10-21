<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-21 08:53:17
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-21 08:56:28
 -->
<template>
	<div></div>
</template>

<script>
import MobileDetect from "mobile-detect";
export default {
	data() {
		return {};
	},
	created() {
		var md = new MobileDetect(window.navigator.userAgent);
		console.log(md.mobile()); // 'Sony'
		console.log(md.phone()); // 'Sony'
		console.log(md.tablet()); // null
		console.log(md.userAgent()); // 'Safari'
		console.log(md.os()); // 'AndroidOS'
		console.log(md.is("iPhone")); // false
		console.log(md.is("bot")); // false
		console.log(md.version("Webkit")); // 534.3
		console.log(md.versionStr("Build")); // '4.1.A.0.562'
		console.log(md.match("playstation|xbox")); // false
	}
};
</script>