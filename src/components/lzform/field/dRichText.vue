<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-18 11:29:53
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-18 14:43:55
 -->
<template>
	<component :is="b_data.type || 'cms-tinymce'"></component>
</template>

<script>
import cmsTinymce from "@/components/cmsTinymce.vue";
import cmsNEditor from "@/components/cmsNEditor.vue";

export default {
	name: "d-richText",
	components: {
		"cms-tinymce": cmsTinymce,
		"cms-nueditor": cmsNEditor
	},
	props: {
		data: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {
			b_data: this.data
		};
	}
};
</script>