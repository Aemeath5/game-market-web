<script setup lang="ts">
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import {
  ArrowLeft,
  Bell,
  ClipboardList,
  LayoutDashboard,
  Menu,
  PackageSearch,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X,
} from 'lucide-vue-next'
import { useAppStore } from '@/stores/app'
import '@/styles/admin.css'

const route = useRoute()
const app = useAppStore()
const mobileOpen = ref(false)

const navItems = [
  { label: '后台总览', path: '/admin', icon: LayoutDashboard },
  { label: '商品管理', path: '/admin/products', icon: PackageSearch },
  { label: '订单管理', path: '/admin/orders', icon: ClipboardList },
  { label: '用户管理', path: '/admin/users', icon: Users },
  { label: '系统设置', path: '/admin/settings', icon: Settings },
]

const isActive = (path: string) => path === '/admin' ? route.path === '/admin' : route.path.startsWith(path)
</script>

<template>
  <div class="admin-shell">
    <button v-if="mobileOpen" class="admin-overlay" aria-label="关闭菜单" @click="mobileOpen = false" />

    <aside class="admin-sidebar" :class="{ 'is-open': mobileOpen }">
      <div class="admin-brand">
        <span class="admin-brand__mark"><ShieldCheck /></span>
        <span>
          <strong>Aemeath</strong>
          <small>交易市场后台</small>
        </span>
        <button class="admin-sidebar__close" aria-label="关闭菜单" @click="mobileOpen = false"><X /></button>
      </div>

      <nav class="admin-nav">
        <RouterLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="admin-nav__item"
          :class="{ active: isActive(item.path) }"
          @click="mobileOpen = false"
        >
          <component :is="item.icon" />
          <span>{{ item.label }}</span>
        </RouterLink>
      </nav>

      <div class="admin-sidebar__foot">
        <RouterLink to="/" class="admin-back-link"><ArrowLeft /> 返回前台</RouterLink>
        <div class="admin-account">
          <img src="/assets/reference/avatar-main.svg" alt="Aemeath" />
          <span><strong>{{ app.displayName }}</strong><small>超级管理员</small></span>
        </div>
      </div>
    </aside>

    <section class="admin-workspace">
      <header class="admin-topbar">
        <button class="admin-menu-button" aria-label="打开菜单" @click="mobileOpen = true"><Menu /></button>
        <label class="admin-search">
          <Search />
          <input placeholder="搜索商品、订单、用户..." />
        </label>
        <div class="admin-topbar__spacer" />
        <button class="admin-notify" aria-label="通知"><Bell /><i>4</i></button>
        <div class="admin-topbar__user">
          <img src="/assets/reference/avatar-main.svg" alt="Aemeath" />
          <span><strong>{{ app.displayName }}</strong><small>管理员</small></span>
        </div>
      </header>

      <main class="admin-main">
        <RouterView />
      </main>
    </section>
  </div>
</template>
