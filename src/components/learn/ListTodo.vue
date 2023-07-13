<script setup>
import {ref, computed} from "vue";
let id = 0
const todoInput = ref('')
const hideCompleted = ref(false)
const todos = ref([
  { id: id++, text: 'Learn HTML', done: false },
  { id: id++, text: 'Learn JavaScript', done: false },
  { id: id++, text: 'Learn Vue', done: false }
])
const addTodo = () => {
  if (todoInput.value) {
    todos.value.push({id:id++, text: todoInput.value, done: false})
  }

}

const deleteTodo = (todo) => {
  todos.value = todos.value.filter(it => it !== todo)
}

const isHideCompleted = computed(() => {
  console.log(hideCompleted.value)
  return hideCompleted.value?
      todos.value.filter(it => !it.done):
      todos.value
})
</script>

<template>
  <form class="list" @submit.prevent.stop>
    <div>
      <input
          type="text"
          class="list__input"
          v-model="todoInput"
      >
      <button
          class="list__btnAddTodo"
          @click="addTodo"
      >
        AddTodo
      </button>
      <ul class="list__ul">
        <li
            class="list__li"
            v-for="todo in isHideCompleted"
            :key="todo.id"
        >
          <label :for="`${todo.id}`">
          <input
              type="checkbox"
              v-model="todo.done"
              class="list__inputCheckbox"
              :id="`${todo.id}`"

          >

            <span id="span" :class="{list__inputCheckboxSpan: todo.done}">{{todo.text}}</span>
          </label>


          <button
              class="list__btnDeleteTodo"
              @click="deleteTodo(todo)"
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
    <button
        class="list__btnH"
        @click="hideCompleted = !hideCompleted"
    >
      {{!hideCompleted? 'Hide completed' : 'Show' }}
    </button>
  </form>
</template>

<style lang="scss">
  .list {
    padding: 1rem;
    &__input {
      margin: 0 1rem 1rem 0;
    }
    &__btnAddTodo{

    }
    &__ul {
    }
    &__li {
      padding-bottom: 1rem;
    }
    &__btnDeleteTodo {
      width: min-content;
      height: min-content;
      margin-left: 0.5rem;
    }
    &__inputCheckbox {
      margin-right: 0.5rem;
    }
    &__inputCheckboxSpan {
      text-decoration: line-through;
    }
  }

</style>