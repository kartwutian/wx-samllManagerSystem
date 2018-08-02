var Zan = require('../../dist/index');
var config = require('config');
var list = require('list');
var { ProjectStatus } = require('../../utils/constant.js');
Page(Object.assign({}, {
  data: {
    ProjectStatus,
    selectId: 'all',
    dashboard: list,
    height: '',

    filter: config,
    filterItem: '所有状态',
    activeClass: '',

    showTimeSortFilter: false,
    activeIndex: 0,
    cancelWithMask: true,
    actions: [
      {
        name: '按最新跟进时间由新到旧',
        loading: false
      }, 
      {
        name: '按最新跟进时间由旧到新',
        loading: false
      }, 
      {
        name: '按创建时间由新到旧',
        loading: false
      }, 
      {
        name: '按创建时间由旧到新',
        loading: false
      }
    ],
    cancelText: '取消',
  
  },

  onLoad() {
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          height: res.windowHeight
        })
      }
    })
  },

  onShow(options) {
    console.log('我回来啦')

  },
  toggleFilter() {
    this.setData({
      activeClass: this.data.activeClass ? '': 'active'
    })
  },
  filter(e) {
    console.log(e);
    this.setData({
      selectId: e.currentTarget.dataset.id,
      filterItem: e.currentTarget.dataset.filter,
    });

    this.toggleFilter();
    
  },
  handleTap(e) {
    console.log(e);
  },

  openActionSheet() {
    console.log('dddddd')
    this.setData({
      'showTimeSortFilter': true
    });
  },
  closeActionSheet() {
    this.setData({
      'showTimeSortFilter': false
    });
  },
  handleActionClick({ detail }) {
    console.log(detail)
    // 获取被点击的按钮 index
    const { index } = detail;
    this.setData({
      activeIndex: index,
    })
  },
  openFilter() {
    wx.navigateTo({
      url: '/pages/filter/index',
    });
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
  handleNavigator(e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.target,
    })
  },
  to(){
    wx.navigateTo({
      url: '/pages/projectDetail/index',
    })
  }
}));
