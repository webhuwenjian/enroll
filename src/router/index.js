import Vue from "vue";
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const login = ()=>import('../view/login.vue')
const home = ()=>import('../view/home/home.vue')
const notice =()=>import('../view/noticeview/NoticeView.vue')
const matchCenter = ()=>import('../component/content/matchcenter/MatchCenter.vue')
const fileSubmit =()=>import('../component/content/FileSubmit.vue')
const fileReview = ()=>import('../component/content/filereview/FileReview.vue')
const fileManage = ()=>import('../component/content/filereview/FileManage.vue')
const userManage = ()=>import('../component/content/filereview/UserManage.vue')
const addStudent = ()=>import('../component/content/filereview/AddStudent.vue')
const permissionManage = ()=>import('../component/content/filereview/PermissionManage.vue')
const superManage =()=> import('../component/content/supermanage/SuperManage.vue')
const superUserManage =()=>import('../component/content/supermanage/SuperUserManage.vue')
const addUser = ()=>import('../component/content/supermanage/superusermanage/AddUser.vue')
const noticeManage = ()=>import('../component/content/supermanage/systemmanage/NoticeManage.vue')
const router = new VueRouter({
    routes:[
        {
            path:'/',
            redirect:'/matchcenter'
        },
        {
            path:'/matchcenter',
            name:'matchcenter',
            component:matchCenter,
        },
        {
            path:'/login',
            name:'login',
            component:login
        },
        {
            path:'/home',
            name:'home',
            component:home,
            children:[
                {
                    path:'',
                    redirect:'/home/matchcenter'
                },
                {
                    path:'/home/matchcenter',
                    name:'matchcenter',
                    component:matchCenter
                },
                {
                    path:'/home/filesubmit',
                    name:'filesubmit',
                    component:fileSubmit
                },
                {
                    path:'/home/filereview',
                    name:'filereview',
                    component:fileReview,
                    children:[
                        {
                            path:'',
                            redirect:'/home/filereview/filemanage' 
                        },
                        {
                            path:'/home/filereview/filemanage',
                            name:'filemanage',
                            component:fileManage
                        },
                        {
                            path:'/home/filereview/usermanage',
                            name:'usermanage',
                            component:userManage
                        },
                        {
                            path:'/home/filereview/addstudent',
                            name:'addstudent',
                            component:addStudent
                        },
                        {
                            path:'/home/filereview/permissionmanage',
                            name:'permission',
                            component:permissionManage
                        }
                    ]
                },
                {
                    path:'/home/supermanage',
                    name:'supermanage',
                    component:superManage,
                    children:[
                        {
                            path:'/home/supermanage/superusermanage',
                            name:'superusermanage',
                            component:superUserManage,
                        },
                        {
                            path:'/home/supermanage/adduser',
                            name:'adduser',
                            component:addUser 
                        },
                        {
                            path:'/home/supermanage/noticemanage',
                            name:'noticemanage',
                            component:noticeManage 
                        }
                    ]
                },
            ]
        },
        {
            path:'/noticeview',
            name:'notice',
            component:notice
        }
    ]
})
//挂在路由导航守卫
router.beforeEach((to,from,next)=>{
    //to 将要访问的路径
    //form 代表从哪个路径跳转而来
    //next 是一个函数  表示放行
    //next()放行  next('/login)强制跳转

    // 如果用户访问的路径是登录页,则直接放行
    if (to.path==='/login') return next()
    if (to.path==='/matchcenter') return next()
    //否则用户就没有访问登录页,那我们就需要先获取token
    //通过token有没值来判断,是否给用户进行强制跳转
    //获取token
     const tokenStr = sessionStorage.getItem("token")
   
    //如果tokenStr不存在,就强制跳转到登录页
    if (!tokenStr) return next('/login')
    // 如果没有return出去,证明tokenStr存在,直接放行
    next()
    if(to.path=='/filesubmit'){
        if(from.path=='/login'){
            next()
        }else{
            next('/login')
        }
    }
})

export default router;