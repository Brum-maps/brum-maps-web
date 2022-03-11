import { createWebHistory, createRouter } from "vue-router";
import CourseList from "@/views/CourseList";
import LoginPage from "@/views/LoginPage";
import ServicePage from "@/views/ServicePage";
import HomeComponent from "@/components/HomeComponent";
import StepList from "@/views/StepList";

const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/login",
        name: "LoginPage",
        component: LoginPage,
    },
    {
        path: "/visits",
        name: "CourseList",
        component: CourseList
    },
    {
        path: "/steps",
        name:"StepList",
        component: StepList
    },
    {
        path: "/service",
        name:"ServicePage",
        component: ServicePage
    }
];


const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;