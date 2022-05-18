<template>
  <div id="expertp-manage">
      <el-row>
          <el-col :span="0.5"><div style="color:#fff;font-size:2px">1</div></el-col>
          <el-col :span="23">
            <el-card class="box-card">
                <div class="table-header">
                    <div class="admin">
                        <div class="img"><img src="../../../assets/img/new-admin.png" alt=""></div>
                        <span class="name">{{admin}}</span>
                    </div>
                    <el-button type="primary" style="height:40px" class="btn">评审标准<i class="el-icon-document el-icon--right"></i></el-button>
                    <el-button type="primary" style="height:40px" class="btn" :disabled="disabled">批量下载<i class="el-icon-download el-icon--right"></i></el-button>
                </div>
                <el-table
                    :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
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
                     label="序 号">
                    </el-table-column>
                    <el-table-column
                    header-align="center"
                    prop="school"
                    label="参赛单位">
                    </el-table-column>
                    <el-table-column
                    header-align="center"
                    prop="teamCategory"
                    label="参赛类别">
                    </el-table-column>
                    <el-table-column
                    header-align="center"
                    prop="teamWorkName"
                    label="项目名称">
                    </el-table-column>
                    <el-table-column
                    header-align="center"
                    fixed="right"
                    label="操 作"
                    >
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="primary"  size="medium">下载项目资料</el-button>
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
            </el-card>
          </el-col>
          <el-col :span="0.5">
              <div style="color:#fff;font-size:2px">1</div>
         </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    name:'ExpertManage',
    data(){
        return{
            admin:'',
            currentPage:1,
            pageSize:7,
            total:20,
            tableData: [],
            disabled:true,
        }
    },
    mounted(){
        this.initRole()
        this.requestExpertInfo()
    },
    methods:{
        rowStyle(){
            return "text-align:center"
        },
        requestExpertInfo(){
            let token = sessionStorage.getItem('token')
            this.$http.get('/expert/teamWork',{
                params:{
                    teamCategory:sessionStorage.getItem('teamCategory')
                },
                headers:{
                    'Authorization':'Bearer '+token
                }
            }).then((res)=>{
                console.log(res)
                let data =[]
                res.data.data.map((item,index)=>{
                data.push(Object.assign({},item,{num:index+1}))
                })
                this.tableData = data
            }).catch((error)=>{
                console.log(error)
            })
        },
        selectTable(val){
            console.log(val)
            if(val.length>0){
                this.disabled = false
            }else{
                this.disabled = true
            }
        },
        selectAllTable(val){
         if(val.length>0){
            this.disabled = false
          }else{
            this.disabled = true
          }
        },
        handleClick(row){
            console.log(row)
            let url='http://139.224.188.129:3000/expert/teamWorkDownload?school='+
            row.school+'&teamCategory='+row.teamCategory
            let link = document.createElement('a');
            link.href  = url;
            link.click()
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
        initRole(){
            this.admin = sessionStorage.getItem('school')
        }
    }
}
</script>

<style scoped>
    .box-card {
    width: 100%;
    height: calc(100vh - 95px);
    margin-top: 4px;
    position: relative;
  }
 .table-header{
      width: 100%;
       margin-bottom: 10px;
      display: flex;
      justify-content: right;
      position: relative;
  }
 .admin{
  position: absolute;
  width: 180px;
  margin-left: 20px;
  top: 2px;
  left: 4px;
  display: flex;
  font-size: 12px;
  flex-direction: column;
  color: #409EFF;
}
.admin .img{
  width: 180px;
  text-align: center;
}
.admin .name{
  width: 180px;
  text-align: center;
}
.admin img{
  width: 20px;
}
.block{
    width: 100%;
    position: absolute;
    bottom: 5px;
    text-align: center;
}
</style>