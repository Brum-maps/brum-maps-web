import { createWebHistory, createRouter } from "vue-router";
import ConnexionComponent from "@/views/ConnexionComponent";
import CourseList from "@/views/CourseList";
import HomeComponent from "@/components/HomeComponent";

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
    },
    {
        path: "/visites",
        name: "CourseList",
        component: CourseList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;