<!--
 * @description: Description
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-08-27 18:01:13
 * @LastAuthor: lizlong
 * @lastTime: 2019-08-27 18:27:28
 -->
<template>
    <el-menu :default-active="activeIndex2" class="el-menu-demo" mode="horizontal" @select="handleSelect"
        background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" :router="true">
        <el-menu-item index="1">我的工作台</el-menu-item>
        <el-submenu index="2">
            <template slot="title">Demo</template>
            <el-menu-item index="/demo/neditor">富文本</el-menu-item>
            <el-menu-item index="/demo/monaco">代码编辑器</el-menu-item>
            <el-menu-item index="/demo/imgcropper">图片裁剪</el-menu-item>
        </el-submenu>
    </el-menu>
</template>

<script>
    export default {
        data() {
            return {
                activeIndex: "1",
                activeIndex2: "1"
            };
        },
        methods: {
            handleSelect(key, keyPath) {
                console.log(key, keyPath);
            }
        }
    };
</script>