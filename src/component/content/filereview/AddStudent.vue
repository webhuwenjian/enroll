<template>
  <div class="add-student">
      <div class="add-content">
           <el-card class="box-card">
             <el-form ref="form" :model="form"  label-width="80px">
                <el-form-item label="指导教师">
                  <el-col :span="7">
                       <el-input v-model="form.teacherName" placeholder="教师姓名"></el-input>
                  </el-col>
                  <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                   <el-col :span="7">
                       <el-input v-model="form.teacherTelephone" placeholder="联系电话"></el-input>
                  </el-col>
                 <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                   <el-col :span="7">
                       <el-input v-model="form.teacherWeChat" placeholder="微信号"></el-input>
                  </el-col>
                </el-form-item>
                <el-form-item label="团队信息" >
                  <el-col :span="5">
                    <el-input placeholder="团队负责人姓名" v-model="form.studentOneName"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="学号" v-model="form.studentIdOne"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="专业" v-model="form.studentMajorOne"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                   <el-col :span="5">
                    <el-input placeholder="联系电话" v-model="form.studentPhoneOne"></el-input> 
                  </el-col>
                <div style="margin-top:50px;">
                    <el-col :span="5">
                    <el-input placeholder="队员姓名" v-model="form.studentTwoName"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="学号" v-model="form.studentIdTwo"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="专业" v-model="form.studentMajorTwo"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                   <el-col :span="5">
                    <el-input placeholder="联系电话" v-model="form.studentPhoneTwo"></el-input> 
                  </el-col>
                </div>
                <div style="margin-top:100px;">
                    <el-col :span="5">
                    <el-input placeholder="姓名" v-model="form.studentThreeName"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="学号" v-model="form.studentIdThree"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="专业" v-model="form.studentMajorThree"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                   <el-col :span="5">
                    <el-input placeholder="联系电话" v-model="form.studentPhoneThree"></el-input> 
                  </el-col>
                </div>
                <div style="margin-top:150px;">
                    <el-col :span="5">
                    <el-input placeholder="姓名" v-model="form.studentFourName"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="学号" v-model="form.studentIdFour"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                  <el-col :span="5">
                    <el-input placeholder="专业" v-model="form.studentMajorFour"></el-input> 
                  </el-col>
                   <el-col :span="1">
                      <div style="text-align:center">---</div>
                  </el-col>
                   <el-col :span="5">
                    <el-input placeholder="联系电话" v-model="form.studentPhoneFour"></el-input> 
                  </el-col>
                </div>
                </el-form-item>
                <el-form-item label="参赛类型">
                   <el-checkbox-group v-model="form.teamCategory" 
                        :max="1">
                        <el-checkbox label="本科生创新开发组" name="本科生创新开发组"></el-checkbox>
                        <el-checkbox label="本科生创新设计组" name="本科生创新设计组"></el-checkbox>
                        <el-checkbox label="本科生创业计划组" name="本科生创业计划组"></el-checkbox>
                        <el-checkbox label="研究生创新开发组" name="研究生创新开发组"></el-checkbox>
                        <el-checkbox label="研究生创新设计组" name="研究生创新设计组"></el-checkbox>
                        <el-checkbox label="研究生创业计划组" name="研究生创业计划组"></el-checkbox>
                    </el-checkbox-group>
                </el-form-item>
                 <el-form-item label="登录信息">
                  <el-col :span="10">
                    <el-input v-model="form.username" placeholder="注册账号"></el-input>
                  </el-col>
                  <el-col :span="3">
                      <div style="text-align:center">---&&---</div>
                  </el-col>
                  <el-col :span="10">
                    <el-input v-model="form.password" type="password" placeholder="登录密码"></el-input>
                  </el-col>
                </el-form-item>
              </el-form>
              <div class="btn-content">
                <el-button type="primary" @click="onSubmit('form')">提交</el-button>
                <el-button type="primary" @click="onEmpty">清屏</el-button>
              </div>
          </el-card>
      </div>
  </div>
</template>

