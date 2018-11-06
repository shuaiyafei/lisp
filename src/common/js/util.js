const API = {
    host: 'https://www.easy-mock.com/mock/5be0242b4148294f7206dfd0/mplisp'
}

export default function ajax (url) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: `${API.host}/${url}`,
            header: {
                'content-type': 'application/json',
            },
            success(res) {
                resolve(res.data.content);
            },
            fail(err) {
                reject(err);
            }
        })
    });
}