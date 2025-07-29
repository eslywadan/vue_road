import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const changelogPlugin = store => {
    store.subscribe((mutation) => {
        const entry = {
            type: mutation.type,
            payload: mutation.payload,
            timestamp: new Date().toLocaleDateString()
        }
        store.commit('addLog', entry)
    })
}

export default new Vuex.Store({
    state: {
        count: 0,
        changelog: []
    },
    mutations: {
        increment(state) {
            state.count++
        },
        addLog(state, logEntry) {
            state.changelog.push(logEntry)
        }
    },
    plugins: [changelogPlugin]
})