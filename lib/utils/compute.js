let compute = {
	/**
	 * 加
	 */
	add: function(a, b) {
		var c, d, e;
		try {
			c = a.toString().split(".")[1].length;
		} catch (f) {
			c = 0;
		}
		try {
			d = b.toString().split(".")[1].length;
		} catch (f) {
			d = 0;
		}
		return (
			(e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) + this.mul(b, e)) / e
		);
	},
	/**
	 * 减
	 */
	sub: function(a, b) {
		var c, d, e;
		try {
			c = a.toString().split(".")[1].length;
		} catch (f) {
			c = 0;
		}
		try {
			d = b.toString().split(".")[1].length;
		} catch (f) {
			d = 0;
		}
		return (
			(e = Math.pow(10, Math.max(c, d))), (this.mul(a, e) - this.mul(b, e)) / e
		);
	},
	/**
	 * 乘
	 */
	mul: function mul(a, b) {
		var c = 0,
			d = a.toString(),
			e = b.toString();
		try {
			c += d.split(".")[1].length;
		} catch (f) {}
		try {
			c += e.split(".")[1].length;
		} catch (f) {}
		return (
			(Number(d.replace(".", "")) * Number(e.replace(".", ""))) /
			Math.pow(10, c)
		);
	},
	/**
	 * 除
	 */
	div: function(a, b) {
		var c,
			d,
			e = 0,
			f = 0;
		try {
			e = a.toString().split(".")[1].length;
		} catch (g) {}
		try {
			f = b.toString().split(".")[1].length;
		} catch (g) {}
		return (
			(c = Number(a.toString().replace(".", ""))),
			(d = Number(b.toString().replace(".", ""))),
			mul(c / d, Math.pow(10, f - e))
		);
	}
};

module.exports = compute;
