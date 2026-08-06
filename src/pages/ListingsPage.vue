<script setup lang="ts">
import { ref } from 'vue'
import { Boxes, ChevronRight, PackagePlus, Search, Tag, UploadCloud } from 'lucide-vue-next'

const tab = ref<'inventory' | 'listing' | 'publish'>('inventory')
const items = [
  { name: '脆弱树脂', amount: 18, image: '/assets/reference/item-snow.svg', rarity: 5 },
  { name: '冰之印', amount: 42, image: '/assets/reference/item-orb.svg', rarity: 4 },
  { name: '未熟之玉', amount: 9, image: '/assets/reference/item-blue.svg', rarity: 4 },
  { name: '雷霆数珠', amount: 27, image: '/assets/reference/item-mask.svg', rarity: 4 },
  { name: '最初的大魔术', amount: 1, image: '/assets/reference/item-flower.svg', rarity: 5 },
  { name: '鸣草', amount: 100, image: '/assets/reference/item-dragon.svg', rarity: 3 },
]
</script>

<template>
  <div class="inventory-page page-light">
    <div class="inventory-container">
      <div class="page-heading-row">
        <div><p class="page-kicker">INVENTORY</p><h1>背包与上架</h1></div>
        <button class="primary-button" @click="tab = 'publish'"><PackagePlus /> 上架道具</button>
      </div>

      <div class="inventory-tabs panel-light">
        <button :class="{ active: tab === 'inventory' }" @click="tab = 'inventory'"><Boxes /> 背包道具 <span>157</span></button>
        <button :class="{ active: tab === 'listing' }" @click="tab = 'listing'"><Tag /> 我的挂单 <span>40</span></button>
        <button :class="{ active: tab === 'publish' }" @click="tab = 'publish'"><UploadCloud /> 发布商品</button>
      </div>

      <template v-if="tab !== 'publish'">
        <div class="inventory-toolbar panel-light"><label class="light-search"><Search /><input placeholder="搜索道具名称..." /></label><button class="light-select">全部分类 <ChevronRight /></button></div>
        <div class="inventory-grid">
          <article v-for="item in items" :key="item.name" class="inventory-card panel-light">
            <span class="inventory-rarity">{{ '★'.repeat(item.rarity) }}</span>
            <img :src="item.image" :alt="item.name" />
            <h3>{{ item.name }}</h3>
            <div class="inventory-card__footer"><span>拥有 {{ item.amount }}</span><button>上架</button></div>
          </article>
        </div>
      </template>

      <section v-else class="publish-grid">
        <form class="panel-light publish-form" @submit.prevent>
          <h2>发布商品</h2>
          <label>选择道具<select><option>脆弱树脂</option><option>冰之印</option><option>雷霆数珠</option></select></label>
          <div class="two-fields"><label>数量<input type="number" value="1" /></label><label>单价<input type="number" placeholder="0" /></label></div>
          <label>服务器<select><option>天空岛服</option><option>世界树服</option></select></label>
          <label>商品说明<textarea placeholder="填写交付时间、库存情况和其他说明..." /></label>
          <button class="primary-button" type="submit">提交审核</button>
        </form>
        <aside class="panel-light publish-help"><UploadCloud /><h3>商品图片</h3><p>从背包选择道具后会自动使用原项目资源图，也可以补充交易截图。</p><button class="secondary-button">选择图片</button></aside>
      </section>
    </div>
  </div>
</template>
