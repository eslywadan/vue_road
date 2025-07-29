import { shallowMount, createLocalVue} from '@vue/test-utils'
import Vuex from 'vuex'
import Counter from '@/components/Counter_changelog.vue'
// `import Counter from '@/components/Counter.vue` is equivalent to `../src/components/Counter.vue` be config in vue.config.js

const localVue = createLocalVue()
localVue.use(Vuex)

describe('Counter.vue', () => {
    let actions
    let state
    let store
    
    beforeEach(() => {
        state = { count:0 }
        actions = {
            increment: jest.fn(), 
            decrement: jest.fn()
        }
        store = new Vuex.Store(
            {
                state, 
                actions
            }
        )
    })

    it('renders count from store', () => {
        const wrapper = shallowMount(Counter, { store, localVue})
        expect(wrapper.text()).toContain('Count: 0')
    })

    it('calls increment on + click', async () => {
        const wrapper = shallowMount(Counter, { store, localVue})
        await wrapper.find('button:first-of-type').trigger('click')
        expect(actions.increment).toHaveBeenCalled()
    })

    it('call decrement on - click', async () => {
        const wrapper = shallowMount(Counter, { store, localVue})
        await wrapper.find('button:last-of-type').trigger('click')
        expect(actions.decrement).toHaveBeenCalled()
    })
})
