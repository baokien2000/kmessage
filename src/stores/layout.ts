import { ref } from 'vue'
import { defineStore } from 'pinia'
export type ESidebar = 'main' | 'request' | 'archived' | 'restricted'

export const useLayout = defineStore('layout', () => {
    const isInfoOpen = ref(false)
    const sidebar = ref<ESidebar>('main')
    function onInfoIconToggle() {
        console.log('isInfoOpen.value', isInfoOpen.value)
        isInfoOpen.value = !isInfoOpen.value
    }
    function onSidebarChange(value: ESidebar) {
        sidebar.value = value
    }
    return { isInfoOpen, onInfoIconToggle, sidebar, onSidebarChange }
})
