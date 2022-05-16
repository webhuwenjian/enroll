<template>
  <div class="super-manage">
    <el-container class="manage-content">
       <div class="manage-view">
          <el-aside width="200px " style="background-color: rgb(238, 241, 246)">
            <el-menu :default-openeds="['1', '3']"
             @select="selectMenu">
                <el-submenu index="1">
                    <template slot="title"><i class="el-icon-message"></i>系统管理</template>
                    <el-menu-item index="1-1">通知公告</el-menu-item>
                    <el-menu-item index="1-2">项目风采</el-menu-item>
                </el-submenu>
                <el-submenu index="2">
                    <template slot="title"><i class="el-icon-menu"></i>用户管理</template>
                    <el-menu-item index="2-1">专家账户</el-menu-item>
                    <el-menu-item index="2-2">单位账户</el-menu-item>
                 </el-submenu>
                <el-submenu index="3">
                    <template slot="title"><i class="el-icon-setting"></i>资料管理</template>
                    <el-menu-item index="3-1">报名资料</el-menu-item>
            </el-submenu>
            </el-menu>
        </el-aside>
        <router-view></router-view>
       </div>
     </el-container>    
  </div>
</template>

<script>
export default {
    name:'SuperManage',
    data(){
      return{

      }
    },
    methods:{
      selectMenu(data){
        switch(data){
          case "1-1":
            console.log("通知公告")
            this.$router.push({name:'noticemanage'})
            break;
          case "1-2":  
          console.log("项目风采")
            break;
          case "2-1":
            console.log("专家账户")
            break;
          case "2-2":
            console.log("单位账户")
            this.$router.push({name:'superusermanage'})
            break;
          case "3-1":
            this.$router.push({name:'superfilemanage'})
            break;
          default:
            break;    
        }
      }
    }
}
</script>

<style scoped>
.manage-content{ 
    height: calc(100vh - 90px);
    width: 100%;
    margin-top: 4px;
    padding: 4px;
    overflow: hidden;
  
}
.manage-view{
   width: 100%;
   display: flex;
   box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
  .el-header {
    /* background-color: #B3C0D1; */
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
    height: calc(100vh - 84px);
    overflow: hidden;
    background-color: #fff;
  }
  .el-menu-item{
  font-size: 13px;
  font-weight: normal;

}

</style>