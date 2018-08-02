import qs from "../../utils/qs.js"

Page({
  data: {
    inputValue: '',
    focus: true
  },

  searchChange(e) {
    this.setData({
      inputValue: e.detail.value
    });
  },

  searchDone(e) {
    console.error('search', e.detail.value)
  },

  handleCancel() {
    console.error('cancel')
  },
  handleNavigator() {
    console.log('handleNavigator 执行了')
    console.log(qs.stringify({a:123,b:456}))
    wx.switchTab({
      url: '/pages/projectList/index',
    })
  }
});
