<template>
	<div class="user-dropdown">
		<div class="user-button">
			<div class="d-none d-sm-block">{{ user.name }}</div>
			<div class="user-dropdown-img">
				<Gravatar :email="user.email" alt="user" />
			</div>
			<i class="fa fa-angle-down"></i>
		</div>
		<div class="user-dropdown-content">
			<router-link to="/admin">
				<i class="fa fa-cogs"></i> Administração
			</router-link>
			<a href @click.prevent="logout">
				<i class="fa fa-sign-out"></i> Sair
			</a>
		</div>
	</div>
</template>

<script>
import { userKey } from "@/global";
import { mapState } from 'vuex';
import Gravatar from "vue-gravatar";

export default {
	name: "UserDropdown",
	components: { Gravatar },
	computed: mapState(['user']),
	methods: {
		logout() {
			localStorage.removeItem(userKey);
			this.$store.commit("setUser", null);
			this.$router.push("/auth");
		}
	}
}
</script>

<style>
	.user-dropdown {
		position: relative;
		height: 100%;
	}

	.user-dropdown:hover {
		background-color: #00000033;
	}

	.user-button {
		display: flex;
		align-items: center;
		color: #fff;
		font-weight: 100;
		height: 100%;
		padding: 0px 20px;
	}

	.user-dropdown-img {
		margin: 0px 10px;
	}

	.user-dropdown-img > img {
		max-height: 37px;
		border-radius: 5px;
	}

	.user-dropdown-content {
		position: absolute;
		right: 0;
		background-color: #f9f9f9;
		min-width: 170px;
		box-shadow: 0px 8px 16px #00000033;
		padding: 10px;
		z-index: 1;

		display: flex;
		flex-direction: column;
		flex-wrap: wrap;

		visibility: hidden;
		opacity: 0;
		transition: visibility 0s, opacity 0.5s linear;
	}

	.user-dropdown:hover .user-dropdown-content {
		visibility: visible;
		opacity: 1;
	}

	.user-dropdown-content a {
		text-decoration: none;
		color: #000;
		padding: 10px;
	}

	.user-dropdown-content a:hover {
		text-decoration: none;
		color: #000;
		background-color: #ededed;
	}
</style>