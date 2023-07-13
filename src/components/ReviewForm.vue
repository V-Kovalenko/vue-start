<script>
import {ref, computed, reactive, defineComponent} from "vue";
import axios from 'axios'
import UButton from "@/components/UButton.vue";
import UInput from "@/components/global/UInput.vue";
import UFile from "@/components/global/UFile.vue";
import URadio from "@/components/global/URadio.vue";
export default defineComponent({
  name: 'ReviewForm',
  components:{
    URadio,
    UFile,
    UInput,
    UButton,
  },
  setup() {
    const review = reactive({ // reactive - для создании динамики, чтобы отображались изменения в объекте
      author: '',
      stars: null,
      text: '',
      photo: null,
      isRecommended: true
    })
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
    const stars = [1, 2, 3, 4, 5]
    const handleTest = (e) => console.log(e)
    return {
      review,
      submit,
      stars,
      handleTest
    }

  }
})






</script>

<template>
  <!--  @submit.prevent.stop="submit"-   //  отменить стандартное поведение -->
  <form
      class="container"
      @submit.prevent.stop="submit"
  >
    <!----------->
    {{review.author}}
    <br><br>
    <UInput
        @test="handleTest"
        placeholder="Enter your Name"
        v-model="review.author"
    />

    <UInput
        mode="textarea"
        placeholder="Enter your opinion"
        v-model="review.text"
    />
    <!----------->
    <h4>Grade</h4>
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


    <UFile/>
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
    <URadio
        v-model="review.isRecommended"
    />
<!--    <div class="form-check">-->
<!--      <input-->
<!--          class="form-check-input"-->
<!--          type="radio"-->
<!--          id="adv2"-->
<!--          v-model="review.isRecommended"-->
<!--          :value="false"-->
<!--      >-->
<!--      <label class="form-check-label" for="adv2">-->
<!--        Не советую-->
<!--      </label>-->
<!--    </div>-->
    <!----------->

    <!----------->
    <UButton >Send to Server</UButton>
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