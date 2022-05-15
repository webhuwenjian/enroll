<template>
  <div class="edit-user"> 
    <el-dialog title="修改单位账户" 
    :visible.sync="visible"
    :before-close="handleClose">
        <el-form :model="form">
          <el-form-item label="账 户:" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密 码:" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单 位:" :label-width="formLabelWidth">
            <el-select v-model="form.school " placeholder="请选择参赛单位">
              <el-option label="南京大学" value="南京大学"></el-option>
              <el-option label="东南大学" value="东南大学"></el-option>
              <el-option label="河海大学" value="河海大学"></el-option>
              <el-option label="南京理工大学" value="南京理工大学"></el-option>
              <el-option label="南京师范大学" value="南京师范大学"></el-option>
              <el-option label="中国矿业大学" value="中国矿业大学"></el-option>
              <el-option label="南京邮电大学" value="南京邮电大学"></el-option>
              <el-option label="南京信息工程大学" value="南京信息工程大学"></el-option>
              <el-option label="南京林业大学" value="南京林业大学"></el-option>
              <el-option label="南京工业大学" value="南京工业大学"></el-option>
              <el-option label="江苏海洋大学" value="江苏海洋大学"></el-option>
            </el-select>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="cancel">取 消</el-button>
          <el-button type="primary" @click="onSubmit">确认修改</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
    name:'EditUser',
    props:[
        "visible",
        "form"
    ],
    data(){
        return{
            formLabelWidth: '120px',
            form:this.form,
            oldForm:this.form
        }
    },
    methods:{
        onSubmit(){
            this.$http.post('/manage/SchoolUpdate',
            {
                username:this.oldForm.username,
                school:this.oldForm.school,
                updateInfo:{
                    username:this.form.username,
                    password:this.form.password
                }
            }).then((res)=>{
                console.log(res)
                if(res.data.status==200){
                    this.cancel()
                   /*  this.$alert('用户修改成功', '提示', {
                    confirmButtonText: '确定',
                    }) */
                    this.$message.success("用户修改成功")
                }else{
                     this.cancel()
                    this.$message.error("用户修改失败")
                }
            }).catch((error)=>{
                console.log(error)
            })
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
    }
}
</script>

<style>

</style>