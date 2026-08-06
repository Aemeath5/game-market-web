<script setup lang="ts">
import { ArrowRight, BadgeCheck, Clock3, ShieldCheck, Sparkles } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import GameCard from '@/components/ui/GameCard.vue'
import { products } from '@/data/products'
</script>

<template>
  <div class="space-y-7">
    <section class="hero-panel">
      <div class="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,8,10,.98)_0%,rgba(8,8,10,.80)_42%,rgba(8,8,10,.12)_100%)]" />
      <div class="absolute inset-0 grid-pattern opacity-20" />
      <img src="/assets/hero.svg" alt="" class="absolute inset-y-0 right-0 h-full w-auto max-w-[68%] object-cover object-center" />

      <div class="relative z-10 max-w-2xl p-6 md:p-10">
        <span class="section-kicker">PLAYER TRADING TERMINAL</span>
        <h1 class="mt-4 text-4xl font-black leading-[1.05] md:text-6xl">
          安全交易<br />
          <span class="text-[var(--accent)]">属于你的游戏资产</span>
        </h1>
        <p class="mt-5 max-w-xl text-sm leading-7 text-zinc-300 md:text-base">
          账号、道具、代练与求购统一管理。平台验号、担保交易、聊天留痕，让每一步都有记录。
        </p>
        <div class="mt-7 flex flex-wrap gap-3">
          <RouterLink to="/market"><Button size="lg">进入交易市场 <ArrowRight class="size-5" /></Button></RouterLink>
          <RouterLink to="/listings"><Button variant="outline" size="lg">发布商品</Button></RouterLink>
        </div>
      </div>

      <div class="absolute bottom-0 right-0 hidden items-center gap-6 border-l border-t border-white/12 bg-black/55 px-6 py-3 text-xs text-zinc-300 md:flex">
        <span class="flex items-center gap-2"><ShieldCheck class="size-4 text-emerald-300" /> 平台担保</span>
        <span class="flex items-center gap-2"><BadgeCheck class="size-4 text-cyan-300" /> 实名卖家</span>
        <span class="flex items-center gap-2"><Clock3 class="size-4 text-amber-300" /> 全天审核</span>
      </div>
    </section>

    <section class="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
      <div class="stat-card">
        <span>在售商品</span>
        <strong>12,864</strong>
        <small>今日新增 328</small>
      </div>
      <div class="stat-card">
        <span>成功交易</span>
        <strong>86,210</strong>
        <small>成交率 98.4%</small>
      </div>
      <div class="stat-card">
        <span>认证卖家</span>
        <strong>3,905</strong>
        <small>违规率低于 0.3%</small>
      </div>
      <div class="stat-card stat-card-accent">
        <span>平台保障</span>
        <strong>¥ 2.3 亿</strong>
        <small>累计担保金额</small>
      </div>
    </section>

    <section>
      <div class="section-heading">
        <div>
          <span class="section-kicker">RECOMMENDED</span>
          <h2>热门商品</h2>
        </div>
        <RouterLink to="/market" class="flex items-center gap-2 text-sm font-black text-[var(--accent)]">
          查看全部 <ArrowRight class="size-4" />
        </RouterLink>
      </div>

      <div class="mt-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        <GameCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>

    <section class="grid gap-4 xl:grid-cols-[1.4fr_.8fr]">
      <div class="panel p-5 md:p-7">
        <div class="section-heading">
          <div>
            <span class="section-kicker">TRADE FLOW</span>
            <h2>安全交易流程</h2>
          </div>
          <Sparkles class="size-7 text-[var(--accent)]" />
        </div>
        <div class="mt-6 grid gap-3 md:grid-cols-4">
          <div v-for="(step, index) in ['发布并审核', '买家付款', '卖家交付', '确认后结算']" :key="step" class="flow-step">
            <span>0{{ index + 1 }}</span>
            <strong>{{ step }}</strong>
          </div>
        </div>
      </div>
      <div class="panel p-5 md:p-7">
        <span class="section-kicker">ANNOUNCEMENT</span>
        <h2 class="mt-2 text-xl font-black">平台公告</h2>
        <div class="mt-5 space-y-4 text-sm">
          <p class="border-l-2 border-[var(--accent)] pl-3">
            <strong class="block">交易安全升级</strong>
            <span class="text-zinc-500">高价值商品将进入人工复核。</span>
          </p>
          <p class="border-l-2 border-cyan-400 pl-3">
            <strong class="block">卖家认证开放</strong>
            <span class="text-zinc-500">完成认证可提高商品曝光。</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
