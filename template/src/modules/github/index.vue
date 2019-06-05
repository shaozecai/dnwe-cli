<template>
    <div class="github">
        Github页面
    </div>
</template>

<script>
export default {
    name:'github',
    data(){
        return {}
    },
    created(){
        let arr = [{text:'首页',url:'/'},{text:'Github',url:'/github'}]
        this.$store.commit('setBreadcrumbs',arr);
        this.$store.commit('setPageTitle','Github');
    }
}
</script>
