<script setup>
import ChildComponent2 from "@/components/learn/ChildComponent2.vue";
import {defineComponent, onMounted, ref} from "vue";
import {computed, watch} from "vue";
import {useCounterStore} from "@/store/store";

const valueInput = ref('')
const arrayList = ref([])
const h2TitleFull = ref('Your list')
const h2TitleNull = ref('Null list')
const count = ref(0)
const x = ref(0)
const incrementX = (newValue) => {
  x.value++
}
const changeTitleMain = () => {
  if (arrayList.value.length) {
    return h2TitleFull.value
  } else {
    return h2TitleNull.value
  }
}
const addItemList = () => {
  arrayList.value.push(valueInput.value)
  valueInput.value = ''
}

const deleteItemList = (item, index) => {
  console.log('array: ', index)
  // arrayList.value = arrayList.value.filter((it, index) => index !== item)
  arrayList.value.splice(index, 1)
}

const filteredList = computed(() => {
  return arrayList.value.filter(it => it.indexOf(valueInput.value) !== -1)
})
const firstName = ref('')
const lastName = ref('')

const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})
const title = () => {
  return 'TITLE TEST'
}
const getUppercase = (it) => {
  return it.toUpperCase()
}
watch(valueInput, (newValue) => {

  if (newValue.length > 5) {
    valueInput.value = ''
  }
})
watch(arrayList.value, (newItem) => {
  console.log(newItem)
  count.value++
})
watch(count, incrementX)
</script>

<template>
  <div class="container">
    <div class="h1">
      <h1 :style="{
        fontSize: valueInput.length < 5? '3rem' : '2rem',
        color: valueInput.length === 2? 'red' : 'black'
      }">List</h1>
    </div>

    <div class="header">
      <input
          type="text"
          class="header__input"
          v-model="valueInput"
          placeholder="Enter task"
          @keyup.enter="addItemList"
      >
      <button
          class="header__button"
          @click="addItemList"
      >Add Item
      </button>
    </div>

    <div class="main">
      <!--      <h2 v-show="arrayList.length !== 0"> Yore List</h2>-->
      <!--      <h2 v-show="arrayList.length === 0"> List Null</h2>-->
      <!--      <h2 >{{changeTitleMain()}}</h2>-->
      <!--      <h2 v-if="arrayList.length !==0">{{h2TitleFull}}</h2>-->
      <!--      <h2 v-else>{{h2TitleNull}}</h2>-->

      <div class="main__list">
        <ol v-if="arrayList.length !== 0">
          <li v-for="(item, index) in filteredList" :key="item"
              :style="{color: count > 7? 'blue': count > 6?'red' : count > 5? 'brown' : count > 4? 'yellow':
            count > 3? 'purple': count > 2 ? 'green' : 'black'
          }">
            {{ getUppercase(item) }}
            <button @click="deleteItemList(index, index)" class="main__button">X</button>
          </li>

        </ol>
        <div v-if="arrayList.length === 0">List Null. Add note</div>
      </div>
    </div>

    <div class="footer">
      <div class="footer__about">
        about
      </div>
    </div>
    <input type="text" v-model="firstName" placeholder="Name">
    <input type="text" v-model="lastName" placeholder="Surname">
    {{ fullName }}

    Count: {{ count }}
    <br>
    <span :class="count > 3? 'color': 'color2'" >X - 1: {{x}}</span>
    <span :class="{'color': true, 'color2': count > 4}" >X - 2: {{x}}</span>
    <span :class="['all', {'color': count > 3}]">X - 3: {{x}}</span>
    <div :class="{'color': count > 2}">{{count}}</div>
  </div>


</template>


<style lang="scss">
.container {
  padding-top: 1rem;
  width: 100vw;
  max-width: 800px;
  background-color: #9857d4;
  display: flex;
  flex-direction: column;

  height: 100vh;

}

.h1 {
  display: flex;
  justify-content: center;
}

.header {
  display: flex;
  justify-content: center;

  &__input {
    border: 2px black solid;
    border-radius: 100px;
  }
}

.main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer {
  display: flex;
  justify-content: center;
}

.color {
  color: red;
}
.color2 {
  color: #68e22b;
}
.all {
  text-decoration: line-through;
}
</style>