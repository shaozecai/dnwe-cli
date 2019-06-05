<template>
    <div class="summary">
        Summary Page
    </div>
</template>

<script>
export default {
    name:'sum',
    created(){
        let arr = [{text:'首页',url:'/'},{text:'手帐体系'},{text:'总结'}]
        this.$store.commit('setBreadcrumbs',arr);
        this.$store.commit('setPageTitle','手帐体系-总结');
    }
}
</script>
