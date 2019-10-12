<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-29 22:49:44
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-29 16:35:58
 -->
<template>
	<div ref="video" style="width:800px;margin:0 auto;"></div>
</template>

<script>
import flvjs from "flv.js";
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
				url: "http://219.138.199.185/yyj/20160311yms.flv",
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
.dplayer-info-panel .dplayer-info-panel-close {
	width: 12px;
	height: 12px;
	background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAJjGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiB4bXA6Q3JlYXRlRGF0ZT0iMjAxOC0wNy0yNlQxMTowNDo0MyswODowMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAxOS0wOC0zMFQwOTowNDoyNyswODowMCIgeG1wOk1vZGlmeURhdGU9IjIwMTktMDgtMzBUMDk6MDQ6MjcrMDg6MDAiIGRjOmZvcm1hdD0iaW1hZ2UvcG5nIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjVkMDc4MTVhLThjMDgtZDc0OS1hMzE5LTkyN2E4MTAzNjc1ZiIgeG1wTU06RG9jdW1lbnRJRD0iYWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjZmNWNjMTQwLTI3ZGQtNjE0My1iYWFlLThjZjViOTliMGYzYyIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmZkZWE0OGFhLTc1YTgtNTI0NS04ZjYzLWZmNmM3NzBjZWFiMCIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9InNSR0IgSUVDNjE5NjYtMi4xIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmZGVhNDhhYS03NWE4LTUyNDUtOGY2My1mZjZjNzcwY2VhYjAiIHN0RXZ0OndoZW49IjIwMTgtMDctMjZUMTE6MDQ6NDMrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE4IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6NWZhNzYxNjUtYWVmYi1lNDQ3LTkxMmItMDA2MzQ2YmJkNTI2IiBzdEV2dDp3aGVuPSIyMDE4LTA3LTI2VDExOjA0OjUxKzA4OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOCAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNvbnZlcnRlZCIgc3RFdnQ6cGFyYW1ldGVycz0iZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZyIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iZGVyaXZlZCIgc3RFdnQ6cGFyYW1ldGVycz0iY29udmVydGVkIGZyb20gYXBwbGljYXRpb24vdm5kLmFkb2JlLnBob3Rvc2hvcCB0byBpbWFnZS9wbmciLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmE0N2ZiMzdmLTg4MzItNDY0Ni05NzQ2LTZhYmFmNDYyYzExNSIgc3RFdnQ6d2hlbj0iMjAxOC0wNy0yNlQxMTowNDo1MSswODowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTggKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJzYXZlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDo1ZDA3ODE1YS04YzA4LWQ3NDktYTMxOS05MjdhODEwMzY3NWYiIHN0RXZ0OndoZW49IjIwMTktMDgtMzBUMDk6MDQ6MjcrMDg6MDAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgc3RFdnQ6Y2hhbmdlZD0iLyIvPiA8L3JkZjpTZXE+IDwveG1wTU06SGlzdG9yeT4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NWZhNzYxNjUtYWVmYi1lNDQ3LTkxMmItMDA2MzQ2YmJkNTI2IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOmZkZWE0OGFhLTc1YTgtNTI0NS04ZjYzLWZmNmM3NzBjZWFiMCIgc3RSZWY6b3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOmZkZWE0OGFhLTc1YTgtNTI0NS04ZjYzLWZmNmM3NzBjZWFiMCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiuxfCEAAABWSURBVDjLxZNJDgAgCAPt/x9dTyZaEaNI5AYpA2EBySI2BcQwOB1gl2iCGoBeFac7WABsKlMBmmzBlpoegMMhMg3gQSZNCuDfDK7XGD6kJ6ccfqbrd67bSFXZWVvuIQAAAABJRU5ErkJggg==")
		no-repeat center center;
	background-size: cover;
	font-size: 0;
}
</style>