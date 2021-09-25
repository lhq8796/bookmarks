<template>
  <div id="root_js-mvc"></div>
</template>

<script>
import './js-mvc.scss'
import { onMounted, ref } from '@vue/runtime-core'
import { Model, View, Controller } from './js-mvc.js'
export default {
  name: 'JSMVC',
  setup() {
    let app = ref(null)
    onMounted(() => {
      app.value = new Controller(new Model(), new View())
    })

    return {
      app,
    }
  },
}
</script>

<style></style>
