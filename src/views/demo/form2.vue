<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-24 22:49:22
 * @LastAuthor: lizlong
 * @lastTime: 2019-10-29 17:18:00
 -->
<template>
	<div class="webapp">
		<avue-form-design :option="option" @submit="handleSubmit">
		</avue-form-design>
	</div>
</template>


<script>
export default {
	data() {
		return {
			box: true,
			option: {
				column: []
			}
		};
	},
	created() {
		this.getFormInfo();
	},
	methods: {
		handleSubmit(json) {
			console.log(json);
		},
		getFormInfo() {}
	}
};
</script>
<style lang="scss">
.webapp {
	background-color: #fff;
	position: relative;
	width: 100%;
	height: 100%;

	.form-designer {
		height: 100%;
	}

	.form-designer .widget-container .widget-container-header {
		box-sizing: border-box;
		padding: 0 20px;
	}

	.form-designer
		.widget-container
		.widget-container-header
		> button:first-child {
		display: none;
	}

	.widget-form-container .widget-form-list {
		background-color: transparent;
	}

	.form-designer .widget-config-container {
		margin-top: 0;
	}

	.form-designer .widget-config-container .el-tabs__header {
		position: relative;
	}
}
</style>
