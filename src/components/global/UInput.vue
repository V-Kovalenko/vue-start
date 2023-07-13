<script setup>
import {defineProps, defineEmits, ref, watch} from 'vue'

const emits = defineEmits(['update:modelValue', 'test'])

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  placeholder: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => {
      console.log('value: ', value)
      return [
        'text',
        'password',
        'search',
        'email',
        'tel'
      ].includes(value)
    }
  },
  mode:{
    type: String,
    default: 'input',
    validator: (value) => {
      return [
        'textarea',
         'input'
      ].includes(value)
    }
  }
})

const emitInput = (e) => {
  emits('update:modelValue', e.target.value)
}
const emitTest = () => {
  emits('test', 'abc')
}

</script>

<template>
  <div>
    <input
        @click="emitTest"
        @input="emitInput"
        v-if="mode!=='textarea'"
        class="form-control mb-3"
        :type="type"
        placeholder="placeholder"
        :value='modelValue'

    >

    <textarea
        @input="emitInput"
        v-else
        rows="10"
        class="form-control mb-3"
        placeholder="What are you Like?"
        :value="modelValue"
    ></textarea>
  </div>
</template>

<style scoped>

</style>