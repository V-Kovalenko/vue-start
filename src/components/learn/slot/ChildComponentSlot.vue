<script setup>
const childArr = ['a', 'b', 'c', 'd']
const num = [1, 2, 3, 4, 5]
const text = 'text from child'
</script>

<template>
  <!--  -->
  <div class="header">
    <slot name="header"/>
  </div>
  <!--  -->

  <slot class="main" name="main">if not props from parent</slot>
  <!--  -->

  <slot name="footer"/>
  <!--  -->
  <!--  <div>-->
  <!--    <ul>-->
  <!--      <li v-for="it in childArr" v-bind:key="it">-->
  <!--        <slot v-bind:item="it"></slot>-->
  <!--      </li>-->
  <!--    </ul>-->
  <!--  </div>-->
  <!--  -->
  <div>
    <ul>
      <li v-for="n in num" :key="n">
        <slot :i="n"></slot>
      </li>
    </ul>
  </div>
  <slot name="view"/>
  <!--  -->

<div>
  <slot :text="text"></slot>
</div>
</template>


<style scoped>
.header {
  display: flex;
}

.main {

}
</style>