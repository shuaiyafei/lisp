const homepageInfo = require('../demo/homepageInfo');
const rankListInfo = require('../demo/rankListInfo');
const discountInfo = require('../demo/discountInfo');
const recommendInfo = require('../demo/recommendInfo');
const newsTabInfo = require('../demo/newsTabInfo');
const newsListInfo = require('../demo/newsListInfo');
const quickListInfo = require('../demo/quickListInfo');
const quickentryInfo = require('../demo/quickentryInfo');
const bannerListInfo= require('../demo/bannerListInfo');



module.exports = [
    {
        path: '/getHomepageInfo',
        data: homepageInfo
    },
    {
        path: '/getRankListInfo',
        data: rankListInfo
    },
    {
        path: '/getDiscountInfo',
        data: discountInfo
    },
    {
        path: '/getRecommendList',
        data: recommendInfo
    },
    {
        path: '/getNewsTab',
        data: newsTabInfo
    },
    {
        path: '/getNewsList',
        data: newsListInfo
    },
    {
        path: '/getQuicklist',
        data: quickListInfo
    },
    {
        path: '/getQuickentry',
        data: quickentryInfo
    },{
        path: '/getBannerInfo',
        data: bannerListInfo
    }

];
