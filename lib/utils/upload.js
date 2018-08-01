let upload = {
	up: function(url, params) {
		if (window.fetch) {
			return new Promise(function(resolve, reject) {
				let formData = new FormData();
				formData.append("file", params.filePath);
				formData.append("name", "file");

				fetch(url, {
					method: "POST",
					headers: {
						token: params.token
					},
					body: formData
				})
					.then(response => response.json())
					.then(responseData => {
						console.log("upload_success", responseData);
						resolve(responseData);
					})
					.catch(err => {
						console.log("err", err);
						reject(err);
					});
			});
		} else {
			return new Promise((resolve, reject) => {
				let formData = new FormData();
				formData.append("file", params.filePath);
				formData.append("name", "file");

				if (window.XMLHttpRequest) {
					requestObj = new XMLHttpRequest();
				} else {
					requestObj = new ActiveXObject();
				}

				requestObj.open("POST", url, true);
				requestObj.setRequestHeader("token", params.token);
				requestObj.send(formData);

				requestObj.onreadystatechange = () => {
					if (requestObj.readyState == 4) {
						if (requestObj.status == 200) {
							let obj = requestObj.response;
							if (typeof obj !== "object") {
								obj = JSON.parse(obj);
							}
							resolve(obj);
						} else {
							reject(requestObj);
						}
					}
				};
			});
		}
	},

	upBase64: function(url, params) {
		if (window.fetch) {
			return new Promise(function(resolve, reject) {
				let formData = new FormData();
				formData.append("base64File", params.base64File);
				formData.append("fileName", params.fileName);

				fetch(baseUrl + url, {
					method: "POST",
					headers: {
						token: params.token
					},
					body: formData
				})
					.then(response => response.json())
					.then(responseData => {
						resolve(responseData);
					})
					.catch(err => {
						reject(err);
					});
			});
		} else {
			return new Promise((resolve, reject) => {
				let requestObj;
				let formData = new FormData();
				formData.append("base64File", params.base64File);
				formData.append("fileName", params.fileName);

				if (window.XMLHttpRequest) {
					requestObj = new XMLHttpRequest();
				} else {
					requestObj = new ActiveXObject();
				}

				requestObj.open("POST", baseUrl + url, true);
				requestObj.setRequestHeader("token", params.token);
				requestObj.send(formData);

				requestObj.onreadystatechange = () => {
					if (requestObj.readyState == 4) {
						if (requestObj.status == 200) {
							let obj = requestObj.response;
							if (typeof obj !== "object") {
								obj = JSON.parse(obj);
							}
							resolve(obj);
						} else {
							reject(requestObj);
						}
					}
				};
			});
		}
	}
};

module.exports = upload;
