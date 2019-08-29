<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-29 22:49:44
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-29 22:49:58
 -->
<template>
	<div ref="video" style="width:800px;margin:0 auto;"></div>
</template>

<script>
import "dplayer/dist/DPlayer.min.css";
import DPlayer from "dplayer";
export default {
	data() {
		return {
			dp: null
		};
	},
	mounted() {
		let _this = this;
		_this.dp = new DPlayer({
			container: _this.$refs.video,
			video: {
				url:
					"http://www.xiaogan.gov.cn/u/cms/www/201902/271026196oyj.mp4",
				pic:
					"http://www.xiaogan.gov.cn/u/cms/www/201902/28091318ce87.png"
			},
			// screenshot: true //需要视频允许跨域
			contextmenu: [
				{
					text: "腾讯视频",
					link: "https://github.com/DIYgod/DPlayer"
				},
				{
					text: "上一集",
					click: player => {
						console.log(_this.dp);
					}
				},
				{
					text: "下一集",
					click: player => {
						console.log(_this.dp);
					}
				}
			]
		});
	},
	methods: {}
};
</script>

<style>
.dplayer-menu .dplayer-menu-item:nth-last-child(1),
.dplayer-menu .dplayer-menu-item:nth-last-child(2) {
	display: none;
}
.dplayer-menu .dplayer-menu-item a {
	text-decoration: none;
}
</style>