/**
 * 公共视图方法
 */
import Vue from 'vue'

export default {
    //  设置语言
    setLang(state,payload){
        state.lang = payload
        Vue.i18n ? Vue.i18n.set(payload) : false;
    },
    // 页面跳转
    gotoPage(state,route){
        state.globalRouter = route
    },
    // 设置面包屑导航
    setBreadcrumbs(state,payload){
        state.breadcrumbs = payload
    },
    // 设置页面标题
    setPageTitle(state,payload){
        state.pageTitle = payload;
        document.title = payload;
    }
}