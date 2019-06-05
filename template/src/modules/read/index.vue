<template>
    <div class="read">
        Read Page
    </div>
</template>
<script>
export default {
    name:'read',
    created(){
        let arr = [{text:'首页',url:'/'},{text:'手帐体系'},{text:'阅读'}]
        this.$store.commit('setBreadcrumbs',arr);
        this.$store.commit('setPageTitle','手帐体系-阅读');
    }
}
</script>
