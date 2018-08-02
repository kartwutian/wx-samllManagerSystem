var Zan = require('../../dist/index');
var config = require('config');
var { investmentUnits } = require('../../utils/constant.js');

Page(Object.assign({}, {
  data: {
    investmentUnits,
    selectId: 'all',
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
      selectId: e.currentTarget.dataset.id,
      filterItem: e.currentTarget.dataset.filter,
    });

    this.toggleFilter();
    
  },
  handleTap(e) {
    console.log(e);
  }
}));
