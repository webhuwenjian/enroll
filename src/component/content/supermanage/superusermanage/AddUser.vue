<template>
  <div class="add-user">
    <el-row>
        <el-col :span="24">
          <div class="add-content">
            <el-card  class="box-card" shadow="always">
              <el-form ref="form" :model="form" v-loading="loading" >
                <el-form-item label="用户名">
                  <el-input v-model="form.username"></el-input>
                </el-form-item>
                <el-form-item label="密码">
                  <el-input type="password" v-model="form.password"></el-input> 
                </el-form-item>
             <!--     <el-form-item label="用户身份">
                 <el-input v-model="form.identity"></el-input> 
                </el-form-item> -->
                <el-form-item label="报名单位">
                 <el-input v-model="form.school"></el-input> 
                </el-form-item>
            <!--     <el-form-item label="联系电话">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item> -->
              </el-form>
              <div class="btn-content">
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button type="primary" @click="onEmpty">清屏</el-button>
              </div>
            </el-card>
          </div>
        </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'AddUser',
    data(){
        return{
            loading:false,
            form:{
                username:'',
                password:'',
                identity:'',
                school:'',
               /*  phone:'' */
            },
            newIndentity:'',
       }
    },

    mounted(){
        this.loadUser();
    },
    methods:{
       async onSubmit(){
           this.loading = true
           console.log(this.newIndentity)
           if(this.form.username!=""&&
            this.form.password!=""&&
            this.form.school!=""){
                let data = this.$qs.stringify({
                username:this.form.username,
                password:this.form.password,
                identity:this.form.identity,
                school:this.form.school
                });
                const{data:res} = await this.$http({
                    method:'post',
                    url:'/manage/SchoolRegister',
                    data:data,
                })
                if(res.status===200){
                    this.loading=false
                    this.$alert('用户添加成功', '', {
                    confirmButtonText: '确定',
                    callback:this.onEmpty(),
                     });
                }else{
                    this.loading=false
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
        }
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