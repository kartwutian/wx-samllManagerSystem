import componentsConfig from './config';

Page({
  data: {
    list: componentsConfig
  },

  onLoad: function () {

  },

  onShow: function() {
  },
  
  onShareAppMessage: function (res) {
    // if (res.from === 'button') {
    //   // 来自页面内转发按钮
    //   console.log(res.target)
    // }
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  },
})
