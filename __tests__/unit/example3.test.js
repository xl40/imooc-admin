import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('test with shallowMount', function() {
  it('should ', function() {
    const msg = 'Alex'
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg }
    })
    console.log(wrapper.text())
    expect(wrapper.text()).toMatch(msg)
    const length = wrapper.findAll('.hello').length
    console.log(length)
    expect(length).toBe(1)
    console.log(wrapper.props('msg'))
    expect(wrapper.props('msg')).toEqual(msg)
  })
})
