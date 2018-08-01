let vueVerify = {
	/**
	 * 邮箱
	 * @param {*} s
	 */
	isEmail: function(s) {
		return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
			s
		);
	},
	/**
	 * 手机号码
	 * @param {*} s
	 */
	isMobile: function(s) {
		return /^1[0-9]{10}$/.test(s);
	},
	/**
	 * 电话号码
	 * @param {*} s
	 */
	isPhone: function(s) {
		return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
	},
	/**
	 * URL地址
	 * @param {*} s
	 */
	isURL: function(s) {
		return /^http[s]?:\/\/.*/.test(s);
	},
	/**
	 * 身份证
	 * @param {*} s
	 */
	isIDcard: function(s) {
		return /(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(s);
	}
};

module.exports = vueVerify;
