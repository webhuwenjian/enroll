<template>
  <div class="match-center">
    <el-row>
      <el-col :span="24">
        <header-menu/>
      </el-col>
    </el-row>
     <!--  轮播图&&登录入口面板 -->
    <el-row>
      <el-col :span="1">
        <div style="color:white;font-size:2px;">1</div>
      </el-col>
      <el-col :span="17">
        <div class="scroll">
          <div class="scroll-view">
           <el-carousel height="500px" style="padding:8px">
              <el-carousel-item v-for="item in imgList" :key="item.id">
                <el-image
                style="width:100%;height:100%;"
                  :src="item.imgUrl"
                  fit="contain">
                </el-image>
              </el-carousel-item>
            </el-carousel>
        </div>
        </div>
      </el-col>
      <el-col  :span="5">
        <div class="notice-view" shadow="always">
            <el-card class="box-card">
              <div class="register" @click="register">参赛队伍登录入口</div>
              <div class="aboutmatch" @click="doWork">工作人员登录入口</div>
              <div class="update">
                <div>距第七届大赛开幕还有</div> 
                <div class="day">{{day}}</div>
                <div>天</div>
              </div>
              <div class="orgnaization">
                组织单位
              </div>
                <div class="orgnaization-name">
                  <el-divider>主办单位</el-divider>
                  <span class="host">江苏省测绘地理信息学会</span>
                  <el-divider>承办单位</el-divider>
                  <span class="undertake">江苏省测绘地理信息学会新技术应用工作委员会</span>
                  <span class="undertake"></span>
                  <el-divider>协办单位</el-divider>
                  <span class="co-organizer">飞燕航空遥感技术有限公司</span>
                </div>
            </el-card>
          </div>
      </el-col>
    </el-row>
      <!-- 通知公告&&往期回顾 -->
    <el-row>
      <el-col :span="1">
        <div style="color:white;font-size:2px;">1</div>
      </el-col>
      <el-col :span="11">
          <div class="content-view">
              <div class="news-content">
                <div style="width:100%">
                  <div class="title">
                    <span class="title-content">通知公告|Notice</span>
                    <span class="more-content"><i class="el-icon-d-arrow-right">more</i></span>
                  </div>
                  <div class="notice-content" v-for="(item,index) in content" :key="index">
                    <notice-content class="notice" :content="item"/>
                    <el-divider></el-divider>
                  </div>
                </div>
              </div>
          </div>
      </el-col>
      <!-- <el-col :span="0.5">
        <div style="color:white;font-size:2px;">1</div>
      </el-col> -->
       <el-col :span="11">
          <div class="content-view">
              <div class="news-content">
                <div style="width:100%">
                  <div class="title">
                    <span class="title-content">往届回顾|Review</span>
                    <span class="more-content"><i class="el-icon-d-arrow-right">more</i></span>
                  </div>
                  <div class="notice-content" v-for="(item,index) in review" :key="index">
                    <notice-content :content="item"/>
                    <el-divider></el-divider>
                  </div>
                </div>
              </div>
          </div>
      </el-col>
    </el-row>
     <!--  项目风采 -->
    <el-row>
      <el-col :span="1">
        <div style="color:white;">2</div>
      </el-col>
      <el-col :span="22">
        <div class="projects-content">
          <div class="projects-title">
            <span class="projects-title-content">项目风采|ProjectStyle</span>
          </div>
          <div class="projects-style">
                <vue-seamless-scroll :data="listData" :class-option="optionLeft" class="seamless-warp">
                  <div class="item">
                      <div class="projects-item" v-for="(item,index) in listData" :key="index">
                          <project-style :projectObj="item"/>
                      </div>
                  </div>
                </vue-seamless-scroll>
          </div>
        </div>
      </el-col>
    </el-row>
    <!--   底部 -->
    <el-row>
      <el-col :span="24">
        <div class="footer">
           <el-divider style="background-color: #fff;">友情链接</el-divider>
          <div class="href">
            <el-link type="primary" class="href-item"  href="http://www.chxh.cn/" target="_blank" >江苏省测绘地理信息学会</el-link>
            <el-link type="primary" class="href-item" href="http://zrzy.jiangsu.gov.cn/" target="_blank">江苏省自然资源厅</el-link>
        <!--     <el-link type="primary" class="href-item">主要链接</el-link>
            <el-link type="primary" class="href-item">主要链接</el-link>
            <el-link type="primary" class="href-item">主要链接</el-link> -->
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import HeaderMenu from '../../header/HeaderMenu.vue'
import NoticeContent from './NoticeContent.vue'
import ReviewContent from './ReviewContent.vue'
import ProjectStyle from './ProjectStyle.vue'
export default {
    name:"MatchCenter",
    components:{
      HeaderMenu,
      NoticeContent,
      ReviewContent,
      ProjectStyle,
    },
    data(){
      return{
       /*  isShow:false, */
        day:'',
        hour:14,
        supportImg:[{imageUrl:require('../../../assets/img/logo.png')},
                     {imageUrl:require('../../../assets/img/logo2.png')},],
        imgList:[{id:1,imgUrl:require('../../../assets/img/scrollview/img1.jpg')},
                 {id:2,imgUrl:require('../../../assets/img/scrollview/img2.jpg')},
                 {id:3,imgUrl:require('../../../assets/img/scrollview/img3.jpg')},
                 {id:4,imgUrl:require('../../../assets/img/scrollview/img5.jpg')},],
        listData:[
          {"url":require('../../../assets/img/projectstyle/project1.png'),"description":'研究生开发组一等奖作品',"author":'张三'},
          {"url":require('../../../assets/img/projectstyle/project2.png'),"description":'研究生开发组特等奖作品',"author":'张三'},
          {"url":require('../../../assets/img/projectstyle/project3.png'),"description":'本科生开发组一等奖作品',"author":'张三'},
          {"url":require('../../../assets/img/projectstyle/project4.png'),"description":'本科生开发组特等奖作品',"author":'张三'},
          {"url":require('../../../assets/img/projectstyle/project5.png'),"description":'研究生创意组一等奖作品',"author":'张三'},
          {"url":require('../../../assets/img/projectstyle/project6.jpg'),"description":'研究生创意组特等奖作品',"author":'张三'},
          {"url":require('../../../assets/img/projectstyle/project6.jpg'),"description":'研究生创业组一等奖作品',"author":'张三'},
        ],
        content:[
          {"month":'2/28',"year":"2022","title":'关于举办“第七届江苏省高校测绘地理信息创新创业大赛”的第１号通知',"href":'http://www.chxh.cn/news.asp?act=xx&ID=5269&ClassID=1&ParentID=181'},
          {"month":'2/28',"year":"2022","title":'关于举办“第七届江苏省高校测绘地理信息创新创业大赛”的第１号通知',"href":'http://www.chxh.cn/news.asp?act=xx&ID=5269&ClassID=1&ParentID=181'},
          {"month":'2/28',"year":"2022","title":'关于举办“第七届江苏省高校测绘地理信息创新创业大赛”的第１号通知',"href":'http://www.chxh.cn/news.asp?act=xx&ID=5269&ClassID=1&ParentID=181'},
          {"month":'2/28',"year":"2022","title":'关于举办“第七届江苏省高校测绘地理信息创新创业大赛”的第１号通知 ',"href":'http://www.chxh.cn/news.asp?act=xx&ID=5269&ClassID=1&ParentID=181'},
          {"month":'2/28',"year":"2022","title":'关于举办“第七届江苏省高校测绘地理信息创新创业大赛”的第１号通知 ',"href":'http://www.chxh.cn/news.asp?act=xx&ID=5269&ClassID=1&ParentID=181'},
          {"month":'2/28',"year":"2022","title":'关于举办“第七届江苏省高校测绘地理信息创新创业大赛”的第１号通知 ',"href":'http://www.chxh.cn/news.asp?act=xx&ID=5269&ClassID=1&ParentID=181'},
          ],
         review:[
           {"month":'11/2',"year":'2021',"title":'第六届江苏省高校测绘地理信息创新创业大赛圆满落幕',"href":'https://baijiahao.baidu.com/s?id=1715310548150866413&wfr=spider&for=pc'},
           {"month":'11/5',"year":'2021',"title":'省级学会|江苏省测绘地理信息学会主办第六届江苏省高校测绘地理信息创新创业大赛',"href":'https://m.thepaper.cn/baijiahao_15253012'},
           {"month":'11/1',"year":'2021',"title":'第六届江苏省高校测绘地理信息创新创业大赛在南京举办',"href":'https://m.thepaper.cn/baijiahao_15223642'},
           {"month":'11/20',"year":'2020',"title":'省级学会|“瞰景杯”第五届江苏省高校测绘地理信息创新创业大赛在徐州举办',"href":'https://m.thepaper.cn/baijiahao_10080815'},
           {"month":'11/27',"year":'2019',"title":'“国图杯”第四届江苏省高校测绘地理信息创新创业大赛在南京成功举办',"href":'https://m.thepaper.cn/baijiahao_5074735'},
           {"month":'10/14',"year":'2018',"title":'“智途杯”第三届江苏省高校测绘地理信息创新创业大赛在河海大学成功举办',"href":'http://www.chxh.cn/news.Asp?act=xx&ID=939&ClassID=1&ParentID=208'},
         ] 
      }
    },
  computed:{
    defaultOption () {
      return {
        step: 1, // 数值越大速度滚动越快
        //limitMoveNum:2, // 开始无缝滚动的数据量 this.dataList.length
        hoverStop: true, // 是否开启鼠标悬停stop
        direction: 2, // 0向下 1向上 2向左 3向右
        openWatch: true, // 开启数据实时监控刷新dom
        singleHeight: 0, // 单步运动停止的高度(默认值0是无缝不停止的滚动) direction => 0/1
        singleWidth: 0, // 单步运动停止的宽度(默认值0是无缝不停止的滚动) direction => 2/3
        waitTime: 0 // 单步运动停止的时间(默认值1000ms)
      }
    },
    optionLeft () {
                    return {
                            direction: 2,
                            limitMoveNum: 7
                        }
                }
  },
  mounted(){
   /*  this.$nextTick(()=>{
      this.isShow = true
    }) */
    //更新时间
    this.updateDay();
  },
  methods:{
    register(){
      /* this.$router.push({name:'login',params:{isRole:true}}) */
      let routeUrl = this.$router.resolve({name:'login',query:{isRole:true}})
      window.open(routeUrl.href,'_blank')
    },
    doWork(){
      /* this.$router.push({name:'login',params:{isRole:false}}) */
      let routeUrl = this.$router.resolve({name:'login',query:{isRole:false}})
      window.open(routeUrl.href,'_blank')
    },
    updateDay(){
      setInterval(() => {
        let nowTime = new Date()
        let time = new Date(2022,6,30,0,0,0)
        let num = time.getTime() - nowTime.getTime()
        this.day = parseInt(num/(24*60*60*1000))
      }, 1000);
    }
  }
}
</script>

