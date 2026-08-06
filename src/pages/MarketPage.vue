<script setup lang="ts">
import { computed, ref } from 'vue'
import { ListFilter, Search, SlidersHorizontal } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
import GameCard from '@/components/ui/GameCard.vue'
import { products } from '@/data/products'

type MarketTab = 'market' | 'auction' | 'wanted'

const currentTab = ref<MarketTab>('market')
const tabs: Array<{ key: MarketTab; label: string }> = [
  { key: 'market', label: '一口价' },
  { key: 'auction', label: '拍卖' },
  { key: 'wanted', label: '求购' },
]
const keyword = ref('')
const sort = ref('recommend')

const filtered = computed(() =>
  products.filter((item) =>
    item.title.toLowerCase().includes(keyword.value.toLowerCase()),
  ),
)
</script>

<template>
  <div class="space-y-5">
    <div class="section-heading">
      <div>
        <span class="section-kicker">MARKET TERMINAL</span>
        <h1>交易市场</h1>
      </div>
      <RouterLink to="/listings"><Button>发布商品</Button></RouterLink>
    </div>

    <div class="panel p-3 md:p-4">
      <div class="grid grid-cols-3 gap-2">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          class="market-tab"
          :class="{ 'market-tab-active': currentTab === tab.key }"
          @click="currentTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="mt-4 grid gap-3 md:grid-cols-[1fr_auto_auto]">
        <label class="relative">
          <Search class="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-zinc-500" />
          <input v-model="keyword" class="field pl-10" placeholder="搜索商品名称、角色、装备..." />
        </label>
        <select v-model="sort" class="field min-w-36">
          <option value="recommend">综合推荐</option>
          <option value="newest">最新发布</option>
          <option value="price-asc">价格从低到高</option>
          <option value="price-desc">价格从高到低</option>
        </select>
        <Button variant="outline"><SlidersHorizontal class="size-4" /> 筛选</Button>
      </div>

      <div class="mt-3 flex flex-wrap items-center gap-2 text-xs">
        <span class="flex items-center gap-1 text-zinc-500"><ListFilter class="size-4" /> 快速筛选：</span>
        <button v-for="tag in ['已验号', '可改实名', '卖家认证', '24小时内发布']" :key="tag" class="filter-chip">
          {{ tag }}
        </button>
      </div>
    </div>

    <div class="flex items-center justify-between text-sm text-zinc-500">
      <span>共找到 {{ filtered.length }} 个商品</span>
      <span>数据为前端演示</span>
    </div>

    <div class="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
      <GameCard v-for="product in filtered" :key="product.id" :product="product" />
    </div>
  </div>
</template>
