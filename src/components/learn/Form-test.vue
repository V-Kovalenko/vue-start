<script setup>
import {reactive, computed, ref} from "vue";
import axios from "axios";
const products = ref([
  {title: 'Бананы', price: 21},
  {title: 'Яблоки', price: 341},
  {title: "Вишня", price: 47},
  {title: "Мороженоу", price: 77},
  {title: "АПЕЛЬСИН", price: 54}
])
const query = ref('')
const queryProducts = computed(() => {
  return products.value.filter(it => {
    return it.title.indexOf(query.value) !== -1 || it.price.toString().indexOf(query.value) !== -1
  })
})
</script>

<template>
  <div class="p-5">
    <input
        type="search"
        class="m-3"
        v-model="query"
    >
    <ul>
      <li v-for="product in queryProducts">
        {{product.title}}
        <sup>{{product.price}}</sup>
      </li>
    </ul>
  </div>

</template>

<style scoped>

</style>