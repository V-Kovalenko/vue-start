<script setup>
  import {ref, reactive} from "vue";
  const count = ref(1)
  const incrementWithRef1 = function () {
    console.log(count)
    console.log(typeof count)
    count.value++
  }

  const count2 = reactive({
    count2: 3
  })
  const incrementWithReactive2 = () => {
    count2.count2++
  }
  /*------------Test $ref-------------*/

</script>

<template>
  <div>
    <button class="main-button" @click="incrementWithRef1">
      Click for new button:{{count}}
    </button>
  </div>
  <div>
    <button @click="incrementWithReactive2">
      <strong>
      </strong>
      Click me too: {{count2.count2}}
    </button>
    <br><br>
  </div>
  <button @click="count2.count2++">test</button>
  <button @click="count++">test2</button>


</template>

<style scoped>

</style>