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
  })
})
