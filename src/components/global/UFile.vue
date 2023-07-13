<script setup>
import {computed, defineProps, defineEmits, watch, ref} from "vue";
const emits = defineEmits(['update:modelValue'])
const {modelValue} = defineProps({
  modelValue: Object,
  label: String
})
const value = ref(modelValue)

watch(value, () => {
  emits('update:modelValue', value.value)
})
const uploadFile = (e) => {
  const [file] = e.target.files // Доступ к фото в input type file
  value.value = file

}
const previewFilePath = computed(() => {  // обязательно computed, чтобы сделать динамику
  if(value.value) {
    return URL.createObjectURL(value.value)  // путь до фотографии
  }
  return '#'
})
</script>

<template>
  <div class="mb-3 ">
    <label class="form-label m-4">Photo</label>
    <!--    @change="uploadFile"   //  соединение Input type file - так как v--model тут не работает -->
    <input
        class="form-control"
        type="file"
        @change="uploadFile"  />
    >
    <!--      :src="previewFilePath"    //  предпоказ фотографий динамически    -->
    <img :src="previewFilePath" alt="" class="w-100% mt-2">
  </div>
</template>

<style scoped>

</style>