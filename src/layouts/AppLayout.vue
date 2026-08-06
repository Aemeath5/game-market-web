<script setup lang="ts">
import AppSidebar from '@/components/AppSidebar.vue'
import MobileTabBar from '@/components/MobileTabBar.vue'
</script>

<template>
  <div class="site-shell">
    <AppSidebar />
    <main class="site-main">
      <RouterView />
    </main>
    <MobileTabBar />
  </div>
</template>
