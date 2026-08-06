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
  <aside class="app-sidebar fixed inset-y-0 left-0 z-40 hidden w-64 lg:block">
    <div class="sidebar-shell">
      <div class="sidebar-orb" />
      <div class="absolute inset-0 noise opacity-[.14]" />

      <div class="sidebar-brand">
        <div class="logo-mark">GM</div>
        <div class="ml-3 min-w-0">
          <p class="sidebar-brand-title">GAME MARKET</p>
          <p class="sidebar-brand-sub">TRADING HUB</p>
        </div>
      </div>

      <div class="relative px-5 pt-5">
        <p class="text-[10px] font-black tracking-[.24em] text-white/35">NAVIGATION</p>
      </div>

      <nav class="relative flex-1 space-y-1.5 overflow-y-auto p-4 pt-3">
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
        <div class="sidebar-footer-card">
          <div class="sidebar-avatar">{{ app.userInitial }}</div>
          <div class="min-w-0 flex-1">
            <p class="truncate text-sm font-black">{{ app.displayName }}</p>
            <div class="mt-1 flex items-center gap-1.5 text-[10px] text-emerald-200/80">
              <span class="size-1.5 rounded-full bg-emerald-300 shadow-[0_0_8px_rgba(110,231,183,.8)]" />
              安全等级良好
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>
