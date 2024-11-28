import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLayout = defineStore('layout', () => {
  const isInfoOpen = ref(false)
  function onInfoIconToggle() {
    console.log('isInfoOpen.value', isInfoOpen.value)
    isInfoOpen.value = !isInfoOpen.value
  }

  return { isInfoOpen, onInfoIconToggle }
})
