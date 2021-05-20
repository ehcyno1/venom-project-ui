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
  </v-app>
</template>

<script>
export default {
  name: 'app',
}
</script>
