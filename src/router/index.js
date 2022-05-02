import Vue from "vue";
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
Vue.use(VueRouter)
const login = ()=>import('../view/login.vue')
const home = ()=>import('../view/home/home.vue')
const matchCenter = ()=>import('../component/content/MatchCenter.vue')
const fileSubmit =()=>import('../component/content/FileSubmit.vue')
const fileReview = ()=>import('../component/content/filereview/FileReview.vue')
const fileManage = ()=>import('../component/content/filereview/FileManage.vue')
const userManage = ()=>import('../component/content/filereview/UserManage.vue')
const permissionManage = ()=>import('../component/content/filereview/PermissionManage.vue')
const router = new VueRouter({
    routes:[
        {
            path:'',
            redirect:'/login'
        },
        {
            path:'/login',
            component:login,
        },
        {
            path:'/home',
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
                            path:'/home/filereview/permissionmanage',
                            name:'permission',
                            component:permissionManage
                        }
                    ]
                }
            ]
        }
    ]
})

export default router;