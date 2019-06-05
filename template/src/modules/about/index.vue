<template>
    <div class="about">
        {{$t('title')}}
    </div>
</template>

<script>
import i18n from './i18n'
export default {
    name:'about',
    created(){
        let arr = [{text:'首页',url:'/'},{text:'关于',url:'/about'}]
        this.$store.commit('setBreadcrumbs',arr);
        this.$store.commit('setPageTitle','关于');
    }
}
</script>
