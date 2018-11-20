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
        if (condition && query.id) {
            // const id = query.id;
            data.content = data.content.concat(data.content.splice(0, (Math.random() * 80).toFixed()));
        }
    });
    
    return data;
}

const route = (url, query) => assign(url, query, router);

module.exports = route;