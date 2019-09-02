<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-30 17:49:09
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-02 14:05:02
 -->
<template>
	<div>
		<wxAudio :index="0" title="最美好的期待" disc="周笔畅" src="http://sc1.111ttt.cn:8282/2018/1/03m/13/396131229550.m4a#.mp3"></wxAudio>
	</div>
</template>

<script>
import wxAudio from "@/components/wxAudio.vue";

export default {
	components: {
		wxAudio: wxAudio
	},
	data() {
		return {};
	},
	methods: {}
};
</script>
