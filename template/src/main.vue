<template>
  <div id="app">
    <el-container>
      <el-header>
        <dnwe-header></dnwe-header>
      </el-header>
      <el-container>
        <!-- <el-aside width="200px">
          <dnwe-aside></dnwe-aside>
        </el-aside> -->
        <el-container>
          <dnwe-breadcrumb></dnwe-breadcrumb>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer height="36px">Copyright © 2019-2019 shaozecai.com All Rights Reserved.</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Vue from 'vue'
import Locale from 'element-ui/lib/locale'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from 'element-ui/lib/locale/lang/en'
import dnweHeader from './public/modules/dnwe_header'
import dnweAside from './public/modules/dnwe_aside'
import dnweBreadcrumb from './public/modules/dnwe_breadcrumb'

import i18n from './local/index'
import { constants } from 'fs';

const localeChange = lang =>{
  switch (lang){
    case 'zh-CN':
      Locale.use(zhLocale)
      break;
    case 'en':
      Locale.use(enLocale)
      break;
    default:
      Locale.use(zhLocale)
  }
}

export default {
  name: 'Main',
  data(){
    return {
      lang:this.$store.state.lang
    }
  },
  components:{
    dnweHeader,
    dnweAside,
    dnweBreadcrumb
  },
  watch:{
    lang(newVal, oldVal){
      if(!newVal || newVal == 'undefined'){
        newVal = 'zh-CN'
      }
      localeChange(newVal);
    }
  },
  created(){
    this.$store.commit('setLang','zh-CN');
  }
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
  }
  a{
    text-decoration: none;
  }
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
  .el-header, .el-footer {
    background-color: #3c3a39;
    color: #fff;
    text-align: center;
    line-height: 60px;
  }
  .el-footer{
    line-height: 36px;
    height: 36px;
    font-size: 12px;
  }
  
  .el-aside {
    background-color: #303030;
    color: #333;
    text-align: center;
    line-height: 200px;
    height: calc(100vh - 60px)
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
    min-height: calc(100vh - 126px);
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  .el-menu--popup-bottom-start{
    margin-top: 0px;
  }
  .el-menu--popup-right-start{
    margin-left: 2px;
    margin-right: 2px;
  }
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>
