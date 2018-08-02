import http from './lib/plugins/ajax/index.js'
import device from './lib/plugins/device/index.js'
import cookie from './lib/plugins/utils/cookie.js'
import localStorage from './lib/plugins/utils/localStorage.js'
import sessionStorage from './lib/plugins/utils/sessionStorage.js'
import upload from './lib/plugins/utils/upload.js'
import compute from './lib/plugins/utils/compute.js'
import verify from './lib/plugins/verify/index.js'


let LxbBase = {
	install: function(Vue) {
        // axios 请求封装
        Vue.prototype.$ajax = http;
        Vue.ajax = http;
        // device设备
        Vue.prototype.$device = device;
        Vue.device = device;
        // cookie
        Vue.prototype.$cookie = cookie;
        Vue.cookie = cookie;
        // localStorage
        Vue.prototype.$localStorage = localStorage;
        Vue.localStorage = localStorage;
        // sessionStorage
        Vue.prototype.$sessionStorage = sessionStorage;
        Vue.sessionStorage = sessionStorage;
        // upload
        Vue.prototype.$upload = upload;
        Vue.upload = upload;
        // compute
        Vue.prototype.$compute = compute;
        Vue.compute = compute;
        // verify
        Vue.prototype.$verify = verify;
        Vue.verify = verify;
	}
};

module.exports = LxbBase;
