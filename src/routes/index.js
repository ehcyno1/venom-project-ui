import Vue from "vue";
import VueRouter from "vue-router";

// import TutorialList from "../components/normal/TutorialList";
// import Tutorial     from "../components/normal/Tutorial";
// import AddTutorial  from "../components/normal/AddTutorial";

import TutorialList from "../components/vuetify/TutorialList";
import AddTutorial  from "../components/vuetify/AddTutorial";
import Tutorial     from "../components/vuetify/Tutorial";

Vue.use(VueRouter); 

export default new VueRouter({
    mode: 'history',
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
        },
    ]
});