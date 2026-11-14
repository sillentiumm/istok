import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import './styles/tokens.css'
import './styles/global.css'

createApp(App).use(router).mount('#app')

// import { createApp } from 'vue'
// import { createRouter, createWebHistory } from 'vue-router'
// import App from './App.vue'
// import GuidePage from './pages/GuidePage.vue'
// import './styles/tokens.css'
// import './styles/global.css'

// const router = createRouter({
//   history: createWebHistory(),
//   routes: [
//     { path: '/', name: 'guide', component: GuidePage }
//   ],
//   scrollBehavior() {
//     return { top: 0 }
//   }
// })

// createApp(App).use(router).mount('#app')
