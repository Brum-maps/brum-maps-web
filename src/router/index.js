import { createWebHistory, createRouter } from "vue-router";
import ConnexionComponent from "@/views/ConnexionComponent";
import CourseList from "@/views/CourseList";
import HomeComponent from "@/components/HomeComponent";
import CourseCreationComponent from "@/views/CourseCreationComponent";
import StepsList from "@/views/StepsList";

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
        path: "/create-course",
        name: "CourseCreationComponent",
        component: CourseCreationComponent,
    },
    {
        path: "/steps",
        name: "StepsList",
        component: StepsList
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;