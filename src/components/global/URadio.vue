<script setup>
  import {ref, reactive, defineProps, defineEmits, watch, defineComponent} from "vue";
  const emits = defineEmits(['update: modelValue'])
  const {modelValue} = defineProps({
    modelValue: Boolean
  })
  const value = ref(modelValue)
  watch(value, () => {
    emits('update: modelValue', value)
  })
</script>

<template>
<!--  v-model="review.isRecommended"-->
  <div class="form-check">
    <input
        class="form-check-input"
        type="radio"
        id="adv2"
        v-model="value"
        :value="false"
    >
    <label class="form-check-label" for="adv2">
      Не советую
    </label>
  </div>
</template>

<style scoped>

</style>