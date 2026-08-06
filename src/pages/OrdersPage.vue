<script setup lang="ts">
const orders = [
  { id: 'GM202608070001', title: '高练度毕业账号｜限定角色齐全', price: 1688, status: '等待卖家交付' },
  { id: 'GM202608060082', title: '限定角色收藏号｜主线已完成', price: 899, status: '交易完成' },
]
</script>

<template>
  <div class="space-y-5">
    <div class="section-heading">
      <div>
        <span class="section-kicker">ORDER CENTER</span>
        <h1>我的订单</h1>
      </div>
    </div>

    <div class="panel overflow-hidden">
      <div v-for="order in orders" :key="order.id" class="grid gap-4 border-b border-white/10 p-5 last:border-0 md:grid-cols-[1fr_auto_auto] md:items-center">
        <div>
          <p class="text-xs text-zinc-500">订单号 {{ order.id }}</p>
          <h3 class="mt-2 font-black">{{ order.title }}</h3>
        </div>
        <strong class="text-xl text-[var(--accent)]">¥{{ order.price }}</strong>
        <span class="border border-white/10 bg-white/5 px-3 py-2 text-xs font-black">{{ order.status }}</span>
      </div>
    </div>
  </div>
</template>
