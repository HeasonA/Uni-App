// store/index.js
// store/index.js
import {
	createStore
} from 'vuex';

export default createStore({
	state() {
		return {
			count: 0
		};
	},
	mutations: {
		increment(state) {
			state.count++;
		}
	},
	actions: {
		increment({
			commit
		}) {
			commit('increment');
		}
	},
	getters: {
		doubleCount(state) {
			return state.count * 2;
		}
	}
});
