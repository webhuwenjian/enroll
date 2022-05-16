<template>
     <el-container class="content">
          <el-header class="el-header" style="text-align: right; font-size: 12px">
            <div class="header-button">
              <div class="admin">
                  <div class="img"><img src="../../../assets/img/new-admin.png" alt=""></div>
                  <span>{{admin}}</span>
            </div>
              <!-- <el-input  v-model="input" placeholder="请输入搜索内容" style="width=15px"></el-input> -->
              <!-- <el-button icon="el-icon-search">搜索</el-button> -->
              <!-- <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button> -->
              <el-button type="primary" icon="el-icon-download">批量下载</el-button>
            </div>
          </el-header>
          <el-main>
       <!--      <div><info-window 
            :visible="infoWindowVisible"
            :projectInfo="infoWindowProjectInfo"
            :teamInfo="infoWindowTeamInfo"
            :sequennceNum="sequennceNum"
            @cancel="updateVisivble"
            @updateCheck="updateCheck"
            /></div> -->
            <el-table
                  :data="tableData"
                  border
                  @select="selectTable"
                  @select-all="selectAllTable"
                  :cell-style="rowStyle"
                  style="width: 100%">
                  <el-table-column
                   header-align="center"
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                    fixed
                    prop="num"
                    label="序号"
                    width="55"
                     header-align="center"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="teamWorkName"
                    label="项目名称"
                    header-align="center"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="teamCategory"
                    label="赛道类别"
                    header-align="center"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="school"
                    label="报名单位"
                    header-align="center"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="ischeck"
                    label="审核状态"
                    header-align="center"
                   >
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="操作"
                    header-align="center"
                    >
                    <template slot-scope="scope">
                      <el-button @click="downLoad(scope.row)"  type="primary" size="small">下载资料</el-button>
                      <el-button @click="handleClick(scope.row)" type="primary" size="small">审核通过</el-button>
                    </template>
                  </el-table-column>
            </el-table>
          </el-main>
          <el-footer height="40px">
             <div class="block">
              <el-pagination
               background
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :current-page="currentPage4"
                :page-sizes="[100, 200, 300, 400]"
                :page-size="100"
                layout="total, sizes, prev, pager, next, jumper"
                :total="400">
              </el-pagination>
            </div>
          </el-footer>
     </el-container>
</template>

<script>
export default {
    name:'FileManage',
    data(){
        return{
          admin:'南京工业大学',
          currentPage4: 4,
          tableData: [],
          infoWindowVisible:false,
          infoWindowProjectInfo:{},
          infoWindowTeamInfo:{},
          sequennceNum:0,
          school:'',
          token:''
        }
    },
    components:{
    },
    mounted(){
      this.uploadProject();
    },
    methods:{
        rowStyle(){
           return "text-align:center"
        },
        handleClick(row) {
          console.log(row)
          this.$confirm('确认该组别所有信息和材料都符合参赛要求并通过审核吗？', '提示', {
          distinguishCancelAndClose: true,
          confirmButtonText: '确定',
          cancelButtonText: '取消'
          })
          .then(() => {
            this.updateCheck(row)
          })
          .catch(action => {
              this.$message.warning("未进行审核操作")
          });
        },
        updateCheck(res){
          let token = sessionStorage.get('token')
          this.$http.post('/school/TeamFileCheck',
          {
            school:res.school,
            teamCategory:res.teamCategory
          },
          {
            headers:{
              'Authorization':'Bearer '+token
            }
          }
          ).then((res)=>{
            console.log(res)
            if(res.data.status==200){
              this.$message.success("审核完成")
            }else{
              this.$message.error("审核失败")
            }
          })
        /*   console.log(this.tableData)
          let newtableData=[]
          this.tableData.map((item)=>{
            if(item.num===res.num){
              if(res.num==1){
                item.ischeck = "已审核"
              }
            }
            newtableData.push(item)
          })
          this.tableData = newtableData */
         /*  this.$http.post('/school/TeamFileCheck',{
            school
          }) */
        },
        downLoad(row){
          console.log(row)
            var url='http://139.224.188.129:3000/school/TeamWorkDownload?school='+
            row.school+'&teamCategory='+row.teamCategory
            var link = document.createElement('a');
            link.href  = url;
            link.click()
           /* window.location.href = url */
         /*   this.$http.get('/school/TeamWorkDownload',{
            params:{
              school:row.school,
              teamCategory:row.teamCategory,
            },
            responseType: 'blob',
          }).then((res)=>{
            console.log(res)
             const blob = new Blob([res.data],{type:'application/octet-stream'})
            console.log(blob)
            const fileName = row.teamWorkName+".pdf"
            const link = document.createElement('a')
            link.downLoad = fileName
            link.style.display ='none'
            link.href = window.URL.createObjectURL(blob)
            document.body.appendChild(link)
            link.click()
            window.URL.revokeObjectURL(link.href)
            document.body.removeChild(link)  */ 
            /* const reader = new FileReader()
            reader.readAsDataURL(res.data)
            reader.onload=(e)=>{
              const a = document.createElement('a')
              a.download = row.teamWorkName
              a.href = e.target.result
              a.style.display = 'none'
              document.body.appendChild(a)
              a.click()
              document.body.removeChild(a) */
          /*   } */
          /* })  */
        },
        selectTable(args){
        console.log(args)
        },
        selectAllTable(args){
        console.log(args)
        },
        handleSizeChange(args){
        console.log(args)
        },
        handleCurrentChange(args){
        console.log(args)
        },
        uploadProject(){
          let token = sessionStorage.getItem('token')
          this.token = token
          console.log(token)
           let school= this.$store.state.school
           this.school = school
           this.admin = school
           console.log(this.admin)
            console.log(school)
            this.$http.get('/school/TeamWork',{
              params:{
                school:school
              },
              headers:{
              'Authorization':'Bearer '+token
              }
            }).then((res)=>{
              console.log(res)
              let data =[]
              res.data.data.map((item,index)=>{
                if(item.ischeck==0){
                  item.ischeck= "未审核"
                }else{
                  item.ischeck= "已审核"
                }
                data.push(Object.assign({},item,{num:index+1}))
              })
              this.tableData=data
           console.log(this.tableData)
            })
        }
    }
}
</script>

<style scoped>
  .content{
    height:calc(100vh - 100px);
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 8px;
  }
.el-input{
  width: 200px;
  margin-right: 10px;
}
.el-input_inner{
  width: 15px;
}
.header-button{
  padding-top: 7px;
  display: flex;
  justify-content: right;
  position: relative;
}
.admin{
  position: absolute;
  width: 80px;
  margin-left: 20px;
  top: 8px;
  left: 4px;
  display: flex;
  flex-direction: column;
  color: #409EFF;
}
.admin .img{
  width: 80px;
  text-align: center;
}
.admin img{
  width: 20px;
}
.block{
  text-align: center;
}

</style>