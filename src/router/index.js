import { createWebHistory, createRouter } from "vue-router";
import HomeComponent from "@/components/HomeComponent";
import SignUpComponent from "@/components/SignUpComponent";

const routes = [
    {
        path: "/",
        name: "HomeComponent",
        component: HomeComponent,
    },
    {
        path: "/signup",
        name: "SignUpComponent",
        component: SignUpComponent,
    },
    {
        path: "/:catchAll(.*)",
        component: HomeComponent,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;