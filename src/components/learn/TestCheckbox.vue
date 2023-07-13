<script setup>
import { ref, nextTick } from 'vue';

const todoList = ref(['Task 1', 'Task 2', 'Task 3']);

const addItem = () => {
  todoList.value.push('New Task');

  // Фокус на новом элементе после добавления
  nextTick(() => {
    const lastIndex = todoList.value.length - 1;
    const inputElement = document.querySelector(`#input-${index}`);
    if (inputElement) {
      inputElement.focus();
    }
  });
};
</script>

<template>
  <div >
    <ul>
      <li v-for="(item, index) in todoList" :key="index">
        <input :id="'input-'" type="text" v-model="item.value">

      </li>
    </ul>
    <button @click="addItem(index)">Add Task</button>
  </div>
</template>