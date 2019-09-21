<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-09-21 15:34:44
 * @LastAuthor: lizlong
 * @lastTime: 2019-09-21 16:42:37
 -->
<template>
	<el-card class="box-card">
		<div slot="header" class="clearfix">
			<span>文件管理系统</span>
			<el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>
		</div>
		<div>
			<el-container>
				<el-aside width="200px">Aside</el-aside>
				<el-main>
					<el-table :data="tableData" style="width: 100%" @row-contextmenu="contextmenu">
						<el-table-column prop="name" label="名称">
							<template slot-scope="scope">
								<i class="el-icon-folder"></i>
								<el-input
									size="mini"
									v-model="scope.row.name"
									v-if="renameId == scope.row.id"
									class="file-rname"
								></el-input>
								<span v-else>{{scope.row.name}}</span>
							</template>
						</el-table-column>
						<el-table-column prop="creatTime" label="修改日期" sortable></el-table-column>
						<el-table-column prop="updateTime" label="创建日期" sortable></el-table-column>
						<el-table-column
							prop="type"
							label="类型"
							:filters="[{ text: '文件夹', value: '0' }, { text: 'pdf', value: 'pdf' }]"
							:filter-method="filterTag"
							filter-placement="bottom-end"
						></el-table-column>
						<el-table-column prop="size" label="大小" sortable></el-table-column>
					</el-table>
				</el-main>
			</el-container>
		</div>
		<ContextMenu :visible="visible" :itemList="itemList"></ContextMenu>
	</el-card>
</template>

<script>
import ContextMenu from "@/components/ContextMenu.vue";

export default {
	components: {
		ContextMenu: ContextMenu
	},
	data() {
		return {
			tableData: [
				{
					id: "1",
					name: "github",
					creatTime: "2018/11/22 11:02:22",
					updateTime: "2019/01/22 10:32:22",
					type: "文件夹",
					size: "2012kb"
				},
				{
					id: "2",
					name: "github1",
					creatTime: "2018/11/22 11:02:22",
					updateTime: "2019/01/22 10:32:22",
					type: "文件夹",
					size: "2012kb"
				}
			],
			renameId: "1",
			itemList: [
				{
					key: "1",
					text: "重命名"
				},
				{
					key: "1",
					text: "删除"
				}
			],
			visible: false
		};
	},
	methods: {
		contextmenu() {
			this.visible = true;
		},
		resetDateFilter() {
			this.$refs.filterTable.clearFilter("date");
		},
		clearFilter() {
			this.$refs.filterTable.clearFilter();
		},
		formatter(row, column) {
			return row.address;
		},
		filterTag(value, row) {
			return row.tag === value;
		},
		filterHandler(value, row, column) {
			const property = column["property"];
			return row[property] === value;
		}
	}
};
</script>

<style scoped>
.file-rname {
	display: inline-block;
	width: auto;
}
</style>