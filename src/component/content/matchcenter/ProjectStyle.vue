<template>
  <div class="project-style">
      <div class="project-img">
       <!--  <el-image
            :src="url"
            fit="cover">
        </el-image> -->
        <img :src="projectObj.url" style="width:100%;height:100%;"/>
      </div>
      <div class="project-description">
          {{projectObj.description}}
      </div>
     <!--  <div class="project-author">
          {{projectObj.author}}
      </div> -->
  </div>
</template>

<script>
export default {
    name:'ProjectStyle',
    props:{
        projectObj:{
            type:Object,
            default(){
                return{

                }
            }
        }
    },
    data(){
        return{
            url:require('../../../assets/img/login.png'),
            description:'这是一条测试数据，over！',
            author:'张三',
        }
    },
}
</script>

<style scoped>
.project-style{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 15px;
}
.project-style .project-img{
   /*  flex: 3; */
   width: 170px;
   height: 110px;
    padding: 4px;
    border-radius: 2px;
 /*    border-color: red; */
    display: flex;
    /* margin: 4px; */
    justify-content: center;
    align-items: center;
    /* background-color:#fff; */
    background-color: #409EFF;
}
.projiect-style .project-description{
    flex: 3;
    text-align: center;
    font-size: 12px;
}
.projiect-style .project-author{
    flex: 1;
    text-align: center;
}
</style>