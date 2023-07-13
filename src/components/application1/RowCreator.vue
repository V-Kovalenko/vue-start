<script setup>
import { ref } from "vue";

const emits = defineEmits(["create"]);

const inputValue = ref("");

function handleCreateRow() {
  emits("create", inputValue.value);
  inputValue.value = "";
}
</script>

<template>
  <div class="row-creator">
    <input v-model="inputValue" />
    <button :disabled="!inputValue" @click="handleCreateRow">create</button>
  </div>
</template>

<style scoped>
.row-creator {
  display: flex;
  align-items: center;
  grid-column-gap: 12px;
}
</style>
