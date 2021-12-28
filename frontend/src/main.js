import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// eslint-disable-next-line
import firebase from './firebase';
import axiosPlugin from './plugins/axios';
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import Notifications from '@kyvg/vue3-notification'

const app = createApp(App);

app.use(store)
app.use(router)
app.use(axiosPlugin)
app.use(Notifications)
app.component('v-select', vSelect)
app.directive('click-outside', {
    beforeMount(el, binding) {
        el.clickOutsideEvent = function (event) {
            if (!(el === event.target || el.contains(event.target))) {
                binding.value(event, el);
            }
        };
        document.body.addEventListener('click', el.clickOutsideEvent);
    },
    unmounted(el) {
        document.body.removeEventListener('click', el.clickOutsideEvent);
    }
});


app.mount('#app')
