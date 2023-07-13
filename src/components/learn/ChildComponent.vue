<script setup>
import {ref, defineProps, defineEmits} from "vue";

const emits = defineEmits(['update:modelValue', 'update:modelStar'])

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  modelStar: {
    type: null,
    required: true
  },
  placeholder: {
    type: String
  },
  type: {
    type: String,
    default: 'text',
    validator(value) {
      return [
        'text',
        'password',
        'search',
        'email',
        'tel'
      ].includes(value)
    }
  },
  mode: {
    type: String,
    default: 'input',
    validator(value) {
      return [
        'input',
        'textarea'
      ].includes(value)
    }
  },
  stars: {
    type: Array
  },
  isRecommended: Boolean,
  modelName: String
})

const sendEmits = (e) => {
  emits('update:modelValue', e.target.value)
}
const emitStars = (e) => {
  emits('update:modelStar', e)
}

const emitStarChange = (rating) => {
  emits('update:modelStar', rating)
}

</script>

<template>
  <div>
    <input
        @input="sendEmits"
        :type="type"
        :value="modelValue"
        :placeholder="placeholder"
        v-if=" mode !== 'textarea'"
    >
    <textarea
        v-else
        :placeholder="placeholder"
        :value="modelValue"
    ></textarea>
  </div>
  <!--radio    -->
  <div v-for="star in stars">
    <input
        type="radio"
        :id="`star${star}`"
        class="m-1"
        @click="emitStars(star)"
        :name="modelName"
        :value="star "

    >
    <label :for="`star${star}`">{{star}}</label>
  </div>
  <!--radio    -->
  <div v-for="star in stars" @click="emitStarChange(star)">
    {{star}} *
  </div>
</template>

<style scoped>

</style>