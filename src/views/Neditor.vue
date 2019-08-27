<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-30 17:49:09
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-27 10:20:47
 -->
<template>
	<div>
		<cms-neditor :destroy="false" v-model="html" :index="0"></cms-neditor>
	</div>
</template>

<script>
import cmsNeditor from "@/components/cmsNEditor.vue";
export default {
	components: {
		"cms-neditor": cmsNeditor
	},
	data() {
		return {
			html: ""
		};
	},
	methods: {}
};
</script>
