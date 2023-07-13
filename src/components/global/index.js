import UInput from "@/components/global/UInput.vue";
import UFile from "@/components/global/UFile.vue";
import UCheckbox from "@/components/global/UCheckbox.vue";
import URadio from "@/components/global/URadio.vue";
const components = [
    {name: 'UInput', component: UInput},
    {name: 'UFile', component: UFile},
    {name: 'UCheckbox', component: UCheckbox},
    {name: 'URadio', component: URadio},
]
export default {
    install(app) {
        components.forEach(({name, component}) => {
            app.component(name, component)
        })
    }
}