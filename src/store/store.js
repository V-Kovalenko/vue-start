import {defineStore} from "pinia";
import {ref} from "vue";
export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const arrayNote = ref(['asas'])
    const myPlaceholder = ref('From store')
    const increment = () => {
        count.value++
    }
    const addNote = (element) => {
      arrayNote.value.push(element)
    }
    return {
        count,
        increment,
        addNote,
        arrayNote,
        myPlaceholder
    }
})

