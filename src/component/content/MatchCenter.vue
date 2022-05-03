<template>
  <div class="match-center">
    <el-row>
      <el-col :span="24">
        <div class="scroll-view">
           <el-carousel height="400px">
              <el-carousel-item v-for="item in imgList" :key="item.id">
               <!--  <img :src="item.imgUrl" class="image"> -->
                <el-image
                style="width:100%;"
                  :src="item.imgUrl"
                  :fit="contain">
                </el-image>
              </el-carousel-item>
            </el-carousel>
        </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
          <div class="content-view">
              <div class="news-content">
                <div style="width:100%">
                  <span class="title">通知公告</span>
                  <el-divider direction="vertical"></el-divider>
                  <span class="title-english">Notice</span>
                  <div class="notice-content" v-for="(item,index) in 4" :key="index">
                    <notice-content/>
                    <el-divider></el-divider>
                  </div>
                </div>
              </div>
          </div>
      </el-col>
      <el-col :span="6">
        <div class="projects-content">
          <div class="projects-show" style="width:100%">
            <span class="title">项目风采</span>
            <el-divider direction="vertical"></el-divider>
            <span class="title-english">Projects</span>
            <vue-seamless-scroll :data="listData" class="projects-scroll">
                  <div v-for="(item,index) in listData" :key="index">
                      <project-style :projectObj="item"/>
                  </div>
            </vue-seamless-scroll>
          </div>
        </div>
      </el-col>
       <el-col :span="6">
          <div class="notice-view" shadow="always">
            <el-card class="box-card">
              <div class="register">大赛报名</div>
              <div class="aboutmatch">大赛服务</div>
              <div class="update">
                <div>距报名截止</div> 
                <div class="day">{{day}}</div>
                <div>天</div>
                <div class="hour">{{hour}}</div>
                <div>时</div>
              </div>
              <el-divider>
                支持单位
              </el-divider>
              <el-empty description="暂无数据"></el-empty>
            </el-card>
          </div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <div class="footer">
          <el-divider>友情链接</el-divider>
          <div class="href">
            <el-link type="primary" class="href-item">主要链接</el-link>
            <el-link type="primary" class="href-item">主要链接</el-link>
            <el-link type="primary" class="href-item">主要链接</el-link>
            <el-link type="primary" class="href-item">主要链接</el-link>
            <el-link type="primary" class="href-item">主要链接</el-link>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import NoticeContent from './matchcenter/NoticeContent.vue'
import ProjectStyle from './matchcenter/ProjectStyle.vue'
import vueSeamlessScroll from 'vue-seamless-scroll'
export default {
    name:"MatchCenter",
    components:{
      NoticeContent,
      ProjectStyle,
      vueSeamlessScroll
    },
    data(){
      return{
        day:80,
        hour:14,
        imgList:[{id:1,imgUrl:require('../../assets/img/scrollview/img1.jpg')},
                 {id:2,imgUrl:require('../../assets/img/scrollview/img2.jpg')},
                 {id:3,imgUrl:require('../../assets/img/scrollview/img3.jpg')},
                 {id:4,imgUrl:require('../../assets/img/scrollview/img4.jpg')},],
        listData:[
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
          {"url":'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',"description":'这是一条测试数据，over！',"author":'张三'},
        ],
      }
    },
  computed:{
    defaultOption () {
      return {
        step: 1, // 数值越大速度滚动越快
        limitMoveNum: 5, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: false, // 是否开启鼠标悬停stop
        direction: 0, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 1000 // 单步运动停止的时间(默认值1000ms)
      }
    }
  }
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
    margin-top: 2px;
    padding: 8px;
    background-color:  #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: 400px;
     /* border-radius: 15px; */
  }
  .content-view{
    padding: 8px;
    height: 100%;
    display: flex;
  }
  .content-view .news-content{
    flex: 3;
    padding: 8px;
    height: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .projects-content{
    height: 680px;
    margin-top: 8px;
  }
  .projects-content .projects-show{
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
    padding-top: 8px;
  }
  .projects-scroll{
    height: 580px;
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
  }
  .news-content .title{
    font-size: 28px;
    color: #151E25;
    font-family: "微软雅黑"
  }
  .notice-view{
    height: 688px ;
    padding: 8px;
  }
  .notice-content{
    margin-top: 20px;
  }
  .box-card{
/*     border-radius: 15px; */
    max-width: 680px;
    min-width: 270px;
    background: rgba(255, 255, 255, 0.618);
    margin: 0 auto;
    text-align: center;
    color: #fff;
    height: 100%;
  }
  .image{
    width:100% ;
  }
  .register{
    width:100% ;
    height: 100%;
    background-color: #409EFF;
    border-radius: 4px;
    line-height:52px
  }
  .aboutmatch{
    width:100% ;
    height: 100%;
    margin-top: 15px;
    background-color: #409EFF;
    border-radius: 4px;
    line-height:52px
  }
  .update{
    width:100% ;
    height: 100%;
    border-radius: 4px;
    line-height:52px;
    margin-top: 15px;
    border: 1px solid #409EFF;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    color:blue ;
  }
  .update .day,.hour{
    background-color: #4050FF;
    height: 26px;
    line-height: 26px;
    margin-top: 13px;
    color: #fff;
  }
  .el-divider{
    background-color: #409EFF;
  }
  .el-empty{
    height: 100%;
  }
  .footer{
    width: 100%;
    height: 40px;
    background-color: #fff;
    box-shadow:0 2px 4px rgba(0, 0, 0, .12);
  }
  .footer .href{
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .href-item{
    margin-right: 8px;
  }
</style>