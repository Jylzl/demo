<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-15 11:39:57
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-15 15:09:48
 -->
<template>
	<div>
		<el-autocomplete
			v-if="s_type == 'email'"
			v-model="s_value"
			:name="s_prop"
			:type="s_type"
			:placeholder="s_placeholder"
			:disabled="b_disabled"
			:clearable="b_clearable"
			:minlength="i_minlength"
			:maxlength="i_maxlength"
			:show-word-limit="b_showWordLimit"
			:fetch-suggestions="querySearch"
			:trigger-on-focus="false"
			:readonly="b_readonly"
			class="w100"
		></el-autocomplete>
		<el-input
			v-else
			v-model="s_value"
			:name="s_prop"
			:type="s_type"
			:placeholder="s_placeholder"
			:disabled="b_disabled"
			:clearable="b_clearable"
			:minlength="i_minlength"
			:maxlength="i_maxlength"
			:show-word-limit="b_showWordLimit"
			:show-password="s_type == 'password'"
			:autosize="o_autosize"
			class="w100"
		></el-input>
	</div>
</template>

<script>
export default {
	name: "lz-input",
	props: {
		type: {
			type: String,
			default: "text"
		},
		prop: {
			type: String,
			default: ""
		},
		value: {
			type: String,
			default: ""
		},
		placeholder: {
			type: String,
			default: ""
		},
		minlength: {
			type: Number,
			default: null
		},
		maxlength: {
			type: Number,
			default: null
		},
		disabled: {
			type: Boolean,
			default: false
		},
		readonly: {
			type: Boolean,
			default: false
		},
		clearable: {
			type: Boolean,
			default: true
		},
		showWordLimit: {
			type: Boolean,
			default: false
		},
		autosize: {
			type: [Object, Array],
			default() {
				return { minRows: 2, maxRows: 6 };
			}
		},
		//默认配置
		restaurants: {
			type: Array,
			default() {
				return [
					{
						value: "@qq.com"
					},
					{
						value: "@163.com"
					},
					{
						value: "@163.net"
					},
					{
						value: "@126.com"
					},
					{
						value: "@sina.com"
					},
					{
						value: "@yahoo.com.cn"
					},
					{
						value: "@gmail.com"
					},
					{
						value: "@outlook.com"
					}
				];
			}
		}
	},
	data() {
		return {
			s_type: this.type,
			s_prop: this.prop,
			s_value: this.value,
			s_placeholder: this.placeholder,
			i_minlength: this.minlength,
			i_maxlength: this.maxlength,
			b_disabled: this.disabled,
			b_readonly: this.readonly,
			b_clearable: this.clearable,
			b_showWordLimit: this.showWordLimit,
			o_autosize: this.autosize
		};
	},
	methods: {
		//邮箱自动补全功能
		querySearch(queryString, cb) {
			//邮箱自动补全搜索方法
			function createFilter(queryString) {
				return restaurant => {
					return (
						restaurant.value
							.toLowerCase()
							.indexOf(queryString.toLowerCase()) === 0
					);
				};
			}
			let index = queryString.lastIndexOf("@");
			var restaurants = this.restaurants;
			if (index > -1) {
				restaurants = restaurants.filter(restaurant => {
					return (
						restaurant.value.substr(
							0,
							queryString.length - index
						) == queryString.substr(index, queryString.length)
					);
				});
				restaurants = restaurants.map(restaurant => {
					let obj = {};
					obj.value = restaurant.value.substring(
						queryString.length - index
					);
					return obj;
				});
			}
			restaurants = restaurants.map(restaurant => {
				let obj = {};
				obj.value = queryString + restaurant.value;
				return obj;
			});
			var results = queryString
				? restaurants.filter(createFilter(queryString))
				: restaurants;
			// 调用 callback 返回建议列表的数据
			cb(results);
		}
	}
};
</script>

<style scoped>
.w100 {
	width: 100%;
}
</style>