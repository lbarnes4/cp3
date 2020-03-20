<template>
	<div class="games-wrapper">
		<div class="gamesNav">
			<a class="gameName" href="#" @click="slidingpuzzle()">Sliding Puzzle</a>
			<a class="gameName" href="#" @click="minesweeper()">Minesweeper</a>
		</div>
		<component :is="game"></component>
	</div>
</template>

<script>
// @ is an alias to /src
import slidingpuzzle from "@/components/slidingpuzzle.vue";
import minesweeper from "@/components/minesweeper.vue";

export default {
	name: "Games",
	components: {
		slidingpuzzle,
		minesweeper
	},
	data() {
		return {
			game: "slidingpuzzle",
		}
	},
	methods: {
		minesweeper() {
			this.game = "minesweeper";
		},
		slidingpuzzle() {
			this.game = "slidingpuzzle";
		},
	},
};

</script>

<style scoped>
.games-wrapper {
	width: 100%;
	min-height: calc(100vh - 78px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url("../wood-wallpaper.jpg");
	background-position: center;
	background-repeat: no-repeat;
	padding-bottom: 100px;
	background-size: cover;
}

.gamesNav {
	width: 100%;
	height: 50px;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
}

.gameName {
	padding: 10px;
	margin: 10px;
	border: 2px solid black;
	border-radius: 5px;
	color: black;
	text-decoration: none;
	background-color: white;
	box-shadow: 0 0 8px 0 black;
}

.gameName:hover {
	background-color: lightgray;
}

.gameName:active {
	background-color: gray;
}
</style>
