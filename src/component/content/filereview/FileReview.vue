<template>
  <div class="file-review">
    <el-container class="review-content" >
        <el-aside width="200px">
          <el-menu :default-openeds="['1']"
            @select="selectMenu">
            <el-submenu index="1" style="background-color=red">
              <template slot="title"><i class="el-icon-setting"></i>系统管理</template>
              <el-menu-item-group>
                <el-menu-item index="1-1">用户管理</el-menu-item>
                <el-menu-item index="1-2">权限管理</el-menu-item>
               <!--  <el-menu-item index="1-3">角色管理</el-menu-item> -->
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title"><i class="el-icon-folder"></i>资料管理</template>
              <el-menu-item-group>
                <el-menu-item index="2-1">资料管理</el-menu-item>
              <!--   <el-menu-item index="2-2">其它管理</el-menu-item> -->
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside> 
        <router-view></router-view>
    </el-container>
  </div>
</template>

<script>
export default {
  name:"FileReview",
  data(){
    return{
          screenWidth: document.body.clientWidth,
          isCollapse: false,
    }
  },
  components:{
  },
  mounted(){
    const that = this;
        window.onresize = () => (() => {
            window.screenWidth = document.body.clientWidth;
            that.screenWidth = window.screenWidth;
            console.log(that.screenWidth)
            if(that.screenWidth<=1000){
                this.isCollapse=true
            }else{
              this.isCollapse=false
            }
        })();
  },
  methods:{
    handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
    handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
    selectMenu(index){
      switch(index){
        case "1-1":
          this.$router.push({name:'usermanage'});
          break
        case "1-2":
          this.$router.push({name:'permission'})
          break
        case "2-1":
          this.$router.push({name:'filemanage'});
          break
        default:
          break    
      }
    }
  }
}
</script>

<style scoped>
 .file-review{
   width: 100%;
   height: 100%;
  }
  .review-content{
    height: 100%;
  }
  
.el-aside{
  height:calc(100vh - 100px);
  background-color: #fff;
}
  .el-header {
    background-color: #fff;
    line-height: 40px;
  }
  
  .el-aside {
    color: #fff;
  }
  .content{
    height:calc(100vh - 100px);
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 8px;
  }
.el-menu{
  border-right: none;
  border-top: solid 1px #e6e6e6 ;
}
div.el-submenu__title{
  background-color: #DDDDDD;
}
.el-menu-item{
  background-color: #DDDDDD;
}
.el-input{
  width: 200px;
  margin-right: 10px;
}
.el-input_inner{
  width: 15px;
}
.header-button{
  padding-top: 7px;
}
.block{
  text-align: center;
}
.file-review::-webkit-scrollbar {
    width: 2px;    
}
.file-review::-webkit-scrollbar-thumb {
    border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.file-review::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
 }
</style>