<template>
    <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="(item,index) in $t('breadcrumbs')" :key="index" :to="{ path: item.url }">{{item.text}}</el-breadcrumb-item>
        
    </el-breadcrumb>
</template>


<script>
export default {
    data(){
      return {
        state: this.$store.state
      }
    },
    methods: {
      
    },
    created(){
      
    }
}
</script>
<style scoped>
  .el-breadcrumb{
    padding: 0 10px;
    background: #e5e5e5;
    height: 30px;
    line-height: 30px;
  }
  .el-breadcrumb__item:last-child .el-breadcrumb__inner, .el-breadcrumb__item:last-child .el-breadcrumb__inner a, .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover, .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #8d8d8d;
}
  .el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
    font-weight: 400;
    color: #000;
  }
</style>
