// 1. Add Vuetify
After the Vue project is created successfully, 
we import Vuetify with command: vue add vuetify.

// 2. MDI 아이콘 출력

    https://v15.vuetifyjs.com/en/framework/icons/#install-material-design-icons
    Install Material Design Icons
    $ yarn add @mdi/font -D
    // OR
    $ npm install @mdi/font -D
    content_copy
    Installation is the same as the above. You will need to import the library into your application.

    // app.js
    import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
    import Vue from 'vue'
    import Vuetify from 'vuetify'

    Vue.use(Vuetify, {
    iconfont: 'mdi'
    })
