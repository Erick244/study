<template>
	<footer class="footer">
		<span>Copyright <strong>Cod3r</strong> © 2015-2022</span>
	</footer>
</template>

<script>
export default {
	name: "FooteR"
}
</script>

<style>
	.footer {
		grid-area: footer;
		background-color: #ddd;
		color: #333;

		display: flex;
		align-items: center;
		justify-content: flex-end;
		padding-right: 10px;
	}
</style>