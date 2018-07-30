var Zan = require('../../dist/index');
var config = require('config');

Page(Object.assign({}, {
  data: {
    dashboard: config,
    filterItem: '招商计划',
    activeClass: ''
  },

  onLoad() {
  },

  onShow() {
  },
  toggleFilter() {
    this.setData({
      activeClass: this.data.activeClass ? '': 'active'
    })
  },
  filter(e) {
    console.log(e);
    this.setData({
      filterItem: e.currentTarget.dataset.filter
    });

    this.toggleFilter();
    
  },
  handleTap(e) {
    console.log(e);
  }
}));
