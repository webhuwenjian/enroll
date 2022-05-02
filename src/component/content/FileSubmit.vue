<template>
  <div class="file-submit">
    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark">
          <el-card class="box-card">
             <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="项目名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="报名单位">
                  <el-select v-model="form.region" placeholder="请选择报名单位">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="报名时间">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">----</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                  <el-switch v-model="form.delivery"></el-switch>
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
                <el-form-item label="特殊资源">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: '',
        },
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
    min-height: 500px;
    max-height: 600px;
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