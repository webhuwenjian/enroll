<template>
  <div class="add-user">
    <el-dialog title="注册专家账户" 
    :visible.sync="visible"
    :before-close="handleClose">
        <el-form :model="form" >
          <el-form-item label="姓 名:" :label-width="formLabelWidth">
            <el-input v-model="form.names" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="单 位:" :label-width="formLabelWidth">
            <el-input v-model="form.school" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="赛道类别:" :label-width="formLabelWidth">
            <el-select v-model="form.teamCategory " placeholder="请选择评审类别">
              <el-option label="本科生创新开发组" value="本科生创新开发组"></el-option>
              <el-option label="本科生创新设计组" value="本科生创新设计组"></el-option>
              <el-option label="本科生创业计划组" value="本科生创业计划组"></el-option>
              <el-option label="研究生创新开发组" value="研究生创新开发组"></el-option>
              <el-option label="研究生创新设计组" value="研究生创新设计组"></el-option>
              <el-option label="研究生创业计划组" value="研究生创业计划组"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="职务/职称:" :label-width="formLabelWidth">
            <el-input v-model="form.job" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="身份证号:" :label-width="formLabelWidth" >
            <el-input v-model="form.idcard" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="手机号:" :label-width="formLabelWidth">
            <el-input v-model="form.telephone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="银行账号:" :label-width="formLabelWidth">
            <el-input v-model="form.bankaccount" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="开户行(至支行):" :label-width="formLabelWidth">
            <el-input v-model="form.bank" autocomplete="off"></el-input>
          </el-form-item>
           <el-form-item label="账 号:" :label-width="formLabelWidth">
            <el-input v-model="form.username" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密 码:" :label-width="formLabelWidth">
            <el-input v-model="form.password" autocomplete="off"></el-input>
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
    name:'AddExpert',
    props:[
      "visible",
      "identity"
    ],
    data(){
        return{
            loading:false,
            formLabelWidth: '120px',
            form:{
                names:'',
                school:'',
                teamCategory:'',
                job:'',
                idcard:'',
                telephone:'',
                bankaccount:'',
                bank:'',
                username:'',
                password:'',
               /*  phone:'' */
            },
        /*     rule:{
              idcard:[
                 {required: true, message: '请输入身份证号码', trigger: 'blur'}, 
                 {pattern: '/^[1-9]\d{5}(19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}{0-9Xx}$/', message: '身份证号输入有误', trigger: 'blur'} 
              ]
            }, */
            tempVisible:this.visible
       }
    },

    mounted(){
        /* this.loadUser(); */
    },
    methods:{
       async onSubmit(){
           this.loading = false
           console.log(this.form)
           let token = sessionStorage.getItem('token')
           for(let i in this.form){
              if(this.form[i]==""){
                this.$message.error("必填项不能为空")
                return
              }
           }
           if(true){
                let data = this.$qs.stringify({
                  expertInfo:{
                    name:this.form.names,
                    school:this.form.school,
                    teamCategory:this.form.teamCategory,
                    job:this.form.job,
                    idcard:this.form.idcard,
                    telephone:this.form.telephone,
                    bankaccount:this.form.bankaccount,
                    bank:this.form.bank,
                    username:this.form.username
                  },
                  loginInfo:{
                    username:this.form.username,
                    password:this.form.password,
                    school:this.form.school
                  }
                });
             /*    const{data:res} = await this.$http({
                    method:'post',
                    url:'/manage/expertRegister',
                    data:data,
                    headers:{
                      'Authorization':'Bearer '+token
                    }
                }) */
                const{data:res} = await this.$http.post('/manage/expertRegister',
                {
                    expertInfo:{
                    name:this.form.names,
                    school:this.form.school,
                    teamCategory:this.form.teamCategory,
                    job:this.form.job,
                    idcard:this.form.idcard,
                    telephone:this.form.telephone,
                    bankaccount:this.form.bankaccount,
                    bank:this.form.bank,
                    username:this.form.username
                  },
                  loginInfo:{
                    username:this.form.username,
                    password:this.form.password,
                    school:this.form.school
                  }
                },
                {
                  headers:{
                  'Authorization':'Bearer '+token
                  }
                })
                console.log(res)
                if(res.status===200){
                    this.loading=false
                    this.cancel()
                    this.$alert('专家添加成功', '', {
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
          for(let i in this.form){
            this.form[i] = ""
          }
        },
       /*  loadUser(){
            if(this.$route.params.from==="edituser"){
              this.form=this.$route.params.data
            }
            this.newIndentity= this.$route.params.identity
        }, */
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