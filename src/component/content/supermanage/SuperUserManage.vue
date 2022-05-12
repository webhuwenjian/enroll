<template>
  <div class="user-manage">
      <el-container class="manage-table">
        <el-header height="50px" style="text-align: right;font-size: 12px">
            <div class="header-button">
              <el-input  v-model="input" placeholder="请输入搜索内容" style="width=15px"></el-input>
              <el-button icon="el-icon-search">搜索</el-button>
              <el-button icon="el-icon-plus" type="primary" @click="addUser" >添加</el-button>
              <el-button type="danger" style="height=40px" :disabled="disabled" @click="deleteAll">批量删除<i class="el-icon-delete el-icon--right"></i></el-button>
              <el-button type="primary" icon="el-icon-download">导出Excel</el-button>
            </div>
        </el-header>    
        <el-main>
            <el-table :data="tableData"
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
                    label="序号"
                    >
                  </el-table-column>
                <el-table-column 
                header-align="center"
                prop="school" 
                label="单位">
                </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="username"
                 label="账户" >
                </el-table-column>
                <el-table-column 
                header-align="center"
                prop="password" 
                label="密码" >
                </el-table-column>
                <el-table-column
                 header-align="center"
                 prop="identity" 
                 label="身份">
                </el-table-column>
                <el-table-column
                    header-align="center"
                    fixed="right"
                    label="操作"
                    >
                    <template slot-scope="scope">
                      <el-button @click="handleClick(scope.row)" type="primary"  size="small">修改</el-button>
                      <el-button type="danger" @click="deleteClick(scope.row)" size="small">删除</el-button>
                    </template>
                  </el-table-column>
            </el-table>
         </el-main>
     </el-container>
  </div>
</template>

<script>
export default {
    name:'SuperUserManage',
    data(){
        return{
        disabled:true,
        input:'',
        tableData: [],
        identity:''
        }
    },
    mounted(){
        this.questUser();
    },
    methods:{
        rowStyle(){
           return "text-align:center"
        },
        addUser(){
            this.$router.push({name:'adduser',params:{from:'adduser',identity:this.identity}})
        },
        questUser(){
            this.$http.get('/manage/School',{}
            ).then((res)=>{
                let data=[]
                res.data.data.map((item,index)=>{
                    data.push(Object.assign({},item,{num:index+1}))
                })
                this.tableData=data
                this.identity = data[0].identity
                console.log(this.identity)
            })
        },
        handleClick(row) {
            this.$router.push({name:'adduser',params:{data:row,from:'edituser'}})
        },
        async deleteClick(row){
            console.log(row)
            const{data:res} = await this.$http.get('/manage/SchoolDelete',
            {
              params:{
               username:row.username,
               school:row.school
              }
            }
           )
            console.log(res)
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
  padding-top: 7px;
  height: 40px;
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