var Zan = require('../../dist/index');
var config = require('config');

Page(Object.assign({}, {
  data: {
    dashboard: config,
  },

  onLoad() {
  },

  onShow() {
  },


  handleTap(e) {
    console.log(e);
  }
}));
