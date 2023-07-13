<script setup>
import ChildComponent2 from "@/components/learn/ChildComponent2.vue";
import Button from "@/components/learn/ButtonSLot.vue";

const nuv = ['About', 'Price', 'Page', 'Info']
const footer = ['Telephone', 'Message', 'Solution', 'Contact']
const contact = {
  tel: 88002000600,
  name: 'Nikola',
  surname: 'Tesla',
  address: 'Moscow'
}

const arr = {a:1}

</script>

<template>
  <div class="container">
    <ChildComponent2>
      <template v-slot:header>
        <ul v-for="item in nuv">
          {{ item }}
        </ul>
      </template>

      <template #main>
        <div class="main">
          <div class="main__left">
            Main left content
          </div>

          <div class="main__right">
            Main left right
          </div>
        </div>
      </template>

      <template v-slot:footer>
        <footer class="footer"  >
          <div class="footer__item" v-for="it in footer" :key="it">
            {{it}}
          </div>
        </footer>
      </template>

<!--      <template v-slot="props" >-->
<!--        {{props.i}}-->
<!--      </template>-->

      <template #view>
        <div v-for="it in contact">
          {{it}}
        </div>
      </template>

      <template v-slot="propsText">
        {{propsText.text}}
      </template>
    </ChildComponent2>

    <Button>
      <template v-slot:left>
        :-)
      </template>

      <template #centre>
        8===>
      </template>

      <template v-slot:right> .!.</template>

    </Button>
  </div>

</template>


<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #e7bdbd;
  height: 100vh;
}
.main {
  display: flex;
  width: 600px;
  justify-content: center;
  align-content: center;

}

.main__left {
  margin-right: 5px;
  width: 250px;
  height: 250px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}

.main__right {
  width: 250px;
  height: 250px;
  border: 2px solid black;
  display: flex;
  justify-content: center;
  align-items: center;
}
.footer {
  display: flex;
  justify-content: space-between;
  width: 600px;
}
.footer__item{
 color: #ff00a5;

}
</style>