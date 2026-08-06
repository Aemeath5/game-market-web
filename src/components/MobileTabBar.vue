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
  <nav class="fixed inset-x-0 bottom-0 z-50 grid h-17 grid-cols-5 border-t border-white/12 bg-[#0b0b0d]/96 px-2 lg:hidden">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.label"
      :to="tab.path"
      class="relative flex flex-col items-center justify-center gap-1 text-[10px] font-bold"
      :class="active(tab.path) ? 'text-[var(--accent)]' : 'text-zinc-500'"
    >
      <span
        v-if="tab.primary"
        class="-mt-7 flex size-13 items-center justify-center border-4 border-[#0b0b0d] bg-[var(--accent)] text-black shadow-[4px_4px_0_#000]"
      >
        <component :is="tab.icon" class="size-6" />
      </span>
      <component v-else :is="tab.icon" class="size-5" />
      <span>{{ tab.label }}</span>
    </RouterLink>
  </nav>
</template>
