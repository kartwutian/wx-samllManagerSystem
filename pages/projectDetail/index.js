const config = require('./config');

Page({

  data: {
    height: '',
    showMore: true,
    showMoreText: '收起',
    tab: {
      list: [
        {
          id: 'record',
          title: '跟进记录'
        },
        {
          id: 'approval',
          title: '领导批示(0)'
        }
      ],
      selectedId: 'approval'
    },
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
  handleTabChange(selected) {
    const tab = this.data.tab;
    tab.selectedId = selected.detail;
    this.setData({
      tab,
    })
  },

  toggleShowMore() {
    this.setData({
      showMore: !this.data.showMore,
      showMoreText: this.data.showMore? '更多信息': '收起',
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
