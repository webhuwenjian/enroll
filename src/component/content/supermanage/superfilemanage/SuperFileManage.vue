<template>
  <div class="file-manage">
      <el-container class="manage-table">
        <el-header height="50px" style="text-align: right;font-size: 12px">
            <div class="header-button">
             <!--  <el-button icon="el-icon-plus" type="primary" @click="addUser" >添加</el-button> -->
               <div class="admin">
                  <div class="img"><img src="../../../../assets/img/new-admin.png" alt=""></div>
                  <div class="name">超级管理员</div>
               </div>
              <el-button type="danger" style="height=40px" :disabled="disabled" @click="deleteAll">批量删除<i class="el-icon-delete el-icon--right"></i></el-button>
              <el-button type="primary" icon="el-icon-download">导出Excel</el-button>
            </div>
        </el-header>    
         <el-main style="position:relative;">
            <el-table :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
                  border
                  @select="selectTable"
                  @select-all="selectAllTable"
                  :cell-style="rowStyle"
                  style="width: 100%">
                <el-table-column
                    type="selection"
                    header-align="center"
                    width="55">
                </el-table-column>
                <el-table-column
                    header-align="center"
                    fixed
                    prop="num"
                    width="55"
                    label="序    号"
                    >
                  </el-table-column>
                <el-table-column 
                header-align="center"
                prop="school" 
                label="单 位">
                </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="teacherName"
                 label="指导教师" >
                </el-table-column>
                <el-table-column 
                header-align="center"
                prop="teacherTelephone" 
                label="联系电话" >
                </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="teacherWeChat" 
                 label="微信号">
                </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="teamCategory" 
                 label="参赛类别">
                </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="username" 
                 label="账 号">
                </el-table-column>
                <el-table-column
                    header-align="center"
                    fixed="right"
                    label="操 作"
                    >
                    <template slot-scope="scope">
                      <el-button @click="downClick(scope.row)" type="primary"  size="small">下载资料</el-button>
                    </template>
                  </el-table-column>
            </el-table>
            <div class="block">
              <el-pagination
                background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage"
                :page-sizes="[1,5,10,20]"
                :page-size="pageSize"
                layout="total, sizes, prev, pager, next, jumper"
                :total="tableData.length">
              </el-pagination>
            </div>
         </el-main>
          <!-- <el-footer height="40px">
          </el-footer> -->
     </el-container>
  </div>
</template>

<script>
export default {
    name:'SuperUserManage',
    data(){
        return{
            disabled:true,
            tableData:[],
            currentPage:1,
            pageSize:7,
            total:20
        }
    },
    mounted(){
        this.uploadInfo()
    },
    methods:{
         rowStyle(){
           return "text-align:center"
        },
        uploadInfo(){
          let token = sessionStorage.getItem('token')
            this.$http.get('/manage/AllTeamWork',{
              headers:{
                'Authorization':'Bearer '+token
              }

            }).then((res)=>{
                console.log(res)
                let data=[]
                res.data.data.map((item,index)=>{
                    data.push(Object.assign({},item,{num:index+1}))
                })
                this.tableData=data
            })  
        },
        downClick(res){
            var url='http://139.224.188.129:3000/school/TeamWorkDownload?school='+
            res.school+'&teamCategory='+res.teamCategory
            var link = document.createElement('a');
            link.href  = url;
            link.click()
        },
        deleteAll(){
            //删除回调
        },
        selectTable(args){
          if(args.length>1){
            this.disabled = false
          }else{
            this.disabled = true
          }
         console.log(args)
        },
        selectAllTable(args){
            if(args.length>1){
            this.disabled = false
            }else{
                this.disabled = true
            }
        },
        handleSizeChange(value){
          console.log(`每頁${value}条`)
          this.currentPage = 1
          this.pageSize = value
        },
        handleCurrentChange(val){
            console.log(`当前页:${val}`)
            this.currentPage = val
        },
    }
}
</script>

<style scoped>
.file-manage{
    width: 100%;
    overflow: hidden;
}
.manage-table{
    height:calc(100vh - 84px);
    width: 100%;
}
.el-header {
    width: 100%;
    color: #333;
    line-height: 60px;
  }
.manage-table::-webkit-scrollbar {
    width: 2px;    
}
.el-input{
  width: 200px;
  margin-right: 10px;
}
.el-input_inner{
  width: 15px;
}
 .header-button{
  /* padding-top: 7px; */
  height: 100%;
  position: relative;
} 
.admin{
  position: absolute;
  width: 80px;
  height: 100%;
  margin-left: 20px;
  top: 4px;
  left: 0px;
  display: flex;
  flex-direction: column;
  color: #409EFF;
}
.admin .img{
/*   width: 80px; */
  height: 20px;
  flex: 1;
  text-align: center;
  line-height: 20px;
}
.admin .name{
/*   width: 80px; */
  flex: 1;
  height: 20px;
   line-height: 20px;
  text-align: center;
}
.admin img{
  width: 20px;
}
.block{
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 380px;
}
.manage-table::-webkit-scrollbar-thumb {
    border-radius: 10px;
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  background: rgba(0,0,0,0.2);
}
.manage-table::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
  border-radius: 0;
  background: rgba(0,0,0,0.1);
 }
</style>