<template>
   <div class="login">
    <el-row class="login_row" align="middle" type="flex">
    <!--   <el-col :xs="{span:0,offset:0}"
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
      </el-col> -->

      <el-col :span="24">
            <!--   参赛队伍登录入口 -->
        <el-card class="login-card" v-if="this.$route.params.isRole" shadow="always">
          <div style="width:100%; text-align: center;font-weight: bold;font-size: 20px;"></div>
                <el-form ref="loginForm"
                    label-position='right'
                    label-width="auto"
                    :model='loginForm.data'
                    :rules='loginForm.rule'>
                    <el-form-item label="账号" prop="name" >
                         <el-input
                            placeholder="邮箱/手机号码"
                            prefix-icon="el-icon-user-solid"
                            v-model="loginForm.data.username">
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
          <el-button type="primary" @click="studentLogin" class="enter-button">登录</el-button>
        </el-card>
        <!-- 工作人员登录入口 -->
        <el-card class="login-card" v-else  shadow="always">
          <!-- <div style="width:100%; text-align: center;font-weight: bold;font-size: 20px;">工作人员登录入口</div> -->
          <!--   <el-popover
                placement="left"
                title="标题"
                width="200"
                trigger="manual"
                content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                v-model="visible">
                <el-button slot="reference" @click="visible = !visible">手动激活</el-button>
              </el-popover> -->
                <el-form ref="loginForm"
                    label-position='right'
                    label-width="auto"
                    :model='loginForm2.data'
                    :rules='loginForm2.rule'>
                    <el-form-item label="账号" prop="name" >
                         <el-input
                            placeholder="邮箱/手机号码"
                            prefix-icon="el-icon-user-solid"
                            v-model="loginForm2.data.name">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="密码" prop="password">
                        <el-input
                            type='password'
                            placeholder="请输入密码"
                            prefix-icon="el-icon-lock"
                            @keyup.enter.native='doEnter'
                            v-model="loginForm2.data.password">
                        </el-input>
                    </el-form-item>
                    <el-form-item label="角色" prop="">
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
      </el-col>
    </el-row>
  </div>
</template>

<script>
import qs from 'qs';
export default {
    name:"Login",
    data(){
        return{
        visible:true,
        vis: true,
        activeName: 'first',
        selectName:'',
        loginForm: {
            data: {
            username: '',
            password: '',
            role:'学生'
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
        loginForm2: {
            data: {
            name: '',
            password: '',
            role:''
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
        options:[{value:"管理员",label:"参赛单位"},
        {value:"专家用户",label:"专家用户"},
        {value:"超级管理员",label:"管理员用户"}],
        value:''
     }
    },
    mounted(){
        this.vis = document.body.clientWidth >= 992;
            window.addEventListener('resize', () => {
            this.vis = document.body.clientWidth >= 992;
        })
        console.log(this.$route.params.isRole)
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
            this.$store.commit('produce',res.status)
            sessionStorage.setItem("token", res.status);
            if(this.loginForm2.data.role==='超级管理员'){
              this.$router.push({name:'supermanage',params:{}})
            }else if(this.loginForm2.data.role==='管理员'){
              this.$router.push({name:'usermanage',params:{school:res.data[0].school}})
              this.$store.commit('getschool',res.data[0].school)
            }
          }else{
            this.$message.error('账号或密码错误！');
          }
         }else{
           this.$message.error('账号或密码不能为空');
         }
        },
        studentLogin(){
          if(this.loginForm.data.username!=""&&
              this.loginForm.data.password!=""){
                this.$http.post('/Login',{
                  username:this.loginForm.data.username,
                  password:this.loginForm.data.password,
                  identity:this.loginForm.data.role
                }).then((res)=>{
                  console.log(res)
                  if(res.data.status===200){
                    this.$router.push({name:'filesubmit',params:{school:res.data.data[0].school,
                      teamCategory:res.data.data[0].teamCategory
                    }})
                  }else{
                    this.$message.error("账号或密码错误，请重新登录")
                    this.loginForm.username=""
                    this.loginForm.password=""
                  }
                }).catch((err)=>{
                  console.log(err)
                })
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
    margin-top: 80px;
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

  .login_row {
    width: 100%;;
    height: 100vh;
    margin: auto;
    left: 0;
    right: 0;
    top: -10%;
    bottom: 0;
  }
  
  .login{
    width: 100%;
    height: 100%;
    background: url('../assets/img/login.png') no-repeat center center fixed;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }

</style>