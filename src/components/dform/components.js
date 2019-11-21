/**
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-08 12:53:26
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-21 09:59:55
 */
let components = [{
  id: 1,
  label: "输入字段",
  children: [{
    id: 101,
    label: "普通文本框",
    icon: "el-icon-edit",
    component: "d-input",
    span: 24,
    dataType: "string"
  }, {
    id: 102,
    label: "富文本",
    icon: "el-icon-edit",
    component: "d-richText",
    span: 24,
    type: "cms-tinymce",
    dataType: "string",
  }, {
    id: 103,
    label: "计数器",
    icon: "el-icon-edit",
    component: "d-number",
    span: 24,
    dataType: "number",
  }]
}, {
  id: 20,
  label: "选择字段",
  children: [{
    id: 201,
    label: "单选框",
    icon: "el-icon-edit",
    component: "d-radio",
    span: 24,
    dataType: "array",
  }, {
    id: 202,
    label: "多选框组",
    icon: "el-icon-edit",
    component: "d-checkbox",
    span: 24,
    dataType: "array",
  }, {
    id: 203,
    label: "下拉选择器",
    icon: "el-icon-edit",
    component: "d-select",
    span: 24,
    dataType: "array",
  }, {
    id: 204,
    label: "级联选择器",
    icon: "el-icon-edit",
    component: "d-cascader",
    span: 24,
    dataType: "array",
  }, {
    id: 205,
    label: "开关选择器",
    icon: "el-icon-edit",
    component: "d-switch",
    span: 24,
    dataType: "boolean",
  }, {
    id: 206,
    label: "颜色选择器",
    icon: "el-icon-edit",
    component: "d-colorPicker",
    span: 24,
    dataType: "string",
  }, {
    id: 207,
    label: "滑块选择器",
    icon: "el-icon-edit",
    component: "d-slider",
    span: 24,
    dataType: "array",
  }, {
    id: 208,
    label: "评分选择器",
    icon: "el-icon-edit",
    component: "d-rate",
    span: 24,
    dataType: "number",
  }]
}, {
  id: 3,
  label: "上传字段",
  children: [{
    id: 301,
    label: "附件上传",
    icon: "el-icon-edit",
    component: "d-upload",
    span: 24,
    dataType: "array",
  }]
}, {
  id: 4,
  label: "时间日期字段",
  children: [{
    id: 401,
    label: "时间选择器",
    icon: "el-icon-edit",
    component: "d-time",
    span: 24,
    dataType: "array",
  }, {
    id: 402,
    label: "日期选择器",
    icon: "el-icon-edit",
    component: "d-date",
    span: 24,
    dataType: "array",
  }, {
    id: 403,
    label: "日期时间选择器",
    icon: "el-icon-edit",
    component: "d-dateTime",
    span: 24,
    dataType: "array",
  }]
}, {
  id: 5,
  label: "扩展字段",
  children: [{
    id: 501,
    label: "坐标选择器",
    icon: "el-icon-edit",
    component: "d-map",
    span: 24,
    dataType: "string",
  }]
}, {
  id: 6,
  label: "自定义字段"
}]

export {
  components
};