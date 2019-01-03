import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        city: "madongmei"
    },
    getters: {
        getCity(state) {
            return state.city;
        }
    },
    actions: {
        setCityName({commit,state}, name){
            // 跟后台打交道
            // 调用mutaions里面的方法
            commit("setCity", name);
        }
    },
    mutations: {
        setCity(state, name) {
            state.city = name;
        }
    }
});
export default store;