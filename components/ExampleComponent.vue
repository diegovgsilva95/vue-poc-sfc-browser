<template>
    <section class="example" ref="hello" @mouseenter="toggleStyle(1)" @mouseleave="toggleStyle(0)">
        <div v-if="isInside">
            <p>Howdy!</p>
        </div>
        <div v-else>
            <p>This is just an example of a custom component. </p>
            <p>Hover your mouse here to see it in action.</p>
        </div>
    </section>
</template>

<script type="module">
// var loadAsync = url => Vue.defineAsyncComponent(_ => import(url));

export default {
    name: "ExampleComponent",
    components: {},
    data(){
        return {
            isInside: false
        }
    },
    methods: {
        toggleStyle(newIsInside){
            this.isInside = !!newIsInside
            /** @type {HTMLElement} */
            let elm = this.$refs.hello
            elm.classList.toggle("inside", !!this.isInside)
        }
    }
}
</script>

<style scoped>
section.example {
    border: 1px dashed gray;
    display: grid;
    place-items: center;
    font-size: 1.5em;
    font-family: sans-serif;
    font-weight: 100;
    width: 25rem;
    height: 25rem;
    transition: .4s font-size ease-in-out, .4s color ease-in-out;
    user-select: none;
    text-align: center;
}
section.example p {
    margin: 0;
    padding: 0;
}
section.inside {
    font-size: 1.75em;
    color: red;
}
</style>