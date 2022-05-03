<template>
  <div class="project-style">
      <div class="project-img">
        <el-image
            style="width: 100px; height: 100px"
            :src="projectObj.url"
            :fit="cover">
        </el-image>
      </div>
      <div class="project-description">
          {{projectObj.description}}
      </div>
      <div class="project-author">
          {{projectObj.author}}
      </div>
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
            url:'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
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
}
.project-style .project-img{
    flex: 3;
    padding: 4px;
    text-align: center;
}
.projiect-style .project-description{
    flex: 2;
    text-align: center;
}
.projiect-style .project-author{
    flex: 1;
    text-align: center;
}
</style>