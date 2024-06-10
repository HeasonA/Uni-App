"use strict";
var common_vendor = require("../../common/vendor.js");
const _sfc_main = {
	data() {
		return {
			title: "Hello"
		};
	},
	onLoad() {},
	methods: {}
};

function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
	return {
		a: common_vendor.t($data.title)
	};
}
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [
	["render", _sfc_render],
	["__file", "D:/uni-app/CSL1/pages/index/index.vue"]
]);
wx.createPage(MiniProgramPage);

//
// import {
// 	createStore
// } from 'vuex';

// const store = createStore({
// 	state() {
// 		return {
// 			isLoggedIn: false, // 用户登录状态
// 			user: null, // 用户信息
// 		};
// 	},
// 	mutations: {
// 		setLoginState(state, payload) {
// 			state.isLoggedIn = payload.isLoggedIn;
// 			state.user = payload.user;
// 		},
// 	},
// 	actions: {
// 		login({
// 			commit
// 		}, payload) {
// 			// 这里通常是发起登录请求的逻辑
// 			// 登录成功后，调用mutation更新状态
// 			commit('setLoginState', {
// 				isLoggedIn: true,
// 				user: payload.user
// 			});
// 		},
// 		logout({
// 			commit
// 		}) {
// 			// 登出操作，清空状态
// 			commit('setLoginState', {
// 				isLoggedIn: false,
// 				user: null
// 			});
// 		},
// 	},
// 	getters: {
// 		isLoggedIn: state => state.isLoggedIn,
// 		getUser: state => state.user,
// 	},
// });

// export default store;
