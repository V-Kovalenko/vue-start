<script setup>
import {ref, watch, computed, onMounted, nextTick,withDirectives} from 'vue'
import '@/assets/scss/_reset.css'
// ----- INITIAL VALUE--------
const initialData = ref({
  inputValue: '',
  placeholder: 'Что нужно купить',
  hoverIndex: null,
  countItemList: 0,
  indexItemShoppingList: 0,
})
const shoppingList = ref([])              // массив поупок
const refs = ref({})
const inputRef = ref([])
const autoFocusDirective = {
  mounted(el) {
    el.focus()
  }
}
const directives  = {
  autofocus: autoFocusDirective
}
// ----------C:\Program Files\Git\cmd
// ---FUNCTIONS-----

const getAddItemList = () => {                   // Добавление покупок
  if (initialData.value.inputValue) {
    shoppingList.value.push({
      inputValue: initialData.value.inputValue,
      check: false,
      id: initialData.value.indexItemShoppingList++,
      editItemList: false,
      isFocused: false,
      inputRef :null
    })
    initialData.value.inputValue = ''
  }
}

const getInputFocus = (index) => {
  if (inputRef.value[index]) {
    inputRef.value[index].focus()
  }
}
onMounted(() => {
  Array.from({length: shoppingList.value.length}, () => ref(null))
})
getInputFocus()
// ------deleteItemList---------
const getDeleteItemList = (index) => {      // Удаление покупок
  shoppingList.value.splice(index, 1)
}
// --------watch--------
watch(shoppingList.value, (newCount) => {      // watch изменяем countItemList
  initialData.value.countItemList = newCount.length
})


// -------applyHoverEffect----------
const getApplyHoverEffect = (itemList, index) => {   // hover при наведении на элемент
  initialData.value.hoverIndex = index
}

// ------deleteHover-------
const getDeleteHover = () => {             // убирает ховер, когда мышка с элемента уводится
  initialData.value.hoverIndex = null
}
// ------changeChecked----------
const getChangeChecked = (item) => {     // меняем значение check в массиве shoppingList для checkbox
  item.check = !item.check
}
// -----editItemList-----
const getEditItemList = (item, index) => {            // кнопка edit - меняет boolean значение и тем самым
  shoppingList.value[index].editItemList = !shoppingList.value[index].editItemList

  // if (shoppingList.value[index.editItemList]) {
  //   nextTick(() => {
  //     const lastIndex = shoppingList.value.length - 1
  //     const elInput = document.querySelector('.main__input-list')
  //     if (elInput) {
  //       elInput.focus()
  //     }
  //   })
  // }
  nextTick(() => {
    getInputFocus()
  })

}

const getSaveItemList = (item, index) => {

  if (shoppingList.value[index].inputValue.trim()) {
    shoppingList.value[index].editItemList = false
  }

}

const getSetRef = (el, itemId) => {
  if (el) {
    refs.value[itemId] = el
  }
}


watch(shoppingList.value, () => {
  console.log(inputRef.value);
})
console.log(inputRef.value)
</script>
<template>
  <div class="container">
    <div class="header">
      <div class="header__top">
        <h1 class="header__h1">Список покупок</h1>
        <div class="header__count"> | Количество позиций: {{ initialData.countItemList }}</div>
      </div>
      <input
          ref="input"
          type="text"
          class="header__input"
          :placeholder="initialData.placeholder "
          v-model="initialData.inputValue"
          @keyup.enter="getAddItemList"
      >
      <button :class="!initialData.inputValue? 'header__btn_disabled' : 'header__btn' " @click="getAddItemList"
              :disabled="!initialData.inputValue">Добавить
      </button>
      <hr style="color: red">
    </div>
    <!-- main   -->
    <div :class="['main', {color: index === initialData.hoverIndex}]"
         v-for="(itemList, index) in shoppingList" :key="itemList.id"
         @mouseover="getApplyHoverEffect(itemList, index)"
         @mouseleave="getDeleteHover"
         :ref="(el => getSetRef(el, itemList.id))"

    >
      <div :class="['main__itemList', {textDecoration: itemList.check}]">
        <span class="main__number-list">{{ index + 1 }})</span>
        <span v-if="!itemList.editItemList" class="main__view-inputValue">{{ itemList.inputValue }}</span>
        <input
            type="text"
            v-else
            v-model="itemList.inputValue"
            @keyup.enter="getSaveItemList(itemList, index)"
            class="main__input-list"
            :ref="inputRef[index]"
            :id="`input-` + index"
        >

      </div>
      <!--      ref="inputRef"-->
      <!--      :autofocus="itemList.isFocused"-->
      <div class="main__buttons">
        <input type="checkbox"
               @click="getChangeChecked(itemList)"
               v-model="itemList.check"
               class="main__checkboxTextDecoration"
        >
        <button v-if="!itemList.editItemList" class="main__button-edit"
                @click="getEditItemList(itemList, index) "
        >edit
        </button>
        <button v-else class="main__button-save" @click="getSaveItemList(itemList,index)">save</button>
        <button class="main__button-delete" @click="getDeleteItemList(index)">X</button>
      </div>
    </div>
    <div class="footer">
    </div>
  </div>

