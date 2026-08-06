<script setup lang="ts">
import {
  ArrowRight,
  BadgeCheck,
  Clock3,
  Crown,
  ShieldCheck,
  Sparkles,
  TrendingUp,
} from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import GameCard from '@/components/ui/GameCard.vue'
import { products } from '@/data/products'
</script>

<template>
  <div class="space-y-7">
    <section class="dashboard-hero">
      <div class="absolute inset-0 grid-pattern opacity-[.16]" />
      <img src="/assets/hero.svg" alt="" class="hero-art" />

      <div class="hero-copy">
        <span class="hero-eyebrow">
          <Sparkles class="size-3.5 text-[var(--gold)]" />
          PLAYER TRADING TERMINAL
        </span>
        <h1 class="hero-title">
          游戏资产交易<br />
          <span class="hero-title-gradient">更安全，也更漂亮</span>
        </h1>
        <p class="hero-description">
          账号、道具、代练、拍卖与求购统一管理。验号、担保、交付、聊天记录全部可追踪，像游戏主界面一样直观。
        </p>
        <div class="hero-actions">
          <RouterLink to="/market">
            <Button size="lg">进入交易市场 <ArrowRight class="size-5" /></Button>
          </RouterLink>
          <RouterLink to="/listings">
            <Button variant="outline" size="lg">发布我的商品</Button>
          </RouterLink>
        </div>
      </div>

      <div class="hero-float-card hidden xl:block">
        <span>今日成交趋势</span>
        <strong class="flex items-center gap-2">+18.4% <TrendingUp class="size-4 text-emerald-200" /></strong>
      </div>

      <div class="hero-trustbar">
        <span class="hero-trust-chip"><ShieldCheck class="size-4 text-emerald-200" /> 平台担保</span>
        <span class="hero-trust-chip"><BadgeCheck class="size-4 text-cyan-200" /> 实名卖家</span>
        <span class="hero-trust-chip"><Clock3 class="size-4 text-amber-200" /> 全天审核</span>
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
        <RouterLink to="/market" class="flex items-center gap-2 text-sm font-black text-pink-200">
          查看全部 <ArrowRight class="size-4" />
        </RouterLink>
      </div>

      <div class="mt-4 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
        <GameCard v-for="product in products" :key="product.id" :product="product" />
      </div>
    </section>

    <section class="grid gap-4 xl:grid-cols-[1.35fr_.85fr]">
      <div class="panel p-5 md:p-7">
        <div class="section-heading">
          <div>
            <span class="section-kicker">TRADE FLOW</span>
            <h2>安全交易流程</h2>
          </div>
          <Sparkles class="size-7 text-pink-200" />
        </div>
        <div class="mt-6 grid gap-3 md:grid-cols-4">
          <div v-for="(step, index) in ['发布并审核', '买家付款', '卖家交付', '确认后结算']" :key="step" class="flow-step">
            <span>0{{ index + 1 }}</span>
            <strong>{{ step }}</strong>
          </div>
        </div>
      </div>

      <div class="panel p-5 md:p-7">
        <div class="flex items-start justify-between gap-4">
          <div>
            <span class="section-kicker">ANNOUNCEMENT</span>
            <h2 class="mt-2 text-xl font-black">平台公告</h2>
          </div>
          <div class="grid size-11 place-items-center rounded-2xl border border-amber-200/20 bg-amber-200/10">
            <Crown class="size-5 text-amber-200" />
          </div>
        </div>
        <div class="mt-5 space-y-4 text-sm">
          <p class="rounded-2xl border border-pink-200/15 bg-pink-200/7 p-4">
            <strong class="block">交易安全升级</strong>
            <span class="mt-1 block text-white/48">高价值商品将进入人工复核。</span>
          </p>
          <p class="rounded-2xl border border-cyan-200/15 bg-cyan-200/7 p-4">
            <strong class="block">卖家认证开放</strong>
            <span class="mt-1 block text-white/48">完成认证可提高商品曝光。</span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>
