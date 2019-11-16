<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-16 17:22:58
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-16 18:36:22
 -->
<template>
	<transition-group
		appear
		tag="div"
		class="h100 mh1080 clearfix"
		:style="{'min-height':formboxwrapHight+'px'}"
	>
		<el-col v-for="(item,index) in myArray" :span="item.span" :key="item.id" :data-id="item.id">
			<el-form-item
				class="widget-form-item"
				:class="{'active':item.id == activeId}"
				:label="'index_'+index+'=id_'+item.id+'aindex_'+activeIndex+'=aid_'+activeId"
				v-on:click.native="itemClick(index)"
			>
				<el-input v-model="formLabelAlign.name"></el-input>
				<div class="widget-view-drag drag-btn" v-if="item.id == activeId">
					<i class="el-icon-rank" title="拖拽"></i>
				</div>
				<div class="widget-view-action" v-if="item.id == activeId">
					<i class="el-icon-top" title="上移" @click.capture.stop="moveUp(index)"></i>
					<i class="el-icon-bottom" title="下移" @click.capture.stop="moveDown(index)"></i>
					<i class="el-icon-document-copy" title="复制" @click.capture.stop="copy(index)"></i>
					<i class="el-icon-delete" title="删除" @click.capture.stop="remove(index)"></i>
				</div>
			</el-form-item>
		</el-col>
	</transition-group>
</template>

<script>
export default {
	props: {
		components: {
			type: Array,
			default() {
				return [];
			}
		},
		myArray: {
			type: Array,
			default() {
				return [];
			}
		},
		active: {
			type: Object,
			default() {
				return {
					id: null,
					index: null
				};
			}
		}
	},
	data() {
		return {
			formboxwrapHight: ""
		};
	},
	mounted() {
		this.windowHeightChange();
	},
	methods: {
		// 监听窗口大小改变
		windowHeightChange() {
			this.formboxwrapHight = this.$parent.$refs.formboxwrap.offsetHeight;
			window.onresize = () => {
				return (() => {
					this.formboxwrapHight = this.$parent.$refs.formboxwrap.offsetHeight;
				})();
			};
		}
	}
};
</script>