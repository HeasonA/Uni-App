"use strict";
var common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chengs: "\u52A0\u8F7D\u4E2D...",
      tianqi: "\u52A0\u8F7D\u4E2D...",
      wendu: "\u52A0\u8F7D\u4E2D...",
      fengxiang: "\u52A0\u8F7D\u4E2D...",
      obsTime: "\u52A0\u8F7D\u4E2D...",
      apikey: "2e50336d30dd4604a89140d92c524390"
    };
  },
  methods: {
    async Renewal() {
      const url = "https://devapi.qweather.com/v7/weather/now?location=101010100&key=2e50336d30dd4604a89140d92c524390";
      try {
        const res = await common_vendor.index.request({
          url,
          method: "GET"
        });
        console.log(res);
        console.log(res.statusCode);
        console.log(res.data.fxLink);
        if (res.statusCode === 200) {
          const asqweData = res.data.now.temp;
          this.obsTime = res.data.now.obsTime;
          this.chengs = res.data.fxLink;
          this.tianqi = res.data.now.text;
          this.wendu = asqweData + "\xB0C";
          this.fengxiang = res.data.now.windDir;
        } else {
          common_vendor.index.showToast({
            title: "\u83B7\u53D6\u5929\u6C14\u5931\u8D25",
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
    a: common_vendor.t($data.chengs),
    b: common_vendor.t($data.obsTime),
    c: common_vendor.t($data.tianqi),
    d: common_vendor.t($data.wendu),
    e: common_vendor.t($data.fengxiang),
    f: common_vendor.o((...args) => _ctx.Renewa && _ctx.Renewa(...args))
  };
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "D:/uni-app/CSL1/pages/component/lianjie/lianjie.vue"]]);
wx.createPage(MiniProgramPage);
