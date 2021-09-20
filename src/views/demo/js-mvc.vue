<template>
  <div id="root_js-mvc"></div>
</template>

<script>
import './js-mvc.scss'
import { onMounted } from '@vue/runtime-core'
import { Model, View, Controller } from './js-mvc.js'
export default {
  name: 'JSMVC',
  setup() {
    onMounted(() => {
      const app = new Controller(new Model(), new View())
      app.model.addTodo({ id: 3, text: 'Take a nap', complete: false })
      console.log(app.model.todos)
    })
  },
}
</script>

<style></style>
