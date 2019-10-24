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

	.form-designer .widget-config-container .el-tabs__header {
		position: relative;
	}
}
</style>
