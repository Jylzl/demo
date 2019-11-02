<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-10-29 17:59:02
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-02 14:03:22
 -->
<template>
  <el-container class="form" oncontextmenu="self.event.returnValue=false">
    <el-aside width="300px">
      <div class="form-left-card">
        <el-card class="form-card" shadow="never" :body-style="{ padding: '0px' }">
          <div slot="header" class="clearfix form-card-header">
            <span>表单</span>
            <el-button style="float: right; padding: 3px 0" type="text" icon="el-icon-edit-outline"></el-button>
          </div>
          <div class="h100">
            <!-- 滚动条 -->
            <el-scrollbar class="h100">
              <el-tree :data="data" :props="defaultProps"></el-tree>
            </el-scrollbar>
            <!-- /滚动条 -->
          </div>
        </el-card>
      </div>
      <div class="form-left-tabs">
        <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick" class="h100 form-tabs">
          <el-tab-pane name="first" class="h100">
            <span slot="label">
              <i class="el-icon-receiving"></i> 增量字段
            </span>
            <div class="h100">
              <el-scrollbar class="h100">
                <el-collapse v-model="activeNames" @change="handleChange" accordion>
                  <el-collapse-item title="输入字段" name="1">
                    <div class="p-lf-10">
                      <el-row :gutter="10" class="field-box">
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">单行文本框</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">密码输入框</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">邮箱输入框</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">多行文本框</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">计数器输入</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="选择字段" name="2">
                    <div class="p-lf-10">
                      <el-row :gutter="10" class="field-box">
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">单选按钮组</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">多选按钮组</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">下拉选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">级联选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">开关选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">颜色选择器</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="上传字段" name="3">
                    <div class="p-lf-10">
                      <el-row :gutter="10" class="field-box">
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">图片上传</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">附件上传</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="时间日期字段" name="4">
                    <div class="p-lf-10">
                      <el-row :gutter="10" class="field-box">
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">年</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">月</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">日</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">周</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">时间选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">时间范围选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">日期选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">日期范围选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">时间日期选择器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">时间日期范围选择器</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="扩展字段" name="5">
                    <div class="p-lf-10">
                      <el-row :gutter="10" class="field-box">
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">富文本编辑器</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">坐标选择器</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="其他字段" name="6">
                    <div class="p-lf-10">
                      <el-row :gutter="10" class="field-box">
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">评价</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">滑块</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-collapse-item>
                  <el-collapse-item title="自定义字段" name="7">
                    <div class="p-lf-10">
                      <el-row :gutter="10" class="field-box">
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">用户自定义1</span>
                          </div>
                        </el-col>
                        <el-col :span="12">
                          <div class="field-label">
                            <i class="el-icon-edit"></i>
                            <span class="field-label-title">用户自定义1</span>
                          </div>
                        </el-col>
                      </el-row>
                    </div>
                  </el-collapse-item>
                </el-collapse>
              </el-scrollbar>
            </div>
          </el-tab-pane>
          <el-tab-pane name="second" class="h100">
            <span slot="label">
              <i class="el-icon-office-building"></i> 布局字段
            </span>
            <div class="h100">
              <el-scrollbar class="h100">
                <div>布局字段</div>
              </el-scrollbar>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-aside>
    <el-main class="form-box">
      <el-container>
        <el-header class="form-box-header" height="40px">
          <div>
            <el-button type="text" icon="el-icon-refresh-left" size="mini" circle></el-button>
            <el-button type="text" icon="el-icon-refresh-right" size="mini" circle></el-button>
            <el-button type="text" icon="el-icon-refresh" size="mini" circle></el-button>
          </div>
          <div>
            <el-button type="primary" icon="el-icon-upload" size="mini" circle></el-button>
            <el-button type="primary" icon="el-icon-coin" size="mini" circle></el-button>
            <el-button type="primary" icon="el-icon-view" size="mini" circle></el-button>
          </div>
        </el-header>
        <el-main class="form-box-body" :class="{'form-box-body30': codeViewKey,'form-box-body100': !codeViewKey }">
          <!-- 滚动条 -->
          <div class="form-boxwrap" :class="{'form-bg-one':false}">
            <el-scrollbar class="h100">
              <el-form :label-position="formAttribute.labelPosition" :label-width="formAttribute.labelWidth+'px'"
                :model="formLabelAlign" :label-suffix="formAttribute.labelSuffix" :size="formAttribute.formSize">
                <div class="widget-form">
                  <el-row :gutter="0">
                    <div class="widget-form-list">
                      <el-col :span="8">
                        <el-form-item class="widget-form-item active" label="名称">
                          <el-input v-model="formLabelAlign.name"></el-input>
                          <div class="widget-view-action">
                            <i class="el-icon-top" title="上移"></i>
                            <i class="el-icon-bottom" title="下移"></i>
                            <i class="el-icon-document-copy" title="复制"></i>
                            <i class="el-icon-delete" title="删除"></i>
                          </div>
                          <div class="widget-view-drag"><i class="el-icon-rank" title="拖拽"></i></div>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item class="widget-form-item" label="活动区域">
                          <el-input v-model="formLabelAlign.region"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="8">
                        <el-form-item class="widget-form-item" label="活动形式">
                          <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item class="widget-form-item" label="活动形式">
                          <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="12">
                        <el-form-item class="widget-form-item" label="活动形式">
                          <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="24">
                        <el-form-item class="widget-form-item" label="活动形式">
                          <el-input v-model="formLabelAlign.type"></el-input>
                        </el-form-item>
                      </el-col>
                    </div>
                  </el-row>
                </div>
              </el-form>
            </el-scrollbar>
          </div>
          <!-- /滚动条 -->
        </el-main>
        <el-footer class="form-box-footer" :height="codeViewHeight">
          <div class="form-box-footer-top">
            <el-button size="mini" type="text" class="p0" @click="codeView"><i class="img-code"></i> <span
                class="text-code">CodeView</span>
            </el-button>
          </div>
          <div class="form-box-footer-body" v-show="codeViewKey">
            <MyEditor :language="language" :codes="htmlCodes" @onMounted="htmlOnMounted"
              @onCodeChange="htmlOnCodeChange" />
          </div>
        </el-footer>
      </el-container>
    </el-main>
    <el-aside width="300px">
      <el-tabs type="border-card" v-model="activeName1" @tab-click="handleClick" class="h100 form-tabs form-right-tabs">
        <el-tab-pane label="字段属性" name="first" class="h100">
          <div :class="{'form-bg-two':false}" class="h100">
            <el-scrollbar class="h100">
              <div class="field-attribute">
                <el-form label-position="left" label-width="84px" :model="fieldAttribute" size="small" label-suffix="：">
                  <el-form-item label="字段类型">
                    <el-select v-model="fieldAttribute.fieldType" placeholder="请选择字段类型">
                      <el-option v-for="item in sizeOptions" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="字段栅格">
                    <el-input-number v-model="fieldAttribute.span" controls-position="right" :min="8" :step="1"
                      :max="24" class="w100"></el-input-number>
                  </el-form-item>
                  <el-form-item label="字段名称">
                    <el-input v-model="fieldAttribute.prop" placeholder="请输入字段名称"></el-input>
                  </el-form-item>
                  <el-form-item label="字段标题">
                    <el-input v-model="fieldAttribute.label" placeholder="请输入字段标题"></el-input>
                  </el-form-item>
                  <el-form-item label="占位内容">
                    <el-input v-model="fieldAttribute.placeholder" placeholder="请输入占位内容"></el-input>
                  </el-form-item>
                  <el-form-item label="默认内容">
                    <el-input v-model="fieldAttribute.valueDefault" placeholder="请输入默认内容"></el-input>
                  </el-form-item>
                  <el-form-item label="字段长度">
                    <el-input-number v-model="fieldAttribute.maxlength" controls-position="right" :min="0" :step="128"
                      :max="3000" class="w100"></el-input-number>
                  </el-form-item>
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="是否可见">
                        <el-switch v-model="fieldAttribute.display">
                        </el-switch>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="是否只读">
                        <el-switch v-model="fieldAttribute.readonly">
                        </el-switch>
                      </el-form-item>
                    </el-col>
                  </el-row>
                  <el-row>
                    <el-col :span="12">
                      <el-form-item label="显示计数">
                        <el-switch v-model="fieldAttribute.showWordLimit">
                        </el-switch>
                      </el-form-item>
                    </el-col>
                    <el-col :span="12">
                      <el-form-item label="字段校验">
                        <el-switch v-model="fieldAttribute.required">
                        </el-switch>
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
                    <el-input v-model="fieldAttribute.pattern" placeholder="请输入校验正则表达式"></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </el-scrollbar>
          </div>
        </el-tab-pane>
        <el-tab-pane label="表单属性" name="second" class="h100">
          <div class="h100">
            <el-scrollbar class="h100">
              <div class="form-attribute">
                <el-form label-position="left" label-width="84px" :model="formAttribute" size="small" label-suffix="：">
                  <el-form-item label="表单尺寸">
                    <el-select v-model="formAttribute.formSize" placeholder="请选择">
                      <el-option v-for="item in sizeOptions" :key="item.value" :label="item.label" :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="表单校验">
                    <el-switch v-model="formAttribute.formCheck">
                    </el-switch>
                  </el-form-item>
                  <el-form-item label="标签位置">
                    <el-select v-model="formAttribute.labelPosition" placeholder="请选择">
                      <el-option v-for="item in alignmentOptions" :key="item.value" :label="item.label"
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="标签宽度">
                    <el-input-number v-model="formAttribute.labelWidth" controls-position="right" :min="60" :max="400"
                      :step="20" class="w100"></el-input-number>
                  </el-form-item>
                  <el-form-item label="标签后缀">
                    <el-input v-model="formAttribute.labelSuffix" placeholder="请输入后缀"></el-input>
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
                        :value="item.value">
                      </el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item label="提交文字" v-if="formAttribute.submitShow">
                    <el-input v-model="formAttribute.submitText" placeholder="请输入文字"></el-input>
                  </el-form-item>
                  <el-form-item label="重置文字" v-if="formAttribute.resetShow">
                    <el-input v-model="formAttribute.resetText" placeholder="请输入文字"></el-input>
                  </el-form-item>
                </el-form>
              </div>
            </el-scrollbar>
          </div>
        </el-tab-pane>
      </el-tabs>
    </el-aside>
  </el-container>
