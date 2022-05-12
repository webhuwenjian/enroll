<template>
  <div class="notice-manage">
    <el-card  class="box-card" shadow="always">
         <el-form ref="form" :model="form" v-loading="loading" label-width="80px" >
                <el-form-item label="通知标题">
                  <el-col :span="24"><el-input type="textarea" v-model="form.title"></el-input></el-col>
                </el-form-item>
                <el-form-item label="通知单位">
                  <el-col :span="24"><el-input type="text" v-model="form.address"></el-input> </el-col>
                </el-form-item>
                <el-form-item label="通知时间">
                  <el-date-picker
                    v-model="form.date"
                    type="datetime"
                    placeholder="选择日期时间">
                 </el-date-picker>
                </el-form-item>
                 <el-form-item label="通知内容">
                 <el-input style="height:200px" autosize  type="textarea" v-model="form.content"></el-input>
                </el-form-item>
         </el-form>
         <div class="btn-content">
            <el-button type="primary" @click="onSubmit">提交</el-button>
            <el-button type="primary" @click="onEmpty">清屏</el-button>
        </div>
    </el-card>
  </div>
</template>

<script>
export default {
    name:'NoticeManage',
    data(){
        return{
            form:{
                title:'',
                date:'',
                address:'',
                content:''
            }
        }
    },
    methods:{
        onSubmit(){},
        onEmpty(){}
    }
}
</script>

<style scoped>
.notice-manage{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.box-card{
    width: 800px;
    height: 90%;
    overflow: auto;
}
.btn-content{
  width: 100%;
  display: flex;
  justify-content: center;
}
.el-input{
    width: 100%;
}
</style>