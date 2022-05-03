<template>
   <div class="login">
    <el-row class="login_row" align="middle" type="flex">
      <el-col :xs="{span:0,offset:0}"
              :sm="{span:1,offset:0}"
              :md="{span:8,offset:1}"
              :lg="{span:8,offset:3}"
              :xl="{span:8,offset:5}">
              <div class="leftCon" v-if="vis">
                  <div class="stu-info" >
                    <span style="font-size: 30px; font-weight: 550; display: block; text-align:center;">
                      江苏省高校测绘地理信息创新创业大赛
                    </span>
                    <br>
                    <div style="text-indent: 2em">
                      <p>
                        为积极响应“大众创业、万众创新”的号召，提升广大测绘青年的学术交流水平，提高我省测绘地理信息类在校大学生和研究生的创新意识和创业能力，促进测绘地理信息产学研技术应用，经研究，定于2021年10月在南京工业大学举办第六届江苏省高校测绘地理信息创新创业大赛。
                      </p>
                      <p>
                        主办：江苏省测绘地理信息学会
                      </p>
                      <p>              
                        承办：江苏省测绘地理信息学会新技术应用工作委员会 南京工业大学
                      </p>
                    </div>
                  </div>
              </div>
      </el-col>

      <el-col :xs="{span:20,offset:2}"
              :sm="{span:16,offset:3}"
              :md="{span:10,offset:4}"
              :lg="{span:10,offset:2}"
              :xl="{span:8,offset:0}">
        <el-card class="login-card" shadow="always">
          <div style="width:100%; text-align: center;font-weight: bold;font-size: 20px;">大赛报名</div>
           <el-tabs v-model="activeName"
                 stretch="true"
                 @tab-click="handleClick">
            <el-tab-pane label="学生用户" name="first">
                <el-form ref="loginForm"
                    label-position='right'
                    label-width="auto"
                    :model='loginForm.data'
                    :rules='loginForm.rule'>
                    <el-form-item label="账号" prop="name" >
                         <el-input
                            placeholder="邮箱/手机号码"
                            prefix-icon="el-icon-user-solid"
                            v-model="loginForm.data.name">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                            type='password'
                            placeholder="请输入密码"
                            prefix-icon="el-icon-lock"
                            @keyup.enter.native='doEnter'
                            v-model="loginForm.data.password">
                        </el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="教师用户" name="second">
                     <el-form ref="loginForm"
                    label-position='right'
                    label-width="auto"
                    :model='loginForm.data'
                    :rules='loginForm.rule'>
                    <el-form-item label="账号" prop="name" >
                         <el-input
                            placeholder="请输入账号"
                            prefix-icon="el-icon-user-solid"
                            v-model="loginForm.data.name">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                            type="password"
                            placeholder="请输入密码"
                            prefix-icon="el-icon-lock"
                            @keyup.enter.native='doEnter'
                            v-model="loginForm.data.password">
                        </el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
            <el-tab-pane label="专家用户" name="third">
                     <el-form ref="loginForm"
                    label-position='right'
                    label-width="auto"
                    :model='loginForm.data'
                    :rules='loginForm.rule'>
                    <el-form-item label="账号" prop="name" >
                         <el-input
                            placeholder="请输入账号"
                            prefix-icon="el-icon-user-solid"
                            v-model="loginForm.data.name">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                            placeholder="请输入密码"
                            prefix-icon="el-icon-lock"
                            @keyup.enter.native='doEnter'
                            v-model="loginForm.data.password">
                        </el-input>
                    </el-form-item>
                </el-form>
            </el-tab-pane>
          </el-tabs>
          <el-button type="primary" @click="doEnter" class="enter-button">登录</el-button>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:"Login",
    data(){
        return{
        vis: true,
        activeName: 'second',
        selectName:'',
        loginForm: {
            data: {
            name: '',
            password: ''
         },
        rule: {
          name: [
            {required: true, message: '请输入账号', trigger: 'blur'},
            {pattern: '^([0-9]{9})$', message: '账号不能为空', trigger: 'blur'}
          ],
          password: [
            {required: true, message: '密码不能为空', trigger: 'blur'},
            {
              min: 6,
              max: 16,
              pattern: "^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$",
              message: '密码为6-16位字母与数字组成,请输入正确的密码',
              trigger: 'blur'
            }
          ],
        }
      },
     }
    },
    mounted(){
        this.vis = document.body.clientWidth >= 992;
            window.addEventListener('resize', () => {
            this.vis = document.body.clientWidth >= 992;
        })
    },
    methods:{
         handleClick(key){
           this.selectName = key.name;
         },
        doEnter(){
          if(this.selectName=="first"){
            console.log(this.loginForm.password)
            if(this.loginForm.data.name=="190150370"&& this.loginForm.data.password=="hwj123456789"){
                this.$router.push({name:'matchcenter',})
            }else{
              this.$message.error('密码错误');
            }
          }
        }
    }
}
</script>

<style>
p {
    margin: 0
  }
  .login-card {
    border-radius: 15px;
    max-width: 430px;
    min-width: 270px;
    background: rgba(255, 255, 255, 0.618);
    margin: 0 auto;
  }

  .el-form {
    width: 95%;
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
      background-color: #EE9B86;
  }
  .register-button{
      width: 200px;
      border-color: transparent;
      background-color: #EE9B86;
  }
  .enter-button:active {
    background-color: #efaa82;
  }

  .enter-button {
    border-color: transparent;
    width: 100%;
    background-color: #EE9B86;
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

  .login_row {
    max-width: 2600px;
    position: absolute;
    margin: auto;
    left: 0;
    right: 0;
    top: -10%;
    bottom: 0;
  }
  
  .login{
    width: 100%;
    height: 100%;
    background: url("http://chat-image.muchen7.cn/stasta-background.webp") no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

</style>