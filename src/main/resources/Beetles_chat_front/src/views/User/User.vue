<template>
	
	<Header style="position: fixed;top: 0; left: 0; right: 0; z-index: 1000;"></Header>
	<div style="margin-top: 64px;">
		<h1>用户信息：</h1>
		<p>用户名称：{{userNickname}}</p>
		<p>用户账号：{{userName}}</p>
		<p>用户ID：{{userId}}</p>
	</div>
</template>

<script setup>
	import { useRoute, onBeforeRouteUpdate } from 'vue-router'
	import { ref, computed, onMounted, getCurrentInstance, watch } from 'vue'
	import { get } from '@/request';
	import Header from '@/views/Header.vue';
	
	const userNickname = ref("");
	const userName = ref("");
	const userId = ref("");
	const userAvatar = ref("");
	userNickname.value = sessionStorage.getItem("userNickname");
	userId.value = sessionStorage.getItem("userId");
	userName.value = sessionStorage.getItem("userName");
	
</script>

<style>
</style>