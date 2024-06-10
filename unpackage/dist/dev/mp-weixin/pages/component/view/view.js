"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      map: null,
      marker: null
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: _ctx.latitude,
    b: _ctx.longitude,
    c: _ctx.markers,
    d: _ctx.circles,
    e: _ctx.controls
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uni-app/CSL1/pages/component/view/view.vue"]]);
wx.createPage(MiniProgramPage);
