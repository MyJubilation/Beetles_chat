<template>
	<div class="header-wrapper">
	    <!-- 顶部状态栏 -->
	    <header :class="[{ 'header-sticky': isSticky }, { 'header-border': hasScrolled }]">
			<!-- 导航内容（Logo、菜单等） -->
			<div class="header-content">
				<router-link class="logo" :to="{path:'/'}">
					<img src="@/assets/LOGO.png" style="height: 40px;" />
					<p class="logoText">Beetles</p>
				</router-link>
				<div class="NavList">
					<router-link :to="{ path:'/chatroom' }" style="width: 80px;">
						<span>聊天室</span>
					</router-link>
					<router-link :to="{ path:'/user' }" style="width: 80px;">
						<span>个人中心</span>
						<!-- <img style="width: 50px; height: 50px;" src="https://beetles-1.oss-cn-chengdu.aliyuncs.com/%E7%94%B2%E5%A3%B3%E8%99%AB%20LOGO.png" /> -->
					</router-link>
					<a @click="logout()" href="#" style="width: 80px;">
						<span>退出登录</span>
					</a>
				</div>
	      </div>
	    </header>
	  </div>
</template>

<script lang="ts" setup>
	import { ref, onMounted, onUnmounted, onUpdated, watchEffect } from 'vue';
	import router from '../router';
	
	// 状态定义
	const isSticky = ref(false); // 是否处于置顶状态（滚动后激活）
	const hasScrolled = ref(false); // 是否下滑超过阈值（显示边框线）
	const scrollThreshold = 50; // 滚动阈值（单位：px）
	const isNotLogin = ref(false);
	let userName = sessionStorage.getItem("user_nickname");
	const userId = sessionStorage.getItem("userId");
	
	// 监听滚动事件
	onMounted(() => {
	  window.addEventListener('scroll', handleScroll);
	  if(sessionStorage.getItem("token")){
		  isNotLogin.value = true;
		  console.log("测试通过");
	  }
	});
	onUpdated(() => {
		console.log("进入onUpdated");
	})
	
	// 移除滚动事件（避免内存泄漏）
	onUnmounted(() => {
	  window.removeEventListener('scroll', handleScroll);
	});
	
	// 滚动事件处理函数
	const handleScroll = () => {
	  const scrollY = window.scrollY || document.documentElement.scrollTop;
	  // 判断是否滚动超过阈值
	  isSticky.value = scrollY > 0;
	  hasScrolled.value = scrollY > scrollThreshold;
	};
	
	// 退出登陆
	const logout = () => {
		console.log("正在执行退出登录程序...");
		sessionStorage.removeItem("avatar");
		sessionStorage.removeItem("userId");
		sessionStorage.removeItem("userName");
		sessionStorage.removeItem("userNickname");
		// sessionStorage.removeItem("user_id");
		// sessionStorage.removeItem("user_nickname");
		isNotLogin.value = false;
		router.push("/login");
		
	}
	
	// 初始化时触发一次（处理刷新后的初始状态）
	watchEffect(() => {
	  handleScroll();
	});
</script>

<style scoped>
	
	/* 置顶状态（滚动后激活） */
	.header-sticky {
	  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05); /* 悬浮阴影（可选） */
	}
	
	/* 下滑后显示底部边框线 */
	.header-border {
		background-color: white;
		transition: background-color 0.5s ease;
		border-bottom-color: #e5e7eb; /* 浅灰色边框 */
	}
	
	/* 导航内容布局 */
	.header-content{
		height: 64px;
		display: flex;
	}
	.logo{
		width: 100px;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 90px;
		text-decoration: none;
	}
	.logoText{
		color: #3C3D43;
		transition: color 0.3s ease;
	}
	.logoText:hover {
		color: #68A88B; /* #ff6600 */
	}
	.NavList{
		display: flex;
		margin-left: auto;
		margin-right: 10px;
	}
	.NavList a{
		display: flex;
		justify-content: center;
		align-items: center;
		color: #3C3D43;
		text-decoration: none;
		width: 52px;
		padding: 0 12px;
		transition: color 0.3s ease;
	}
	.NavList a:hover {
		color: #68A88B; /* #ff6600 */
	}
	.NavList a span{
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>