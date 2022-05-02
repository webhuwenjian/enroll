<template>
  <el-container class="content">
          <el-header height="50px" style="text-align: right; font-size: 12px">
            <div class="header-button">
              <el-input  v-model="input" placeholder="请输入搜索内容" style="width=15px"></el-input>
              <el-button icon="el-icon-search">搜索</el-button>
              <el-button icon="el-icon-plus" type="primary" >添加</el-button>
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
                    label="序号"
                    >
                  </el-table-column>
                  <el-table-column
                    fixed
                    header-align="center"
                    prop="name"
                    label="账户"
                   >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    prop="password"
                    label="密码"
                    >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    prop="userStatus"
                    label="用户状态"
                    >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    prop="role"
                    label="角色"
                    >
                  </el-table-column>
                  <el-table-column
                    header-align="center"
                    prop="registerDate"
                    label="注册时间"
                    >
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
            currentPage4: 4,
            tableData: [{
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            }, {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            }, {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            }, {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            }, {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            }, {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            },{
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            },
            {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            },
            {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            },
            {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            },
            {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            },
            {
            num:1,
            name: '2016-05-02',
            password: '王小虎',
            userStatus: '上海',
            role: '普陀区',
            registerDate: 200333
            }]
        }
    },
    methods:{
        rowStyle(){
           return "text-align:center"
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
  height: 40px;
} 
.block{
  text-align: center;
}

</style>