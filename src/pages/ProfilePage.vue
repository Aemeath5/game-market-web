<script setup lang="ts">
import { Bell, ChevronRight, CircleDollarSign, Edit3, LockKeyhole, PackageOpen, ReceiptText, Settings, ShieldCheck, ShoppingBag, UserRound } from 'lucide-vue-next'
import { useAppStore } from '@/stores/app'

const app = useAppStore()
const menu = [
  { label: '实名认证', icon: UserRound, value: '已认证' },
  { label: '账户安全', icon: LockKeyhole, value: '安全' },
  { label: '资金记录', icon: CircleDollarSign, value: '' },
  { label: '通知设置', icon: Bell, value: '' },
  { label: '偏好设置', icon: Settings, value: '' },
]
</script>

<template>
  <div class="profile-page page-light">
    <section class="profile-banner" />
    <div class="profile-container">
      <section class="profile-summary panel-light">
        <div class="profile-avatar-wrap"><img src="/assets/reference/avatar-main.svg" alt="Aemeath" /></div>
        <div class="profile-info"><div class="profile-name-row"><h1>{{ app.displayName }}</h1><span>Lv.12</span></div><p>旅行者，愿风神护佑你的每一笔交易。</p></div>
        <button class="secondary-button profile-edit"><Edit3 /> 编辑资料</button>
        <div class="profile-stats">
          <div><strong>40</strong><span>我的挂单</span></div><div><strong>12</strong><span>已购商品</span></div><div><strong>98.6%</strong><span>好评率</span></div><div><strong>157</strong><span>背包道具</span></div>
        </div>
      </section>

      <section class="profile-cards">
        <article class="panel-light profile-orders">
          <header><h2>我的交易</h2><RouterLink to="/orders">全部订单 <ChevronRight /></RouterLink></header>
          <div class="profile-order-grid">
            <RouterLink to="/orders"><ShoppingBag /><span>待付款</span><i>0</i></RouterLink>
            <RouterLink to="/orders"><PackageOpen /><span>待交付</span><i>2</i></RouterLink>
            <RouterLink to="/orders"><ReceiptText /><span>已完成</span><i>18</i></RouterLink>
            <RouterLink to="/orders"><ShieldCheck /><span>争议处理</span><i>0</i></RouterLink>
          </div>
        </article>

        <article class="panel-light profile-menu">
          <button v-for="item in menu" :key="item.label"><span><component :is="item.icon" />{{ item.label }}</span><span>{{ item.value }} <ChevronRight /></span></button>
        </article>
      </section>
    </div>
  </div>
</template>
