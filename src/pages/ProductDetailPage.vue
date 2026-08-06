<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { CheckCircle2, Eye, Heart, MessageSquareText, ShieldCheck } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import { products } from '@/data/products'

const route = useRoute()
const product = computed(() => products.find((item) => item.id === Number(route.params.id)) ?? products[0])
</script>

<template>
  <div class="space-y-5">
    <div class="text-sm text-zinc-500">
      交易市场 / {{ product.game }} / 商品 #{{ product.id }}
    </div>

    <div class="grid gap-5 xl:grid-cols-[1.2fr_.8fr]">
      <section class="panel overflow-hidden">
        <div class="relative min-h-[430px] overflow-hidden bg-gradient-to-br from-pink-500/30 via-zinc-950 to-black">
          <div class="absolute inset-0 grid-pattern opacity-25" />
          <img :src="product.image" class="absolute bottom-0 right-[8%] h-[92%] w-auto object-contain" alt="" />
          <div class="absolute left-5 top-5 bg-black/65 px-3 py-2 text-xs font-black">
            {{ product.game }} · {{ product.server }}
          </div>
          <div class="absolute bottom-5 left-5 flex gap-2">
            <button class="icon-btn"><Heart class="size-5" /></button>
            <button class="icon-btn"><Eye class="size-5" /> {{ product.views }}</button>
          </div>
        </div>
      </section>

      <aside class="panel p-5 md:p-7">
        <span class="section-kicker">LISTING #{{ product.id }}</span>
        <h1 class="mt-3 text-2xl font-black leading-9 md:text-3xl">{{ product.title }}</h1>
        <div class="mt-4 flex flex-wrap gap-2">
          <span v-for="tag in product.tags" :key="tag" class="filter-chip">{{ tag }}</span>
        </div>

        <div class="my-6 border-y border-white/10 py-5">
          <p class="text-xs text-zinc-500">当前售价</p>
          <p class="mt-1 text-5xl font-black text-[var(--accent)]"><span class="text-xl">¥</span>{{ product.price }}</p>
        </div>

        <div class="space-y-3 text-sm">
          <div class="info-row"><span>账号等级</span><strong>Lv.{{ product.level }}</strong></div>
          <div class="info-row"><span>服务器</span><strong>{{ product.server }}</strong></div>
          <div class="info-row"><span>交付方式</span><strong>换绑交付</strong></div>
          <div class="info-row"><span>售后保障</span><strong>7天争议处理</strong></div>
        </div>

        <div class="mt-7 grid grid-cols-[1fr_auto] gap-3">
          <Button size="lg"><ShieldCheck class="size-5" /> 立即购买</Button>
          <Button size="icon" variant="outline"><MessageSquareText class="size-5" /></Button>
        </div>
      </aside>
    </div>

    <div class="grid gap-5 xl:grid-cols-[1fr_320px]">
      <section class="panel p-5 md:p-7">
        <span class="section-kicker">DESCRIPTION</span>
        <h2 class="mt-2 text-xl font-black">商品说明</h2>
        <p class="mt-4 leading-8 text-zinc-300">
          本页面为第一阶段前端演示。后续会接入 Go 后端返回的真实角色、武器、资源统计以及 Proto 解析快照。
        </p>
        <div class="mt-6 grid gap-3 sm:grid-cols-2">
          <div v-for="text in ['平台已完成基础验号', '卖家身份已通过认证', '商品截图将由后端保存', '聊天与订单操作全程留痕']" :key="text" class="flex items-center gap-3 border border-white/10 bg-white/4 p-3 text-sm">
            <CheckCircle2 class="size-5 text-emerald-300" />
            {{ text }}
          </div>
        </div>
      </section>

      <aside class="panel p-5">
        <span class="section-kicker">SELLER</span>
        <div class="mt-4 flex items-center gap-3">
          <div class="flex size-12 items-center justify-center bg-[var(--accent)] font-black text-black">夜</div>
          <div>
            <p class="font-black">{{ product.seller }}</p>
            <p class="text-xs text-zinc-500">认证卖家 · Lv.{{ product.sellerLevel }}</p>
          </div>
        </div>
        <div class="mt-5 grid grid-cols-3 gap-2 text-center text-xs">
          <div class="mini-stat"><strong>98.9%</strong><span>好评率</span></div>
          <div class="mini-stat"><strong>263</strong><span>成交</span></div>
          <div class="mini-stat"><strong>5m</strong><span>响应</span></div>
        </div>
      </aside>
    </div>
  </div>
</template>
