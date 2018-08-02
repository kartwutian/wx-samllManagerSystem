// pages/filter/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    config: [
      {
        name: '商城集团',
        checked: false,
      }, 
      {
        name: '市场集团',
        checked: false,
      },
      {
        name: '商务局',
        checked: false,
      },
      {
        name: '丝路新区',
        checked: false,
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
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
  handleCheck(e) {
    const config = this.data.config;
    config[e.currentTarget.dataset.index].checked = !config[e.currentTarget.dataset.index].checked;
    this.setData({
      config
    })
  },
  handleFilter() {
    wx.switchTab({
      url: '/pages/projectList/index',
    })
  }
})