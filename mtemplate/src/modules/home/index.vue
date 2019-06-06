<template>
    <div class="home_page">
        <img class="bg" src="../../public/images/img2.jpg" alt="" width="100%">
        <div class="content">
            <div class="box">
                <div class="text text1">
                    <ul>
                    <li class="title"><font>第一回</font>  投师名门</li>
                    <li>你看这些<font>白云</font> ，聚了又聚 ，</li>
                    <li>散了又散 。人生<font>离合</font> ，</li>
                    <li><font>复亦如斯 。</font></li>
                    <li>你又何必烦恼 ？</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { constants } from 'fs';
export default {
    name:'home',
    data(){
        return {}
    },
    
    created(){
        this.$store.commit('setPageTitle','首页');
    }
}
</script>

<style lang="scss" scoped>
    .home_page{
        font-size:40px;
        max-height: 100vh;
        overflow: hidden;
        position: relative;
        .bg{
            width: 100%;
            height: 100%;
        }
        .content{
            position: absolute;
            top: 160px;
            left: 80px;
            background: rgba($color: #fff, $alpha: .8);
            ul{
                list-style: none;
                li{
                    list-style: none;
                    width: 30px;
                    font-size: 26px;
                    float: left;
                    word-break: break-all;
                    padding: 28px;
                    line-height: 1.2;
                    border-top: 1px solid #dedede;
                    border-left: 1px solid #dedede;
                    border-bottom: 1px solid #dedede;
                }
            }
        }
    }
</style>

