<script setup lang="ts">
import { House, MessageSquareText, Plus, ShoppingBag, UserRound } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const tabs = [
  { label: '首页', path: '/', icon: House },
  { label: '市场', path: '/market', icon: ShoppingBag },
  { label: '发布', path: '/listings', icon: Plus, primary: true },
  { label: '消息', path: '/chat', icon: MessageSquareText },
  { label: '我的', path: '/profile', icon: UserRound },
]

const active = (path: string) => path === '/' ? route.path === '/' : route.path.startsWith(path)
</script>

<template>
  <nav class="mobile-tabbar fixed inset-x-0 bottom-0 z-50 grid h-17 grid-cols-5 px-2 lg:hidden">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.label"
      :to="tab.path"
      class="relative flex flex-col items-center justify-center gap-1 text-[10px] font-bold"
      :class="active(tab.path) ? 'text-cyan-100' : 'text-white/45'"
    >
      <span
        v-if="tab.primary"
        class="mobile-primary -mt-7 flex size-13 items-center justify-center rounded-[17px_7px_17px_7px] border-4 border-[#20233b]"
      >
        <component :is="tab.icon" class="size-6" />
      </span>
      <component v-else :is="tab.icon" class="size-5" />
      <span>{{ tab.label }}</span>
      <span v-if="active(tab.path) && !tab.primary" class="absolute bottom-1 h-0.5 w-5 rounded-full bg-gradient-to-r from-cyan-300 to-pink-300" />
    </RouterLink>
  </nav>
</template>
