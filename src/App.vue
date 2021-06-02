<template>
  <!-- <div id="app">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">VENOM PROJECT</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/tutorials" class="nav-link">Tutorials</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Add</router-link>
        </li>
      </div>
    </nav>

    <div class="container mt-3">
      <router-view />
    </div>
  </div> -->
  <!-- vuetify -->
  <v-app>
    <v-app-bar app dark>
      <div class="d-flex align-center mr-2">
        VENOM-PROJECT
      </div>
      <v-btn to="/tutorials" text>Tutorials</v-btn>
      <v-btn to="/add" text>Add</v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
    <v-footer>
      <div>
        <!-- Parent Counter : {{counter}} <br> -->
        Parent Counter : {{$store.state.counter}} <br>
        <v-btn @click="addCounter">+</v-btn>
        <v-btn @click="subCounter">-</v-btn>
        <!-- <child v-bind:num="counter"></child> -->
        <child></child>
      </div> 
    </v-footer>
  </v-app>
  
</template>

<script>
import Child from './components/vuex_exam01/Child';
export default {
  name: 'app',
  components: {
    child: Child
  },
  // data() {
  //   return {
  //     counter: 0
  //   };
  // },
  methods: {
    addCounter() {
      this.$store.state.counter++;
    },
    subCounter() {
      this.$store.state.counter--;
    }
  }
};
</script>
