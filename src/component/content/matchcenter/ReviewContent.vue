<template>
  <div>
    <vue-seamless-scroll
      :data="dataList"
      :class-option="optionLeft"
      class="seamless-warp2"
    >
      <ul class="item">
        <li v-for="(item, index) in dataList" :key="index">
          {{ item.name }}
        </li>
      </ul>
    </vue-seamless-scroll>
  </div>
</template>

<script>
export default {
    name:'ReviewContent',
    data(){
        return{
            url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
            dataList: [
        {
          name: 1111111111,
        },
        {
          name: 21111111111,
        },
        {
          name: 31111111111,
        },
        {
          name: 41111111111,
        },
         {
          name: 51111111111,
        },
        ],
        }
    },
    computed: {
    optionLeft() {
      return {
        direction: 2,// 0向下 1向上 2向左 3向右
        limitMoveNum: 2,
      };
    },
  },
}
</script>

<style scoped>
.seamless-warp2 {
  overflow: hidden;
  height: 400px;
  width: 380px;
}
  ul.item {
    width: 1080px;}
   li {
      float: left;
      margin-right: 10px;
    }
  
</style>