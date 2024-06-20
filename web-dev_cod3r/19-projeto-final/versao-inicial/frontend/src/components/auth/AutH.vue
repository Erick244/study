<template>
	<div class="auth-content">
		<div class="auth-modal">
			<img src="@/assets/logo.png" width="200" alt="Logo" />
			<hr>
			<div class="auth-title">
				{{ showSignup ? "Cadastro" : "Login" }}
			</div>
			<input 
				type="text" 
				v-if="showSignup" 
				v-model="user.name" 
				placeholder="Nome"
			>
			<input 
				type="email" 
				name="email" 
				v-model="user.email" 
				placeholder="Email"
			>
			<input 
				type="password" 
				name="password" 
				v-model="user.password" 
				placeholder="Senha"
			>
			<input 
				type="password"  
				v-if="showSignup" 
				v-model="user.confirmPassword" 
				placeholder="Confirme a Senha"
			>
			<button v-if="showSignup" @click="signup">
				Registrar
			</button>
			<button v-else @click="signin">
				Entrar
			</button>
			<a href @click.prevent="showSignup = !showSignup">
				<span v-if="showSignup">Já possui cadastro?</span>
				<span v-else>Não possui cadastro?</span>
			</a>
		</div>
	</div>
</template>

<script>
import { baseApiUrl, showError, userKey } from "@/global";
import axios from "axios";

export default {
	name: "AutH",
	data() {
		return {
			showSignup: false,
			user: {}
		}
	},
	methods: {
		signin() {
			axios.post(`${baseApiUrl}/signin`, this.user)
				.then(res => {
					this.$store.commit('setUser', res.data);
					localStorage.setItem(userKey, JSON.stringify(res.data));
					this.$router.push('/')
				})
				.catch(showError)
		},
		signup() {
			axios.post(`${baseApiUrl}/signup`, this.user)
				.then(() => {
					this.$toasted.global.defaultSuccess();
					this.user = {}
					this.showSignup = false;
				})
				.catch(showError)
		}
	}
}
</script>

<style>
	.auth-content {
		height: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.auth-modal {
		background-color: #fff;
		width: 350px;
		padding: 35px;
		box-shadow: 0 1px 5px rgba(0, 0, 0, 0.15);

		display: flex;
		flex-direction: column;
		align-items: center;
	}

	.auth-title {
		font-size: 1.2rem;
		font-weight: 100;
		margin: 10px 0 15px 0;
	}

	.auth-modal input {
		width: 100%;
		border: 1px solid #bbb;
		margin-bottom: 15px;
		padding: 3px 8px;
		outline: none;
	}

	.auth-modal button {
		align-self: flex-end;
		background-color: #2460ae;
		color: #fff;
		padding: 5px 15px;
		outline: none;
		border: none;
	}

	.auth-modal a {
		margin-top: 35px;
	}

	.auth-modal hr {
		border: 0;
		width: 100%;
		height: 1px;
		background: linear-gradient(to right, 
			rgba(120, 120, 120, 0),
			rgba(120, 120, 120, 0.75),
			rgba(120, 120, 120, 0)
		);
	}
</style>