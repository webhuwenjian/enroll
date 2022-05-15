<template>
  <div class="review-view">
         <!-- 头部 -->
      <el-row>
          <el-col :span="24">
              <header-menu/>
          </el-col>
      </el-row>
      <el-row>
          <el-col :span="24">
              <div class="navgation-bar">
                <el-breadcrumb separator-class="el-icon-arrow-right">
                    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                    <el-breadcrumb-item>往届回顾</el-breadcrumb-item>
                 </el-breadcrumb>
              </div>
          </el-col>
      </el-row>
      <el-row>

      </el-row>
  </div>
</template>

<script>
import HeaderMenu from '../../component/header/HeaderMenu.vue'
export default {
    name:'ReviewView',
    data(){
        return{}
    },
    components:{
        HeaderMenu,
    }
}
</script>

<style scoped>
 .navgation-bar{
    margin-top: 8px;
    /* box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
}
</style>