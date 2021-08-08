<template>
	<div class="container">
        <el-form ref="form" :model="form" label-width="120px">
             <!-- @submit.prevent="submitForm -->
            <el-form-item label="name">
                <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="password">
                <el-input v-model="form.password"></el-input>
            </el-form-item>
            <el-form-item label="passwordConfirm">
                <el-input v-model="form.passwordConfirm"></el-input>
            </el-form-item>
            <el-form-item label="email">
                <el-input v-model="form.email"></el-input>
            </el-form-item>
                <el-form-item label="position">
                    <el-input v-model="form.position"></el-input>
            </el-form-item>
  

			<!-- <div>
				<label for="email">email</label>
				<input type="text" id="email" v-model="email" />
			</div>
			<div>
				<label for="name">성함</label>
				<input type="text" id="name" v-model="name" />
			</div>
			<div>
				<label for="password">비밀번호</label>
				<input type="password" id="password" v-model="password" />
			</div>
			<div>
				<label for="passwordConfirm">비밀번호 확인</label>
				<input type="password" id="passwordConfirm" v-model="passwordConfirm" />
			</div>
			<div>
				<label for="position">직책</label>
				<input type="text" id="position" v-model="position" />
			</div>
			<div>
				<label for="teamName">팀 이름</label>
				<input type="text" id="teamName" v-model="teamName" />
			</div>
			<button type="submit">회원가입</button> -->
              <el-form-item>
    <el-button type="primary" @click="onSubmit">SignUp</el-button>
    <el-button>Cancel</el-button>
  </el-form-item>
		</el-form>
	</div>
</template>

<script>
export default {
	// name: 'SignupForm',
	data() {
		return {
            form :{
			email: '',
			name: '',
			password: '',
			passwordConfirm: '',
			position: '',
            },
		};
	},
	methods: {
		submitForm() {
			console.log('submit');
		},
	},
};
</script>

<style scoped></style>