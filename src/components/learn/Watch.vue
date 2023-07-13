<script setup>
import {ref, watch} from 'vue'

const todoId = ref(1)
const todoData = ref(null)

async function fetchData() {
  todoData.value = null
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId.value}`)
    todoData.value = await res.json()
  }catch (e) {
    console.error(e)
  }
}

fetchData()

watch(todoId, () => { // watch() может напрямую наблюдать за ссылкой, и обратный вызов запускается всякий раз,
  //  когда count изменяется значение
  fetchData()
})
</script>

<template>
  <div>
    <p>Todo id: {{ todoId }}</p>
    <button @click="todoId++">Id plus</button>
    <p v-if="!todoData">Loading...</p>
    <pre v-else>{{ todoData }}</pre>
  </div>
</template>

<style scoped>

</style>