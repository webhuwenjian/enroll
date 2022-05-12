<template>
  <div class="info-window">
    <el-dialog title="参赛队伍详细信息" 
        :visible="visible"
        :before-close="handleClose"
        style="over-flow:auto;">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane label="队伍信息" name="first">
              <el-descriptions title="" direction="vertical" :column="4" border>
                <el-descriptions-item label="指导老师">{{projectInfo.teacherName}}</el-descriptions-item>
                <el-descriptions-item label="联系电话">{{projectInfo.teacherTelephone}}</el-descriptions-item>
                <el-descriptions-item label="微信" :span="2">{{projectInfo.teacherWechat}}</el-descriptions-item>
                <el-descriptions-item label="参赛类别">{{projectInfo.teamCategory}}</el-descriptions-item>
                <el-descriptions-item label="系统登录账户">{{projectInfo.username}}</el-descriptions-item>
                <el-descriptions-item label="系统登录密码">{{projectInfo.password}}</el-descriptions-item>
              </el-descriptions>
            </el-tab-pane>
            <el-tab-pane label="人员信息" name="second">
               <div v-for="(item,index) in teamInfo" :key="index" >
                <el-descriptions title="" direction="vertical" :column="4" border>
                    <el-descriptions-item label="选手姓名">{{item.name}}</el-descriptions-item>
                    <el-descriptions-item label="学校">{{item.school}}</el-descriptions-item>
                    <el-descriptions-item label="学号" :span="2">{{item.studentID}}</el-descriptions-item>
                    <el-descriptions-item label="专业">{{item.major}}</el-descriptions-item>
                    <el-descriptions-item label="参赛类别">{{item.teamCategory}}</el-descriptions-item>
                    <el-descriptions-item label="联系电话">{{item.telephone}}</el-descriptions-item>
                </el-descriptions>
               </div>
            </el-tab-pane>
         </el-tabs>
         <div slot="footer" class="dialog-footer">
            <el-button type="primary" @click="reviewPass">审核通过</el-button>
            <el-button type="primary" @click="cancel">取消</el-button>
         </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name:'InfoWindow',
    props:[
        "visible",
        "projectInfo",
        "teamInfo",
        "sequennceNum"
    ],
    mounted(){
        console.log(this.InfoData)
        this.infoData = this.InfoData
    },
    data(){
        return{
            activeName:'first',
            infoData:null
        }
    },
    watch:{
        InfoData(newVal,oldVal){
            this.infoData = newVal
            console.log(this.infoData)
        }
    },
    methods:{
        reviewPass(){
            this.$emit('updateCheck',{result:1,num:this.sequennceNum})
        },
        cancel(){
            this.visible = false
            this.$emit('cancel',this.visible)
        },
        handleClose(done){
            done();
            this.visible = false
            this.$emit('cancel',this.visible)
        },
        handleClick(){

        }
    }
}
</script>

<style>

</style>