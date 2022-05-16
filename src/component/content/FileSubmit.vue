<template>
  <div class="file-submit">
    <el-row>
        <el-col :span="2">
        <div style="color:#fff;font-size:3px">1</div>
      </el-col>
      <el-col :span="7">
         <el-card class="notice-view">
            <div slot="header" style="text-align:center; font-size:16px;">
              <span>资料提交说明</span>
            </div>
            <div class="notice-content">
              <p>(1)创新开发</p>
              <p></p>
              <p class="p_content">①创新开发技术报告电子版(A4)，报告内容包括开发目的、开发流程、技术手段、创新特色、功能、典型界面等;</p>
              <p class="p_content">②功能演示DEMO；</p>
              <p class="p_content">③汇报PPT</p>
              <p style="margin-top:8px">(2)创新设计</p>
              <p class="p_content">①创新设计报告电子版(A4)，报告内容包括设计目的、
                设计(制作)流程、技术路线、创新特色、可行性论证等;</p>
              <p class="p_content">②汇报PPT</p>
              <p style="margin-top:8px">(3)创业计划</p>
              <p class="p_content">①创业计划书电子版(A4)，包括产品/服务介绍、市场分析、营销方案、生产运作管理、财务预测等;</p>
              <p class="p_content">②汇报PPT。</p>
              <p style="margin-top:8px">注意事项</p>
              <p  class="p_content important_content">请务必将以上参赛类别所要求提交的资料打包成一个压缩包进行上传！</p>
           </div>
          </el-card>
      </el-col>
      <el-col :span="13">
        <div class="grid-content">
          <el-card class="box-card">
             <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="项目名称">
                  <el-input v-model="form.projectname"></el-input>
                </el-form-item>
                <el-form-item label="报名单位">
                  <el-input v-model="this.$route.params.school" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="参赛类型">
                  <el-input v-model="this.$route.params.teamCategory" disabled="disabled"></el-input>
                </el-form-item>
                <el-form-item label="上传材料">
                  <el-upload
                    ref="upload"
                    action=""
                    :limit="1"
                    list-type="picture-card"
                    :file-list="fileList"
                    :on-success="onSuccess"
                    :on-change="onChange"
                    :http-request="uploadMehod"
                    :before-upload="beforeUpload"
                    :auto-upload="false">
                    <i slot="default" class="el-icon-plus"></i>
                    <div slot="file" slot-scope="{file}">
                      <img
                        class="el-upload-list__item-thumbnail"
                        :src="imgUrl" alt=""
                      >
                      <span class="el-upload-list__item-actions">
                        <span
                          class="el-upload-list__item-preview"
                          @click="handlePictureCardPreview(file)"
                        >
                          <i class="el-icon-zoom-in"></i>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleDownload(file)"
                        >
                          <i class="el-icon-download"></i>
                        </span>
                        <span
                          v-if="!disabled"
                          class="el-upload-list__item-delete"
                          @click="handleRemove(file)"
                        >
                          <i class="el-icon-delete"></i>
                        </span>
                      </span>
                    </div>
                    <el-dialog :visible.sync="dialogVisible">
                      <img width="100%" :src="dialogImageUrl" alt="">
                    </el-dialog>
                  </el-upload>
                </el-form-item>
              </el-form>
              <div class="btn-content">
                <el-button type="primary" :disabled="btnDisabled" @click="onSubmit">提交</el-button>
                <el-button type="primary">清屏</el-button>
              </div>
          </el-card>
        </div>
      </el-col>
      <el-col :span="2">
        <div style="color:#fff;font-size:3px">1</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
    name:"FileSubmit",
    data(){
      return{
        form: {
          projectname:'',
          projectDes:'',
          teacherName:'',
          studentOneName:'',
          studentTwoName:'',
          region: '',
          phone:'',
          type: [],
          resource: '',
          desc: '',
        },
        fileList:[],
        isSubmit:true,
        active:1,
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        btnDisabled:true,
        imgUrl:require("../../assets/img/zip.png")
      }
    },
  mounted(){
 
  },
  methods:{
    async onSubmit() {
        /* const{data:res} = await this.$http.get('/data')
        console.log(res.data) */
        this.$refs.upload.submit();
    },
    onChange(item){
      console.log(item)
      /* this.fileList.push(item) */
      let name = item.name
      let index = name.lastIndexOf('.')
      name = name.substring(index+1,name.length)
      console.log(name)
      if(this.form.projectname!=""){
        if(name ==="7z" ||
          name==="zip" ||
          name==="rar"){
          this.btnDisabled = false
        }else{
          this.$message.warning("请上传压缩包文件，格式为zip/rar/7z")
        }
      }
    },
    beforeUpload(file){
      /* const isZip = file.type ==='zip/7Z/rar' */
      console.log(file)
    },
   async uploadMehod(params){
      console.log(params)
      let token = sessionStorage.getItem('token')
      console.log(token)
      let formData = new FormData()
      let file = params.file
      formData.append('file',file)
      formData.append('school',this.$route.params.school)
      formData.append('teamCategory',this.$route.params.teamCategory)
      formData.append('teamWorkName',this.form.projectname)
      const {data:res} =await this.$http({
        url:'/student/zipUpload',
        method:'post',
        data:formData,
        headers:{
          'Content-Type': 'multipart/form-data',
          'Authorization':'Bearer '+token
        }
      })
      console.log(res)
      if(res.status==200){
        this.$alert('信息与资料提交成功', '提示', {
          confirmButtonText: '确定',
      })
      }else{
          this.$alert('信息与资料提交失败', '提示', {
          confirmButtonText: '确定',
      })
      }
    },
    onSuccess(response, file, fileList){
      console.log(response)
    },
    handleRemove(file,fileList) {
        let uploadFiles = this.$refs['upload'].uploadFiles;
        console.log(uploadFiles)
        let index = uploadFiles.indexOf(file);
        uploadFiles.splice(index,1)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = this.imgUrl;
      this.dialogVisible = true;
      },
    handleDownload(file) {
      console.log(file);
    }
  }
}
</script>

<style scoped>
  .grid-content {
    /* min-height: 500px;
    max-height: 800px; */
    width: 100%;
    height:calc(100vh - 125px);
  /*   margin-top: 15px; */
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    padding: 20px;
  }
.notice-view{
  margin-top: 11px;
  height:calc(100vh - 110px);
  /* width: 100%; */
  margin-left: 8px;
  }
.notice-content{
    font-size: 15px;
  }
.box-card {
    width: 100%;
   /*  height:calc(100vh - 125px); */
   height: 100%;
  /*   overflow: auto; */
  padding: 8px;
    position: relative;
  }

.btn-content{
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  bottom: 8px;
}
.description{
  margin-top: 20px;
}
.p_content{
  font-weight: 500;
  margin-top: 8px;
}
.important_content{
  text-decoration:underline
}
        /*滚动条样式*/
.box-card::-webkit-scrollbar {
    width: 1px;    
}
.box-card::-webkit-scrollbar-thumb {
    border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.box-card::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
 }

</style>