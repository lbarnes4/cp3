<template>
	<div id="app">
		<div id="nav">
			<router-link to="/">Home</router-link> |
			<router-link to="/games">Games</router-link> |
			<router-link to="/highscores">High Scores</router-link>
		</div>
	<router-view />
	<div class="footer"><a href="https://github.com/lbarnes4/cp3.git">My GitHub</a></div>
	</div>
</template>

<style>
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
		min-height: 100vh;
	}

	#nav {
		padding: 30px 0;
		background-color: black;
		width: 100%;
	}

	#nav a {
		font-weight: bold;
		color: lightgray;
		padding: 10px;
	}

	#nav a.router-link-exact-active {
		border: 1px solid lightgray;
		border-radius: 4px;
	}

	.footer {
		width: 100%;
		height: 50px;
		background-color: black;
		position: fixed;
		bottom: 0;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.footer a {
		color: white;
		text-decoration: none;
	}

	.footer a:hover {
		text-decoration: underline;
	}
</style>
