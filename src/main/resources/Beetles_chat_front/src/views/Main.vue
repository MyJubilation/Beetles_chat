<template>
	<div style="margin-top: 64px; display: flex;">
		<aside class="asideCss">
			<p>1231</p>
		</aside>
		<div class="mainCss">
			<MdPreview :id="id" :modelValue="text" style="margin: 0 0 0 20px;" />
			<MdCatalog :editorId="id" :scrollElement="scrollElement" />
		</div>
	</div>
</template>

<script setup>
	import { ref } from 'vue';
	import { MdPreview, MdCatalog } from 'md-editor-v3';
	// preview.css相比style.css少了编辑器那部分样式
	import 'md-editor-v3/lib/preview.css';

	const id = 'preview-only';
	const text = ref('# 0 /n # 1');
	const scrollElement = document.documentElement;
</script>

<style scoped>
	.mainCss{
		width: 90%;
		display: flex;
		justify-content: center;
		border:1px black solid;
	}
	.asideCss{
		height: 93.3vh;
		width: 10%;
		/* background-color: aqua; */
		border-right: 1px #E2E2E3 solid;
	}
	.MdCss{
		width: 80%;
		margin-top: 50px;
	}
</style>