<template>
    <v-row align="center" class="list px-3 mx-auto">
        <v-col cols="12" md="8">
            <v-text-field v-model="searchTitle" label="Search by title"></v-text-field>
        </v-col>
        <v-col cols="12" md="4">
            <v-btn small @click="page = 1;retrieveTutorials();">Search</v-btn>
        </v-col>

        <v-col cols="12" sm="12">
            <v-row>
                <v-col cols="4" sm="3">
                    <v-select
                        v-model="pageSize"
                        :items="pageSizes"
                        label="Items per Page"
                        @change="handlePageSizeChange"
                    ></v-select>
                </v-col>

                <v-col cols="12" sm="9">
                    <v-pagination
                        v-model="page"
                        :length="totalPages"
                        total-visible="7"
                        next-icon="mdi-menu-right"
                        prev-icon="mdi-menu-left"
                        @input="handlePageChange"
                    ></v-pagination>
                </v-col>
            </v-row>
        </v-col>

        <v-col cols="12" sm="12">
            <v-card class="mx-auto" tile>
                <v-card-title>Tutorials</v-card-title>

                <v-data-table
                    :headers="headers"
                    :items="tutorials"
                    disable-pagination
                    :hide-default-footer="true"
                >
                    <template v-slot:[`item.actions`]="{ item }">
                        <v-icon small class="mr-2" @click="editTutorial(item.id)">mdi-pencil</v-icon>
                        <v-icon small @click="deleteTutorial(item.id)">mdi-delete</v-icon>
                    </template>
                </v-data-table>
                <v-card-actions v-if="tutorials.length > 0">
                    <v-btn small color="error" @click="removeAllTutorials">Remove All</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script>
import TutorialDataService from "../../services/TutorialDataService";
export default {
    name: "tutorial-list",
    data() {
        return {
            tutorials: [],
            searchTitle:"",
            headers:[
                {text: "Title", align: "start", sortable: false, value: "title"},
                {text: "Description", value: "description", sortable: "false"},
                {text: "Status", value: "status", sortable: false},
                {text: "Actions", value: "actions", sortable: false},
            ],
            page: 1,
            totalPages: 0,
            pageSize: 3,

            pageSizes: [3,6,9],
        };
    },
    methods: {
        getRequestParams(searchTitle, page, pageSize) {
            var params = {};

            if(searchTitle) {
                params["title"] = searchTitle;
            }
            if(page) {
                params["page"] = page;
            }
            if(pageSize) {
                params["size"] = pageSize;
            }
            return params;
        },

        retrieveTutorials() {
            const params = this.getRequestParams(this.searchTitle, this.page, this.pageSize);
            console.log("page >>> " + this.page);

            TutorialDataService.getAll(params)
                .then((response) => {
                    const{tutorials, totalPages} = response.data;
                    this.tutorials = tutorials.map(this.getDisplayTutorial);
                    this.totalPages = totalPages;

                    console.log(this.tutorials);
                })
                .catch((exception) => {
                    console.error(exception.message);
                });
        },

        handlePageChange(value) {
            console.log("page : " + value);
            this.page = value;
            this.retrieveTutorials();
        },

        handlePageSizeChange(size) {
            this.pageSize = size;
            this.size = 1;
            this.retrieveTutorials();
        },

        refreshList() {
            this.retrieveTutorials();
        },
        removeAllTutorials() {
            TutorialDataService.deleteAll()
                .then((response) => {
                    console.log(response.data);
                    this.refreshList();
                })
                .catch((exception) => {
                    console.err(exception.message);
                });
        },
        // searchTitle() {
        //     TutorialDataService.findByTitle(this.title)
        //         .then((response) => {
        //             this.tutorials = response.data.map(this.getDisplayTutorial);
        //             console.log(this.tutorials);
        //         })
        //         .catch((exception) => {
        //             console.err(exception.message);
        //         });
        // },
        editTutorial(id) {
            this.$router.push({name: "tutorial-details", params:{id: id}});
        },
        deleteTutorial(id) {
            TutorialDataService.delete(id)
                .then(() => {
                    this.refreshList();
                })
                .catch((exception) => {
                    console.err(exception.message);
                })
        },
        getDisplayTutorial(tutorial) {
            return {
                id: tutorial.id,
                title: tutorial.title.length > 30 ? tutorial.title.substr(0,30) + "..." : tutorial.title,
                description: tutorial.description.length > 30 ? tutorial.description.substr(0,30) + "..." : tutorial.description,
                status: tutorial.published ? "Published" : "Pending",
            };
        }
    },
    mounted() {
        this.retrieveTutorials();
    },
}
</script>

<style>
.list {
    max-width: 750px;
}
</style>
