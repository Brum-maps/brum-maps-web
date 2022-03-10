import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/views/HomeComponent";
import ConnexionComponent from "@/views/ConnexionComponent";

const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/connexion",
        name: "ConnexionComponent",
        component: ConnexionComponent,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;