<template>
    <el-container>
        <img class="logo" src="../../images/logo.png" alt="">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#3c3a39"
        text-color="#fff"
        active-text-color="#ffd04b" v-for="(item) in $t('menuData')" :key="item.id">
            <!-- 一级导航 -->
            <el-menu-item v-if="!item.subList" v-bind:index="item.id">
                <router-link :to="item.url">{{item.name}}</router-link>
            </el-menu-item>
            <!-- 二级导航 -->
            <el-submenu v-if="item.subList" v-bind:index="item.id">
                <template slot="title" v-if="item.url">
                    <router-link :to="item.url">{{item.name}}</router-link>
                </template>
                <template slot="title" v-if="!item.url">{{item.name}}</template>
                <div v-for="(item2) in item.subList" :key="item2.id">                 
                    <el-menu-item v-if="!item2.subList" v-bind:index="item2.id">
                        <router-link :to="item2.url">{{item2.name}}</router-link>
                    </el-menu-item>
                    <el-submenu v-if="item2.subList" v-bind:index="item2.id">
                        <template slot="title" v-if="item2.url">
                            <router-link :to="item2.url">{{item2.name}}</router-link>
                        </template>
                        <template slot="title" v-if="!item2.url">{{item2.name}}</template>
                        <div v-for="(item3) in item2.subList" :key="item3.id">
                            <el-menu-item v-bind:index="item3.id">
                                <router-link :to="item3.url">{{item3.name}}</router-link>
                            </el-menu-item>
                        </div>                            
                    </el-submenu>
                </div>
            </el-submenu>

        </el-menu>
        <el-dropdown @command="changeLang" class="lang-select" trigger="hover" title="切换语言">
            <span><span>{{ langLabel }}</span><i class="el-icon-arrow-down"></i></span>
            <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="item in langList" :command="item.key" :key="item.key" :class="{'item-selected' :lang == item.key}">{{ item.label }}</el-dropdown-item>
            </el-dropdown-menu>
        </el-dropdown>
    </el-container>
</template>

<script>
    import i18n from './i18n/index'
    export default
        {
            data() {
                return {
                    activeIndex: 'F001',
                    lang: this.$store.state.lang,
                    langList: this.$store.state.langList,
                   
                };
            },
            methods: {
                changeLang(val){
                    this.$store.commit('setLang',val);
                    this.lang = val;
                },
                handleSelect(key, keyPath) {
                    this.activeIndex = key;
                }
            },
            computed:{
                langLabel(){
                    let arr = this.langList.filter(item=>{
                        return item.key == this.lang
                    });
                    return arr.length ? arr[0].label : '中文'
                }
            },
            created(){
               this.$i18n.add('zh-CN',i18n['zh-CN']);
               this.$i18n.add('en',i18n['en']);
            }
        }
</script>

<style scoped>
    .el-container{
        height:60px;
    }
    .el-menu--popup-bottom-start{
        margin-top: 1px;
    }
   .el-menu .el-menu-item a,.el-menu .el-menu-item a:hover,.el-menu .el-menu-item a:active{
        color: #ffffff;
    }
    .el-submenu__title a{
        color: #ffffff;
    }
    .logo{
        width: 42px;
        height: 42px;
        margin-top: 9px;
        margin-right: 20px;
    }
    .lang-select.el-dropdown{
        cursor: pointer;
        float: right;
        padding: 0 10px;
        position: absolute;
        right: 10px;
    }
    .el-dropdown-menu{
        margin: 0;
    }
    .el-dropdown-menu__item.item-selected{
        background-color: #dddddd
    }
</style>
