<template>
	<div class="form-attribute">
		<el-form label-position="left" label-width="84px" :model="formAttribute" size="small" label-suffix="：">
			<el-form-item label="表单尺寸">
				<el-select v-model="formAttribute.formSize" placeholder="请选择">
					<el-option v-for="item in sizeOptions" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="表单校验">
				<el-switch v-model="formAttribute.formCheck"></el-switch>
			</el-form-item>
			<el-form-item label="字段格式">
				<el-select v-model="formAttribute.fieldFormat" placeholder="请选择">
					<el-option v-for="item in fieldFormatOptions" :key="item.value" :label="item.label"
						:value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="字段前缀">
				<el-input v-model="formAttribute.fieldPrefix" placeholder="请输入字段前缀" clearable></el-input>
			</el-form-item>
			<el-form-item label="标签位置">
				<el-select v-model="formAttribute.labelPosition" placeholder="请选择">
					<el-option v-for="item in alignmentOptions" :key="item.value" :label="item.label"
						:value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="标签宽度">
				<el-input-number v-model="formAttribute.labelWidth" controls-position="right" :min="60" :max="400"
					:step="20" class="w100"></el-input-number>
			</el-form-item>
			<el-form-item label="标签后缀">
				<el-input v-model="formAttribute.labelSuffix" placeholder="请输入后缀" clearable></el-input>
			</el-form-item>
			<el-form-item label="行行间隔">
				<el-input-number v-model="formAttribute.rowSpacing" controls-position="right" :min="0" :max="40"
					:step="2" class="w100"></el-input-number>
			</el-form-item>
			<el-form-item label="列列间隔">
				<el-input-number v-model="formAttribute.colSpacing" controls-position="right" :min="0" :max="40"
					:step="2" class="w100"></el-input-number>
			</el-form-item>
			<el-form-item label="按钮显示">
				<el-checkbox v-model="formAttribute.submitShow">提交按钮</el-checkbox>
				<el-checkbox v-model="formAttribute.resetShow">重置按钮</el-checkbox>
			</el-form-item>
			<el-form-item label="按钮位置" v-if="formAttribute.submitShow || formAttribute.resetShow">
				<el-select v-model="formAttribute.btnPosition" placeholder="请选择">
					<el-option v-for="item in positionOptions" :key="item.value" :label="item.label"
						:value="item.value"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="提交文字" v-if="formAttribute.submitShow">
				<el-input v-model="formAttribute.submitText" placeholder="请输入文字" clearable></el-input>
			</el-form-item>
			<el-form-item label="重置文字" v-if="formAttribute.resetShow">
				<el-input v-model="formAttribute.resetText" placeholder="请输入文字" clearable></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	name: "formAttribute",
	data() {
		return {
			formAttribute: {
				formSize: "medium", //表单尺寸
				formCheck: true, //表单校验
				fieldFormat: "other", //字段格式
				fieldPrefix: "attr_", //字段前缀
				labelPosition: "right", //标签位置
				labelWidth: "120", //标签宽度
				labelSuffix: ":", //标签后缀
				rowSpacing: null, //行行间隔
				colSpacing: null, //列列间隔
				submitShow: true, //按钮显示
				resetShow: true, //按钮显示
				btnPosition: "left", //按钮位置
				submitText: "提交", //提交文字
				resetText: "重置" //重置文字
			},
			positionOptions: [
				{
					value: "left",
					label: "居左"
				},
				{
					value: "center",
					label: "居中"
				},
				{
					value: "right",
					label: "居右"
				}
			],
			sizeOptions: [
				{
					value: "large",
					label: "大"
				},
				{
					value: "medium",
					label: "中"
				},
				{
					value: "small",
					label: "小"
				},
				{
					value: "mini",
					label: "超小"
				}
			],
			alignmentOptions: [
				{
					value: "left",
					label: "左对齐"
				},
				{
					value: "right",
					label: "右对齐"
				},
				{
					value: "top",
					label: "顶部对齐"
				}
			],
			fieldFormatOptions: [
				{
					value: "hump",
					label: "驼峰式"
				},
				{
					value: "underline",
					label: "下划线式"
				},
				{
					value: "other",
					label: "自定义"
				}
			]
		};
	}
};
</script>