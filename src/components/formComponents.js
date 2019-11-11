/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-08 12:53:26
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-08 16:00:59
 */
let components = [{
  id: 1,
  name: "输入字段",
  children: [{
    id: 1,
    name: "单行文本框",
    icon: "el-icon-edit",
    component: "lz-input",
    value: "",
    type: "input",
    display: true,
    span: 24,
    maxlength: null,
    readonly: false,
    required: false
  }, {
    id: 2,
    name: "多行文本框",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 3,
    name: "密码输入框",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 4,
    name: "邮箱输入框",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 5,
    name: "计数器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 6,
    name: "富文本",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 2,
  name: "选择字段",
  children: [{
    id: 1,
    name: "单选框",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 2,
    name: "多选框组",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 3,
    name: "下拉选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 4,
    name: "级联选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 5,
    name: "开关选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 6,
    name: "颜色选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 7,
    name: "滑块选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 8,
    name: "评分选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 3,
  name: "上传字段",
  children: [{
    id: 1,
    name: "附件上传",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 4,
  name: "时间日期字段",
  children: [{
    id: 1,
    name: "时间选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 3,
    name: "日期选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 4,
    name: "日期时间选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 5,
  name: "扩展字段",
  children: [{
    id: 1,
    name: "坐标选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 6,
  name: "自定义字段"
}]

export {
  components
};