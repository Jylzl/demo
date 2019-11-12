<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-12 22:47:54
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-12 22:55:40
 -->
<template>
	<div class="field-attribute">
		<el-form label-position="left" label-width="84px" :model="fieldAttribute" size="small" label-suffix="：">
			<el-form-item label="字段类型">
				<el-select v-model="fieldAttribute.fieldType" placeholder="请选择字段类型">
					<el-option v-for="item in sizeOptions" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="字段栅格">
				<el-input-number v-model="fieldAttribute.span" controls-position="right" :min="8" :step="2" :max="24"
					class="w100"></el-input-number>
			</el-form-item>
			<el-form-item label="字段名称">
				<el-input v-model="fieldAttribute.prop" placeholder="请输入字段名称" maxlength="100" clearable></el-input>
			</el-form-item>
			<el-form-item label="字段标题">
				<el-input v-model="fieldAttribute.label" placeholder="请输入字段标题" maxlength="100" clearable></el-input>
			</el-form-item>
			<el-form-item label="占位内容">
				<el-input v-model="fieldAttribute.placeholder" placeholder="请输入占位内容" maxlength="100" clearable>
				</el-input>
			</el-form-item>
			<el-form-item label="默认内容">
				<el-input v-model="fieldAttribute.valueDefault" placeholder="请输入默认内容" maxlength="100" clearable>
				</el-input>
			</el-form-item>
			<el-form-item label="最大长度">
				<el-input-number v-model="fieldAttribute.maxlength" controls-position="right" :min="0" :step="10"
					:max="3000" class="w100"></el-input-number>
			</el-form-item>
			<el-form-item label="最小长度">
				<el-input-number v-model="fieldAttribute.minlength" controls-position="right" :min="0" :step="10"
					:max="3000" class="w100"></el-input-number>
			</el-form-item>
			<el-form-item label="数据来源">
				<el-select v-model="fieldAttribute.fieldType" placeholder="请选择数据来源">
					<el-option :label="'静态数据'" :value="0">
					</el-option>
					<el-option :label="'远端数据'" :value="1">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="数据类型">
				<el-select v-model="fieldAttribute.fieldType" placeholder="请选择数据来源">
					<el-option :label="'String'" :value="0">
					</el-option>
					<el-option :label="'Number'" :value="1">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="请求方式">
				<el-select v-model="fieldAttribute.fieldType" placeholder="请选择数据来源">
					<el-option :label="'Post'" :value="0">
					</el-option>
					<el-option :label="'Get'" :value="1">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="请求地址">
				<el-input v-model="fieldAttribute.valueDefault" placeholder="请输入请求地址" maxlength="100" clearable>
				</el-input>
			</el-form-item>
			<el-form-item label="静态数据">
				<el-input v-model="fieldAttribute.valueDefault" placeholder="请配置静态数据" maxlength="100" clearable>
					<el-button slot="append" icon="el-icon-edit"></el-button>
				</el-input>
			</el-form-item>
			<!-- <el-form-item label="字典配置" style="margin-bottom:0"></el-form-item>
			<el-form-item label-width="0" size="mini">
				<el-tabs v-model="activeName" :stretch="true">
					<el-tab-pane label="静态数据" name="first">
						<el-row :gutter="8">
							<el-col :span="9">
								<el-input v-model="fieldAttribute.valueDefault" maxlength="100">
								</el-input>
							</el-col>
							<el-col :span="9">
								<el-input v-model="fieldAttribute.valueDefault" maxlength="100">
								</el-input>
							</el-col>
							<el-col :span="3">
								<el-button type="warning" icon="el-icon-rank" circle></el-button>
							</el-col>
							<el-col :span="3">
								<el-button type="danger" icon="el-icon-delete" circle></el-button>
							</el-col>
						</el-row>
						<el-row :gutter="8">
							<el-col :span="9">
								<el-input v-model="fieldAttribute.valueDefault" maxlength="100">
								</el-input>
							</el-col>
							<el-col :span="9">
								<el-input v-model="fieldAttribute.valueDefault" maxlength="100">
								</el-input>
							</el-col>
							<el-col :span="3">
								<el-button type="warning" icon="el-icon-rank" circle></el-button>
							</el-col>
							<el-col :span="3">
								<el-button type="danger" icon="el-icon-delete" circle></el-button>
							</el-col>
						</el-row>
					</el-tab-pane>
					<el-tab-pane label="远端数据" name="second">
						<el-form-item label="请求地址">
							<el-input v-model="fieldAttribute.prop" placeholder="请输入字段名称" maxlength="100" clearable>
							</el-input>
						</el-form-item>
						<el-form-item label="请求方法">
							<el-input v-model="fieldAttribute.prop" placeholder="请输入字段名称" maxlength="100" clearable>
							</el-input>
						</el-form-item>
					</el-tab-pane>
				</el-tabs>
			</el-form-item> -->
			<el-row>
				<el-col :span="12">
					<el-form-item label="是否可见">
						<el-switch v-model="fieldAttribute.display"></el-switch>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="是否只读">
						<el-switch v-model="fieldAttribute.readonly"></el-switch>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="显示计数">
						<el-switch v-model="fieldAttribute.showWordLimit"></el-switch>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="字段校验">
						<el-switch v-model="fieldAttribute.required"></el-switch>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item label="校验类型" v-if="fieldAttribute.required">
				<el-select v-model="fieldAttribute.requiredType" placeholder="请选择校验类型">
					<el-option v-for="item in regexOptions" :key="item.value" :label="item.label" :value="item.value">
					</el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="校验正则" v-if="fieldAttribute.required && fieldAttribute.requiredType == '0'">
				<el-input v-model="fieldAttribute.pattern" placeholder="请输入校验正则表达式" maxlength="100" clearable>
				</el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeName: "first",
			fieldAttribute: {
				span: 24,
				fieldType: "",
				prop: "",
				label: "",
				placeholder: "",
				valueDefault: "",
				maxlength: 128,
				minlength: 0,
				required: false,
				requiredType: "",
				pattern: "",
				display: false,
				readonly: false,
				showWordLimit: false
			},
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
			regexOptions: [
				{
					value: "1",
					label: "普通文本"
				},
				{
					value: "2",
					label: "中文字符串"
				},
				{
					value: "3",
					label: "英文字符串"
				},
				{
					value: "4",
					label: "数字或英文"
				},
				{
					value: "5",
					label: "整数"
				},
				{
					value: "6",
					label: "浮点数"
				},
				{
					value: "7",
					label: "邮箱"
				},
				{
					value: "8",
					label: "手机号码"
				},
				{
					value: "9",
					label: "url地址"
				},
				{
					value: "10",
					label: "8位英文数字密码"
				},
				{
					value: "0",
					label: "其他"
				}
			]
		};
	}
};
</script>