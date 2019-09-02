<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-30 11:13:58
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-02 13:07:46
 -->
<template>
	<div :id="id"></div>
</template>

<script>
import WxAudio from '@dw/wx-audio'
export default {
	name: 'wxAudioPlayer',
	props: {
		title: { //标题
			type: String,
			default: ""
		},
		src: { //资源路径
			type: String,
			default: ""
		},
		disc: { //作者
			type: String,
			default: ""
		},
		config: { //默认配置
			type: Object,
			default: function () {
				return {
					autoplay: true,
					loop: false,
					width: '320px',
				};
			}
		},
		ended: { //播放完成事件
			type: Function,
			default: function () {
			}
		},
	},
	data() {
		return {
			id: 'id' + (new Date()).getTime()
		};
	},
	mounted() {
		var wxAudio = new WxAudio({
			ele: '#' + this.id,
			title: this.title,
			disc: this.disc,
			src: this.src,
			width: this.config.width,
			autoplay: this.config.autoplay,
			loop: this.config.loop,
			ended: this.ended
		});
	}
}
</script>

