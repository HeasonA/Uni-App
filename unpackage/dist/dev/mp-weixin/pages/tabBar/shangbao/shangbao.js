"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      pglist: 0
    };
  },
  methods: {
    incresspPo() {
      if (this.pglist < 100) {
        this.pglist += 10;
      }
    },
    indeRssc() {
      if (this.pglist > 0) {
        this.pglist = 0;
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.pglist,
    b: common_vendor.o((...args) => $options.incresspPo && $options.incresspPo(...args)),
    c: common_vendor.o((...args) => $options.indeRssc && $options.indeRssc(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uni-app/CSL1/pages/tabBar/shangbao/shangbao.vue"]]);
wx.createPage(MiniProgramPage);