</template>


<style lang="scss">
.container {
  display: flex;
  flex-direction: column;
  width: 70%;
  justify-content: center;
  align-items: center;
}

.header {
  &__top {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__h1 {

  }

  &__count {
    font-size: 1.2rem;
    font-weight: bold;
  }

  &__input {
    border-radius: 1rem;
    margin: 1rem 1rem 0 0;
    padding: 0 1.3rem;
    border: 3px solid #baa3ec;
  }

  &__btn:hover {
    background-color: #9857d4;
    scale: 1.1;
    transition: .4s;
    border-radius: 1rem;
    width: min-content;
    padding: 0.2rem 1rem 0.2rem 1rem;
    color: white;
  }

  &__btn_disabled {
    border-radius: 1rem;
    width: min-content;
    padding: 0.2rem 1rem 0.2rem 1rem;
    color: white;
    border: 3px solid #baa3ec;
    opacity: 0.5;
  }

  &__btn {
    border-radius: 1rem;
    width: min-content;
    padding: 0.2rem 1rem 0.2rem 1rem;
    color: white;
    border: 3px solid #baa3ec;
  }
}

.main {
  //display: flex;
  //justify-content: space-between;
  display: grid;
  grid-template-areas: 'num text button';
  grid-template-columns: 70% auto 100%;
  grid-column-gap: 20px;
  align-items: center;
  width: 50vw;
  overflow-wrap: break-word;
  margin-bottom: 1rem;
  border: 1px solid black;
  padding: .3rem 5rem .3rem 0.3rem;
  border-radius: 1rem;
  background-color: #4f2aad;


  &__number-list {
    margin-right: 1rem;
    grid-area: num;
    //width: 40px;
  }

  &__view-inputValue {
    grid-area: text;
    overflow-wrap: break-word;
  }

  &__buttons {
    //background-color: #68e22b;
    //display: flex;
    //align-items: center;
    //text-align: center;
    //justify-content: end;
    grid-area: button;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
  }
  &__button-edit:hover {
    color: #b8a5e0;
    scale: 1.1;
  }

  &__button-delete:hover {
    background-color: #9857d4;
    scale: 1.1;
  }


  &__itemList:hover {
    color: red;

  }

  &__input-list {
    background-color: #5810f1;
    border: 1px solid #371d70;
    border-radius: 1rem;
    padding: 0.3rem 0 0.3rem 1rem;
    color: white;
  }

  &__button-save:hover {
    color: #b8a5e0;
    scale: 1.1;
  }
  &__button-save {
    color: white;
    margin: 0 0.5rem 0 0;
    font-size: 20px;
  }

  &__button-edit {
    color: white;
    margin: 0 0.5rem 0 0;
    font-size: 20px;
  }

  &__button-delete {
    border-radius: 1rem;
    border: 1px solid black;
    padding: 0.2rem 1rem 0.2rem 1rem;
    margin-bottom: 1rem;
    background-color: #bd83f1;
  }

  &__checkboxTextDecoration {
    margin-right: 1rem;
  }

}

.color {
  color: #ff00a5;

}

.textDecoration {
  text-decoration: line-through;
}

</style>



