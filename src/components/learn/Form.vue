<script setup>
import {ref, reactive, computed} from "vue";

const products = ref([
  {title: 'Бананы', price: 21},
  {title: 'Яблоки', price: 341},
  {title: "Вишня", price: 47},
  {title: "Мороженоу", price: 77},
  {title: "АПЕЛЬСИН", price: 54}
])
const query = ref('')
const queryProducts = computed(() => {

  return products.value.filter(product => product.title.indexOf(query.value) !== -1 || product.price.toLocaleString().indexOf(query.value) !== -1)
})
const reverseQuery = computed(() => {
  return query.value.split('').reverse().join('')
})
</script>

<template>
  <input type="search" placeholder="Введите название продукта..." v-model="query">
  <br><br>
<!--  {{ reverseQuery }}-->
  <ul>
    <li v-for="product in queryProducts" :key="product">
      {{ product.title }}
      <sup>{{ product.price }}</sup>
    </li>
  </ul>
</template>

<style scoped>

</style>