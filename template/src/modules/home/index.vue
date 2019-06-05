<template>
    <div class="home_page">
        Home Page
    </div>
</template>

<script>
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
        let arr = [{text:'首页',url:'/'}]
        this.$store.commit('setBreadcrumbs',arr);
        this.$store.commit('setPageTitle','首页');
    }
}
</script>
