<template>
    <div class="home">
        <header-menu/>
        <router-view></router-view>
    </div>
</template>

<script>
import HeaderMenu from '../../component/header/HeaderMenu.vue'
export default {
    name:'home',
    data(){
        return{

        }
    },
    components:{
        HeaderMenu,
    }
}
</script>

<style>
.home{
    width: 100%;
    height: 100%;
}
</style>