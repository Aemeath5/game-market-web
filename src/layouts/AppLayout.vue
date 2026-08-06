<script setup lang="ts">
import { Bell, Search, Sparkles } from 'lucide-vue-next'
import AppSidebar from '@/components/AppSidebar.vue'
import MobileTabBar from '@/components/MobileTabBar.vue'
</script>

<template>
  <div class="app-shell text-white">
    <div class="app-backdrop" />
    <AppSidebar />

    <div class="app-content min-h-screen lg:pl-64">
      <header class="topbar px-4 md:px-7">
        <div class="flex flex-1 items-center gap-3">
          <label class="search-shell">
            <Search class="absolute left-4 top-1/2 size-4 -translate-y-1/2 text-cyan-100/60" />
            <input placeholder="搜索商品、UID、卖家..." />
          </label>
          <div class="hidden items-center gap-2 rounded-full border border-white/12 bg-white/7 px-3 py-2 text-[11px] font-bold text-white/70 xl:flex">
            <Sparkles class="size-3.5 text-[var(--gold)]" />
            今日市场热度 98.6%
          </div>
        </div>
        <button class="topbar-action ml-3" aria-label="通知">
          <Bell class="size-5" />
        </button>
      </header>

      <main class="app-main px-4 pb-24 pt-5 md:px-7 md:pt-7 lg:pb-9">
        <RouterView />
      </main>
    </div>

    <MobileTabBar />
  </div>
</template>
