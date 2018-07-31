const config = require('./config');

Page({

  data: {
    config,
    value: 'test',
    show: false,
    cancelWithMask: true,
    actions: [{
      name: '选项1',
      subname: '选项描述语1',
      loading: false
    }, {
      name: '选项2',
      subname: '选项描述语2',
      loading: false
    }, {
      name: '去分享',
      openType: 'share'
    }],
    cancelText: '关闭 Action'
  },
  openActionSheet() {
    this.setData({
      'show': true
    });
  },
  closeActionSheet() {
    this.setData({
      'show': false
    });
  },
  handleActionClick({ detail }) {
    // 获取被点击的按钮 index
    const { index } = detail;
  },

  handleSelect() {
    console.log(111111)
  }

});
