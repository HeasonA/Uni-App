"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      noticeText: "\u60A6\u201C\u7B80\u201D\u751F\u6DAF\uFF0C\u804C\u201C\u9762\u201D\u672A\u6765"
    };
  },
  methods: {
    goDetailpage(e) {
      if (typeof e === "string") {
        common_vendor.index.navigateTo({
          url: `/pages/component/${e}/${e}`
        });
      } else if (typeof e === "object" && e.url) {
        common_vendor.index.navigateTo({
          url: e.url
        });
      } else {
        console.error("Invalid parameter type for navigation.");
      }
    }
  }
};
if (!Array) {
  const _component_marquee = common_vendor.resolveComponent("marquee");
  _component_marquee();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      ["scroll-delay"]: "0",
      direction: "left",
      loop: "true"
    }),
    b: common_vendor.o(($event) => $options.goDetailpage("view")),
    c: common_vendor.o(($event) => $options.goDetailpage("lianjie")),
    d: common_vendor.o(($event) => $options.goDetailpage("poety"))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uni-app/CSL1/pages/tabBar/component/component.vue"]]);
wx.createPage(MiniProgramPage);
