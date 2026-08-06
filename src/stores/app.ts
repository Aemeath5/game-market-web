import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  const sidebarCollapsed = ref(false)
  const unreadMessages = ref(3)
  const loggedIn = ref(false)
  const displayName = ref('游客代理人')

  const userInitial = computed(() => displayName.value.slice(0, 1))

  function toggleSidebar() {
    sidebarCollapsed.value = !sidebarCollapsed.value
  }

  function mockLogin() {
    loggedIn.value = true
    displayName.value = 'Aemeath'
  }

  return {
    sidebarCollapsed,
    unreadMessages,
    loggedIn,
    displayName,
    userInitial,
    toggleSidebar,
    mockLogin,
  }
})
