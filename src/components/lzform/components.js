/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-08 12:53:26
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-15 14:18:12
 */
let components = [{
  id: 1,
  label: "输入字段",
  children: [{
    id: 101,
    label: "普通文本框",
    icon: "el-icon-edit",
    component: "lz-input",
    value: "",
    fieldType: "input",
    type: "input", // input,password,email
    display: true,
    span: 24,
    maxlength: 128,
    minlength: 0,
    readonly: false,
    required: false
  }, {
    id: 102,
    label: "富文本",
    icon: "el-icon-edit",
    component: "lz-input",
    span: 24,
  }, {
    id: 103,
    label: "计数器",
    icon: "el-icon-edit",
    component: "lz-input",
    span: 12,
  }]
}, {
  id: 20,
  label: "选择字段",
  children: [{
    id: 201,
    label: "单选框",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 202,
    label: "多选框组",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 203,
    label: "下拉选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 204,
    label: "级联选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 205,
    label: "开关选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 206,
    label: "颜色选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 207,
    label: "滑块选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 208,
    label: "评分选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 3,
  label: "上传字段",
  children: [{
    id: 301,
    label: "附件上传",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 4,
  label: "时间日期字段",
  children: [{
    id: 401,
    label: "时间选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 402,
    label: "日期选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }, {
    id: 403,
    label: "日期时间选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 5,
  label: "扩展字段",
  children: [{
    id: 501,
    label: "坐标选择器",
    icon: "el-icon-edit",
    component: "lz-input"
  }]
}, {
  id: 6,
  label: "自定义字段"
}]

export {
  components
};