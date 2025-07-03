<template>
	<div class="mainDiv">
		<div>
			<div>
			    <label for="username">用户名:</label>
			    <input type="text" ref="username" placeholder="" style="height: 20px;" required>
			  </div>
			  <div>
			    <label for="password">密码: &nbsp; &nbsp;</label>
			    <input type="password" ref="password" placeholder="" style="height: 20px; margin-top: 10px;" required>
			  </div>
			  <div>
			    <button class="loginButtom" @click="login()">登录</button>
			  </div>
		</div>
	</div>
</template>

<script setup>
	import { useRoute, onBeforeRouteUpdate } from 'vue-router'
	import { ref, computed, onMounted, getCurrentInstance, watch } from 'vue'
	import { get, post } from '@/request';
	import router from '@/router';
	
	const username = ref(null);
	const password = ref(null);
	
	const login = async () => {
		try {
			const response = await post('/login', 
								{	"userName": username.value.value, 
									"password": password.value.value,
								});
			// 存储 token 到 localStorage
			if(response.data.token){
				localStorage.setItem('token', response.data.token);
				sessionStorage.setItem("userName",username.value.value);
				router.push("/chatroom");
			}
		} catch (error) {
			console.error('登录失败:', error);
		}
		// console.log(username.value.value + "//" + password.value.value);
	};
</script>

<style scoped>
	.mainDiv {
		margin-top: 64px; 
		display: flex; 
		justify-content: center; 
		align-items: center; 
		height: 800px;
		/* background-image: url('../../assets/login-background.jpg');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		background-attachment: fixed; */
	}
	.loginButtom{
		background-color: #0066CC;
		margin-top: 20px;
		color: white;
		border-radius: 8px;
		height: 40px;
		width: 100px;
		float: right;
		margin-right: 40px;
	}
</style>