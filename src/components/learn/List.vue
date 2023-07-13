<script setup>
import {ref} from "vue";

const users = ref([
  {id: 1, name: 'Nikola', age: 23},
  {id: 2, name: 'Pasha', age: 45},
  {id: 3, name: 'Nikita', age: 12},
  {id: 4, name: 'Andre', age: 16},
  {id: 5, name: 'Jon', age: 43}
])

</script>

<template>
  <div class="list">
    <ul>
      <li
          v-for="user in users"
          class="list__li"
          :key="user.id"
      >
        {{ user.name }}

        <sup v-if="user.name === 'Nikola'"
        >
          <strong>{{ user.age }}</strong>
        </sup>
        <span v-else-if="user.age >= 43"> в расцвете сил</span>
        <span v-else><sup> Молодые </sup></span>
      </li>
    </ul>
  </div>

  <div>
    <ul>
      <li v-for="user in users"
          :class="{
        'blue': user.age > 30,
        'green': user.age < 30,
        'fz-24': user.name === 'Nikola'
      }"
      >
        {{user.age}}
      </li>
    </ul>
  </div>
</template>

<style scoped>
.red {
  background-color: #9857d4;
  font-size: 18px;
  border-radius: 100px;
}
.blue {
  color: blue;
  font-size: 24px ;
}
.green {
  color: green;
}
.fz-24 {
  font-size: 34px;
  color: red;
}
</style>