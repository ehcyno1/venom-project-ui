import Vue from "vue";
import VueRouter from "vue-router";

import TutorialList from "../components/TutorialList";
import Tutorial from "../components/Tutorial";
import AddTutorial from "../components/AddTutorial";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            redirect: "/tutorials",
            component: TutorialList
        },
        {
            path: "/tutorials/:id",
            component: Tutorial
        },
        {
            path: "/add",
            component: AddTutorial
        }
    ]
});