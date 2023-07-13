<script setup>
import { ref } from "vue";
import RowCreator from "@/components/application1/RowCreator.vue";
import RowItem from "@/components/application1/RowItem.vue";

const rows = ref(["Banana", "Apple"]);

function addRow(newRow) {
  console.log("newRow", newRow);
  rows.value.push(newRow);
}

function removeRow(text) {
  console.log("text", text);
  rows.value = rows.value.filter((it) => it !== text);
}
</script>

<template>
  <div class="test-app">
    <RowCreator @create="addRow" />
    <ul class="list">
      <RowItem v-for="row in rows" :key="row" :text="row" @remove="removeRow" />
    </ul>
  </div>
</template>

<style scoped>
.test-app {
  display: flex;
  flex-direction: column;
  grid-row-gap: 20px;

  > .list {
    display: flex;
    flex-direction: column;
    grid-row-gap: 12px;
    width: 230px;
    padding: unset;
  }
}
</style>
