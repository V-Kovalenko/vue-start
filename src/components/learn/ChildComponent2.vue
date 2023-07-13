<script setup>
const childArr = ['a', 'b', 'c', 'd']
const number = [1, 2, 3, 4, 5]
const text = 'text from child'
</script>

<template>

  <slot name="footer"> footer from child</slot>
  <br>
  <slot name="header"/>

  <slot v-bind:test="text"/>
</template>


<style scoped>

</style>