import Vue from "vue";
import VueRouter from "vue-router";

import Home from "@/components/home/HomE";
import AdminPages from "@/components/admin/AdminPages";
import ArticlesByCategory from "@/components/article/ArticlesByCategory";
import ArticleById from "@/components/article/ArticleById";
import Auth from "@/components/auth/AutH";

Vue.use(VueRouter);

const routes = [
	{
		name: "home",
		path: "/",
		component: Home
	},
	{
		name: "adminPages",
		path: "/admin",
		component: AdminPages
	},
	{
		name: "articlesByCategory",
		path: "/categories/:id/articles",
		component: ArticlesByCategory
	},
	{
		name: "articleById",
		path: "/articles/:id",
		component: ArticleById
	},
	{
		name: "auth",
		path: "/auth",
		component: Auth
	}
]

export default new VueRouter({
	mode: "history",
	routes
})