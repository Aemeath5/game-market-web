<script setup lang="ts">
import { ArrowRight, ShieldCheck } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import Button from '@/components/ui/Button.vue'
import { useAppStore } from '@/stores/app'

const router = useRouter()
const app = useAppStore()

function login() {
  app.mockLogin()
  router.push('/')
}
</script>

<template>
  <div class="relative flex min-h-screen items-center justify-center overflow-hidden bg-black p-5">
    <img src="/assets/hero.svg" class="absolute inset-0 h-full w-full object-cover opacity-45" alt="" />
    <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,.96),rgba(0,0,0,.60),rgba(0,0,0,.88))]" />
    <div class="relative z-10 grid w-full max-w-5xl overflow-hidden border border-white/12 bg-[#101014]/94 shadow-[12px_12px_0_rgba(0,0,0,.65)] lg:grid-cols-[1.05fr_.95fr]">
      <div class="hidden border-r border-white/10 p-10 lg:block">
        <span class="section-kicker">PLAYER MARKET</span>
        <h1 class="mt-4 text-5xl font-black leading-tight">登录交易终端</h1>
        <p class="mt-5 max-w-md leading-7 text-zinc-400">连接商品、订单、聊天与平台担保服务。</p>
        <div class="mt-10 space-y-4 text-sm">
          <p class="flex items-center gap-3"><ShieldCheck class="size-5 text-emerald-300" /> 登录会话由 Go 后端和 Redis 管理</p>
          <p class="flex items-center gap-3"><ShieldCheck class="size-5 text-emerald-300" /> 前端不保存数据库密码和核心密钥</p>
        </div>
      </div>
      <form class="p-6 md:p-10" @submit.prevent="login">
        <div class="logo-mark">PM</div>
        <h2 class="mt-6 text-2xl font-black">欢迎回来</h2>
        <p class="mt-2 text-sm text-zinc-500">当前是前端演示登录。</p>
        <label class="form-label mt-7 block">账号<input class="field mt-2" placeholder="用户名 / 邮箱" /></label>
        <label class="form-label mt-4 block">密码<input class="field mt-2" type="password" placeholder="请输入密码" /></label>
        <Button class="mt-6 w-full" size="lg" type="submit">登录 <ArrowRight class="size-5" /></Button>
      </form>
    </div>
  </div>
</template>
