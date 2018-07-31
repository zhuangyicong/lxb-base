let sessionStorage = {
	set: function(_key, _value) {
		_key = "vue_" + _key;
		sessionStorage.setItem(_key, _value);
	},

	get: function (_key) {
        _key = 'vue_' + _key;
        return sessionStorage.getItem(_key);
    }
};

module.exports = sessionStorage;
