<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-15 14:40:36
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-18 12:39:05
 -->
<template>
	<el-input-number
		v-model="i_value"
		:name="s_prop"
		:min="i_min"
		:max="i_max"
		:step="i_step"
		:step-strictly="b_stepStrictly"
		:precision="i_precision"
		:controls="b_controls"
		:controls-position="s_controlsPosition"
		:placeholder="s_placeholder"
		:disabled="b_disabled"
		class="w100"
	></el-input-number>
</template>
<script>
export default {
	name: "d-number",
	props: {
		prop: {
			type: String,
			default: ""
		},
		value: {
			type: Number,
			default: 0
		},
		placeholder: {
			type: String,
			default: ""
		},
		min: {
			type: Number,
			default: -Infinity
		},
		max: {
			type: Number,
			default: Infinity
		},
		step: {
			type: Number,
			default: 1
		},
		stepStrictly: {
			type: Boolean,
			default: false
		},
		precision: {
			type: Number,
			default: 0
		},
		controls: {
			type: Boolean,
			default: true
		},
		controlsPosition: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			s_prop: this.prop,
			i_value: this.value,
			s_placeholder: this.placeholder,
			i_min: this.min,
			i_max: this.max,
			i_step: this.step,
			b_stepStrictly: this.stepStrictly,
			i_precision: this.precision,
			b_controls: this.controls,
			s_controlsPosition: this.controlsPosition,
			b_disabled: this.disabled
		};
	},
	methods: {
		handleChange(value) {
			console.log(value);
		}
	}
};
</script>

<style scoped>
.w100 {
	width: 100%;
}
</style>