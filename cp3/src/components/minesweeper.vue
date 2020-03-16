<template>
	<div class="wrapper">
		<div class="game-container">
			<h1>Minesweeper</h1>
			<button type="button" v-on:click="newGame()">New Game</button>
			<p><strong>moves: </strong>{{moves}}</p>
			<div class="grid"><img src="../minesweeper.png" style="width: 100%; height: 100%;"/>
				<div class="overlay">
					<div class="outoforder">Out of Order</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "Minesweeper",
	data() {
		return {
			moves: 0,
		}
	},
	methods: {
		newGame() {
			this.moves = 0;
		}
	}
};

</script>

<style>
.wrapper {
	display: flex;
	justify-content: center;
	width: 100%;
}

.game-container {
	width: 500px;
	max-width: 90%;
	height: 500px;
	border: 1px solid gray;
}

.grid {
	position: relative;
	width: 300px;
	height: 300px;
	border: 1px solid gray;
	display: flex;
	margin: auto;
}

.overlay {
	background-color: black;
	opacity: .6;
	z-index: 2;
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
}

.outoforder {
	color: white;
	font-size: 25px;
	width: 100%;
	position: absolute;
	top: 100px;
	left: 0;
}
</style>
