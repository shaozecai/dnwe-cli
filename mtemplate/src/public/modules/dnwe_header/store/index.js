import Vue from 'vue'

/**
 * 定义菜单项
 */

/**
 * 定义状态信息
 */
const localState = {
    menusAll: ''
}

/**
 *业务逻辑定义
 */
const mutations = {
    setMenusAll(state,payload){
        state.menusAll = payload
    }
}

/**
 * 业务逻辑处理
 */
const actions = {
    //获取菜单方法
    queryMenus({state,rootState,commit,dispatch},payload){
        commit('setMenusAll', '')
    }
}

export default {
    state:localState,
    actions,
    mutations
}