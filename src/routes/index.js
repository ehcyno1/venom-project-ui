import Vue from "vue";
import VueRouter from "vue-router";

import TutorialList from "../components/TutorialList";
import Tutorial     from "../components/Tutorial";
import AddTutorial  from "../components/AddTutorial";

Vue.use(VueRouter);

export default new VueRouter({
    mode: "history",
    routes: [
        {
            path: "/",
            alias: "/tutorials",
            name: "tutorials-list",
            component: TutorialList
        },
        {
            path: "/tutorials/:id",
            name: "tutorial-details",
            component: Tutorial
        },
        {
            path: "/add",
            name: "add",
            component: AddTutorial
        }
    ]
});