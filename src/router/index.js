import { createRouter, createWebHistory } from "vue-router";

import Dashboard from "@/pages/Dashboard.vue";
import Add from "@/pages/Add.vue";
import Edit from "@/pages/Edit.vue";

const routes = [
    { path: "/", component: Dashboard, name: "Dashboard" },
    { path: "/add", component: Add, name: "add" },
    { path: "/edit/:id", component: Edit, name: "edit"}
]

export const router = createRouter({
    history: createWebHistory(),
    routes
})