<style scoped>
/*   .match-center{
    margin-top: 4px;
  } */
  .grid-content {
    height: 100%;
    background-color: #fff;
   /*  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1); */
  }
  .scroll{
    height: 100%;
    padding: 8px;
  }
  .scroll-view{
    margin-top: 2px;
    background-color:  #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    height: 100%;
     /* border-radius: 15px; */
  }
  .content-view{
    padding-top: 4px;
    margin-left: 7px;
    height: 100%;
    display: flex;
  }
  .content-view .news-content{
    flex: 3;
   /*  padding: 8px; */
   padding-bottom: 8px;
    height: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .title{
    width: 100%;
    height: 60px;
    font-style: italic;
    background: url('../../../assets/img/title_notice.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    position: relative;
    cursor: default;
  }
  .title-content{
    color: #fff;
    font-size: 20px;
    line-height: 60px;
    margin-left: 10px;
  }
  .more-content{
    color: #fff;
    position: absolute;
    right: 8px;
    height: 60px;
    line-height: 60px;
  }
  .more-content:hover{
    color:#0033ff ;
  }
  .review-view{
    padding-top: 4px;
    /* margin-left: 8px; */
    margin-right: 7px;
    height: 100%;
    display: flex;
  }
  .review-view .review-content{
    flex: 3;
    padding: 8px;
    height: 100%;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .review{
    margin-top: 20px;
  }
  .review:hover{
    background-color: #dddddd;
  }
  .projects-content{
    height: 100%;
    padding-top: 8px;
    margin-left: 7px;
    margin-bottom: 8px;
  }
  .projects-style{
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  }
  .projects-title{
    width: 100%;
    height: 60px;
    background: url('../../../assets/img/projects_title.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .projects-title-content{
    color: #fff;
    font-size: 20px;
    line-height: 60px;
    margin-left: 10px;
    font-style: italic;
  }
  .seamless-warp{
     overflow: hidden;
     height: 180px;
     width: 100vw;
  }
  div.item {
    width: 100%;
    height: 180px;
    background-color: #fff;
    display: flex;
  }
  .projects-item{
      width: 200px;
      margin-right: 20px;
 }
  .notice-view{
    height: 516px ;
    padding-top: 8px;
    cursor: default;
  }
  .notice-content{
   /*  margin-top: 20px; */
   margin-left: 8px;
   margin-right: 8px;
  }
  .box-card{
/*     border-radius: 15px; */
    /* max-width: 680px;
    min-width: 270px; */
    width: 100%;
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
    font-size: 20px;
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
  .orgnaization{
    width:100% ;
    height: 100%;
    line-height:52px;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    flex-wrap: nowrap;
    background-color:#4050FF ;
  }
  .orgnaization-name{
    font-size: 18px;
    height: 200px;
    overflow: auto;
  }
 .host,.undertake,.co-organizer{
    color: #000;
    font-size: 10px;
  }
  .el-divider{
    background-color: #409EFF;
  }
  .el-empty{
    height: 100%;
  }
  .img-bar{
    margin-top: 20px;
  }
  .right-bar{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .back-top{
    width: 110px;
    height:358px;
    position: fixed;
    top:100px;
    right: 20px;
    background: url('../../../assets/img/back.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
  .footer{
    width: 100%;
    height: 80px;
    background-color: #409EFF;
    opacity: 0.8;
    box-shadow:0 2px 4px rgba(0, 0, 0, .12);
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .footer .href{
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .href-item{
    margin-right: 8px;
    color: #fff;
  }
  .notice-content  .el-divider--horizontal{
    margin: 0;
  }
    /*滚动条样式*/
.orgnaization-name::-webkit-scrollbar {
    width: 4px;    
}
.orgnaization-name::-webkit-scrollbar-thumb {
    border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.orgnaization-name::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
 }
 .match-center::-webkit-scrollbar {
    width: 4px;    
}
.match-center::-webkit-scrollbar-thumb {
    border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.match-center::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
 }
</style>