import http from './lib/plugins/ajax/index.js'
import device from './lib/plugins/device/index.js'
import cookie from './lib/plugins/utils/cookie.js'
import localStorage from './lib/plugins/utils/localStorage.js'
import sessionStorage from './lib/plugins/utils/sessionStorage.js'


let LxbBase = {
	install: function(Vue) {
        // axios 请求封装
        Vue.prototype.$ajax = http;
        // device设备
        Vue.prototype.$device = device;
        // cookie
        Vue.prototype.$cookie = cookie;
        // localStorage
        Vue.prototype.$localStorage = localStorage;
        // sessionStorage
        Vue.prototype.$sessionStorage = sessionStorage;
	}
};

module.exports = LxbBase;
