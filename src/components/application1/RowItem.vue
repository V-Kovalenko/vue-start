<script setup>
const emits = defineEmits(["remove"]);

const props = defineProps({
  text: {
    type: String,
    required: true,
  },
});

function handleRemoveRow() {
  emits("remove", props.text);
}
</script>

<template>
  <div class="row-item">
    {{ text }}
    <button class="remove" @click="handleRemoveRow">X</button>
  </div>
</template>

<style scoped>
.row-item {
  display: flex;
  align-items: center;
  grid-column-gap: 12px;
  width: 100%;
  justify-content: space-between;

  > .remove {
    color: red;
  }
}
</style>
