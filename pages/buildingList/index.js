// pages/buildingList/index.js
var config = require('config');

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dashboard: config,
    height: '',
  },
  previewImg(e) {
    wx.previewImage({
      current: e.currentTarget.dataset.src, // 当前显示图片的http链接
      urls: [e.currentTarget.dataset.src] // 需要预览的图片http链接列表
    })
  },
  lower() {
    var result = this.data.dashboard;

    var resArr = [];
    for (let i = 0; i < 10; i++) {
      resArr.push(this.data.dashboard[0]);  
    };
    var cont = result.concat(resArr);
    console.log(resArr.length);
    if (cont.length >= 100) {
      wx.showToast({ //如果全部加载完成了也弹一个框
        title: '我也是有底线的',
        icon: 'success',
        duration: 300
      });
      return false;
    } else {
      wx.showLoading({ //期间为了显示效果可以添加一个过度的弹出框提示“加载中”  
        title: '加载中',
        icon: 'loading',
      });
      setTimeout(() => {
        this.setData({
          dashboard: cont
        });
        wx.hideLoading();
        wx.showToast({ //加载完成了也弹一个框
          title: '加载完毕！',
          icon: 'success',
          duration: 300
        });
      }, 1500)
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })

  }
})