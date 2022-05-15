<template>
    <div class="header">
        <el-row style="background-color: #409EFF">
            <el-col :span="9">
                <div class="title">
                <!--   <el-image
                    style="width: 100%; height: 80px"
                    :src="url"
                    :fit="fill">
                  </el-image> -->
                  <span>江苏省高校测绘地理信息创新创业大赛</span>
                </div>
             </el-col>
             <el-col :span="7">
               <div style="color:#409EFF;font-size:2px;">1</div>
             </el-col>
             <el-col :span="8">
                <div class="tabbar">
                   <el-menu
                       router
                      :default-active="$route.path"
                      class="el-menu"
                      mode="horizontal"
                      @select="handleSelect"
                      text-color="#000"
                      active-text-color="#ffd04b">
                    <el-menu-item index="/matchcenter">首&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp页</el-menu-item>
                  <!--   <el-menu-item index="2">关于大赛</el-menu-item> -->
                    <el-menu-item index="/noticeview">通知公告</el-menu-item>
                   <!--  <el-menu-item index="3">参赛指南</el-menu-item> -->
                    <el-menu-item index="/reviewview" :disabled="disabled">往届回顾</el-menu-item>
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
        url:require('../../assets/img/title.png'),
        disabled:false,
        admin:'admin'
      }
    },
  methods:{
    handleSelect(key, keyPath) {
    /*     if(key==1){
          this.$router.push({name:'matchcenter'})
        }else if(key==2){
          this.$router.push({name:'notice'})
        }else if(key==3){
         this.$router.push({name:'notice'})
        }else if(key==5){
          this.$router.push({name:'supermanage'})
        }  */
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
    line-height: 80px;
  }
  .title span{
    font-size: 30px;
    font-style: italic;
    color: #fff;
    padding-left: 30px;
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
  .admin-img{
    height: 100%;
    font-size: 16px;
    display: flex;
    flex-direction: column;
  }
</style>