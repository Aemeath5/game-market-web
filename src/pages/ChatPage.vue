<script setup lang="ts">
import { ref } from 'vue'
import { ImagePlus, MoreHorizontal, Search, SendHorizontal } from 'lucide-vue-next'

const selected = ref(0)
const contacts = [
  { name: '璃月百货', avatar: '/assets/reference/avatar-main.svg', text: '商品还在，可以直接下单。', time: '09:42', unread: 2 },
  { name: '枫丹商会', avatar: '/assets/reference/avatar-2.svg', text: '已为你保留 30 分钟。', time: '昨天', unread: 1 },
  { name: '稻妻杂货铺', avatar: '/assets/reference/avatar-3.svg', text: '库存已经补充。', time: '周二', unread: 0 },
]
</script>

<template>
  <div class="chat-page page-light">
    <div class="chat-shell panel-light">
      <aside class="chat-contacts">
        <header><div><p class="page-kicker">MESSAGES</p><h1>消息</h1></div><button><MoreHorizontal /></button></header>
        <label class="light-search"><Search /><input placeholder="搜索会话" /></label>
        <button v-for="(contact, index) in contacts" :key="contact.name" class="contact-row" :class="{ active: selected === index }" @click="selected = index">
          <img :src="contact.avatar" :alt="contact.name" />
          <span class="contact-main"><strong>{{ contact.name }}</strong><small>{{ contact.text }}</small></span>
          <span class="contact-side"><small>{{ contact.time }}</small><i v-if="contact.unread">{{ contact.unread }}</i></span>
        </button>
      </aside>

      <section class="chat-dialog">
        <header class="chat-dialog__header"><img :src="contacts[selected].avatar" alt="" /><div><strong>{{ contacts[selected].name }}</strong><span>在线 · 认证卖家</span></div><button><MoreHorizontal /></button></header>
        <div class="chat-messages">
          <div class="message-time">今天 09:38</div>
          <div class="message-row left"><img :src="contacts[selected].avatar" alt="" /><p>你好，这个商品目前还有库存，可以通过平台担保交易。</p></div>
          <div class="message-row right"><p>现在下单大概多久可以交付？</p><img src="/assets/reference/avatar-4.svg" alt="" /></div>
          <div class="message-row left"><img :src="contacts[selected].avatar" alt="" /><p>通常 10 分钟内完成，订单生成后我会马上联系你。</p></div>
        </div>
        <footer class="chat-input"><button><ImagePlus /></button><input placeholder="输入消息..." /><button class="send-button"><SendHorizontal /></button></footer>
      </section>
    </div>
  </div>
</template>
