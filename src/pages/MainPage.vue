<script setup>
import {ref, reactive} from "vue";

import Test from "@/components/learn/Test.vue";
import Watch from "@/components/learn/Watch.vue";
import TestCheckbox from "@/components/learn/TestCheckbox.vue";

const count = ref(1)

const incrementWithRef = () => {
  count.value++
}
const count2 = reactive({
  count2: 5
})
const incrementWithReactive = () => {
  count2.count2++
}
</script>

<template>
  <div>
  <Test/>
<!--    <TestCheckbox/>-->
  </div>


</template>

<style scoped>

</style>
