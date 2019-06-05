/**
 * 定义菜单项
 */
const menuData = [
    {
        id:'F001',
        name:'首页',
        url:'/'
    },
    {
        id:'F002',
        name:'GitHub',
        url:'/github'
    },
    {
        id:'F003',
        name:'手帐体系',
        subList:[
            {
                id:'S3001',
                name:'阅读',                
                url:'/read'
            },
            {
                id:'S3002',
                name:'笔记',
                url:'/note'
            },
            {
                id:'S3003',
                name:'总结',
                url:'/sum'
            }
        ]
    },
    {
        id:'F004',
        name:'关于',
        url:'/about' 
    }
];

/**
 * 定义状态信息
 */
const localState = {
    menusAll: menuData
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
        commit('setMenusAll', menuData)
    }
}

export default {
    state:localState,
    actions,
    mutations
}