<template>
  <div class="edit-user"> 
    <el-dialog title="修改专家账户" 
    :visible.sync="visible"
    :before-close="handleClose">
        <el-form :model="form">
          <el-form-item label="账 户:" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密 码:" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="评审类别:" :label-width="formLabelWidth">
            <el-select v-model="form.school " placeholder="请选择评审类别">
              <el-option label="创新开发组" value="创新开发组"></el-option>
              <el-option label="创新设计组" value="创新开发组"></el-option>
              <el-option label="创业计划组" value="创新开发组"></el-option>
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
    name:'EditExpert',
    props:[
        "visible",
        "form",
        "info"
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
          console.log(this.oldForm)
          let token = sessionStorage.getItem('token')
            this.$http.post('/manage/SchoolUpdate',
            {
                username:this.info.username,
                school:this.info.school,
                updateInfo:{
                    username:this.form.username,
                    password:this.form.password
                }

            },
            {
              headers:{
                'Authorization':'Bearer '+token
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