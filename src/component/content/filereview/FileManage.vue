<template>
     <el-container class="content">
          <el-header height="40px" style="text-align: right; font-size: 12px">
            <div class="header-button">
              <el-input  v-model="input" placeholder="请输入搜索内容" style="width=15px"></el-input>
              <el-button icon="el-icon-search">搜索</el-button>
              <el-button type="primary">上传<i class="el-icon-upload el-icon--right"></i></el-button>
              <el-button type="primary" icon="el-icon-download">批量下载</el-button>
            </div>
          </el-header>
          <el-main>
            <el-table
                  :data="tableData"
                  border
                  @select="selectTable"
                  @select-all="selectAllTable"
                  fit="true"
                  style="width: 100%">
                  <el-table-column
                    type="selection"
                    width="55">
                  </el-table-column>
                  <el-table-column
                    fixed
                    prop="num"
                    label="序号"
                    >
                  </el-table-column>
                  <el-table-column
                    fixed
                    prop="date"
                    label="提交日期"
                   >
                  </el-table-column>
                  <el-table-column
                    prop="name"
                    label="项目名称"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="province"
                    label="赛道类别"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="city"
                    label="报名单位"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="address"
                    label="是否提交"
                    >
                  </el-table-column>
                  <el-table-column
                    prop="zip"
                    label="审核状态"
                   >
                  </el-table-column>
                  <el-table-column
                    fixed="right"
                    label="操作"
                    >
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="primary" size="small">查看</el-button>
                      <el-button type="primary" size="small">编辑</el-button>
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
            currentPage4: 4,
            tableData: [{
            num:1,
            date: '2016-05-02',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1518 弄',
            zip: 200333
            }, {
            num:2,
            date: '2016-05-04',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1517 弄',
            zip: 200333
            }, {
            num:3,
            date: '2016-05-01',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1519 弄',
            zip: 200333
            }, {
            num:4,
            date: '2016-05-03',
            name: '王小虎',
            province: '上海',
            city: '普陀区',
            address: '上海市普陀区金沙江路 1516 弄',
            zip: 200333
            }]
        }
    },
    methods:{
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

<style>
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
}
.block{
  text-align: center;
}

</style>