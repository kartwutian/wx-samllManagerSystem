
// 判断app上有没有accessToken属性，有的话直接跳转到主页
console.log(getApp().accessToken)

let app = getApp()

if (app.accessToken) {
  wx.switchTab({
    url: '/pages/dashboard/index'
  })
 

}

Page({

  /**
   * 页面的初始数据
   */
  data: {
    appName: '商贸招商引资',
    logo: '/asserts/imgs/logo-30_30.png',
    loginInfo: {
      username: '',
      password: ''
    },
    showLoadding: true,
    showLoaddingToast: false,
    loaddingToastText: {
      text: '登陆中'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let loginInfo = wx.getStorageSync('loginInfo')
    if (!!loginInfo) {
      this.setData({
        loginInfo: loginInfo
      })
    }
    this.setData({
      showLoadding: false
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  },

  clear: function(e){
    console.log(e)
    if (e.currentTarget.dataset && e.currentTarget.dataset.target){
      this.setData({
        loginInfo: {
          ...this.data.loginInfo,
          [e.currentTarget.dataset.target]: ''
        }
      })
    }
   
  },
  keyInput: function (e) {
    if (e.target.id === 'username') {
      this.setData({
        loginInfo: {
          ...this.data.loginInfo,
          username: e.detail.value,
        }
      })
    } else if (e.target.id === 'password') {
      this.setData({
        loginInfo: {
          ...this.data.loginInfo,
          password: e.detail.value
        }
      })
    } else {

    }


  },
  login: function(){
    wx.setStorageSync('loginInfo', this.data.loginInfo)
    wx.switchTab({
      url: '/pages/analysis/index'
    })
  }
})