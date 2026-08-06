<script setup lang="ts">
import { computed } from 'vue'
import { Eye, ShieldCheck } from 'lucide-vue-next'
import type { Product } from '@/types/market'

const props = defineProps<{ product: Product }>()

const accentClass = computed(() => {
  const map = {
    pink: 'from-pink-500/60 to-fuchsia-800/20 border-pink-400/40',
    blue: 'from-cyan-500/60 to-blue-800/20 border-cyan-400/40',
    gold: 'from-amber-400/60 to-orange-800/20 border-amber-300/40',
    purple: 'from-violet-500/60 to-purple-900/20 border-violet-400/40',
  }
  return map[props.product.accent]
})
</script>

<template>
  <RouterLink
    :to="`/market/${product.id}`"
    class="group relative overflow-hidden border bg-zinc-950/85 shadow-[7px_7px_0_rgba(0,0,0,.55)]"
    :class="accentClass"
  >
    <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r" :class="accentClass" />
    <div class="relative aspect-[16/11] overflow-hidden bg-gradient-to-br" :class="accentClass">
      <div class="absolute inset-0 grid-pattern opacity-30" />
      <img
        :src="product.image"
        :alt="product.title"
        class="absolute bottom-0 right-2 h-[94%] w-auto object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,.55)]"
      />
      <span class="absolute left-3 top-3 border border-white/20 bg-black/70 px-2.5 py-1 text-[11px] font-black uppercase tracking-[.18em]">
        {{ product.game }} · {{ product.server }}
      </span>
      <span
        v-if="product.status === 'reserved'"
        class="absolute right-3 top-3 bg-amber-300 px-2.5 py-1 text-[11px] font-black text-black"
      >
        已预订
      </span>
      <div class="absolute bottom-3 left-3 flex items-center gap-1.5 text-xs text-white/75">
        <Eye class="size-3.5" />
        {{ product.views }}
      </div>
    </div>

    <div class="space-y-3 p-4">
      <h3 class="line-clamp-2 min-h-12 text-base font-black leading-6 text-white">
        {{ product.title }}
      </h3>
      <div class="flex flex-wrap gap-1.5">
        <span
          v-for="tag in product.tags"
          :key="tag"
          class="border border-white/12 bg-white/5 px-2 py-1 text-[11px] text-zinc-300"
        >
          {{ tag }}
        </span>
      </div>
      <div class="flex items-end justify-between border-t border-white/10 pt-3">
        <div>
          <p class="text-xs text-zinc-500">卖家 {{ product.seller }} · Lv.{{ product.sellerLevel }}</p>
          <p class="mt-1 flex items-center gap-1 text-xs text-emerald-300">
            <ShieldCheck class="size-3.5" />
            平台担保
          </p>
        </div>
        <div class="text-right">
          <span class="text-xs font-bold text-zinc-500">¥</span>
          <span class="text-2xl font-black text-[var(--accent)]">{{ product.price }}</span>
        </div>
      </div>
    </div>
  </RouterLink>
</template>
