<template>
  <div class="file-submit">
    <el-row>
      <el-col :span="24">
        <div class="grid-content">
          <el-card v-if="isSubmit" class="box-card">
             <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="项目名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="项目简介">
                  <el-input type="textarea" v-model="form.projectDes"></el-input>
                </el-form-item>
                <el-form-item label="项目成员">
                  <el-col :span="7">
                    <el-input placeholder="指导教师" v-model="form.teacherName"></el-input> 
                  </el-col>
                  <el-col :span="1">--</el-col>
                  <el-col :span="7">
                    <el-input placeholder="团队负责人" v-model="form.studentOneName"></el-input> 
                  </el-col>
                  <el-col :span="1">--</el-col>
                   <el-col :span="7">
                    <el-input placeholder="小组成员" v-model="form.studentTwoName"></el-input> 
                  </el-col>
                </el-form-item>
                <el-form-item label="报名单位">
                  <el-select v-model="form.region" placeholder="请选择报名单位">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
               <el-form-item label="联系电话">
                  <el-input v-model="form.phone"></el-input>
                </el-form-item>
                <el-form-item label="参赛类型">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="本科生开发组" name="type"></el-checkbox>
                    <el-checkbox label="本科生创业组" name="type"></el-checkbox>
                    <el-checkbox label="本科生创意组" name="type"></el-checkbox>
                    <el-checkbox label="研究生开发组" name="type"></el-checkbox>
                    <el-checkbox label="研究生创业组" name="type"></el-checkbox>
                    <el-checkbox label="研究生创意组" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="其它说明 ">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item label="上传材料">
                  <el-upload
                    action="#"
                    list-type="picture-card"
                    :on-change="onChange"
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
                <el-button type="primary" @click="onSubmit">提交</el-button>
                <el-button type="primary">清屏</el-button>
              </div>
          </el-card>
          <el-card v-else class="box-card">
            <div class="progress-bar">
              <el-steps :active="active" finish-status="success">
                <el-step title="提交资料"></el-step>
                <el-step title="资料审核"></el-step>
                <el-step title="报名成功"></el-step>
              </el-steps>
            </div>
            <div class="description">
              <el-descriptions title="资料" direction="vertical" :column="4" border>
                <el-descriptions-item label="项目名称">kooriookami</el-descriptions-item>
                <el-descriptions-item label="项目介绍" :span="2">18100000000</el-descriptions-item>
                <el-descriptions-item label="指导教师" >苏州市</el-descriptions-item>
                <el-descriptions-item label="团队负责人" >苏州市</el-descriptions-item>
                <el-descriptions-item label="小组成员" >苏州市</el-descriptions-item>
                <el-descriptions-item label="参赛单位" >苏州市</el-descriptions-item>
                <el-descriptions-item label="联系电话">18100000000</el-descriptions-item>
                <el-descriptions-item label="参赛类型">18100000000</el-descriptions-item>
                <el-descriptions-item label="备注">
                <el-tag size="small">学校</el-tag>
                </el-descriptions-item>
                <el-descriptions-item label="其它说明">江苏省苏州市吴中区吴中大道 1188 号</el-descriptions-item>
                <el-descriptions-item label="其它材料">
                  <el-link href="https://element.eleme.io" target="_blank">报名申请表</el-link>
                  <el-divider direction="vertical"></el-divider>
                  <el-link href="https://element.eleme.io" target="_blank">项目说明书</el-link>
                </el-descriptions-item>
              </el-descriptions>
            </div>
          </el-card>
        </div>
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
          name: '',
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
        isSubmit:true,
        active:1,
        dialogImageUrl: '',
        dialogVisible: false,
        disabled: false,
        imgUrl:require("../../assets/img/pdf.png")
      }
    },
  methods:{
    onSubmit() {
        console.log('submit!');
    },
    onChange(file){
      let str = file.name;
      let start = str.indexOf(".");
      let len = str.length;
      if(str.substring(start+1,len)=="pdf"){
        this.imgUrl=require('../../assets/img/pdf.png');
      }else if(str.substring(start+1,len)=="docx"){
        this.imgUrl=require('../../assets/img/word.png');
      }else{
        this.imgUrl=require('../../assets/img/excel.png');
      }
    },
    handleRemove(file) {
        console.log(file);
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
    height: 100%;
    margin-top: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: auto;
  }
.box-card {
    width: 50%;
    height: 100%;
  }

.btn-content{
  width: 100%;
  display: flex;
  justify-content: center;
}
.description{
  margin-top: 20px;
}
        /*滚动条样式*/
.grid-content::-webkit-scrollbar {
    width: 2px;    
}
.grid-content::-webkit-scrollbar-thumb {
    border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.grid-content::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
 }

</style>