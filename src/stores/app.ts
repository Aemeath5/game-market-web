import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const unreadMessages = ref(3)
  const loggedIn = ref(true)
  const displayName = ref('wiki')
  const userInitial = computed(() => displayName.value.slice(0, 1).toUpperCase())

  function mockLogin() {
    loggedIn.value = true
    displayName.value = 'wiki'
  }

  return { unreadMessages, loggedIn, displayName, userInitial, mockLogin }
})
