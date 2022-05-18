<template>
  <div class="info-window">
    <el-dialog title="参赛队伍详细信息" 
        :visible.sync="detailVisible"
        :before-close="handleClose"
        style="over-flow:auto;">
              <el-descriptions title="" direction="vertical" :column="3" border label-align="center">
                <el-descriptions-item label="姓 名" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.name}}</el-descriptions-item>
                <el-descriptions-item label="单 位" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.school}}</el-descriptions-item>
                <el-descriptions-item label="评审类别" :span="2" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.teamCategory}}</el-descriptions-item>
                <el-descriptions-item label="职务/职位" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.job}}</el-descriptions-item>
                <el-descriptions-item label="身份证号码" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.idcard}}</el-descriptions-item>
                <el-descriptions-item label="银行卡号码" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.bankaccount}}</el-descriptions-item>
                <el-descriptions-item label="开户行(支行)" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.bank}}</el-descriptions-item>
                <el-descriptions-item label="联系电话" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.telephone}}</el-descriptions-item>
                <el-descriptions-item label="账 号" labelStyle="text-align:center; font-weight:bolder;" contentStyle="text-align:center;">{{DetailInfo.username}}</el-descriptions-item>
              </el-descriptions>
         <div slot="footer" class="dialog-footer">
           <!--  <el-button type="primary" @click="reviewPass">审核通过</el-button> -->
            <el-button type="primary" @click="cancel">确定</el-button>
         </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    name:'DetailInfoWindow',
    props:[
        "detailVisible",
        "DetailInfo",
    ],
    mounted(){
        /* console.log(this.projectInfo) */
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
      /*   reviewPass(){
            this.$emit('updateCheck',{teamCategory:this.projectInfo.teamCategory})
        }, */
        cancel(){
            this.visible = false
            this.$emit('detailCancel',this.visible)
        },
        handleClose(done){
            done();
            this.visible = false
            this.$emit('detailCancel',this.visible)
        },
        handleClick(){

        }
    }
}
</script>

<style scoped>
.el-descriptions__body .el-descriptions__table .el-descriptions-item__cell {
    text-align: center;
  }
</style>