<template>
  <div class="user-manage">
      <el-container class="manage-table">
        <el-header height="50px" style="text-align: right;font-size: 12px">
            <div class="header-button">
             <!--  <el-input  v-model="input" placeholder="请输入搜索内容" style="width=15px"></el-input>
              <el-button icon="el-icon-search">搜索</el-button> -->
               <div class="admin">
                  <div class="img"><img src="../../../../assets/img/new-admin.png" alt=""></div>
                  <span class="name">{{admin}}</span>
               </div>
              <el-button icon="el-icon-plus" type="primary" @click="addExpert" >添加</el-button>
              <el-button type="danger" style="height=40px" :disabled="disabled" @click="deleteAll">批量删除<i class="el-icon-delete el-icon--right"></i></el-button>
              <el-button type="primary" icon="el-icon-download">导出Excel</el-button>
            </div>
        </el-header>    
        <el-main style="position:relative;">
            <add-expert 
            :visible="visible" @cancel="cancel"
            :identity="identity" />
            <edit-expert
              :visible="editVisible"
              :form="form"
              :info="info"
              @cancel="editCancel"/>
            <detail-info-window
              :DetailInfo="detailInfo"
              :detailVisible="detailVisible"
              @detailCancel="detailCancel"/>
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
                    label="序号"
                    >
                  </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="name" 
                 label="姓 名">
                </el-table-column>
                <el-table-column 
                header-align="center"
                prop="school" 
                label="单 位">
                </el-table-column>
                <el-table-column 
                header-align="center"
                prop="teamCategory" 
                label="评审类别">
                </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="username"
                 label="账 号" >
                </el-table-column>
                <el-table-column 
                header-align="center"
                prop="password" 
                label="密 码" >
                </el-table-column>
                <el-table-column
                    header-align="center"
                    fixed="right"
                    label="操 作"
                    >
                    <template slot-scope="scope">
                      <!-- <el-button @click="handleClick(scope.row)" type="primary"  size="small">修改</el-button>
                      <el-button type="danger" @click="deleteClick(scope.row)" size="small">删除</el-button> -->
                       <el-button @click="detailClick(scope.row)" type="primary"  size="small">详细信息</el-button>
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
     </el-container>
  </div>
</template>

<script>
import AddExpert from './AddExpert.vue'
import EditExpert from './EditExpert.vue'
import DetailInfoWindow from './DetailInfoWindow.vue'
export default {
    name:'SuperUserManage',
    data(){
        return{
        admin:'超级管理员',
        visible:false,
        editVisible:false,
        detailVisible:false,
        detailInfo:{},
        form:{},
        info:{username:'',school:''},
        disabled:true,
        input:'',
        tableData: [],
        currentPage:1,
        pageSize:7,
        total:20,
        identity:''
        }
    },
    components:{
      AddExpert,
      EditExpert,
      DetailInfoWindow
    },
    mounted(){
        this.questUser();
    },
    methods:{
        rowStyle(){
           return "text-align:center"
        },
        addExpert(){
            /* this.$router.push({name:'adduser',params:{from:'adduser',identity:this.identity}}) */
            this.visible = true
        },
        cancel(res){
          this.visible = res
        },
        editCancel(res){
          this.editVisible =res
        },
        detailCancel(res){
          this.detailVisible =res
        },
        questUser(){
           let token = sessionStorage.getItem('token')
           console.log(token)
            this.$http.get('/manage/expertInfo',{
              headers:{
                 Authorization:'Bearer '+token
              }
            }
            ).then((res)=>{
                let data=[]
                res.data.data.map((item,index)=>{
                    data.push(Object.assign({},item,{num:index+1}))
                })
                this.tableData=data
               /*  this.identity = data[0].identity  */
              /*   console.log(res) */
            })
        },
        detailClick(row){
          let token = sessionStorage.getItem('token')
          console.log(row)
          this.$http.get('/manage/expertDetail',{
           params:{
              name:row.name,
              school:row.school,
              teamCategory:row.teamCategory
            },
            headers:{
              'Authorization':'Bearer '+token
            }
          }).then((res)=>{
            console.log(res)
            if(res.data.status==200){
              this.detailInfo = res.data.data[0]
              this.detailVisible = true
            }else{
              this.$message.error("数据请求失败！")
            }
          })
        },
        handleClick(row) {
            this.editVisible = true
            this.form = row
            this.info.username = row.username
            this.info.school = row.school
        },
        deleteClick(row){
            console.log(row)
            let token = sessionStorage.getItem('token')
            this.$confirm('确认要删除该条信息吗？', '提示', {
              distinguishCancelAndClose: true,
              confirmButtonText: '确认',
              cancelButtonText: '取消'
               })
               .then(async () => {
                const{data:res} = await this.$http.post('/manage/SchoolDelete',
                  {
                  username:row.username,
                  school:row.school
                  },
                  {
                    headers:{
                      'Authorization':'Bearer '+token
                    }
                  }
                )
                 if(res.status==200){
                    this.$message.success("删除成功!")
                 }else{
                   this.$message.error("删除失败!")
                 }
                })
               .catch(action => {
                  //这里做取消事件的回调
                });
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
        deleteAll(){

        },
        handleSizeChange(value){
          this.currentPage = 1
          this.pageSize = value
        },
        handleCurrentChange(val){
           console.log(`当前页:${val}`)
          this.currentPage = val
        }
    }

}
</script>

<style scoped>
.user-manage{
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
 /*  padding-top: 7px; */
  height: 40px;
  position: relative;
} 
.admin{
  position: absolute;
  width: 80px;
  margin-left: 20px;
  top: 4px;
  left: 4px;
  display: flex;
  flex-direction: column;
  color: #409EFF;
}
.admin .img{
  width: 80px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.admin .name{
  width: 80px;
  height: 20px;
  line-height: 20px;
  text-align: center;
}
.admin img{
  width: 20px;
  height: 20px;
}
.block{
  text-align: center;
  position: absolute;
  bottom: 20px;
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