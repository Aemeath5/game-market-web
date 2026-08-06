<script setup lang="ts">
import { Paperclip, SendHorizontal } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'

const contacts = ['夜航星', '第六街便利店', '治安局代理人']
</script>

<template>
  <div class="h-[calc(100vh-132px)] min-h-[560px] overflow-hidden border border-white/10 bg-[#101014]">
    <div class="grid h-full md:grid-cols-[280px_1fr]">
      <aside class="hidden border-r border-white/10 md:block">
        <div class="border-b border-white/10 p-4">
          <span class="section-kicker">MESSAGES</span>
          <h1 class="mt-1 text-xl font-black">实时聊天</h1>
        </div>
        <button v-for="(contact, index) in contacts" :key="contact" class="flex w-full items-center gap-3 border-b border-white/8 p-4 text-left hover:bg-white/5">
          <span class="flex size-10 items-center justify-center bg-zinc-800 font-black">{{ contact[0] }}</span>
          <span class="min-w-0 flex-1">
            <strong class="block truncate text-sm">{{ contact }}</strong>
            <small class="block truncate text-zinc-500">{{ index === 0 ? '商品还在，可以验号。' : '查看最近消息' }}</small>
          </span>
        </button>
      </aside>

      <section class="flex min-w-0 flex-col">
        <header class="flex h-16 items-center gap-3 border-b border-white/10 px-4">
          <span class="flex size-10 items-center justify-center bg-[var(--accent)] font-black text-black">夜</span>
          <div>
            <strong class="block">夜航星</strong>
            <small class="text-emerald-300">在线 · 已认证卖家</small>
          </div>
        </header>

        <div class="flex-1 space-y-4 overflow-y-auto p-4 md:p-6">
          <div class="chat-bubble chat-bubble-left">你好，这个账号目前还在，可以先看平台验号结果。</div>
          <div class="chat-bubble chat-bubble-right">实名和安全手机都可以更换吗？</div>
          <div class="chat-bubble chat-bubble-left">可以，订单付款后会在平台流程里完成换绑。</div>
        </div>

        <footer class="flex gap-2 border-t border-white/10 p-3">
          <button class="icon-btn"><Paperclip class="size-5" /></button>
          <input class="field flex-1" placeholder="输入消息..." />
          <Button size="icon"><SendHorizontal class="size-5" /></Button>
        </footer>
      </section>
    </div>
  </div>
</template>
