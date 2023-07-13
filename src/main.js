import './assets/main.css'
import { createApp } from 'vue'
import {createPinia} from "pinia";
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.vue'
import globalComponents from './components/global'
import router from "@/components/router";
import {useCounterStore} from "@/store/store";

// import UInput from "@/components/global/UInput.vue";
const app = createApp(App)

// app.component('UInput', UInput) // можно так вставлять компонент
app.use(globalComponents )
app.use(router)
app.use(createPinia())
app.mount('#app')


