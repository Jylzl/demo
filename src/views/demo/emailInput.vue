<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-05 13:14:08
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-05 13:15:14
 -->
<template>
	<div>
		<cms-email></cms-email>
	</div>
</template>

<script>
import cmsEmail from "@/components/cmsEmail.vue";

export default {
	components: {
		"cms-email": cmsEmail
	},
	data() {
		return {
			html: "<h1>qqqq</h1>"
		};
	},
	methods: {}
};
</script>