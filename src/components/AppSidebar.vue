<script setup lang="ts">
import {
  BadgeDollarSign,
  CircleUserRound,
  Gavel,
  House,
  ListChecks,
  MessageSquareText,
  PackageOpen,
  ShoppingBag,
} from 'lucide-vue-next'
import { useRoute } from 'vue-router'
import { useAppStore } from '@/stores/app'

const route = useRoute()
const app = useAppStore()

const nav = [
  { label: '首页', path: '/', icon: House },
  { label: '交易市场', path: '/market', icon: ShoppingBag },
  { label: '我的上架', path: '/listings', icon: PackageOpen },
  { label: '我的订单', path: '/orders', icon: ListChecks },
  { label: '拍卖中心', path: '/market?tab=auction', icon: Gavel },
  { label: '求购市场', path: '/market?tab=wanted', icon: BadgeDollarSign },
  { label: '消息', path: '/chat', icon: MessageSquareText },
  { label: '个人中心', path: '/profile', icon: CircleUserRound },
]

function active(path: string) {
  const clean = path.split('?')[0]
  return clean === '/' ? route.path === '/' : route.path.startsWith(clean)
}
</script>

<template>
  <aside class="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-white/10 bg-[#0c0c0e]/95 lg:block">
    <div class="relative flex h-full flex-col overflow-hidden">
      <div class="absolute inset-0 noise opacity-25" />
      <div class="relative flex h-20 items-center border-b border-white/10 px-6">
        <div class="logo-mark">PM</div>
        <div class="ml-3">
          <p class="text-lg font-black leading-none">PLAYER</p>
          <p class="mt-1 text-xs font-black tracking-[.35em] text-[var(--accent)]">MARKET</p>
        </div>
      </div>

      <nav class="relative flex-1 space-y-1 overflow-y-auto p-4">
        <RouterLink
          v-for="item in nav"
          :key="item.label"
          :to="item.path"
          class="nav-item"
          :class="{ 'nav-item-active': active(item.path) }"
        >
          <component :is="item.icon" class="size-5" />
          <span>{{ item.label }}</span>
          <span v-if="item.path === '/chat' && app.unreadMessages" class="nav-badge">
            {{ app.unreadMessages }}
          </span>
        </RouterLink>
      </nav>

      <div class="relative border-t border-white/10 p-4">
        <div class="flex items-center gap-3 border border-white/10 bg-white/5 p-3">
          <div class="flex size-10 items-center justify-center bg-[var(--accent)] font-black text-black">
            {{ app.userInitial }}
          </div>
          <div class="min-w-0">
            <p class="truncate text-sm font-bold">{{ app.displayName }}</p>
            <p class="text-xs text-zinc-500">安全等级：良好</p>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
