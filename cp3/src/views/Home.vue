<template>
<div class="home">
	<div class="home-content">
		<h1>Welcome to Game Center!</h1>
		<h2>Featured: Sliding Puzzle</h2>
		<a class="component-link" href="/games">
			<slidingpuzzle style="pointer-events: none;"/>
		</a>
	</div>
</div>
</template>

<script>
import slidingpuzzle from "@/components/slidingpuzzle.vue";

export default {
	name: "Home",
	components: {
		slidingpuzzle,
	},
};
</script>

<style>
.home {
	background-image: url("../arcade.jpg");
	width: 100%;
	min-height: 100vh;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
}

.home-content {
	width: 80%;
	max-width: 600px;
	min-height: 700px;
	border: 2px solid black;
	border-radius: 5px;
	background-color: rgba(100,100,100,.8);
	color: white;
	margin: 30px auto;
	margin-bottom: 80px;
}

.component-link {
	text-decoration: none;
	color: black;
}
</style>
