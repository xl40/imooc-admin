import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'
import { createApp } from 'vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
// 使用VUE实例渲染组件的方式，这种方式有很大的局限性...
describe('should print <h1>Alex</h1>', () => {
  it('should renders props.msg when passed', function() {
    const root = document.createElement('div')
    root.className = 'root'
    document.body.appendChild(root)
    const app = createApp(HelloWorld, {
      msg: 'Alex'
    })
    app.mount('.root')
    console.log(document.body.innerHTML.toString())
    expect(document.getElementsByClassName('hello').length).toBe(1)
  })
})

describe('test with shallowMount', function() {
  const msg = 'Alex'
  const wrapper = shallowMount(HelloWorld, {
    propsData: { msg }
  })
  console.log(wrapper.text())
  expect(wrapper.text()).toMatch(msg)
})
