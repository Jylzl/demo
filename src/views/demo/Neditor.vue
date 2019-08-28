<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-07-30 17:49:09
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-28 10:06:46
 -->
<template>
	<div>
		<cms-neditor :destroy="false" v-model="html" :index="0"></cms-neditor>
		<Editor id="tinymce" v-model="html" api-key="udm8u7u1w88b8yqqt0czgf3glqzet1mnbt95at9wv8u6bib3" :init="{plugins: 'wordcount'}"></Editor>
	</div>
</template>

<script>
import cmsNeditor from "@/components/cmsNEditor.vue";
import Editor from "@tinymce/tinymce-vue";

export default {
	components: {
		"cms-neditor": cmsNeditor,
		Editor
	},
	data() {
		return {
			html: "<h1>qqqq</h1>"
		};
	},
	methods: {}
};
</script>
