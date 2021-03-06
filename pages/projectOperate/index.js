const config = require('./config');

Page({

  data: {
    height: '',
    showMore: false,
    showMoreText: '展开更多',
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
  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    });
  },

  toggleShowMore() {
    this.setData({
      showMore: !this.data.showMore,
      showMoreText: this.data.showMore? '展开更多': '收起',
    })
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
  },

  handleNavigator() {
    wx.navigateTo({
      url: '/pages/projectProgressOperate/index',
    })
  },
  test() {
    console.log(222222)
  }
});
