<template>
  <div class="login">
       <el-row>
      <el-col :span="24">
        <div class="login-bar">
          <!-- 工作人员登录入口 -->
          <el-card class="login-card" shadow="always">
            <div style="width:100%; text-align: center;font-weight: bold;font-size: 20px;">江苏省高校测绘地理信息创新创业大赛</div>
                  <el-form ref="loginForm"
                      label-position='right'
                      label-width="auto"
                      :model='loginForm2.data'
                      :rules='loginForm2.rule'>
                      <el-form-item  prop="name" >
                        <label slot="label" >账&nbsp&nbsp&nbsp&nbsp号</label>
                          <el-input
                              placeholder="邮箱/手机号码"
                              prefix-icon="el-icon-user-solid"
                              v-model="loginForm2.data.name">
                          </el-input>
                      </el-form-item>
                      <el-form-item  prop="password">
                        <label slot="label" >密&nbsp&nbsp&nbsp&nbsp码</label>
                          <el-input
                              type='password'
                              placeholder="请输入密码"
                              prefix-icon="el-icon-lock"
                              @keyup.enter.native='doEnter'
                              v-model="loginForm2.data.password">
                          </el-input>
                      </el-form-item>
                      <el-form-item  prop="">
                        <label slot="label" >角&nbsp&nbsp&nbsp&nbsp色</label>
                        <el-select style="width:100%" 
                              v-model="value" 
                              @change="onChange"
                              placeholder="请选择">
                          <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                          </el-option>
                        </el-select>
                      </el-form-item>
                  </el-form>
            <el-button type="primary" @click="doEnter" class="enter-button">登录</el-button>
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:'WorkLogin',
    data(){
        return{
            loginForm2: {
            data: {
            name: '',
            password: '',
            role:''
            },
        rule: {
          name: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            /* {pattern: '^([0-9]{9})$', message: '账号不能为空', trigger: 'blur'} */
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
        /*     {
              min: 6,
              max: 16,
              pattern: "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$",
              message: '密码为6-16位字母与数字组成,请输入正确的密码',
              trigger: 'blur'
            } */
          ],
        }
        },
        options:[{value:"管理员",label:"参赛单位"},
        {value:"专家用户",label:"专家用户"},
        {value:"超级管理员",label:"管理员用户"}],
        value:''
        }
    },
    methods:{
         handleClick(key){
           this.selectName = key.name;
         },
         onChange(res){
           this.loginForm2.data.role=res
           console.log(res)
         },
       async doEnter(){
          console.log(this.loginForm2.data)
         if(this.loginForm2.data.name!=""&&
            this.loginForm2.data.password!=""&&
            this.loginForm2.data.role!=""){
            const{data:res} = await this.$http.post('/Login',{
            username:this.loginForm2.data.name,
            password:this.loginForm2.data.password,
            identity:this.loginForm2.data.role
          }) 
          console.log(res)
          if(res.status===200){
            this.$store.commit('produce',res.token)
            sessionStorage.setItem("token", res.token);
            if(this.loginForm2.data.role==='超级管理员'){
              this.$router.push({name:'supermanage',params:{}})
            }else if(this.loginForm2.data.role==='管理员'){
              this.$router.push({name:'usermanage',params:{school:res.data[0].school}})
              this.$store.commit('getschool',res.data[0].school)
              sessionStorage.setItem("school", res.data[0].school);
            }
          }else{
            this.$message.error('账号或密码错误！');
          }
         }else{
           this.$message.error('账号或密码不能为空');
         }
        },
    }
}
</script>

<style scoped>
    p {
    margin: 0
  }
  .login-card {
    border-radius: 15px;
    max-width: 530px;
    min-width: 450px;
    background: rgba(255, 255, 255, 0.618);
    margin: 0 auto;
   /*  margin-top: 80px; */
    display: flex;
    justify-content: center;
  }
  .el-card__body{
    width: 100%;
    height: 100%;
  }
  .el-form {
    width: 100%;
    margin: 10px auto;
  }

  .el-form-item {
    margin-top: 40px;
  }
  .student-login{
      width: 100%;
      margin-top: 23px;
      display: flex;
      flex-direction: row;
     /*  justify-content: space-around; */
      align-items: center;
      justify-content: center;
    }
  .login-button{
      width: 200px;
      border-color: transparent;
     /*  background-color: #EE9B86; */
  }
  .register-button{
      width: 200px;
      border-color: transparent;
      /* background-color: #EE9B86; */
  }
  .enter-button:active {
    background-color: #efaa82;
  }

  .enter-button {
    border-color: transparent;
    width: 100%;
   /*  background-color: #EE9B86; */
  }
  

  .leftCon{
    max-width: 490px;
    min-width: 400px;
    padding: 30px;
    background-color: rgba(	248,248,255,0.2) ;
    border-radius: 20px;
  }

  .stu-info {
     max-width: 510px;
     min-width: 400px;
    line-height: 30px;
    color: 	#191970;
  }

  .login-bar {
    width: 100vw;
    height: 100%;
  }
  .login{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: right;
    align-items: center;
    background: url('../../assets/img/login.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
</style>