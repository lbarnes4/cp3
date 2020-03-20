<template>
	<div class="wrapper">
		<div class="game-container">
			<h1>Sliding Puzzle</h1>
			<button type="button" v-on:click="newGame()">New Game</button>
			<p><strong>moves: </strong>{{moves}}</p>
			<div class="grid">
				<div v-for="block in blocks" :key="block.index">
					<a href="javascript:;" v-on:click="move(block.index)" :id="block.index" class="block" :style="{'top': block.x * 25 + '%', 'left': block.y * 25 + '%'}">{{block.index}}
					</a>
				</div>
				<div v-if="finished" class="finished">
					<h3>Congratulations!</h3>
					<p><strong>moves: </strong>{{moves}}</p>
					<input v-model="firstName" placeholder="First Name">
					<input v-model="lastName" placeholder="Last Name">
					<button type="button" style="margin-top: 10px;" v-on:click="logScore(firstName,lastName)">Save score</button>
					
				</div>
			</div>
			<br/>
			<button type="button" v-on:click="autoWin()">Auto Win</button>
		</div>
	</div>
</template>

<script>
export default {
	name: "SlidingPuzzle",
	data() {
		return {
			blocks: [],
			space: {x: 3, y: 3},
			moves: 0,
			finished: false,
			firstName: '',
			lastName: '',
		}
	},
	mounted() {
		for (var i = 0; i < 4; i++) {
			for (var j = 0; j < 4; j++) {
				if (!(i == 3 && j == 3)) {
					this.blocks.push({index: i * 4 + j + 1, x: i, y: j });
				}
			}
		}
		this.space.x = 3;
		this.space.y = 3;
		this.newGame();
	},
	methods: {
		newGame() {
			this.moves = 0;
			for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 4; j++) {
					if (!(i == 3 && j == 3)) {
						this.blocks[i * 4 + j].x = i;
						this.blocks[i * 4 + j].y = j;
					}
				}
			}
			this.space.x = 3;
			this.space.y = 3;
			var startTime = new Date();
			var space = this.space;
			var blocks = this.blocks;
			var blockToMove = '';
			var newBlock = '';
			var myInterval = setInterval(function() {
				var neighbors = [];
				if (space.x > 0) {
					newBlock = blocks.find(obj => { return obj.x == space.x - 1 && obj.y == space.y && obj != blockToMove});
					if (newBlock) {
						neighbors.push(newBlock);
					}
				}
				if (space.x < 3) {
					newBlock = blocks.find(obj => { return obj.x == space.x + 1 && obj.y == space.y && obj != blockToMove});
					if (newBlock) {
						neighbors.push(newBlock);
					}
				}
				if (space.y > 0) {
					newBlock = blocks.find(obj => { return obj.x == space.x && obj.y == space.y - 1 && obj != blockToMove});
					if (newBlock) {
						neighbors.push(newBlock);
					}
				}
				if (space.y < 3) {
					newBlock = blocks.find(obj => { return obj.x == space.x && obj.y == space.y + 1 && obj != blockToMove});
					if (newBlock) {
						neighbors.push(newBlock);
					}
				}
				var number = Math.floor(Math.random() * neighbors.length);
				blockToMove = neighbors[number];
				var temp = {x: blockToMove.x, y: blockToMove.y};
				blockToMove.x = space.x;
				blockToMove.y = space.y;
				space.x = temp.x;
				space.y = temp.y;
				if (new Date() - startTime > 1500) {
					clearInterval(myInterval);
				}
			}, 100);
		},
		move(index) {
			var block = this.blocks[index - 1];
			if
			(
				(
					(
						block.x == this.space.x + 1
						||
						block.x == this.space.x - 1
					)
					&& (block.y == this.space.y)
				)
				||
				(
					(
						block.y == this.space.y + 1
						||
						block.y == this.space.y - 1
					)
					&& (block.x == this.space.x)
				)
			) {
				var temp = {x: block.x, y: block.y};
				block.x = this.space.x;
				block.y = this.space.y;
				this.space.x = temp.x;
				this.space.y = temp.y;
				this.moves += 1;
			}
			this.checkFinish();
		},
		checkFinish() {
			var finished = true;
			for (var i = 0; i < 4; i++) {
				for (var j = 0; j < 4; j++) {
					if (!(i == 3 && j == 3)) {
						if (this.blocks[i * 4 + j].x != i || this.blocks[i * 4 + j].y != j) {
							finished = false;
							break;
						}
					}
				}
			}
			this.finished = finished;
		},
		logScore(firstName,lastName) {
			var today = new Date();
			var date = (today.getMonth() + 1) + '/' + today.getDate() + '/' + today.getFullYear();
			var score = {
				first_name: firstName,
				last_name: lastName,
				high_score: this.moves,
				game: 'slidingpuzzle',
				date: date,
			};
			this.$root.$data.scores.push(score);
			this.finished = false;
			this.newGame();
		},
		autoWin() {
			this.finished = true;
		},
	}
};

</script>

<style>
* {
	box-sizing: border-box;
}

.wrapper {
	display: flex;
	justify-content: center;
	width: 100%;
	
}

.game-container {
	background-color: white;
	width: 500px;
	margin: 0 auto;
	max-width: 90%;
	height: 500px;
	border: 2px solid black;
	border-radius: 5px;
	box-shadow: 0 0 8px 0 black;
}

.grid {
	position: relative;
	width: 300px;
	max-width: 90%;
	height: 300px;
	display: flex;
	margin: auto;
	background-color: brown;
	border-radius: 5px;
}

.block {
	width: 20%;
	height: 20%;
	margin: 2.5%;
	position: absolute;
	border: 5px solid orange;
	border-radius: 5px;
	display: flex;
	background-color: #ffe6cc;
	justify-content: center;
	align-items: center;
	text-align: center;
	text-decoration: none;
	color: black;
	font-size: 25px;
}

.finished {
	width: 250px;
	height: 250px;
	position: absolute;
	left: 25px;
	top: 25px;
	background-color: white;
	z-index: 2;
	box-shadow: 0 0 8px 0 gray;
	display: flex;
	flex-direction: column;
}

.finished input,
.finished button {
	margin: 5px 30px;
}


</style>
