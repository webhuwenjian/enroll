<template>
  <div class="match-center">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple">
          <el-carousel :interval="4000" type="card" height="300px">
            <el-carousel-item v-for="item in imgList" :key="item.id">
              <img :src="item.imgUrl" class="image">
            </el-carousel-item>
         </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="18">
          <div class="scroll-view"></div>
      </el-col>
       <el-col :span="6">
          <div class="notice-view">
            <el-card class="box-card">
              <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
              </div>
            </el-card>
          </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:"MatchCenter",
    data(){
      return{
        imgList:[{id:1,imgUrl:'../../assets/img/scrollview/img1.jpg'},
                 {id:2,imgUrl:'../../assets/img/scrollview/img2.jpg'},
                 {id:3,imgUrl:'../../assets/img/scrollview/img3.jpg'},
                 {id:4,imgUrl:'../../assets/img/scrollview/img4.jpg'},],
      }
    },
}
</script>

<style scoped>
  .match-center{
    margin-top: 4px;
  }
  .grid-content {
    height: 100%;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .scroll-view{
    margin-top: 8px;
    background-color:  #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: 520px;
  }
  .notice-view{
    height: 520px;
    padding: 8px;
  }
</style>