<template>
  <el-container class="content">
          <el-header  style="text-align: right; font-size: 12px">
            <div class="header-button">
              <div class="admin">
                  <div class="img"><img src="../../../assets/img/new-admin.png" alt=""></div>
                  <span class="name">{{admin}}</span>
              </div>
            <!--   <el-input  v-model="input" placeholder="请输入搜索内容" style="width=15px"></el-input>
              <el-button icon="el-icon-search">搜索</el-button> -->
              <el-button icon="el-icon-plus" type="primary" @click="addStudent" >添加</el-button>
              <el-button type="danger" style="height=40px">批量删除<i class="el-icon-delete el-icon--right"></i></el-button>
              <el-button type="primary" icon="el-icon-download">导出Excel</el-button>
            </div>
          </el-header>
          <el-main >
            <el-table
                  :data="tableData"
                  border
                  @select="selectTable"
                  @select-all="selectAllTable"
                  :cell-style="rowStyle"
                  fit="true"
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
                    label="序号">
                  </el-table-column>
                  <el-table-column
                    fixed
                    header-align="center"
                    prop="username"
                    label="账户">
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    prop="password"
                    label="密码">
                  </el-table-column>
                   <el-table-column
                    header-align="center"
                    prop="teacherName"
                    label="指导教师" >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    prop="teacherTelephone"
                    label="联系电话">
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    prop="teacherWechat"
                    label="微信号">
                  </el-table-column>
                   <el-table-column
                    header-align="center"
                    prop="teamCategory"
                    label="参赛类别">
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    fixed="right"
                    label="操作"
                    >
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="primary"  size="small">修改</el-button>
                      <el-button type="danger"  size="small">删除</el-button>
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
    name:'UserManage',
    data(){
        return{
          admin:'',
          currentPage4: 4,
          tableData: []
        }
    },
    mounted(){
      this.uploadUser();
    },
    methods:{
        rowStyle(){
           return "text-align:center"
        },
        addStudent(){
          this.$router.push({name:'addstudent'})
        },
        handleClick(row) {
        console.log(row);
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
        uploadUser(){
            let school= this.$store.state.school
            this.admin = school
            console.log(school)
            this.$http.get('/school/Team',{
              params:{
                school:school
              }
            }).then((res)=>{
              console.log(res)
              let data =[]
              res.data.data.map((item,index)=>{
                data.push(Object.assign({},item,{num:index+1}))
              })
              this.tableData = data
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
.admin .name{
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