<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-12 22:47:54
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-19 14:03:41
 -->
<template>
	<div class="field-attribute">
		<el-form label-position="left" label-width="84px" :model="o_config" size="small" label-suffix="：">
			<el-form-item label="组件类型">
				<el-select
					v-model="o_config.component"
					placeholder="请选择字段类型"
					@change="$emit('change', o_config)"
				>
					<el-option
						v-for="item in componentType"
						:key="item.id"
						:label="item.label"
						:value="item.component"
					></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="字段标题">
				<el-input
					v-model="o_config.label"
					placeholder="请输入字段标题"
					maxlength="100"
					@input="$emit('input', o_config)"
					clearable
				></el-input>
			</el-form-item>
			<el-form-item label="字段名称">
				<el-input
					v-model="o_config.prop"
					placeholder="请输入字段名称"
					maxlength="100"
					@input="$emit('input', o_config)"
					clearable
				></el-input>
			</el-form-item>
			<el-form-item label="字段栅格">
				<el-input-number
					v-model="o_config.span"
					controls-position="right"
					:min="6"
					:step="2"
					:max="24"
					class="w100"
					@change="$emit('change', o_config)"
				></el-input-number>
			</el-form-item>
			<el-form-item label="占位内容" v-if="o_config.dataType == 'string'">
				<el-input
					v-model="o_config.placeholder"
					placeholder="请输入占位内容"
					maxlength="100"
					@input="$emit('input', o_config)"
					clearable
				></el-input>
			</el-form-item>
			<el-form-item label="默认内容">
				<el-input
					v-model="o_config.valueDefault"
					placeholder="请输入默认内容"
					maxlength="100"
					@input="$emit('input', o_config)"
					clearable
				></el-input>
			</el-form-item>
			<el-form-item label="最大长度" v-if="o_config.dataType == 'string'">
				<el-input-number
					v-model="o_config.maxlength"
					controls-position="right"
					:min="0"
					:step="10"
					:max="3000"
					class="w100"
					@change="$emit('change', o_config)"
				></el-input-number>
			</el-form-item>
			<el-form-item label="最小长度" v-if="o_config.dataType == 'string'">
				<el-input-number
					v-model="o_config.minlength"
					controls-position="right"
					:min="0"
					:step="10"
					:max="3000"
					class="w100"
					@change="$emit('change', o_config)"
				></el-input-number>
			</el-form-item>
			<el-form-item label="数据来源" v-if="o_config.dataType == 'array'">
				<el-select
					v-model="o_config.dataSources"
					placeholder="请选择数据来源"
					@change="$emit('change', o_config)"
				>
					<el-option label="静态数据" value="local"></el-option>
					<el-option label="远端数据" value="online"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="选项类型" v-if="o_config.dataType == 'array'">
				<el-select
					v-model="o_config.dataType"
					placeholder="请选择数据类型"
					@change="$emit('change', o_config)"
				>
					<el-option label="String" value="string"></el-option>
					<el-option label="Number" value="bumber"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="请求方式" v-if="o_config.dataSources == 'online'">
				<el-select
					v-model="o_config.requestType"
					placeholder="请选择请求方式"
					@change="$emit('change', o_config)"
				>
					<el-option label="Post" value="post"></el-option>
					<el-option label="Get" value="get"></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="请求地址" v-if="o_config.dataSources == 'online'">
				<el-input
					v-model="o_config.requiredUrl"
					placeholder="请输入请求地址"
					maxlength="100"
					@input="$emit('input', o_config)"
					clearable
				></el-input>
			</el-form-item>
			<el-form-item label="静态数据" v-if="o_config.dataSources == 'local'">
				<el-input
					v-model="o_config.localData"
					placeholder="请配置静态数据"
					maxlength="100"
					@change="$emit('change', o_config)"
					clearable
				>
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
			</el-form-item>-->
			<el-row>
				<el-col :span="12">
					<el-form-item label="是否可见">
						<el-switch v-model="o_config.display" @change="$emit('change', o_config)"></el-switch>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="是否只读">
						<el-switch v-model="o_config.readonly" @change="$emit('change', o_config)"></el-switch>
					</el-form-item>
				</el-col>
			</el-row>
			<el-row>
				<el-col :span="12">
					<el-form-item label="显示计数">
						<el-switch v-model="o_config.showWordLimit" @change="$emit('change', o_config)"></el-switch>
					</el-form-item>
				</el-col>
				<el-col :span="12">
					<el-form-item label="字段校验">
						<el-switch v-model="o_config.check" @change="$emit('change', o_config)"></el-switch>
					</el-form-item>
				</el-col>
			</el-row>
			<el-form-item label="校验类型" v-if="o_config.check">
				<el-select v-model="s_checkType" placeholder="请选择校验类型" @change="checkTypeChange">
					<el-option
						v-for="(item,index) in regexOptions"
						:label="item.label"
						:value="item.value"
						:key="index"
					></el-option>
				</el-select>
			</el-form-item>
			<el-form-item label="校验正则" v-if="o_config.check && o_config.rules == '0'">
				<el-input
					v-model="o_config.regex"
					placeholder="请输入校验正则表达式"
					maxlength="100"
					@input="$emit('input', o_config)"
					clearable
				></el-input>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import va from "@/components/lzform/rules.js";
export default {
	props: {
		config: {
			type: Object,
			default() {
				return {};
			}
		},
		components: {
			type: Array,
			default() {
				return [];
			}
		}
	},
	data() {
		return {
			f_va: va,
			o_config: this.config,
			activeName: "first",
			s_checkType: "",
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
					value: "notRequired",
					label: "标识必填字段"
				},
				{
					value: "required",
					label: "普通文本"
				},
				{
					value: "checkChinese",
					label: "非中文字符串"
				},
				{
					value: "englishStr",
					label: "英文字符串"
				},
				{
					value: "string",
					label: "数字或英文"
				},
				{
					value: "number",
					label: "整数"
				},
				{
					value: "double",
					label: "浮点数"
				},
				{
					value: "email",
					label: "邮箱"
				},
				{
					value: "mobile",
					label: "手机号码"
				},
				{
					value: "isURL",
					label: "url地址"
				},
				{
					value: "pswd",
					label: "8-16位英文数字密码"
				},
				{
					value: "0",
					label: "其他"
				}
			]
		};
	},
	computed: {
		componentType() {
			let components = [];
			this.components.map(items => {
				if (items.children) {
					items.children.map(item => {
						components.push(item);
					});
				}
			});
			return components;
		}
	},
	watch: {
		config: {
			handler(val, oldVal) {
				this.o_config = val;
			},
			immediate: true,
			deep: true
		}
	},
	filters: {
		regexFilter: function(value) {
			console.log("isURL");
			// console.log(value)
			// let fun = value];
			// fun("请填写真实姓名");
		}
	},
	methods: {
		checkTypeChange() {
			this.o_config.rules = [va[this.s_checkType](this.o_config.label)];
			this.$emit("change", this.o_config);
			console.log(this.s_checkType);
		}
	}
};
</script>
