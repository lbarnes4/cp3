import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Games from "../views/Games.vue";
import HighScores from "../views/HighScores.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/games",
		name: "Games",
		component: Games
	},
	{
		path: "/highscores",
		name: "High Scores",
		component: HighScores
	}
];

const router = new VueRouter({
	mode: "history",
	base: process.env.BASE_URL,
	routes
});

export default router;
