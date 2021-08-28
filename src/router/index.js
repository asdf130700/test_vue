import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login'
import Main from '../components/Main'
//import About from '../components/AboutComponent'
import Home from '../components/HomeComponent'
import HelloWorld from '../components/HelloWorld' // 로그인 컴포넌트를 import 한다
import Topnav from "@/components/Topnav";
import Enroll from "@/components/Enroll";
import SignUp from "@/components/SignUp";

Vue.use(VueRouter)
const About = () => {
  return import('../components/AboutComponent')
}

export default new VueRouter({
  mode : 'history',
  routes: [
    {
      path :'',
      name : 'home',
      component: HelloWorld,
      // children: [{
      //   path :'top',
      //   component :Topnav,
      // },
      // ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/enroll',
      name: 'Enroll',
      component: Enroll,
    },
    {
      path :'/main',
      name : 'main',
      component: Main,
    },
    {
      path :'/home',
      name : 'home_com',
      component: Home,
    },
    {
      path :'/about',
      name : 'about',
      component : About,
      //component: () => import('../components/AboutComponent')
    },
    {
      path :'/top',
      name : 'top',
      component: Topnav,
    },
    {
      path :'/sign',
      name : 'sign',
      component: SignUp,
    },
  ]
})
