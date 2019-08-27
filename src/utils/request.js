/**
 * @description: 请求过滤器
 * @author: lizlong<94648929@qq.com>
 * @since: 2019-05-27 08:41:05
 * @LastAuthor: lizlong
 * @lastTime: 2019-07-09 14:52:47
 */

import axios from 'axios'
import router from '@/router.js'
import {
	Message
} from 'element-ui'

function showMessage(value) {
	return Message({
		showClose: true,
		message: value,
		type: 'error',
		duration: 3500
	});
}

// create an axios instance
const service = axios.create({
	withCredentials: true,
	baseURL: process.env.VUE_APP_SERVER_API, // api 的 base_url
	timeout: 5000 // request timeout
})

service.interceptors.request.use(
	config => {
		// Do something before request is sent
		let sessionKey = localStorage.getItem('sessionKey'); //sessionkey
		if (sessionKey) {
			// 让每个请求携带token-- ['token']为自定义key 请根据实际情况自行修改
			config.headers['token'] = sessionKey;
		}
		return config
	},
	error => {
		// Do something with request error
		Promise.reject(error)
	}
)

// response interceptor（响应拦截器）
service.interceptors.response.use(
	// response => response,
	/**
	 * 下面的注释为通过在response里，自定义code来标示请求状态
	 * 当code返回如下情况则说明权限有问题，登出并返回到登录页
	 * 如想通过 xmlhttprequest 来状态码标识 逻辑可写在下面error中
	 * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
	 */
	response => {
		const res = response.data;
		switch (res.code) {
			case 200:
				break;
			case 302: //用户登陆超时
				showMessage(res.code + ":" + "用户登陆超时");
				localStorage.setItem('sessionKey', '');
				localStorage.setItem('userName', '');
				router.push('/login');
				break;
			default:
				break;
		}
		return response.data;
	},
	error => {
		showMessage('服务器响应失败');
		return Promise.reject(error)
	}
)

export default service