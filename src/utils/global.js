/**
 * @description: 给vue添加全局方法
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-06-02 10:57:10
 * @LastAuthor: lizlong
 * @lastTime: 2019-07-05 09:19:46
 */

import service from "@/utils/request";
import api from "@/api/api";

export default {
    install(Vue) {
        Vue.prototype.$axios = service; //axios全局方法
        Vue.prototype.$api = api; //api地址全局方法
    }
}