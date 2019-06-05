<template>
    <div class="note">
        Note Page
    </div>
</template>
<script>
export default {
    name:'note',
    created(){
        let arr = [{text:'首页',url:'/'},{text:'手帐体系'},{text:'笔记'}]
        this.$store.commit('setBreadcrumbs',arr);
        this.$store.commit('setPageTitle','手帐体系-笔记');
    }
}
</script>
