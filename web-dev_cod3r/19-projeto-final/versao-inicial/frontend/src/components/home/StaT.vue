<template>
	<div class="stat">
		<div class="stat-icon">
			<i :class="icon" :style="style"></i>
		</div>
		<div class="stat-info">
			<span class="stat-title">{{ title }}</span>
			<span class="stat-value">{{ value }}</span>
		</div>
	</div>
</template>

<script>
export default {
	name: "StaT",
	props: ['title', 'value', 'icon', 'color'],
	computed: {
		style() {
			return "color: " + (this.color || "#000");
		}
	}
}
</script>

<style>
	.stat {
		flex: 1;
		display: flex;
		border-radius: 8px;
		margin-right: 20px;
		margin-bottom: 20px;
		background-color: #fff;
		padding: 20px;
		border: 1px solid rgb(0, 0, 0, 0.2);
		box-shadow: 0px 1px 5px rgb(0, 0, 0, 0.15);
	}

	.stat-icon {
		display: flex;
		align-items: center;
	}

	.stat-icon i {
		font-size: 5rem;
	}

	.stat-info {
		flex: 1;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
	}

	.stat-title {
		font-size: 1.2rem;
	}

	.stat-value {
		font-size: 3rem;
	}
</style>