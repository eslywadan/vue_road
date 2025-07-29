<template>
    <div>
        <h1>Count: {{ count }}</h1>
        <button @click="increment">Increment</button>

        <h2>Chagnelog:</h2>
        <ul>
            <li v-for="(log, index) in changelog" :key="index">
                [{{ log.timestamp}}] {{ log.type}} -> {{ JSON.stringify(log.payload)}}
            </li>
        </ul>    
    </div>
</template>

<script>
export default {
    computed: {
        count() {
            return this.$store.state.count
        },
        changelog() {
            return this.$store.state.changelog
        }
    },
    methods: {
        increment() {
            this.$store.commit('increment')
        }
    }
}
</script>