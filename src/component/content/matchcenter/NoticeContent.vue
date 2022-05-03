<template>
  <div class="notice-content">
      <div class="notice-img">
        <el-image
            style="width: 100px; height: 100px"
            :src="url"
            :fit="fill">
        </el-image>
      </div>
      <div class="notice-date">
          <span class="date-day">05/2</span>
          <span class="date-year">2022</span>
      </div>
      <div class="notice-title">
          <el-link type="primary">这是一条测试数数据，重复一遍,这是一条测试数数据，这是一条测试数数据over！</el-link>
      </div>
  </div>
</template>

<script>
export default {
    name:'NoticeContent',
    data(){
        return{
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
        }
    },
}
</script>

<style scoped>
.notice-content{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 18px;
}
.notice-img{
    flex: 2;
    text-align: center;
}
.notice-date{
    flex: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
     box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.date-day{
    width: 80%;
    text-align: center;
    font-size: 24px;
    color: dodgerblue;
}
.notice-title{
    flex: 6;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 8px;
}
</style>