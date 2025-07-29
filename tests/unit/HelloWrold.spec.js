import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
    it('renders props.msg when passed', () => {
        const msg = 'Hello Test!'
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg }
        })
        expect(wrapper.text()).toMatch(msg)
    })
    it('emits "clicked" event when button is clicked', async() => {
        const wrapper = shallowMount(HelloWorld, {
            propsData: { msg: 'Click Test' }
        })
        // Find the button and trigger a click
        await wrapper.find('button').trigger('click')

        // Assert that the 'clicked' event has beem emitted once
        expect(wrapper.emitted().clicked).toBeTruthy()
        expect(wrapper.emitted().clicked.length).toBe(1)
    })
})