<script>
export default {
    name:'AddStudent',
    data(){
        return{
            form:{
                    teamName:'',
                    teacherName:'',
                    teacherTelephone:'',
                    teacherWeChat:'',
                    studentOneName:'',
                    studentIdOne:'',
                    studentMajorOne:'',
                    studentPhoneOne:'',
                    studentTwoName:'',
                    studentIdTwo:'',
                    studentMajorTwo:'',
                    studentPhoneTwo:'',
                    studentThreeName:'',
                    studentIdThree:'',
                    studentMajorThree:'',
                    studentPhoneThree:'',
                    studentFourName:'',
                    studentIdFour:'',
                    studentMajorFour:'',
                    studentPhoneFour:'',
                    teamCategory:[],
                    username:'',
                    password:'',
                },
            school:'',    
            
        }
    },
    mounted(){
        console.log(this.$store.state.school)
        this.school =this.$store.state.school
    },
    methods:{
        onSubmit(formName){
            console.log(formName)
            const studentCode = [this.form.studentIdOne,this.form.studentIdTwo,this.form.studentIdThree,this.form.studentIdFour]
            const fromContent = [this.form.teacherName,this.form.teacherTelephone,this.form.teacherWeChat,this.form.teamCategory[0],this.form.username,this.form.password]
            const noEmptyId=[]
            for(let i=0;i<studentCode.length;i++){
                if(studentCode[i]!=""){
                    noEmptyId.push(studentCode[i])
                }
            }
            for(let k=0;k<fromContent.length;k++){
                if(fromContent[k] ==""){
                    this.$alert('表格有空项', '注册失败', {
                    confirmButtonText: '确定'
                    });
                    return
                }
            } 
            if(noEmptyId.length==0){
                 this.$alert('至少有一名团队成员', '注册失败', {
                    confirmButtonText: '确定'
                    });
                return
            }
            const newId = noEmptyId.sort()
            for(let j=0;j<newId.length;j++){
                if(newId[j]==newId[j+1]){
                    this.$alert('学号有重复', '注册失败', {
                    confirmButtonText: '确定'
                    });
                    return
                }
            }
           
                if(true){
                    this.$http.post('/school/TeamRegister',{
                         teamInfo:{
                             school:this.school,
                             teamCategory:this.form.teamCategory[0],
                             teacherName:this.form.teacherName,
                             teacherTelephone:this.form.teacherTelephone,
                             teacherWeChat:this.form.teacherWeChat,
                             username:this.form.username
                         },
                         loginInfo:{
                             username:this.form.username,
                             password:this.form.password,
                             school:this.school
                         },
                         studentInfo:[
                             {
                                school:this.school,
                                name:this.form.studentOneName,
                                teamCategory:this.form.teamCategory,
                                major:this.form.studentMajorOne,
                                studentID:this.form.studentIdOne,
                                telephone:this.form.studentPhoneOne
                             },
                             {
                                school:this.school,
                                name:this.form.studentTwoName,
                                teamCategory:this.form.teamCategory,
                                major:this.form.studentMajorTwo,
                                studentID:this.form.studentIdTwo,
                                telephone:this.form.studentPhoneTwo
                             },
                             {
                                school:this.school,
                                name:this.form.studentThreeName,
                                teamCategory:this.form.teamCategory,
                                major:this.form.studentMajorThree,
                                studentID:this.form.studentIdThree,
                                telephone:this.form.studentPhoneThree
                             },
                            {
                                school:this.school,
                                name:this.form.studentFourName,
                                teamCategory:this.form.teamCategory,
                                major:this.form.studentMajorFour,
                                studentID:this.form.studentIdFour,
                                telephone:this.form.studentPhoneFour
                             },
                         ]
                    }).then((res)=>{
                        console.log(res)
                        if(res.data.status===200){
                         this.$alert('注册成功', '', {
                            confirmButtonText: '确定',
                            callback:this.onEmpty(),
                        });
                        }else{
                         this.$alert('各参赛类别只能由一组参加', '注册失败', {
                            confirmButtonText: '确定'
                        });
                        }
                    }).catch((error)=>{
                        console.log(error)
                    })
                }else{
                   this.$message.error("表单必填项不能为空") 
                }
        },
        onEmpty(){
            Reflect.ownKeys(this.form).forEach((key)=>{
                if(key=="teamCategory"){
                    this.form[key][0]=""
                }else{
                    this.form[key]=""
                }
            })
        }
    }
}
</script>

<style scoped>
    .add-student{
        width: 100%;
        margin-top: 8px;
        display: flex;
        justify-content: center;
    }
    .box-card{
        width: 100%;
        height: 100%;
    }
    .btn-content{
        width: 100%;
        display: flex;
        justify-content: center;
    }
    .el-form-item label:after {
        content: "";
        display: inline-block;
        width: 100%;
    }

    .el-form-item__label {
        text-align: justify;
        height: 50px;
    }
    
    .el-form-item.is-required .el-form-item__label:before {
        content: none !important;
    }
</style>