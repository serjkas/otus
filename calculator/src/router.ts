import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Main from "./components/Main.vue";
import Game from "./components/Game.vue";

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/",
            name: "Main",
            component: Main
        },
        {
            path: "/game",
            name: "Game",
            component: Game
        }
    ]
});
