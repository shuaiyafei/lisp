const router = require('./src/router');

const assign = (url, query, router) => {
    console.log(`current path ${url.pathname}`);
    let data = {
        msg: '地址错误',
        errorCode: -1,
        data: ''
    };
    router.forEach(item => {
        const condition = url.pathname == item.path;
        if (condition) {
            data = item.data;
        }  
        // newslist
        if (condition && query.id) {
            // const id = query.id;
            // 80条数据随机
            data.content = data.content.concat(data.content.splice(0, (Math.random() * 80).toFixed()));
        }
        // moviedetail
        if (condition && query.classifyId) {
            let result = [];
            data.content.forEach(item => {
                if (query.classifyId == item.classifyId) {
                    result.unshift(item);
                }
                result.push(item);
            });
            data.content = result;
        }
    });
    
    return data;
}

const route = (url, query) => assign(url, query, router);

module.exports = route;