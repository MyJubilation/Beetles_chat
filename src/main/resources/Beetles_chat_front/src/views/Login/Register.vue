<template>
	<div class='Login-contener'>
		<el-card class="box_card">
			<div>
				<h2 style="width: 100%; font-size: xx-large; color: #53a4fa;">注 &nbsp; &nbsp; &nbsp; &nbsp; 册</h2>
			</div>
			<el-form>
				<el-form-item>
					<el-input placeholder="请输入用户名" prefix-icon="el-icon-user" v-model="username"></el-input>
				</el-form-item>
			</el-form>
			<el-form>
				<el-form-item>
					<el-input placeholder="请输入密码" show-password prefix-icon="el-icon-lock" v-model="password"></el-input>
				</el-form-item>
			</el-form>
			<el-form>
				<el-form-item>
					<el-button type=primary style="width: 100%;" icon=el-icon-user-solid @click="register()">注册</el-button>
				</el-form-item>
			</el-form>
			<el-form>
				<router-link to="/login">已有账号？点击登录</router-link>
			</el-form>
		</el-card>

		
	</div>
</template>

<script>
	/* 导出vue中的对象 */
	export default{
		
		data(){
			return{
				username:'',
				password:''
			}
		},
		methods:{
			register(){
				//获取用户输入的用户名和密码
				//定义一个空对象，params是弱类型对象，事先不定义属性，当要使用的时候在定义。
				var params = {}
				params.username=this.username;
				params.password=this.password;
				
				console.log(params);
				
				//将用户名和密码发送给后台服务验证，然后接受后台服务返回的结果，来判断用户是否登陆成功.
				this.$axios.post('http://localhost:8010/register',params)
				.then(result =>{
					console.log(result);
					var data = result.data;
					//如果登陆成功则跳转页面，否则提示登陆失败。
					if(data.code == 200){
						console.log(data);
						//把后台传回的name保存到缓存中
						sessionStorage.setItem("name",data.data);
						//页面跳转
						this.$message.success(data.msg);
						setTimeout(() => {
							this.$router.push("/login");
						  }, 1000);
					}else{
						this.$message.warning(data.msg);
					}
				})
				.catch(e=>{
					console.log(e);
				})
				
			}
		},
		mounted(){
			
		}
	}
</script>

<!-- scoped表示style中的样式只在当前文件中生效 -->
<style scoped>
	/* 小数点--类选择器（class） */
 .box_card{
	 width: 25vw;
	 color: #000000;
	 text-align: center;
	 background-color: transparent;
	 border: 0px;
 }
 
 .Login-contener{
	 display: flex;  /* 弹性布局*/
	 justify-content: center; /* card居中*/
	 align-items: center;  /* card里面的元素也居中*/
	 /* vh:浏览器高度的百分之一,vw:浏览器宽度的百分之一 */
	 height: 100vh;
	 background-image: url('../../assets/login-background.jpg');
	 background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     background-attachment: fixed;
 }
 
</style>