import { shallowMount } from '@vue/test-utils'
import TodoList from '@/views/TodoList'

describe('TodoList.vue', () => {
  it('组件渲染正常', () => {
    const wrapper = shallowMount(TodoList)
    console.log(wrapper.element)
  })
})
