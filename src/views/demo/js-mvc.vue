<template>123</template>

<script>
import { Model, View, Controller } from "./js-mvc.js";
export default {
  name: "JSMVC",
  setup() {
    const app = new Controller(new Model(), new View());
    app.model.addTodo({ id: 3, text: "Take a nap", complete: false });
    console.log(app.model.todos);
  },
};
</script>

<style></style>
