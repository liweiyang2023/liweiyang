import { ref, computed } from 'vue'
import {createPinia, defineStore, Pinia} from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

export const useCounterStore:any = defineStore('counter', {
    state: (): { count: number } => {
        return { count: 0 }
    },
    // 也可以定义为
    // state: () => ({ count: 0 })
    actions: {
        increment() : void {
            this.count++
        },
    },
})

const pinia: Pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
export default pinia;
