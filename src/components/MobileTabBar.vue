<script setup lang="ts">
import { House, MessageCircle, Plus, ShoppingBasket, UserRound } from 'lucide-vue-next'
import { useRoute } from 'vue-router'

const route = useRoute()
const tabs = [
  { label: '首页', path: '/', icon: House },
  { label: '市场', path: '/market', icon: ShoppingBasket },
  { label: '发布', path: '/listings', icon: Plus, add: true },
  { label: '消息', path: '/chat', icon: MessageCircle, badge: '3' },
  { label: '我的', path: '/profile', icon: UserRound },
]

const active = (path: string) => (path === '/' ? route.path === '/' : route.path.startsWith(path))
</script>

<template>
  <nav class="mobile-tabbar">
    <RouterLink
      v-for="tab in tabs"
      :key="tab.path"
      :to="tab.path"
      :class="tab.add ? 'tabbar-add' : ['tabbar-item', { active: active(tab.path) }]"
    >
      <component :is="tab.icon" :class="tab.add ? 'tabbar-add-icon' : 'tabbar-icon'" />
      <template v-if="!tab.add">
        <i v-if="tab.badge" class="tabbar-dot">{{ tab.badge }}</i>
        <span>{{ tab.label }}</span>
      </template>
    </RouterLink>
  </nav>
</template>
