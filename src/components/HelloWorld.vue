<template>
    <div class="hello">
       <h1> {{ msg }} </h1>
       <button @click="handleClick">Clieck me</button>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld', 
    props: {
        msg: String
    },
    methods: {
        handleClick() {
            this.$emit('clicked')
        }
    }
}
</script>