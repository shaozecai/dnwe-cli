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
import dnweHeader from './components/dnwe_header'
import dnweAside from './components/dnwe_aside'
import dnweBreadcrumb from './components/dnwe_breadcrumb'
export default {
  name: 'Main',
  components:{
    dnweHeader,
    dnweAside,
    dnweBreadcrumb
  },
  created(){
    
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
