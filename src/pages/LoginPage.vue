<script setup lang="ts">
import { ref } from 'vue'
import { ArrowRight, Eye, EyeOff, LockKeyhole, ShieldCheck, Sparkles, UserRound } from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'
import '@/auth-pages.css'

const router = useRouter()
const app = useAppStore()
const account = ref('')
const password = ref('')
const remember = ref(true)
const showPassword = ref(false)

function login() {
  app.mockLogin()
  router.push('/')
}
</script>

<template>
  <div class="auth-page">
    <header class="auth-header">
      <RouterLink to="/" class="auth-brand">
        <span class="auth-brand__mark">A</span>
        <span><strong>Aemeath</strong><small>原神交易市场</small></span>
      </RouterLink>
      <RouterLink to="/" class="auth-back">返回市场</RouterLink>
    </header>

    <main class="auth-main">
      <section class="auth-visual">
        <div class="auth-visual__content">
          <span class="auth-visual__eyebrow"><Sparkles /> AEMEATH MARKET</span>
          <h1>安全、清晰、便捷的<br>游戏道具交易体验</h1>
          <p>连接商品、订单、聊天与平台担保服务，游戏账号与商城身份统一管理。</p>
        </div>
        <div class="auth-steps">
          <div class="auth-step"><span><ShieldCheck /></span><div><strong>平台担保</strong><small>订单全流程留痕</small></div></div>
          <div class="auth-step"><span><LockKeyhole /></span><div><strong>账户安全</strong><small>敏感信息由服务端统一处理</small></div></div>
        </div>
      </section>

      <section class="auth-card">
        <div class="auth-card__head">
          <span class="auth-card__icon"><UserRound /></span>
          <div><p>欢迎回来</p><h2>登录 Aemeath</h2></div>
        </div>

        <form class="auth-form" @submit.prevent="login">
          <label class="auth-field">
            <span>账号</span>
            <div class="auth-input"><UserRound /><input v-model="account" autocomplete="username" placeholder="用户名 / 邮箱"></div>
          </label>

          <label class="auth-field">
            <span>密码</span>
            <div class="auth-input">
              <LockKeyhole />
              <input v-model="password" :type="showPassword ? 'text' : 'password'" autocomplete="current-password" placeholder="请输入密码">
              <button class="auth-password-toggle" type="button" :aria-label="showPassword ? '隐藏密码' : '显示密码'" @click="showPassword = !showPassword"><EyeOff v-if="showPassword" /><Eye v-else /></button>
            </div>
          </label>

          <div class="login-options-v2">
            <label class="remember-v2"><input v-model="remember" type="checkbox"><span>记住登录状态</span></label>
            <RouterLink to="/forgot-password">忘记密码？</RouterLink>
          </div>

          <button class="auth-submit" type="submit">登录 <ArrowRight /></button>
          <p class="auth-helper">还没有游戏账号？<RouterLink to="/register">立即注册</RouterLink></p>
          <p class="login-demo-note">当前登录仍为前端演示；商城 Go 后端接入 SDK 后启用真实账号验证。</p>
        </form>
      </section>
    </main>

    <footer class="auth-footer">© 2026 Aemeath 原神交易市场</footer>
  </div>
</template>

<style scoped>
.login-options-v2{display:flex;align-items:center;justify-content:space-between;gap:14px;color:#718096;font-size:13px}.login-options-v2 a{color:#267be8;text-decoration:none}.remember-v2{display:inline-flex;align-items:center;gap:8px;cursor:pointer}.remember-v2 input{width:16px;height:16px;accent-color:#2d82ee}.login-demo-note{margin:0;color:#96a2b3;font-size:12px;line-height:1.65;text-align:center}.auth-step>span svg{width:18px}@media(max-width:560px){.login-options-v2{align-items:flex-start}}
</style>
