import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import { createPinia } from 'pinia';
import Particles from 'vue3-particles';

let app = createApp(App);
const pinia = createPinia();
app.use(pinia).use(Particles).mount('#app');
export default app;
