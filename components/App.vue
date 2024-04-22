<template>
    <ExampleComponent />
</template>

<script type="module">
var loadAsync = url => Vue.defineAsyncComponent(_ => import(url));
// You need to declare loadAsync inside every component where you intend to import sub-components...

export default {
    name: "ExampleApp",
    components: {
        ExampleComponent: loadAsync("/components/ExampleComponent.vue")
    },
    // data(){
    //     return {}
    // },
    // methods: { }
}
</script>

<style>
html, body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    height: 100%;
}
body {
    display: grid;
    place-items: center;
}
</style>

