<script setup lang="ts">
import { computed } from 'vue'
import { Eye, ShieldCheck } from 'lucide-vue-next'
import type { Product } from '@/types/market'

const props = defineProps<{ product: Product }>()

const accentClass = computed(() => {
  const map = {
    pink: 'from-pink-400/70 via-fuchsia-500/45 to-violet-700/35 border-pink-300/45',
    blue: 'from-cyan-300/70 via-sky-500/45 to-blue-700/35 border-cyan-200/45',
    gold: 'from-amber-300/75 via-orange-400/45 to-rose-600/30 border-amber-200/45',
    purple: 'from-violet-300/70 via-purple-500/45 to-fuchsia-700/35 border-violet-200/45',
  }
  return map[props.product.accent]
})
</script>

<template>
  <RouterLink :to="`/market/${product.id}`" class="game-card group">
    <div class="game-card-media bg-gradient-to-br" :class="accentClass">
      <div class="absolute inset-0 grid-pattern opacity-25" />
      <div class="absolute -right-10 -top-12 size-40 rounded-full bg-white/20 blur-3xl" />
      <img
        :src="product.image"
        :alt="product.title"
        class="absolute bottom-0 right-2 z-[1] h-[94%] w-auto object-contain drop-shadow-[0_18px_20px_rgba(20,18,48,.45)] transition duration-300 group-hover:scale-[1.04]"
      />
      <span class="absolute left-3 top-3 z-[2] rounded-full border border-white/25 bg-[#252743]/58 px-2.5 py-1 text-[10px] font-black uppercase tracking-[.15em] backdrop-blur-xl">
        {{ product.game }} · {{ product.server }}
      </span>
      <span
        v-if="product.status === 'reserved'"
        class="absolute right-3 top-3 z-[2] rounded-full bg-amber-200 px-2.5 py-1 text-[10px] font-black text-[#2a2031]"
      >
        已预订
      </span>
      <div class="absolute bottom-3 left-3 z-[2] flex items-center gap-1.5 rounded-full bg-[#242540]/48 px-2 py-1 text-[10px] text-white/80 backdrop-blur-lg">
        <Eye class="size-3.5" />
        {{ product.views }}
      </div>
    </div>

    <div class="game-card-body space-y-3">
      <h3 class="line-clamp-2 min-h-12 text-base font-black leading-6 text-white">
        {{ product.title }}
      </h3>
      <div class="flex flex-wrap gap-1.5">
        <span v-for="tag in product.tags" :key="tag" class="game-tag">{{ tag }}</span>
      </div>
      <div class="flex items-end justify-between border-t border-white/10 pt-3">
        <div>
          <p class="text-[11px] text-white/45">卖家 {{ product.seller }} · Lv.{{ product.sellerLevel }}</p>
          <p class="mt-1 flex items-center gap-1 text-[11px] text-emerald-200">
            <ShieldCheck class="size-3.5" />
            平台担保
          </p>
        </div>
        <div class="text-right">
          <span class="text-xs font-bold text-white/45">¥</span>
          <span class="text-2xl font-black text-pink-200">{{ product.price }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
