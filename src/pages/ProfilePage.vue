<script setup lang="ts">
import { BadgeCheck, ChevronRight, LogIn, ShieldCheck } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { useAppStore } from '@/stores/app'

const app = useAppStore()
</script>

<template>
  <div class="space-y-5">
    <section class="profile-hero panel overflow-hidden">
      <div class="relative z-10 flex flex-col gap-5 p-6 md:flex-row md:items-center md:p-9">
        <div class="flex size-20 items-center justify-center bg-[var(--accent)] text-3xl font-black text-black shadow-[7px_7px_0_#000]">
          {{ app.userInitial }}
        </div>
        <div class="flex-1">
          <span class="section-kicker">PLAYER PROFILE</span>
          <h1 class="mt-2 text-3xl font-black">{{ app.displayName }}</h1>
          <p class="mt-2 flex items-center gap-2 text-sm text-zinc-400"><BadgeCheck class="size-4 text-cyan-300" /> 普通用户 · 未完成卖家认证</p>
        </div>
        <Button v-if="!app.loggedIn" @click="app.mockLogin"><LogIn class="size-4" /> 模拟登录</Button>
      </div>
    </section>

    <div class="grid gap-5 xl:grid-cols-[1fr_360px]">
      <section class="panel p-5">
        <h2 class="text-xl font-black">账户功能</h2>
        <div class="mt-4 divide-y divide-white/10">
          <button v-for="item in ['实名认证', '安全设置', '收货信息', '资金记录', '黑名单管理']" :key="item" class="flex w-full items-center justify-between py-4 text-left">
            <span>{{ item }}</span>
            <ChevronRight class="size-4 text-zinc-600" />
          </button>
        </div>
      </section>
      <aside class="panel p-5">
        <ShieldCheck class="size-8 text-emerald-300" />
        <h2 class="mt-4 text-xl font-black">账户安全</h2>
        <p class="mt-2 text-sm leading-6 text-zinc-500">登录设备正常，近期没有发现高风险操作。</p>
        <div class="mt-5 h-2 overflow-hidden bg-white/8"><div class="h-full w-[76%] bg-emerald-300" /></div>
        <p class="mt-2 text-xs text-zinc-500">安全评分 76 / 100</p>
      </aside>
    </div>
  </div>
</template>
