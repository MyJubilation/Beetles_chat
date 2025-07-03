<template>
	
	<Header style="position: fixed;top: 0; left: 0; right: 0; z-index: 1000;"></Header>
	<div class="main">
		<aside>
			<div style="width: 100%; display: flex;justify-content: center;">
				<h3>好友列表</h3>
			</div>
			<div v-for="item in friendList" :key="item.id" v-if="friendList.length>0">
				<router-link :to="`/chatroom/chatview/${item.id}`" class="frendAsideList" active-class="frendAsideListActive">
				    <p>{{ item.nick_name }}</p>
				</router-link>
			</div>
			<div v-else style="display: flex; align-items: center; justify-content: center; border-top: 1px #e5e7eb solid;">
				<div>
					<p style="color: #565658; margin-top: 100px;">您还没有好友哦</p>
					<a href="#">添加好友</a>
				</div>
			</div>
			<!-- <Footer></Footer> -->
		</aside>
		<main>
			<router-view />
		</main>
	</div>
</template>

<script setup>
	import Footer from '../Footer.vue'
	import { ref, onMounted } from 'vue';
	import { get,post } from '@/request';
	import Header from '@/views/Header.vue';
	
	const getFriendList = async () => {
		try {
			const response = await get('/getFriendList',{ "userId": sessionStorage.getItem("userId") });
			console.log(sessionStorage.getItem("userId"));
			friendList.value = response.data;
		} catch (error) {
			console.error('获取好友列表失败:', error);
		}
	};
	
	const friendList = ref([
	    // { id: "beetles1", username: "甲壳虫1" },
	    // { id: "beetles2", username: "甲壳虫2" },
	]);
	
	const getUserInfo = async () => {
		try{
			const responseUserInfo = await get('/getUserInfo',
								{	"userName": sessionStorage.getItem("userName"), 
								});
			sessionStorage.setItem("userId",responseUserInfo.data.id);
			sessionStorage.setItem("avatar",responseUserInfo.data.avatar);
			sessionStorage.setItem("userNickname",responseUserInfo.data.nick_name);
		} catch (error) {
			console.error(error);
		}
	}
	
	
	onMounted(() => {
		console.log('组件已挂载到 DOM');
		getFriendList();
		getUserInfo();
	});
	
</script>

<style scoped>
	.main {
		display: flex; /* 启用Flexbox布局 */
		margin-top: 64px;
		border-top: 5px #e5e7eb solid;
	}

	aside {
		width: 15%; /* 侧边栏宽度 */
		border-right: 5px #e5e7eb solid;
		height: 920px;
	}
	
	.frendAsideList {
		display: flex;
		width: 100%;
		height: 50px;
		align-items: center;
		border-top: 1px #e5e7eb solid;
		color: #3C3D43;
		text-decoration: none;
		transition: color 0.3s ease;
	}
	.frendAsideList p {
		margin: 0px 0px 0px 10px;
	}
	.frendAsideListActive{
		background-color: #eaeaea;
	}

	main {
		flex: 1; /* 主区域占据剩余空间 */
	}
</style>