<template>
    <div class="header">
        <el-row style="background-color: #409EFF">
            <el-col :span="8">
                <div class="title">
                  <span class="title-content">江苏省高校测绘地理信息创新创业大赛</span>
                </div>
             </el-col>
             <el-col :span="4">
               <div class="grid-content bg-purple-dark"></div>
             </el-col>
             <el-col :span="12">
                <div class="tabbar">
                   <el-menu
                      :default-active="activeIndex"
                      class="el-menu"
                      mode="horizontal"
                      @select="handleSelect"
                      text-color="#000"
                      active-text-color="#ffd04b">
                    <el-menu-item index="1">赛事中心</el-menu-item>
                    <el-menu-item index="2">资料提交</el-menu-item>
                    <el-menu-item index="3">资料审核</el-menu-item>
                    <el-submenu index="4">
                      <template slot="title">评审中心</template>
                      <el-menu-item index="4-1">赛道一</el-menu-item>
                      <el-menu-item index="4-2">赛道二</el-menu-item>
                      <el-menu-item index="4-3">赛道三</el-menu-item>
                  <!--     <el-submenu index="4-4">
                        <template slot="title">选项4</template>
                        <el-menu-item index="2-4-1">选项1</el-menu-item>
                        <el-menu-item index="2-4-2">选项2</el-menu-item>
                        <el-menu-item index="2-4-3">选项3</el-menu-item>
                      </el-submenu> -->
                    </el-submenu>
                    <el-menu-item index="5" disabled>用户管理</el-menu-item>
                    <el-menu-item index="4"><a href="http://cge.njtech.edu.cn/" target="_blank">关于我们</a></el-menu-item>
                  </el-menu>
                </div>
             </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name:"HeaderMenu",
  data() {
      return {
        activeIndex: '1',
      }
    },
  methods:{
    handleSelect(key, keyPath) {
        if(key==1){
          this.$router.push({name:'matchcenter'})
        }else if(key==2){
          this.$router.push({name:'filesubmit'})
        }else if(key==3){
          this.$router.push({name:'filereview'})
        }
      }
  }  
}
</script>

<style scoped>
  .header{
    width: 100%;
    height: 80px;
    font-size: 24px;
    background-color: #409EFF;
    opacity:0.8;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .title{
    height: 80px;
    min-width: 300px;
  }
 .title-content{
    line-height: 80px;
      color: #fff;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 80px;
    background-color: #409EFF;
  }
  .tabbar{
    height: 80px;
  }
 .tabbar .el-menu{
    height: 80px;
    font-size: 48px;
    line-height: 80px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #409EFF;
    
  }
  .el-menu--horizontal>.el-menu-item{
    height: 100%;
    line-height: 80px;
  }
  .el-menu--horizontal>.el-submenu .el-submenu__title{
    height: 100%;
    line-height: 80px;
  }
</style>