<script setup>
const emits = defineEmits(['click'])

  const emitClick = () => {
    emits('click')
  }
</script>

<template>
  <div>
    <button @click="emitClick" class="btnTst">
      <slot name="left">left </slot>
      <slot name="centre">centre </slot>
      <slot name="right">text</slot>
    </button>
  </div>
</template>

<style scoped>
  .btnTst {
    background-color: #9857d4;
  }
</style>