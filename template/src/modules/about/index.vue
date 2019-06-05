<template>
    <div class="about">
        About Page
    </div>
</template>
<script>
export default {
    name:'about',
    created(){
        let arr = [{text:'首页',url:'/'},{text:'关于',url:'/about'}]
        this.$store.commit('setBreadcrumbs',arr);
        this.$store.commit('setPageTitle','关于');
    }
}
</script>
