<template>
    <div>
        <hr>
        <!-- Child counter : {{num}} <br> -->
        Child Counter : {{$store.state.counter}} <br>
        <v-btn>+</v-btn>
        <v-btn>-</v-btn>
    </div>
</template>

<script>
export default {
    name: 'Child',
    // props: ["num"]
}
</script>
