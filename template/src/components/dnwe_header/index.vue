<template>
    <el-container>
        <img class="logo" src="../../assets/images/logo.png" alt="">
        <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#3c3a39"
        text-color="#fff"
        active-text-color="#ffd04b" v-for="(item) in store.state.menusAll" :key="item.id">
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
    </el-container>
</template>

<script>
    import store from './store'
    export default
        {
            data() {
                return {
                    activeIndex: 'F001',
                    store:store
                };
            },
            methods: {
                handleSelect(key, keyPath) {
                    this.activeIndex = key;
                }
            },
            computed:{
                products(){
                    return this.$store;
                }
            },
            created(){
               
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
</style>
