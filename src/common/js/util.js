const API = {
	// host: 'https://www.easy-mock.com/mock/5be0242b4148294f7206dfd0/mplisp'
	host: 'http://127.0.0.1:8996'
}

const ajax = ({
    url = '',
	type = 'GET',
	para = {},
	isUseOrigin = true
} = {}) => {
	return new Promise((resolve, reject) => {
		// 判断如果不适用其他源 则使用easymock源
		let currentUrl = url
		if (isUseOrigin) {
			currentUrl = `${API.host}/${url}`;
		}
		wx.request({
            url: currentUrl,
			header: {
				'content-type': 'application/json',
			},
			type: type,
			data: para,
			success(res) {
				let content = res.data.content;
				if (!isUseOrigin) {
					content = res.data.data;
				}
				resolve(content);
			},
			fail(err) {
				reject(err);
			}
		})
	});
}

const transTime = (timestamp) => {
	//时间戳为10位需*1000，时间戳为13位的话不需乘1000
	const date = new Date(timestamp * 1000);
	const Y = date.getFullYear() + '-';
	const M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
	const D = date.getDate() + ' ';
	const h = date.getHours() + ':';
	const m = date.getMinutes() + ':';
	const s = date.getSeconds();
	return Y + M + D + h + m + s;
}

export default {
	ajax,
	transTime
};
