<script setup>
import {ref, computed, reactive} from "vue";
import axios from 'axios'
const review = reactive({ // reactive - для создании динамики, чтобы отображались изменения в объекте
  author: '',
  stars: null,
  text: '',
  photo: null,
  isRecommended: true
})

const stars = [1, 2, 3, 4, 5]
const submit = () => {
  console.log('Submit')
  axios.post('/api/review',review, { // отправка на сервер
    headers: {
      'Content-Type': 'multipart/form-data' // Чтобы файл правильно читался на бэкенде
    }
  }).then((res) => {
    console.log(res)
  }).catch((err) => {
    console.log(err)
  }).finally(() => {
    console.log('The end')
  })
}
const uploadFile = (e) => {
  const [file] = e.target.files // Доступ к фото в input type file
  review.photo = file

}
const previewFilePath = computed(() => {  // обязательно computed, чтобы сделать динамику
  if(review.photo) {
   return URL.createObjectURL(review.photo)  // путь до фотографии
  }
  return '#'
})
</script>

<template>
<!--  @submit.prevent.stop="submit"-   //  отменить стандартное поведение -->
  <form
      class="container"
      @submit.prevent.stop="submit"
  >
    <!----------->
    <input
        class="form-control mb-3"
        type="text"
        placeholder="Enter your Name"
        v-model="review.author"
    >
    <!----------->

    <!----------->
    <textarea
        rows="10"
        class="form-control mb-3"
        v-model="review.text"
        placeholder="What are you Like?"
    ></textarea>
    <!----------->

    <!----------->
    <h4>Grade</h4>
    <!----------->

<!----------->
    <div
        v-for="star in stars"
        class="form-check"
    >
<!--      :true-value="star"     //Ставится чтобы при клике на чекбокс выбирался нужный элемент, иначе выбирутся все-->
<!--      :false-value="null"   /> Ставится чтобы при клике на чекбокс выбирался нужный элемент, иначе выбирутся все-->
<!--      :id="`star ${star}`"  // Динамический id, для label, чтобы при нажатии на текст выделялся элемент-->
      <input
          class="form-check-input"
          type="checkbox"
          :true-value="star"
          :false-value="null"
          :id="`star ${star}`"
          v-model="review.stars"
      >
<!--      :for="`star ${star}`" // для динамического выбора -->
      <label class="form-check-label" :for="`star ${star}`">
        {{ star }}
      </label>
    </div>
    <!----------->

    <!------PHOTO----->


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
    <!-----PHOTO------>

<!--    -->
    <div class="form-check">
      <input
          class="form-check-input"
          type="radio"
          id="adv1"
          v-model="review.isRecommended"
          :value="true"
      >
      <label class="form-check-label" for="adv1">
        Советую!
      </label>
    </div>
    <!----------->

    <!----------->
    <div class="form-check">
      <input
          class="form-check-input"
          type="radio"
          id="adv2"
          v-model="review.isRecommended"
          :value="false"
      >
      <label class="form-check-label" for="adv2">
        Не советую
      </label>
    </div>
    <!----------->

    <!----------->
    <button class="btn btn-primary">Send</button>
    <!----------->
  </form>


</template>

<style scoped>
.container {
  margin: 10px;
}

.form-check-radio {

}
</style>