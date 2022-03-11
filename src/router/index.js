import { createWebHistory, createRouter } from "vue-router";
import ConnexionComponent from "@/views/ConnexionComponent";
import CourseList from "@/views/CourseList";
import HomeComponent from "@/components/HomeComponent";
import StepList from "@/views/StepList";

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
    },
    {
        path: "/steps",
        name:"StepList",
        component: StepList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;