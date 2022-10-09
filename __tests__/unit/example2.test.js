import HelloWorld from '@/components/HelloWorld.vue'
import { createApp } from 'vue'

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
    expect(document.getElementsByClassName('test').length).toBe(1)
  })
})
