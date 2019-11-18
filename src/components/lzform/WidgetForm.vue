<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-11-16 17:22:58
 * @LastAuthor: lizlong
 * @lastTime: 2019-11-18 12:42:56
 -->
<template>
  <draggable
    element="div"
    handle=".drag-btn"
    group="people"
    ghost-class="ghost"
    :sort="true"
    @change="change"
    @start="start"
    @end="end"
    @move="move"
    :list="myArray"
    class="widget-form-list"
  >
    <transition-group
      appear
      tag="div"
      id="widgetFormBox"
      class="h100 mh1080 clearfix"
      :style="{ 'min-height': n_formboxwrapHight }"
    >
      <el-col
        v-for="(item, index) in myArray"
        :span="item.span"
        :key="item.id"
        :data-id="item.id"
      >
        <el-form-item
          class="widget-form-item"
          :class="{ active: index == o_activeInf.index }"
          :label="item.label"
          :required="item.check"
          :rules="item.checkType | rulesFilter"
          v-on:click.native="itemClick(index)"
        >
          <keep-alive>
            <component :is="item.component" :data="item"></component>
          </keep-alive>
          <div
            class="widget-view-drag drag-btn"
            v-if="index == o_activeInf.index"
          >
            <i class="el-icon-rank" title="拖拽"></i>
          </div>
          <div class="widget-view-action" v-if="index == o_activeInf.index">
            <i
              class="el-icon-top"
              title="上移"
              @click.capture.stop="moveUp(index)"
            ></i>
            <i
              class="el-icon-bottom"
              title="下移"
              @click.capture.stop="moveDown(index)"
            ></i>
            <i
              class="el-icon-document-copy"
              title="复制"
              @click.capture.stop="copy(index)"
            ></i>
            <i
              class="el-icon-delete"
              title="删除"
              @click.capture.stop="remove(index)"
            ></i>
          </div>
        </el-form-item>
      </el-col>
    </transition-group>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import { deepClone } from "@/components/lzform/util.js";
import dCascader from "@/components/lzform/field/dCascader.vue";
import dCheckbox from "@/components/lzform/field/dCheckbox.vue";
import dColorPicker from "@/components/lzform/field/dColorPicker.vue";
import dDate from "@/components/lzform/field/dDate.vue";
import dDateTime from "@/components/lzform/field/dDateTime.vue";
import dInput from "@/components/lzform/field/dInput.vue";
import dMap from "@/components/lzform/field/dMap.vue";
import dNumber from "@/components/lzform/field/dNumber.vue";
import dRadio from "@/components/lzform/field/dRadio.vue";
import dRate from "@/components/lzform/field/dRate.vue";
import dRichText from "@/components/lzform/field/dRichText.vue";
import dSelect from "@/components/lzform/field/dSelect.vue";
import dSlider from "@/components/lzform/field/dSlider.vue";
import dSwitch from "@/components/lzform/field/dSwitch.vue";
import dTime from "@/components/lzform/field/dTime.vue";
import dUpload from "@/components/lzform/field/dUpload.vue";
export default {
  components: {
    draggable, // 拖拽
    "d-cascader": dCascader,
    "d-checkbox": dCheckbox,
    "d-colorPicker": dColorPicker,
    "d-date": dDate,
    "d-dateTime": dDateTime,
    "d-input": dInput,
    "d-map": dMap,
    "d-number": dNumber,
    "d-radio": dRadio,
    "d-rate": dRate,
    "d-richText": dRichText,
    "d-select": dSelect,
    "d-slider": dSlider,
    "d-switch": dSwitch,
    "d-time": dTime,
    "d-upload": dUpload
  },
  props: {
    formboxwrapHight: {
      type: String,
      default: ""
    },
    components: {
      type: Array,
      default() {
        return [];
      }
    },
    myArray: {
      type: Array,
      default() {
        return [];
      }
    },
    activeInf: {
      type: Object,
      default() {
        return {
          prop: null,
          index: null
        };
      }
    }
  },
  data() {
    return {
      n_formboxwrapHight: this.formboxwrapHight + "px",
      o_activeInf: this.activeInf,
      formLabelAlign: {
        name: ""
      }
    };
  },
  watch: {
    formboxwrapHight(val) {
      this.n_formboxwrapHight = val + "px";
    },
    activeInf: {
      handler(val) {
        this.o_activeInf = val;
      },
      immediate: true
    }
  },
  filters: {
    rulesFilter: function(value) {
      if (value == "1") {
        return [];
      }
      return [
        { required: true, message: "请输入邮箱地址", trigger: "blur" },
        {
          type: "email",
          message: "请输入正确的邮箱地址",
          trigger: ["blur", "change"]
        }
      ];
    }
  },
  mounted() {},
  methods: {
    //start,end,add,update,sort,remove 得到的都差不多
    change(evt) {
      console.log(evt);
      let index = null;
      if (evt.added != undefined && evt.added.newIndex != undefined) {
        index = evt.added.newIndex;
      }
      if (evt.moved != undefined && evt.moved.newIndex != undefined) {
        index = evt.moved.newIndex;
      }
      // this.o_activeInf.prop = index != null ? this.myArray[index].prop : null;
      this.o_activeInf.index = index != null ? index : null;
    },
    start(evt) {
      console.log(evt);
    },
    end(evt) {
      console.log(evt);
    },
    move(evt, originalEvent) {
      console.log(evt);
    },
    // 元素点击选中
    itemClick(index) {
      console.log(index);
      // this.o_activeInf.prop = this.myArray[index].prop;
      this.o_activeInf.index = index;
    },
    // 复制
    copy(index) {
      let obj = deepClone(this.myArray[index]);
      obj.prop =
        "attr_" +
        Math.random()
          .toString()
          .slice(-10);
      obj.id = Math.random()
        .toString()
        .slice(-10);
      this.myArray.splice(index + 1, 0, obj);
      // this.o_activeInf.prop = this.myArray[index + 1].prop;
      this.o_activeInf.index = index + 1;
    },
    // 移除
    remove(index) {
      this.myArray.splice(index, 1);
      // this.o_activeInf.prop =
      //   this.myArray.length > 0
      //     ? this.myArray[index == 0 ? 0 : index - 1].prop
      //     : null;
      this.o_activeInf.index =
        this.myArray.length > 0 ? (index == 0 ? 0 : index - 1) : null;
    },
    // 上移
    moveUp(index) {
      if (index != 0) {
        this.myArray[index] = this.myArray.splice(
          index - 1,
          1,
          this.myArray[index]
        )[0];
        this.o_activeInf.index = index - 1;
        // this.o_activeInf.prop = this.myArray[index - 1].prop;
      } else {
        this.myArray.push(this.myArray.shift());
        this.o_activeInf.index = this.myArray.length - 1;
        // this.o_activeInf.prop = this.myArray[this.myArray.length - 1].prop;
      }
    },
    // 下移
    moveDown(index) {
      if (index != this.myArray.length - 1) {
        this.myArray[index] = this.myArray.splice(
          index + 1,
          1,
          this.myArray[index]
        )[0];
        this.o_activeInf.index = index + 1;
        // this.o_activeInf.prop = this.myArray[index + 1].prop;
      } else {
        this.myArray.unshift(this.myArray.splice(index, 1)[0]);
        this.o_activeInf.index = 0;
        // this.o_activeInf.prop = this.myArray[0].prop;
      }
    }
  }
};
</script>
