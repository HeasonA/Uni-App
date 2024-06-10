"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      poeTy: "\u52A0\u8F7D\u4E2D...",
      laiYuan: "\u52A0\u8F7D\u4E2D..."
    };
  },
  methods: {
    async Renewal() {
      const url = "https://api.apiopen.top/api/sentences";
      try {
        const res = await common_vendor.index.request({
          url,
          method: "GET"
        });
        console.log(res.statusCode);
        if (res.statusCode === 200) {
          this.poeTy = res.data.result.name;
          this.laiYuan = res.data.result.from;
        } else {
          common_vendor.index.showToast({
            title: "\u83B7\u53D6\u5931\u8D25",
            icon: "none"
          });
        }
      } catch (error) {
        common_vendor.index.showToast({
          title: "\u7F51\u7EDC\u9519\u8BEF",
          icon: "none"
        });
      }
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.poeTy),
    b: common_vendor.t($data.laiYuan),
    c: common_vendor.o((...args) => $options.Renewal && $options.Renewal(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uni-app/CSL1/pages/component/poety/poety.vue"]]);
wx.createPage(MiniProgramPage);
