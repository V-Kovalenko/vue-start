<script setup>
const emits = defineEmits(['remove'])
const props = defineProps({
  text: {
    type: String,
    required: true
  }
})

const sendEmits = () => {
  emits('remove', props.text)
}
</script>

<template>
<div>
  {{text}}
  <button @click="sendEmits">X</button>
</div>



</template>

<style scoped>

</style>