<template>
  <div class="add-user">
    <el-dialog title="注册单位账户" 
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
          <el-button type="primary" @click="onSubmit">确认注册</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
export default {
    name:'AddUser',
    props:[
      "visible",
      "identity"
    ],
    data(){
        return{
            loading:false,
            formLabelWidth: '120px',
            form:{
                username:'',
                password:'',
                identity:'',
                school:'',
               /*  phone:'' */
            },
            newIndentity:'',
            tempVisible:this.visible
       }
    },

    mounted(){
        this.loadUser();
    },
    methods:{
       async onSubmit(){
           this.loading = false
           console.log(this.form)
           if(this.form.username!=""&&
            this.form.password!=""&&
            this.form.school!=""){
                let data = this.$qs.stringify({
                username:this.form.username,
                password:this.form.password,
                identity:this.identity,
                school:this.form.school
                });
                const{data:res} = await this.$http({
                    method:'post',
                    url:'/manage/SchoolRegister',
                    data:data,
                })
                if(res.status===200){
                    this.loading=false
                    this.cancel()
                    this.$alert('用户添加成功', '', {
                    confirmButtonText: '确定',
                    callback:this.onEmpty(),
                     });
                }else{
                    this.loading=false
                    this.cancel()
                    this.$alert('用户添加失败', '', {
                    confirmButtonText: '确定',
                     });
                }
           }else{
             this.$message.error("必填项不能为空")
             this.loading =false
           }
        },
        onEmpty(){
            this.form.username=''
            this.form.password=''
            this.form.identity=''
            this.form.school=''
        },
        loadUser(){
            if(this.$route.params.from==="edituser"){
              this.form=this.$route.params.data
            }
            this.newIndentity= this.$route.params.identity
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
.add-content{
    width: calc(100vw - 200px);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   /*  background-color: red; */
    padding: 4px;
}
.box-card{
    margin-top: 10px;
    width: 400px;
    height: 100%;
}
.btn-content{
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>