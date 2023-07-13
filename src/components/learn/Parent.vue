<script setup>
import {reactive, ref} from 'vue'
import ChildComponent from "@/components/learn/ChildComponent.vue";
const obj = reactive({
  author: '',
  placeholder: 'Enter your name',
  type: 'text',
  star: null,
  mode: 'input',
  isRecommended: true,
  name:'radioTest'
})
const stars = [1,2,3,4,5]
</script>

<template>
  <div>
    <ChildComponent
        :placeholder="obj.placeholder"
        :type="obj.type"
        v-model="obj.author"
        v-model:modelStar ="obj.star"
        :mode="obj.mode"
        :stars="stars"
        :isRecommended="obj.isRecommended"
        :modelName="obj.name"
    />

  </div>
</template>





















<!--<script setup>
import {reactive, ref, watch, createApp} from "vue";
import ChildComponent from "@/components/learn/ChildComponent.vue";
const greeting = 'Hello from parent'
const greeting2 = 'Hello from parent2'
const review = reactive({
  author: '',
  type: 'password'
})
</script>

<template>
  <div id="t">
    <ChildComponent :msg="greeting" :msg2="greeting2" v-model="review.author" :type="review.type"/>
  </div>
</template>

-->