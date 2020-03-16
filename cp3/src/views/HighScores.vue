<template>
	<div class="wrapper">
		<h1>High Scores</h1>
		<div style="margin-bottom: 20px;">
			<a class="gameName" href="#" v-on:click="game = 'slidingpuzzle'">Sliding Puzzle</a>
			<a href="#" class="gameName" v-on:click="game = 'minesweeper'">Minesweeper</a>
		</div>
		<div class="scores">
			<div class="score" style="background-color: lightgray; border-bottom: 2px solid black;">
				<div class="score-detail"><strong>First Name</strong></div>
				<div class="score-detail"><strong>Last Name</strong></div>
				<div class="score-detail"><strong>Date</strong></div>
				<div class="score-detail"><strong>Score</strong></div>
			</div>	
			<div v-for="score in scores" :key="score.id">
				<div class="score">
					<div class="score-detail">{{score.first_name}}</div>
					<div class="score-detail">{{score.last_name}}</div>
					<div class="score-detail">{{score.date}}</div>
					<div class="score-detail">Score: {{score.high_score}}</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
// @ is an alias to /src

export default {
	name: "HighScores",
	data() {
		return {
			game: 'slidingpuzzle',
		}
	},
	computed: {
		scores() {
			return this.$root.$data.scores.filter(obj => obj.game == this.game).sort((a,b) => (a.high_score < b.high_score) ? -1 : 1)
		}
	},
};
</script>

<style>
.wrapper {
	width: 100%;
	display: flex;
	flex-direction: column;
	margin-bottom: 100px;
}

.scores {
	width: 800px;
	margin: auto;
	max-width: 90%;
	display: flex;
	flex-direction: column;
	box-shadow: 0 0 8px 0 gray;
}

.score {
	width: calc(100% - 20px);
	height: 50px;
	border-bottom: 1px solid gray;
	display: flex;
	padding: 10px;
}

.score-detail {
	display: flex;
	align-items: center;
	width: calc((100% - 20px)/4);
	text-align: left;
}

.gameName {
	padding: 10px;
	margin: 0 10px;
	border: 1px solid black;
	border-radius: 5px;
	color: black;
	text-decoration: none;
	background-color: white;
}

.gameName:hover {
	background-color: lightgray;
}

.gameName:active {
	background-color: gray;
}
</style>
