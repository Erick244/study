<template>
	<div class="article-admin">
		<b-form>
			<input type="hidden" id="article-id" v-model="article.id">
			<b-form-group label="Nome:" label-for="article-name">
				<b-form-input 
					type="text" 
					v-model="article.name" 
					id="article-name" 
					required 
					placeholder="Informe o Nome do Artigo..." 
					:disabled="mode === 'remove'"
				/>
			</b-form-group>
			<b-form-group label="Descrição:" label-for="article-description">
				<b-form-input 
					type="text" 
					v-model="article.description" 
					id="article-description" 
					required
					placeholder="Informe a Descrição do Artigo..." 
					:disabled="mode === 'remove'" 
				/>
			</b-form-group>
			<b-form-group label="Imagem (URL):" label-for="article-imageUrl">
				<b-form-input 
					type="text" 
					v-model="article.imageUrl" 
					id="article-imageUrl"
					required
					placeholder="Informe a Url da Imagem..." 
					:disabled="mode === 'remove'" 
				/>
			</b-form-group>
			<b-form-group label="Categoria" label-for="article-categoryId">
				<b-form-select 
					id="article-categoryId" 
					:options="categories" 
					v-model="article.categoryId"
					:disabled="mode === 'remove'" 
				/>
			</b-form-group>
			<b-form-group label="Autor:" label-for="article-userId">
				<b-form-select 
					id="article-userId" 
					:options="users" 
					v-model="article.userId"
					:disabled="mode === 'remove'" 
				/>
			</b-form-group>
			<b-form-group label="Conteúdo" label-for="article-content"
				v-if="mode === 'save'">
				<VueEditor 
					v-model="article.content"
					placeholder="Informe o Conteúdo do Artigo..."
				/>
			</b-form-group>
			<b-button v-if="mode === 'save'" variant="primary" @click="save">
				Salvar
			</b-button>
			<b-button v-if="mode === 'remove'" variant="danger" @click="remove">
				Excluir
			</b-button>
			<b-button class="ml-2" @click="reset">
				Cancelar
			</b-button>
		</b-form>
		<hr>
		<b-table 
			hover 
			striped  
			:items="articles" 
			:fields="fields"
		>
			<template slot="actions" slot-scope="data">
				<b-button variant="warning" class="mr-2" 
				@click="loadArticle(data.item)">
					<i class="fa fa-pencil"></i>
				</b-button>
				<b-button variant="danger" 
				@click="loadArticle(data.item, 'remove')">
					<i class="fa fa-trash"></i>
				</b-button>
			</template>
		</b-table>
		<b-pagination 
			size="md" 
			v-model="page" 
			:total-rows="count" 
			:per-page="limit"
		/>
	</div>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { baseApiUrl, showError } from "@/global";
import axios from "axios";

export default {
	name: "ArticleAdmin",
	components: { VueEditor },
	data() {
		return {
			mode: "save",
			article: {},
			articles: [],
			categories: [],
			users: [],
			page: 1,
			limit: 0,
			count: 0,
			fields: [
				{ key: "id", label: "Código", sortable: true },
				{ key: "name", label: "Nome", sortable: true },
				{ key: "description", label: "Descrição", sortable: true },
				{ key: "actions", label: "Ações" }
			]
		}
	},
	methods: {
		loadArticles() {
			const url = `${baseApiUrl}/articles?page=${this.page}`;
			axios.get(url).then(res => {
				this.articles = res.data.data;
				this.count = res.data.count;
				this.limit = res.data.limit;
			})
		},
		reset() {
			this.article = {};
			this.mode = "save";
			this.loadArticles();
		},
		save() {
			const method = this.article.id ? "put" : "post";
			const id = this.article.id ? `/${this.article.id}` : "";
			axios[method](`${baseApiUrl}/articles${id}`, this.article).then(() => {
				this.$toasted.global.defaultSuccess();
				this.reset();
			}).catch(showError)
		},
		remove() {
			const id = this.article.id;
			axios.delete(`${baseApiUrl}/articles/${id}`).then(() => {
				this.$toasted.global.defaultSuccess();
				this.reset();
			}).catch(showError)
		},
		loadArticle(article, mode = "save") {
			this.mode = mode;
			axios.get(`${baseApiUrl}/articles/${article.id}`)
				.then(res => this.article = res.data);
		},
		loadCategories() {
			const url = `${baseApiUrl}/categories`;
			axios.get(url).then(res => {
				this.categories = res.data.map(category => {
					return { value: category.id, text: category.path };
				})
			})
		},
		loadUsers() {
			const url = `${baseApiUrl}/users`;
			axios.get(url).then(res => {
				this.users = res.data.map(user => {
					return { value: user.id, text: `${user.name} - ${user.email}` }
				})
			})
		}
	},
	watch: {
		page() {
			this.loadArticles();
		}
	},
	mounted() {
		this.loadUsers();
		this.loadCategories();
		this.loadArticles();
	}
}
</script>

<style>

</style>