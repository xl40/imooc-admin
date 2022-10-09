import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('test with shallowMount', function() {
  it('组件渲染正常', function() {
    const wrapper = shallowMount(HelloWorld, {
      propsData: { msg: 'Alex' }
    })
    expect(wrapper.element).toMatchSnapshot()
  })
})
