<template>
  <div style="height: 100%;">
		<div style="display: flex; border-bottom: 1px #e5e7eb solid; height: 50px; align-items: center;">
			<p style="font-size: 20px; margin: 0 0 0 20px;">BB号: {{ friendId }}</p>
			<a href="#" style="margin-left: auto; margin-right: 20px; width: 100px;" @click="scrollToBottom" class="scrollButtom">滑动到底部</a>
		</div>
		<div class="chatInfo">
			<div v-for="(item, index) in chatInfoList" :key="index">
			    <div :class="{ 'friendInfo': item.id == friendId, 'selfInfo': item.id == userId }">
					<span style="margin: 0; white-space: pre-line;">{{ item.text }}</span>
				</div>
			</div>
		</div>
		<div class="inputInfo" @click="focusInput">
			<textarea type="text" ref="textInput" placeholder=""></textarea>
			<div>
				<button class="sendMsgButton" @click="sendMsg">发送</button>
			</div>
		</div>
  </div>
</template>

<script setup>
	import { useRoute, onBeforeRouteUpdate } from 'vue-router'
	import { ref, computed, onMounted, getCurrentInstance, watch } from 'vue'
	import { get } from '@/request';
	
	// const testinfo = ref([]);
	// const test = async () => {
	// 	try {
	// 		const response = await get('/getFriendList');
	// 		console.log(response);
	// 		testinfo.value = response;
	// 		console.log(testinfo.value);
	// 	} catch (error) {
	// 		console.error('获取好友列表失败:', error);
	// 	}
	// };
	
	const textInput = ref(null);
	const userId = sessionStorage.getItem("userId");
	
	const focusInput = () => {
	  // 只有当点击事件不是直接发生在 input 上时才触发聚焦
	  if (event.target !== textInput.value) {
	    textInput.value.focus();
	  }
	};

	// 获取路由实例
	const route = useRoute()
	// 直接通过route.params获取（适用于非缓存组件）
	const friendId = computed(() => route.params.id)
	
	const chatInfoList = ref([
	    // { id: "beetles1", text: "生活如酒，或芳香，或浓烈，因为诚实，它变得醇厚；生活如歌，或高昂，或低沉，因为守信，它变得悦耳； 生活如画，或明丽，或素雅，因为诚信，它变得美丽。" },
	    // { id: "beetles", text: "若能掬起一捧月光，\n我选择最柔和的；若能采来香山红叶，我选择最艳丽的；若能摘下满天星辰，我选择最明亮的。也许你会说，我的选择不是最好，但我的选择，我相信。" },
	]);
	
	const getChatHistory = async () => {
		try {
			const response = await get('/getChatHistory', {"userId": sessionStorage.getItem("userId"), "friendId": friendId.value});
			console.log(response);
			chatInfoList.value = response.data;
			console.log(chatInfoList.value);
		} catch (error) {
			console.error('获取好友列表失败:', error);
		}
	};
	
	// 发送消息时也滚动到底部（优化体验）
	const sendMsg = async () => {
		console.log(textInput.value.value);
		// 发送信息到后端
		try {
			const response = await get('/sendChatMessage', {"userId": sessionStorage.getItem("userId"), "friendId": friendId.value, "chatMessage": textInput.value.value});
			console.log(response);
			// 更新前端chatInfo数据
			getChatHistory();
			// 清空输入框内容
			textInput.value.value = "";
		} catch (error) {
			console.error('获取好友列表失败:', error);
		}
		// 滚动到底部
		scrollToBottom();
	};
	
	// 滚动到底部的方法
	const scrollToBottom = () => {
	  const chatContainer = document.querySelector('.chatInfo');
	  if (chatContainer) {
	    chatContainer.scrollTop = chatContainer.scrollHeight;
	  }
	};
	
	onMounted(() => {
		console.log('组件已挂载到 DOM');
		scrollToBottom();
		// getChatHistory();
		setInterval(getChatHistory, 3000);
		
		// // test
		// sessionStorage.setItem("user_id", 3);
		// sessionStorage.setItem("user_nickname", "甲壳虫");
	});
	
	// 监听路由参数变化
	    watch(
	      () => route.params.id,
	      (newId) => {
	        if (newId) {
				chatInfoList.value = "";
				friendId.value = newId; // 更新 friendId
				getChatHistory();       // 重新调用方法
	        }
	      },
	      { immediate: true } // 初始化时立即执行一次
	    );
</script>

<style scoped>
	.chatInfo{
		width: 99.6%;
		height: 600px; /* 固定高度 */
		overflow-y: auto; /* 内容超出时显示垂直滚动条 */
		border-bottom: 5px #e5e7eb solid;
		display: flex;
		flex-direction: column; /* 垂直排列消息 */
	}
	.inputInfo{
		width: 98.7%;
		height: 250px;
		/* border-bottom: 1px solid #ccc; */
		padding: 10px;
		cursor: text;
	}
	
	.friendInfo, .selfInfo {
	  max-width: 60%;
	  padding: 8px 12px;
	  margin: 4px;
	  border-radius: 8px;
	  display: inline-block;
	}
	
	.friendInfo {
		background-color: #f0f0f0;
		border-top-left-radius: 0;
		margin-left: 20px;
	}
	.friendInfo span {
	}
	
	.selfInfo {
		background-color: #dcf8c6;
		border-top-right-radius: 0;
		margin-right: 20px;
		float: right;
		/* margin-left: auto; */
	}
	.selfInfo span {
	}
	
	.sendMsgButton{
		background-color: #0066CC;
		color: white;
		border-radius: 8px;
		height: 40px;
		width: 100px;
		float: right;
		margin-right: 40px;
	}
	.sendMsgButton :active{
		
	}
	
	textarea{
		width: 100%; 
		border: none; 
		outline: none; 
		background: transparent; 
		height: 200px;
		font-size: 30px;
	}
	
	.scrollButtom{
		display: flex;
		justify-content: center;
		align-items: center;
		color: #3C3D43;
		text-decoration: none;
		width: 52px;
		padding: 0 12px;
		transition: color 0.3s ease;
	}
	.scrollButtom:hover {
		color: #68A88B; /* #ff6600 */
	}
	.scrollButtom span{
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
</style>