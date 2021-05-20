<template>
    <div v-if="currentTutorial" class="edit-form">
        <h4>Tutorial</h4>
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" v-model="currentTutorial.title"/>
            </div>
            <div class="form-group">
                <label for="description">Description</label>
                <input type="text" class="form-control" id="description" v-model="currentTutorial.description" />
            </div>
            <div class="form-group">
                <label><strong>Status:</strong></label>
                {{currentTutorial.published ? "Published" : "Pending"}}
            </div>
        </form>

        <button v-if="currentTutorial.published" class="badge badge-primary mr-2" @click="updatePublished(false)">UnPublish</button>
        <button v-else class="btn btn-primary mr-2" @click="updatePublished(true)">Publish</button>
        <button class="btn btn-danger mr-2" @click="deleteTutorial">Delete</button>
        <button class="btn btn-success mr-2" @click="updateTutorial">Update</button>
    </div>
    <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
    </div>
</template>

<script>
import TutorialDataService from "../../services/TutorialDataService";

export default {
    name: "tutorial",
    data() {
        return {
            currentTutorial: null,
            message: ''
        };
    },
    methods: {
        getTutorial(id) {
            console.log("getTutorial");
            TutorialDataService.get(id)
                .then(response => {
                    this.currentTutorial = response.data;
                    console.log(this.currentTutorial);
                })
                .catch(exception => {
                    console.log(exception.message);
                });
        },
        updatePublished(status) {
            var data = {
                id: this.currentTutorial.id,
                title: this.currentTutorial.title,
                description: this.currentTutorial.description,
                published: status
            };
            TutorialDataService.update(this.currentTutorial.id, data)
                .then(response => {
                    this.currentTutorial.published = status;
                    console.log(response.data);
                })
                .catch(exception => {
                    console.log(exception.message);
                })
        },
        updateTutorial() {
            TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
                .then(response => {
                    alert("제목 : '" + this.currentTutorial.title + "' 또는 \n설명 : '" + this.currentTutorial.description + "' 로 수정되었습니다.");
                    console.log(response.data);
                    this.message = 'The Tutorial was updated successfully';
                })
                .catch(exception => {
                    console.log(exception.message);
                })
        },
        deleteTutorial() {
            TutorialDataService.delete(this.currentTutorial.id)
                .then(response => {
                    console.log(response.data);
                    this.$router.push({name: "tutorials"});
                })
                .catch(exception => {
                    console.log(exception.message);
                })
        }
    },
    mounted() {
        this.message = '';
        this.getTutorial(this.$route.params.id);
    }
}
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>