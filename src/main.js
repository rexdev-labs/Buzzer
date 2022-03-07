import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import installElementPlus from './plugins/element'
import store from './store'

require('@/store/subscriber')




store.dispatch('auth/attempt', localStorage.getItem('token')).then(()=>{
    const app = createApp(App).use(store)
    installElementPlus(app)
    app.use(router).mount('#app')
})

