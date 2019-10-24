<template>
  <fm-making-form 
    ref="makingform" 
    style="height: 500px;" 
  >
    <template slot="action">
      <!-- 自定义操作区域插槽 -->
      <el-button type="text" icon="el-icon-upload">保存</el-button>
    </template>
  </fm-making-form>
</template>