</template>

<script>
  import MyEditor from "@/components/Monaco.vue";
  export default {
    components: {
      MyEditor
    },
    data() {
      return {
        activeName: "first",
        activeName1: "first",
        activeNames: ["1"],
        codeViewKey: false,
        language: "html",
        htmlCodes: "<div>This is html</div>",
        htmlEditor: null,
        formAttribute: {
          formSize: "medium", //表单尺寸
          formCheck: true, //表单校验
          labelPosition: "left", //标签位置
          labelWidth: "120", //标签宽度
          labelSuffix: "", //标签后缀
          rowSpacing: "", //行行间隔
          colSpacing: "", //列列间隔
          submitShow: true, //按钮显示
          resetShow: true, //按钮显示
          btnPosition: "left", //按钮位置
          submitText: "", //提交文字
          resetText: "" //重置文字
        },
        fieldAttribute: {
          span: 24,
          fieldType: "",
          prop: "",
          label: "",
          placeholder: "",
          valueDefault: "",
          maxlength: 128,
          required: false,
          requiredType: "",
          pattern: "",
          display: false,
          readonly: false,
          showWordLimit: false,
        },
        tableData: [{
            createTime: "2016-05-02",
            title: "领导信息",
            uptateTime: "2016-05-03"
          },
          {
            createTime: "2016-05-04",
            title: "动态信息",
            uptateTime: "2016-05-03"
          },
          {
            createTime: "2016-05-01",
            title: "机构概况",
            uptateTime: "2016-05-03"
          },
          {
            createTime: "2016-05-03",
            title: "图片新闻",
            uptateTime: "2016-05-03"
          },
          {
            createTime: "2016-05-03",
            title: "视频新闻",
            uptateTime: "2016-05-03"
          }
        ],
        formLabelAlign: {
          name: "",
          region: "",
          type: ""
        },

        data: [{
            label: "一级 1",
            children: [{
              label: "二级 1-1",
              children: [{
                label: "三级 1-1-1"
              }]
            }]
          },
          {
            label: "一级 2",
            children: [{
                label: "二级 2-1",
                children: [{
                  label: "三级 2-1-1"
                }]
              },
              {
                label: "二级 2-2",
                children: [{
                  label: "三级 2-2-1"
                }]
              }
            ]
          },
          {
            label: "一级 3",
            children: [{
                label: "二级 3-1",
                children: [{
                  label: "三级 3-1-1"
                }]
              },
              {
                label: "二级 3-2",
                children: [{
                  label: "三级 3-2-1"
                }]
              }
            ]
          }
        ],
        defaultProps: {
          children: "children",
          label: "label"
        },
        alignmentOptions: [{
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
        positionOptions: [{
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
        sizeOptions: [{
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
        regexOptions: [{
          value: "1",
          label: "普通文本"
        }, {
          value: "2",
          label: "中文字符串"
        }, {
          value: "3",
          label: "英文字符串"
        }, {
          value: "4",
          label: "数字或英文"
        }, {
          value: "5",
          label: "整数"
        }, {
          value: "6",
          label: "浮点数"
        }, {
          value: "7",
          label: "邮箱"
        }, {
          value: "8",
          label: "手机号码"
        }, {
          value: "9",
          label: "url地址"
        }, {
          value: "10",
          label: "8位英文数字密码"
        }, {
          value: "0",
          label: "其他"
        }]
      };
    },
    computed: {
      codeViewHeight() {
        return this.codeViewKey ? '70%' : '32px'
      }
    },
    methods: {
      cc() {
        console.log("aaa")
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(val) {
        console.log(val);
      },
      codeView() {
        this.codeViewKey = !this.codeViewKey;
      },
      htmlOnMounted(edit) {
        this.htmlEditor = edit;
      },
      htmlOnCodeChange(value, event) {}
    }
  };
</script>

<style scoped>
  .w100 {
    width: 100%;
  }

  .h100 {
    box-sizing: border-box;
    height: 100%;
  }

  .p0 {
    padding: 0;
  }

  .p-lf-10 {
    padding: 0 10px;
  }

  .form {
    box-sizing: border-box;
    border: 1px solid #dcdfe6;
    font-size: 14px;
  }

  .form .form-box {
    padding: 0;
    border-left: 1px solid #ccc;
    border-right: 1px solid #ccc;
  }

  .form .form-card-header,
  .form .form-box .form-box-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 10px;
    border-bottom: 1px solid #dcdfe6;
    -webkit-box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12),
      0 0 6px 0 rgba(0, 0, 0, 0.04);
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  }

  .form .form-box .form-box-footer {
    padding: 0;
    overflow: hidden;
  }

  .form .form-box .form-box-footer .form-box-footer-top {
    box-sizing: border-box;
    display: flex;
    align-items: center;
    padding: 0 10px;
    height: 32px;
    line-height: 32px;
    border-top: 1px solid #dcdfe6;
  }

  .form .form-box .form-box-footer .form-box-footer-body {
    box-sizing: border-box;
    height: calc(100% - 32px);
    border-top: 1px solid #dcdfe6;
  }

  .form .form-box .form-box-body {
    padding: 8px 6px 8px 6px;
    background-color: #fafafa;
  }

  .form .form-box .form-box-body100 {
    height: calc(100% - 40px);
  }

  .form .form-box .form-box-body30 {
    height: calc(30% - 40px);
  }

  .form .form-box .form-box-body .form-boxwrap {
    box-sizing: border-box;
    height: 100%;
    background-color: #fff;
    border: 1px dashed #999;
  }

  .form .form-tabs {
    border: 0;
    box-shadow: none;
  }

  .form .form-left-tabs {
    box-sizing: border-box;
    height: 70%;
    border-top: 1px solid #dcdfe6;
  }

  .form .form-left-card {
    box-sizing: border-box;
    height: 30%;
  }

  .form .field-attribute,
  .form .form-attribute {
    box-sizing: border-box;
    padding: 20px 10px;
  }

  .widget-form,
  .widget-form .widget-form-list {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .widget-form .widget-form-list .widget-form-item {
    padding-bottom: 18px;
    padding-left: 40px;
    position: relative;
    border: 1px dashed hsla(0, 0%, 66.7%, .7);
    background-color: rgba(236, 245, 255, .3);
    margin: 2px;
  }

  .widget-form .widget-form-list .widget-form-item.active {
    outline: 2px solid #409eff;
    border: 1px solid #409eff;
  }

  .widget-view-action {
    position: absolute;
    right: 0;
    bottom: 0;
    height: 22px;
    line-height: 24px;
    background: #409eff;
    z-index: 9;
  }

  .widget-form-item .widget-view-action i {
    font-size: 14px;
    color: #fff;
    margin: 0 5px;
    cursor: pointer;
  }

  .widget-form-item .widget-view-drag {
    position: absolute;
    left: -2px;
    top: -2px;
    bottom: -18px;
    height: 22px;
    line-height: 22px;
    background: #409eff;
    z-index: 9;
  }

  .widget-form-item .widget-view-drag i {
    font-size: 14px;
    color: #fff;
    margin: 0 5px;
    cursor: move;
  }

  .form .field-label {
    box-sizing: border-box;
    width: 100%;
    height: 38px;
    line-height: 36px;
    padding: 0 10px;
    text-align: center;
    background-color: #fafafa;
    border: 1px dashed hsla(0, 0%, 66.7%, .7);
    cursor: move;
  }

  .form .field-label .field-label-title {
    margin-left: 15px;
  }

  .form .field-label:hover {
    color: #409eff;
    border: 1px dashed #409eff;
  }
</style>

<style>
  .form .form-card {
    height: 100%;
    border-radius: 0;
    border: none;
  }

  .form .form-card .form-card-header {
    line-height: 40px;
  }

  .form .form-card .el-card__body {
    height: calc(100% - 40px);
  }

  .form .form-card .el-card__header {
    box-sizing: border-box;
    height: 40px;
    padding: 0;
    line-height: 40px;
    border-bottom: 1px solid #dcdfe6;
  }

  .form .el-scrollbar__view {
    min-height: 100%;
  }

  .form .el-tabs__content {
    height: calc(100% - 39px);
    padding: 0;
  }

  .form .el-collapse {
    border-top: 0;
    border-bottom: 0;
  }

  .form .el-collapse-item__header {
    box-sizing: border-box;
    height: 42px;
    line-height: 42px;
    padding-left: 10px;
  }

  .form .form-bg-one {
    background: #fff url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUMAAADXCAYAAACAszPmAAAAAXNSR0IArs4c6QAADXRJREFUeAHt3cuLZGcZB+BvLk2PM0ZxFMdJXEQCYRIialrUmPgXuM0qkI3GnVl4ScBtUEFFXOhCEBQ3oiDi36BGkWQ0gpgIZgK59EhIxhBn0nMfz+nqwq6e6upT019933vqPAVxuuty3vc8b/fPU3UufWB9ff1GciNAgMDABQ6363/y5MmBM8y3+mfPnmU2H5lnEwgt0P5OHwzdoeYIECBQSEAYFoJWhgCB2ALCMPZ8dEeAQCEBYVgIWhkCBGILCMPY89EdAQKFBIRhIWhlCBCILbB5aE3sFnVHgEAtgfaQk0Xddh7St6haO+vstj4zw/DPr26knz/3dnrr4vXN199/cjV9/cHjm19/9w/n0nP/vjSx3I9/aDU9+VA/Hv/e0+fSX89O9v/J21fTVz876n9ixeb4ZlEDnaOFqU/t+gMx9cXuJDAAgZlvk3/6l/8HYWtx9frynKxy/vIo4LfP+Nn1S+nbv3tz+12+JkBgIAIH2tPxdttqeOTXo03kb306pZUmNg/NjM5+ibW5/s7VyZ6feiala839v3h49hk57dbfbma2DCdNfddvgUX+PO/8HVpUrZ11pk2krT3zbfL4RW0ILlMQtut18EBK714Zr6F/CRAYusDMMPxE8xnhlWZTaeXg5aE7WX8CBJZcYGYYPrG1s2RRm69Lbmv1CBDokcDMMOzRemRp9f7bj6RrS7STKAuKhRAYiMDMMGwPn2lvj941DI2vPPC+YayotSRA4CaBmfuH2+MIdx5LeNMS3EGAAIElEJi5ZbgE6zfXKoy3hMcHjs/14q0nd9mNfyvL9RoCBBYrIAy3+doK3obhSwIDE5j5NnlgFlaXAIEBC8zcMmzPNR7dJs/hjer13Bsp/fZMSv+9Murw3mZ/yBfvHX39k3+k9MJ/Jju/p3n8sW2Pjx8dn3kz+1zrs2n24ynr49POpX7gw0fS45+x02c8N//mFyj5sU/JWtOkZobh+LOzvhxn+JsXU7qw7RS79tS6Zbmdv3TzudR/evViOv/7N9M3Pvf+ZVlN60GgmsDMc5PHXfUlDL/29Kjjpz6V0pFDy3UK4bRzqb/5bEpXmozc61zq8Rz9S4DAdIE9z03+TnOc4eHmU8VHPjJ9AVHvPdScd+xc6qjT0ReBmAIzd6D8rT3OcMc1/2Kuxqir9jPCu97TbBXOfPMfeQ30RoBALYGlio3xzpJamOoSINBfgZlh+MFjh9LrF66lJ/84WsGPNXuX+3Cl6758xrnfH5v2XOrLy7SXaL8gXk9gHwIzw/Cx+9+bfvzsW+ncxmhPZvTfuxfPXUntWSRDOZf6oZXmOKLmmowvvPB6uuOOOzZ/DF577bV04cKFiR+JY8eOeZzPIH4+XnnllbSxsTHx87+2tjbx/W7fzAzD+06sph99/sTU144Pu5n6YHNnjcfb4wPbs0iGEoa72bufwFAFVlZW0tWro+PrrlzZOuC4I0anQ2s6Lqv608YHS3//weqtFGngZ/9sjh9qbo+vvatIPUUI9EngpZdeSm0gdtky3PPQmj6t+BB7/fsb14a42taZQCeBo0ePpsuXu1+lf+bb5HHFoeyQGK+vfwkQ6L/AiRPTP+Lbbc06heFuL452/ymn6UYbiX4I9EZgqcLwS1sXXeiNvkYJEFiYQHtkRXs7depUpxpLFYad1niJnnTfBw6l5sxDNwIEpgjsPMRsylMm7lqqMGwv09XehrKFaC/yaN7+l0AOgaUKw53XK8wBZBkECAxDYOaFGoZB0N+1/MEzG6n9z40Agf0LLNWW4fHmwtznmotyP7F1LnV7Jesv3DNC6nKl651blvu9kvVHm8/0vrx1QPQPT2+knccFzvP4r56/lJ5/c9uVa5vVOtucN378iE8N9/9rYAnLKNCehjrPbanC8OHm7zv/8l8pvb11nGXtc6kvXrzYzCLP2SHr56834Td56e4TRw+kR+87Ms+8PZfAYATG5+t3XeFOp+MN5aDrrn+DofXY67mnT5/enMHdd9/ddRaeR4DAAgRuu+22PZfa/k77zHBPJk8gQKCPAu1xhuNjDbv0v1Rvk7ussOcQIDAMgXmPM7RlOIyfC2tJgMAeArYM9wC61Yfn3ZN1q3W8jgCBPALCMI/jTUuZd0/WTQtwBwECRQWEYVFuxQgQKCUw77szYbigyYz3YtlCXBCwxRLYQ2De3z1huAforT48756sW63jdQQI5BHoFIZ7HWCcpxVLIUCAQD6B8bsz1zPMZ2pJBAj0UGDed2eOM+zhkLVMgEB+gU5vk/OXXf4lzrsna/lFrCGB2ALCcEHzmXdP1oLasFgCBDoKCMOOUJ5GgEC/BOZ9d9YpDF3Ca/4fgjNnzqTV1dXNS30dPOij2fkFvYLA/gTmfXfWKQz319IwX339+vXU7s16+eWX05133rmJ0O7q37mHq/1/r/HQPM7Hz8eFicCY5/djfX39pt+vGzdupLW1tYll7vaNMNxNJtP9KysrmZZkMQQIzBJog6/9b/vt8OHuEedK19vkuh5c3uVK19sW60sCBIILuNJ18AFpjwCBcgI+2S9nrRIBAoEFhGHg4WiNAIFyAsKwnLVKBAgEFhCGgYejNQIEygkIw3LWKhEgEFhAGAYejtYIECgnIAzLWatEgEBgAWEYeDhaI0CgnIAwLGetEgECgQWEYeDhaI0AgXICnc5i7nrObrm2VSJAgEBeAVuGeT0tjQCBngoIw54OTtsECOQVEIZ5PS2NAIGeCgjDng5O2wQI5BXotAPF30DJi25pBAjEE7BlGG8mOiJAoIKAMKyAriQBAvEEhGG8meiIAIEKAsKwArqSBAjEExCG8WaiIwIEKggIwwroShIgEE9AGMabiY4IEKggIAwroCtJgEA8AWEYbyY6IkCggoAwrICuJAEC8QSEYbyZ6IgAgQoCwrACupIECMQTEIbxZqIjAgQqCAjDCuhKEiAQT0AYxpuJjggQqCAgDCugK0mAQDyBThd39dfx4g1ORwQI5BWwZZjX09IIEOipgDDs6eC0TYBAXgFhmNfT0ggQ6KmAMOzp4LRNgEBegU47UPx1vLzolkaAQDwBW4bxZqIjAgQqCAjDCuhKEiAQT0AYxpuJjggQqCAgDCugK0mAQDwBYRhvJjoiQKCCgDCsgK4kAQLxBIRhvJnoiACBCgLCsAK6kgQIxBMQhvFmoiMCBCoICMMK6EoSIBBPQBjGm4mOCBCoICAMK6ArSYBAPAFhGG8mOiJAoIKAMKyAriQBAvEEhGG8meiIAIEKAsKwArqSBAjEE+h0cVd/HS/e4HREgEBeAVuGeT0tjQCBngoIw54OTtsECOQVEIZ5PS2NAIGeCgjDng5O2wQI5BXotAPFX8fLi25pBAjEE7BlGG8mOiJAoIKAMKyAriQBAvEEhGG8meiIAIEKAsKwArqSBAjEExCG8WaiIwIEKggIwwroShIgEE9AGMabiY4IEKggIAwroCtJgEA8AWEYbyY6IkCggoAwrICuJAEC8QSEYbyZ6IgAgQoCwrACupIECMQTEIbxZqIjAgQqCAjDCuhKEiAQT0AYxpuJjggQqCDQ6XqG/iBUhckoSYBAUQFbhkW5FSNAIKqAMIw6GX0RIFBUQBgW5VaMAIGoAsIw6mT0RYBAUQFhWJRbMQIEogp02pvsr+NFHZ++CBDIJWDLMJek5RAg0GsBYdjr8WmeAIFcAsIwl6TlECDQawFh2OvxaZ4AgVwCwjCXpOUQINBrAWHY6/FpngCBXALCMJek5RAg0GsBYdjr8WmeAIFcAsIwl6TlECDQawFh2OvxaZ4AgVwCwjCXpOUQINBrAWHY6/FpngCBXALCMJek5RAg0GsBYdjr8WmeAIFcAp0u4eUPQuXithwCBKIK2DKMOhl9ESBQVEAYFuVWjACBqALCMOpk9EWAQFEBYViUWzECBKIKCMOok9EXAQJFBYRhUW7FCBCIKiAMo05GXwQIFBUQhkW5FSNAIKqAMIw6GX0RIFBUQBgW5VaMAIGoAsIw6mT0RYBAUQFhWJRbMQIEogoIw6iT0RcBAkUFhGFRbsUIEIgqIAyjTkZfBAgUFRCGRbkVI0AgqoAwjDoZfREgUFRAGBblVowAgagCwjDqZPRFgEBRAWFYlFsxAgSiCgjDqJPRFwECRQWEYVFuxQgQiCogDKNORl8ECBQVEIZFuRUjQCCqgDCMOhl9ESBQVEAYFuVWjACBqALCMOpk9EWAQFEBYViUWzECBKIKCMOok9EXAQJFBYRhUW7FCBCIKiAMo05GXwQIFBUQhkW5FSNAIKqAMIw6GX0RIFBUQBgW5VaMAIGoAsIw6mT0RYBAUQFhWJRbMQIEogoIw6iT0RcBAkUFhGFRbsUIEIgqIAyjTkZfBAgUFRCGRbkVI0AgqoAwjDoZfREgUFRAGBblVowAgagCwjDqZPRFgEBRAWFYlFsxAgSiCgjDqJPRFwECRQWEYVFuxQgQiCogDKNORl8ECBQVEIZFuRUjQCCqgDCMOhl9ESBQVEAYFuVWjACBqALCMOpk9EWAQFEBYViUWzECBKIKCMOok9EXAQJFBYRhUW7FCBCIKiAMo05GXwQIFBUQhkW5FSNAIKqAMIw6GX0RIFBU4H8RUTV123y9kQAAAABJRU5ErkJggg==") 50% center no-repeat;
  }

  .form .form-bg-two {
    background: #fff url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTg0IiBoZWlnaHQ9IjE1MiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMjQgMzEuNjcpIj4KICAgICAgPGVsbGlwc2UgZmlsbC1vcGFjaXR5PSIuOCIgZmlsbD0iI0Y1RjVGNyIgY3g9IjY3Ljc5NyIgY3k9IjEwNi44OSIgcng9IjY3Ljc5NyIgcnk9IjEyLjY2OCIvPgogICAgICA8cGF0aCBkPSJNMTIyLjAzNCA2OS42NzRMOTguMTA5IDQwLjIyOWMtMS4xNDgtMS4zODYtMi44MjYtMi4yMjUtNC41OTMtMi4yMjVoLTUxLjQ0Yy0xLjc2NiAwLTMuNDQ0LjgzOS00LjU5MiAyLjIyNUwxMy41NiA2OS42NzR2MTUuMzgzaDEwOC40NzVWNjkuNjc0eiIgZmlsbD0iI0FFQjhDMiIvPgogICAgICA8cGF0aCBkPSJNMTAxLjUzNyA4Ni4yMTRMODAuNjMgNjEuMTAyYy0xLjAwMS0xLjIwNy0yLjUwNy0xLjg2Ny00LjA0OC0xLjg2N0gzMS43MjRjLTEuNTQgMC0zLjA0Ny42Ni00LjA0OCAxLjg2N0w2Ljc2OSA4Ni4yMTR2MTMuNzkyaDk0Ljc2OFY4Ni4yMTR6IiBmaWxsPSJ1cmwoI2xpbmVhckdyYWRpZW50LTEpIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxMy41NikiLz4KICAgICAgPHBhdGggZD0iTTMzLjgzIDBoNjcuOTMzYTQgNCAwIDAgMSA0IDR2OTMuMzQ0YTQgNCAwIDAgMS00IDRIMzMuODNhNCA0IDAgMCAxLTQtNFY0YTQgNCAwIDAgMSA0LTR6IiBmaWxsPSIjRjVGNUY3Ii8+CiAgICAgIDxwYXRoIGQ9Ik00Mi42NzggOS45NTNoNTAuMjM3YTIgMiAwIDAgMSAyIDJWMzYuOTFhMiAyIDAgMCAxLTIgMkg0Mi42NzhhMiAyIDAgMCAxLTItMlYxMS45NTNhMiAyIDAgMCAxIDItMnpNNDIuOTQgNDkuNzY3aDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI0SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjR6TTQyLjk0IDYxLjUzaDQ5LjcxM2EyLjI2MiAyLjI2MiAwIDEgMSAwIDQuNTI1SDQyLjk0YTIuMjYyIDIuMjYyIDAgMCAxIDAtNC41MjV6TTEyMS44MTMgMTA1LjAzMmMtLjc3NSAzLjA3MS0zLjQ5NyA1LjM2LTYuNzM1IDUuMzZIMjAuNTE1Yy0zLjIzOCAwLTUuOTYtMi4yOS02LjczNC01LjM2YTcuMzA5IDcuMzA5IDAgMCAxLS4yMjItMS43OVY2OS42NzVoMjYuMzE4YzIuOTA3IDAgNS4yNSAyLjQ0OCA1LjI1IDUuNDJ2LjA0YzAgMi45NzEgMi4zNyA1LjM3IDUuMjc3IDUuMzdoMzQuNzg1YzIuOTA3IDAgNS4yNzctMi40MjEgNS4yNzctNS4zOTNWNzUuMWMwLTIuOTcyIDIuMzQzLTUuNDI2IDUuMjUtNS40MjZoMjYuMzE4djMzLjU2OWMwIC42MTctLjA3NyAxLjIxNi0uMjIxIDEuNzg5eiIgZmlsbD0iI0RDRTBFNiIvPgogICAgPC9nPgogICAgPHBhdGggZD0iTTE0OS4xMjEgMzMuMjkybC02LjgzIDIuNjVhMSAxIDAgMCAxLTEuMzE3LTEuMjNsMS45MzctNi4yMDdjLTIuNTg5LTIuOTQ0LTQuMTA5LTYuNTM0LTQuMTA5LTEwLjQwOEMxMzguODAyIDguMTAyIDE0OC45MiAwIDE2MS40MDIgMCAxNzMuODgxIDAgMTg0IDguMTAyIDE4NCAxOC4wOTdjMCA5Ljk5NS0xMC4xMTggMTguMDk3LTIyLjU5OSAxOC4wOTctNC41MjggMC04Ljc0NC0xLjA2Ni0xMi4yOC0yLjkwMnoiIGZpbGw9IiNEQ0UwRTYiLz4KICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE0OS42NSAxNS4zODMpIiBmaWxsPSIjRkZGIj4KICAgICAgPGVsbGlwc2UgY3g9IjIwLjY1NCIgY3k9IjMuMTY3IiByeD0iMi44NDkiIHJ5PSIyLjgxNSIvPgogICAgICA8cGF0aCBkPSJNNS42OTggNS42M0gwTDIuODk4LjcwNHpNOS4yNTkuNzA0aDQuOTg1VjUuNjNIOS4yNTl6Ii8+CiAgICA8L2c+CiAgPC9nPgo8L3N2Zz4K") no-repeat center center;
  }

  .form .img-code {
    display: inline-block;
    height: 22px;
    width: 22px;
    vertical-align: middle;
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAADtElEQVRYR+1WTYgcRRR+r3rWZaKsYhT2oCSs0ehqcLpf9chGD+p6EJSgkI0hB4noQQVBooeAHhQVEYWgoChCMAfRMIqKB0X8WUVct6de9aJRIcb1BxQ1BvxNsrLVT2roXsbJTO+uGYxI+jDUVH3ve1+9v26EY/zgMfYPxwX8PyIwNjZWdc6tSJLkwHJrqi8R0FpfkGXZahE5kKbp1HJE9EOA0lqPZ1k2KCLfp2lq/lUBYRiejogXeaeI+BEzf9M3AUT0iIj8bq29pxcpEZ0rImv8+eDg4FtTU1OHCmwURd7uD2vtw73se6aAiHYBwPXeUES0tZa7kcRxvN45d2oQBL81m813C4zW+lIReSf/v4uZt3az7yqAiB4DgNtyg8+cc+tnZmZ+7iTw1T83Nzeei5xN0/TTAjM6OnpStVpNAOC8fO9RZr69k+MIAUR0HwDcnQO/EpGNJbc/0zl3YS5gOk3T/e0OiCgCgBcBYHWOubcznX8TQER3AkCRrx8AYCMzv98rf3Ec15xzZyCijIyMvN5oNFwnVmt9sYi8AADDeaFuM8bsKHALAojoJgB4Oj/4BQA2MfMbZRUdhuE4IlaVUj8aY3y4uz5xHF+RZZkXcXIu4kZjzM7W2v9EUXQ1Ir6aW/+JiJuMMa+UOa/VaqcopS7xmEql8kmSJF+W4bXWG0SkAQAn5Dh/wUZLABE9DgC35up2G2M2l5H5s1qtdrZSaq1fDwwMvDc9Pf3rYjZa6+dF5Loc9xwzb2kJ8KNURF4CgFY/A8AzzHzDIuEfQ8SVAHDQWvv2EpzvFJGCcx8iXmuM2dNeAz6cXsRpOdmTzHxLN+KJiYlgdnb2ShFBRPyamT8uE9AeYQDYr5S6ptlsfrBQA4UxEV0FAC/7tPo9Edlhrd3WSR7H8bBzTucYm6bpd70E+GkKAHfk5/OIuMEY81qB7zYHtgDAswVARB6w1hZzobVNROtEZJVfDw0NvTk5OXm4m4Aoiu5HxLvauDZba3e3Y3tNQh/6JwpgEARrkyTZ2xapy0TkxLLXLxGdBQD7Fm6KeLMx5qlOoWXvgu0A8KA3yLLs/GLMEtEKEbnc71cqlb3twtrJoyhag4if53vbmfmhblEq/R6o1+vnzM/PZ9bahZuEYbgKEde1CgjxQ2b+qVf+wzAcVUrNMfMXvTDL/iAJw1Aj4nAQBIebzaZvv2yxFiw7/ycCWv2vlPrWGJMejfMj2nCpZPV6faVz7hAzH1yqTd9ScLQOl9wF/XZ0PAL/2Qj8BZpXfzCFNWdlAAAAAElFTkSuQmCC");
    background-repeat: no-repeat;
    background-position: left center;
    background-size: contain;
  }

  .form .text-code {
    margin-left: 8px;
    color: #666;
    vertical-align: middle;
  }

  .form .widget-form-list .el-form-item__content {
    position: unset;
  }

  .form .el-collapse-item__content {
    padding-bottom: 10px;
  }

  .form .field-box .el-col {
    margin-top: 8px;
  }

  .form .field-box .el-col:nth-child(1),
  .form .field-box .el-col:nth-child(2) {
    margin-top: 0;
  }
</style>