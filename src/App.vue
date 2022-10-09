<template>
  <div id='app'>
    <TodoList />
  </div>
  <router-view />
</template>

<script>
import TodoList from '@/views/TodoList'

export default {
  name: 'app',
  components: {
    TodoList
  }
}
</script>
