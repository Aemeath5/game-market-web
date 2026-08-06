<script setup lang="ts">
import { Bell, Search } from 'lucide-vue-next'
import AppSidebar from '@/components/AppSidebar.vue'
import MobileTabBar from '@/components/MobileTabBar.vue'
</script>

<template>
  <div class="min-h-screen bg-[var(--page-bg)] text-white">
    <AppSidebar />

    <div class="min-h-screen lg:pl-64">
      <header class="sticky top-0 z-30 flex h-16 items-center border-b border-white/10 bg-[#111114]/92 px-4 backdrop-blur md:px-7">
        <div class="flex flex-1 items-center">
          <label class="relative w-full max-w-xl">
            <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
            <input
              class="h-10 w-full border border-white/10 bg-black/30 pl-10 pr-4 text-sm outline-none placeholder:text-zinc-600 focus:border-[var(--accent)]"
              placeholder="搜索商品、UID、卖家..."
            />
          </label>
        </div>
        <button class="ml-3 flex size-10 items-center justify-center border border-white/10 bg-white/5">
          <Bell class="size-5" />
        </button>
      </header>

      <main class="px-4 pb-24 pt-5 md:px-7 lg:pb-8">
        <RouterView />
      </main>
    </div>

    <MobileTabBar />
  </div>
</template>
