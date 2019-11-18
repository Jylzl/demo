<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-18 09:25:07
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-18 09:45:14
 -->
<template>
	<el-form-item
		class="widget-form-item"
		:class="{ active: index == activeIndex }"
		:label="item.label"
		v-on:click.native="itemClick(index)"
	>
		<slot></slot>
		<div class="widget-view-drag drag-btn" v-if="index == activeIndex">
			<i class="el-icon-rank" title="拖拽"></i>
		</div>
		<div class="widget-view-action" v-if="index == activeIndex">
			<i class="el-icon-top" title="上移" @click.capture.stop="moveUp(index)"></i>
			<i class="el-icon-bottom" title="下移" @click.capture.stop="moveDown(index)"></i>
			<i class="el-icon-document-copy" title="复制" @click.capture.stop="copy(index)"></i>
			<i class="el-icon-delete" title="删除" @click.capture.stop="remove(index)"></i>
		</div>
	</el-form-item>
</template>

<script>
export default {
	props: {
		index: {
			type: Number,
			default: null
		},
		activeIndex: {
			type: Number,
			default: null
		},
		item: {
			type: Object,
			default() {
				return {};
			}
		}
	},
	data() {
		return {};
	},
	methods: {
		itemClick(index) {
			this.$emit("itemClick", index);
		},
		moveUp(index) {
			this.$emit("moveUp", index);
		},
		moveDown(index) {
			this.$emit("moveDown", index);
		},
		copy(index) {
			this.$emit("copy", index);
		},
		remove(index) {
			this.$emit("remove", index);
		}
	}
};
</script>