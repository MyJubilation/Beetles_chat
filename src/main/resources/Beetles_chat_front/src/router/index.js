import { createRouter, createWebHistory } from "vue-router"

import ChatRoom from "@/views/chatRoom/ChatRoom.vue"
import AboutMe from "@/views/AboutMe.vue"
import Login from "@/views/Login/Login.vue"
import Register from "@/views/Login/Register.vue"
import User from "@/views/User/User.vue"

const constantRoutes = [
	{
		path: "/",
		redirect: "/chatroom"
	},
	{
		path: "/login",
		component: Login
	},
	{
		path: '/register',
		name: 'Register',
		component: Register
	},
	{
		path: "/chatroom",
		component: ChatRoom,
		children:[
		  {
		    path:'chatview/:id',
		    name:'chatview',
		    component: () => import('../views/chatRoom/ChatView.vue')
		  }
		]
	},
	{
		path: "/user",
		component: User
	}
]


const router = createRouter({
	history: createWebHistory(),
	routes: constantRoutes
})

export default router