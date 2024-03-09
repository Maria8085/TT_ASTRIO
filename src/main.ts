import { createRouter, createWebHistory } from 'vue-router';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import Main from '@/pages/TTmain/TTmain.vue';
import Cart from '@/pages/TTCart/TTCart.vue';
import App from './App.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/TT_ASTRIO/', component: Main },
    { path: '/TT_ASTRIO/cart', component: Cart }
  ]
});

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.mount('#app');
