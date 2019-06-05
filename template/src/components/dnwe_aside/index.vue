<template>
    <el-container>
        <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#303030"
            text-color="#fff"
            active-text-color="#ffd04b"
            index="menu2"
            >
            <el-submenu index="menu2-1">
                <template slot="title">
                    <i class="el-icon-menu"></i>
                    <span>导航一</span>
                </template>
                <el-menu-item index="menu2-1-1">二级导航</el-menu-item>
                <el-submenu index="menu2-1-2">
                    <template slot="title">二级导航</template>
                    <el-menu-item index="menu2-1-2-1">二级1</el-menu-item>
                    <el-menu-item index="menu2-1-2-2">二级2</el-menu-item>
                    <el-submenu index="menu2-1-2-3">
                        <template slot="title">二级5</template>
                        <el-menu-item index="menu2-1-2-3-1">三级1</el-menu-item>
                    </el-submenu>
                </el-submenu>
                 
            </el-submenu>
            <el-menu-item index="menu2-2">
                <i class="el-icon-menu"></i>
                <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="menu2-3">
                <i class="el-icon-menu"></i>
                <span slot="title">导航三</span>
            </el-menu-item>
        </el-menu>
    </el-container>
</template>

<script>
export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style scoped>
.el-menu{
    width: 100%;
   border-right:solid 1px #303030;
}

</style>
