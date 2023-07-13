<script setup>
  import {ref, onMounted} from "vue";
  const pElementRef = ref(null)
  const text = ref(null)
  onMounted(() => {
    pElementRef.value.textContent = 'Hi bro'
    text.value.textContent = 'Nikola'
  })

</script>

<template>
  <p ref="pElementRef">Hello</p>
  <p ref="text">Hello</p>
</template>

<style scoped>

</style>