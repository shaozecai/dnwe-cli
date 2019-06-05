<template>
    <div class="home_page">
        {{ $t("pageTitle") }}
    </div>
</template>

<script>
import i18n from './i18n/index'
import { constants } from 'fs';
export default {
    name:'home',
    data(){
        return {}
    },
    methods: {
      
    },
    computed:{

    },
    created(){
        this.$i18n.add('zh-CN',i18n['zh-CN'])
        this.$i18n.add('en',i18n['en'])
        this.$store.commit('setPageTitle',this.$t('pageTitle'));
    }
}
</script>
