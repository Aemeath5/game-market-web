<script setup lang="ts">
import { ref } from 'vue'
import {
  ArrowRight,
  Eye,
  EyeOff,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  UserRound,
} from 'lucide-vue-next'
import { useRouter } from 'vue-router'
import { useAppStore } from '@/stores/app'

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
  <div class="login-page">
    <div class="login-glow login-glow--left" />
    <div class="login-glow login-glow--right" />

    <header class="login-header">
      <RouterLink to="/" class="login-brand">
        <span class="login-brand__mark">A</span>
        <span>
          <strong>Aemeath</strong>
          <small>原神交易市场</small>
        </span>
      </RouterLink>
      <RouterLink to="/" class="login-back">返回市场</RouterLink>
    </header>

    <main class="login-main">
      <section class="login-visual">
        <div class="login-visual__image">
          <img src="/assets/reference/dashboard-banner.svg" alt="Aemeath 原神交易市场" />
          <div class="login-visual__shade" />
          <div class="login-visual__copy">
            <span><Sparkles /> AEMEATH MARKET</span>
            <h1>安全、清晰、便捷的<br />游戏道具交易体验</h1>
            <p>连接商品、订单、聊天与平台担保服务。</p>
          </div>
        </div>

        <div class="login-trust">
          <div><ShieldCheck /><span><strong>平台担保</strong><small>订单全流程留痕</small></span></div>
          <div><LockKeyhole /><span><strong>账户安全</strong><small>敏感信息由后端管理</small></span></div>
        </div>
      </section>

      <section class="login-card">
        <div class="login-card__head">
          <span class="login-card__icon"><UserRound /></span>
          <div>
            <p>欢迎回来</p>
            <h2>登录 Aemeath</h2>
          </div>
        </div>

        <form class="login-form" @submit.prevent="login">
          <label class="login-field">
            <span>账号</span>
            <div class="login-input">
              <UserRound />
              <input v-model="account" autocomplete="username" placeholder="用户名 / 邮箱" />
            </div>
          </label>

          <label class="login-field">
            <span>密码</span>
            <div class="login-input">
              <LockKeyhole />
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                autocomplete="current-password"
                placeholder="请输入密码"
              />
              <button type="button" class="password-toggle" :aria-label="showPassword ? '隐藏密码' : '显示密码'" @click="showPassword = !showPassword">
                <EyeOff v-if="showPassword" />
                <Eye v-else />
              </button>
            </div>
          </label>

          <div class="login-options">
            <label class="remember-option">
              <input v-model="remember" type="checkbox" />
              <span>记住登录状态</span>
            </label>
            <button type="button" class="text-action">忘记密码？</button>
          </div>

          <button class="login-submit" type="submit">
            登录
            <ArrowRight />
          </button>

          <p class="login-note">当前为前端演示登录，接入 Go 后端后启用真实账号验证。</p>
        </form>
      </section>
    </main>

    <footer class="login-footer">© 2026 Aemeath 原神交易市场</footer>
  </div>
</template>

<style scoped>
.login-page {
  position: relative;
  min-height: 100vh;
  overflow: hidden;
  color: #17233d;
  background:
    radial-gradient(circle at 12% 15%, rgba(98, 176, 255, 0.22), transparent 30%),
    radial-gradient(circle at 88% 84%, rgba(142, 117, 255, 0.17), transparent 28%),
    linear-gradient(180deg, #f8fbff 0%, #f2f7ff 48%, #edf5ff 100%);
}

.login-page::before {
  position: absolute;
  inset: 0;
  pointer-events: none;
  content: '';
  opacity: 0.42;
  background-image:
    linear-gradient(rgba(77, 128, 190, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(77, 128, 190, 0.05) 1px, transparent 1px);
  background-size: 34px 34px;
}

.login-glow {
  position: absolute;
  width: 360px;
  height: 360px;
  border-radius: 50%;
  filter: blur(12px);
  pointer-events: none;
}

.login-glow--left {
  top: 90px;
  left: -170px;
  background: rgba(69, 157, 255, 0.14);
}

.login-glow--right {
  right: -170px;
  bottom: 20px;
  background: rgba(121, 97, 255, 0.12);
}

.login-header {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: min(1180px, calc(100% - 40px));
  height: 84px;
  margin: 0 auto;
}

.login-brand {
  display: inline-flex;
  align-items: center;
  gap: 12px;
  color: inherit;
  text-decoration: none;
}

.login-brand__mark {
  display: grid;
  width: 44px;
  height: 44px;
  place-items: center;
  border-radius: 15px;
  color: #fff;
  font-size: 22px;
  font-weight: 900;
  background: linear-gradient(145deg, #4aa4ff, #2478ee);
  box-shadow: 0 12px 26px rgba(39, 126, 235, 0.28);
}

.login-brand strong,
.login-brand small {
  display: block;
}

.login-brand strong {
  font-size: 18px;
  line-height: 1.1;
}

.login-brand small {
  margin-top: 4px;
  color: #8492a8;
  font-size: 12px;
}

.login-back,
.text-action {
  border: 0;
  color: #267be8;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
}

.login-back {
  padding: 10px 16px;
  border: 1px solid rgba(49, 126, 223, 0.18);
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.68);
  box-shadow: 0 8px 22px rgba(63, 102, 151, 0.08);
}

.login-main {
  position: relative;
  z-index: 1;
  display: grid;
  grid-template-columns: minmax(0, 1.18fr) minmax(360px, 0.82fr);
  gap: 28px;
  width: min(1120px, calc(100% - 40px));
  min-height: calc(100vh - 154px);
  margin: 0 auto;
  padding: 34px 0 64px;
  align-items: center;
}

.login-visual,
.login-card {
  border: 1px solid rgba(89, 139, 202, 0.14);
  border-radius: 28px;
  background: rgba(255, 255, 255, 0.78);
  box-shadow: 0 24px 60px rgba(71, 111, 163, 0.14);
  backdrop-filter: blur(20px);
}

.login-visual {
  overflow: hidden;
}

.login-visual__image {
  position: relative;
  min-height: 470px;
  overflow: hidden;
}

.login-visual__image img {
  width: 100%;
  height: 100%;
  min-height: 470px;
  object-fit: cover;
}

.login-visual__shade {
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(15, 40, 82, 0.04), rgba(14, 39, 80, 0.72));
}

.login-visual__copy {
  position: absolute;
  right: 42px;
  bottom: 42px;
  left: 42px;
  color: #fff;
}

.login-visual__copy > span {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0.14em;
}

.login-visual__copy svg {
  width: 18px;
}

.login-visual__copy h1 {
  margin: 0;
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.18;
}

.login-visual__copy p {
  margin: 18px 0 0;
  color: rgba(255, 255, 255, 0.82);
}

.login-trust {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 18px;
  padding: 22px 26px;
}

.login-trust > div {
  display: flex;
  align-items: center;
  gap: 12px;
}

.login-trust svg {
  width: 25px;
  color: #3185ee;
}

.login-trust strong,
.login-trust small {
  display: block;
}

.login-trust small {
  margin-top: 3px;
  color: #8b98ab;
}

.login-card {
  padding: 40px;
}

.login-card__head {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 32px;
}

.login-card__icon {
  display: grid;
  width: 52px;
  height: 52px;
  place-items: center;
  border-radius: 18px;
  color: #2d80ec;
  background: #eaf3ff;
}

.login-card__icon svg {
  width: 25px;
}

.login-card__head p,
.login-card__head h2 {
  margin: 0;
}

.login-card__head p {
  margin-bottom: 4px;
  color: #8b98aa;
  font-size: 14px;
}

.login-card__head h2 {
  font-size: 28px;
}

.login-form {
  display: grid;
  gap: 20px;
}

.login-field > span {
  display: block;
  margin-bottom: 9px;
  font-size: 14px;
  font-weight: 700;
}

.login-input {
  display: flex;
  align-items: center;
  gap: 11px;
  height: 54px;
  padding: 0 15px;
  border: 1px solid #dce7f4;
  border-radius: 15px;
  background: rgba(248, 251, 255, 0.92);
  transition: border-color 0.2s, box-shadow 0.2s, background 0.2s;
}

.login-input:focus-within {
  border-color: #5ba6ff;
  background: #fff;
  box-shadow: 0 0 0 4px rgba(65, 148, 244, 0.12);
}

.login-input > svg {
  width: 20px;
  color: #8797ab;
}

.login-input input {
  min-width: 0;
  flex: 1;
  border: 0;
  outline: 0;
  color: #17233d;
  font: inherit;
  background: transparent;
}

.login-input input::placeholder {
  color: #aab5c4;
}

.password-toggle {
  display: grid;
  width: 34px;
  height: 34px;
  place-items: center;
  border: 0;
  border-radius: 10px;
  color: #7d8ea4;
  background: transparent;
  cursor: pointer;
}

.password-toggle:hover {
  background: #eaf3ff;
}

.password-toggle svg {
  width: 19px;
}

.login-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  color: #718096;
  font-size: 13px;
}

.remember-option {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

.remember-option input {
  width: 16px;
  height: 16px;
  accent-color: #2d82ee;
}

.text-action {
  padding: 0;
  font-size: 13px;
}

.login-submit {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  height: 56px;
  border: 0;
  border-radius: 16px;
  color: #fff;
  font-size: 16px;
  font-weight: 800;
  background: linear-gradient(135deg, #3b98ff, #2475e9);
  box-shadow: 0 14px 28px rgba(36, 117, 233, 0.26);
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s;
}

.login-submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 17px 34px rgba(36, 117, 233, 0.32);
}

.login-submit svg {
  width: 20px;
}

.login-note {
  margin: 0;
  color: #96a2b3;
  font-size: 12px;
  line-height: 1.65;
  text-align: center;
}

.login-footer {
  position: relative;
  z-index: 1;
  padding: 0 20px 28px;
  color: #9aa7b8;
  font-size: 12px;
  text-align: center;
}

@media (max-width: 900px) {
  .login-main {
    grid-template-columns: 1fr;
    max-width: 580px;
    padding-top: 18px;
  }

  .login-visual {
    display: none;
  }

  .login-card {
    padding: 32px;
  }
}

@media (max-width: 560px) {
  .login-header {
    width: calc(100% - 28px);
    height: 72px;
  }

  .login-back {
    padding: 8px 11px;
    font-size: 13px;
  }

  .login-main {
    width: calc(100% - 24px);
    min-height: calc(100vh - 128px);
    padding: 16px 0 42px;
  }

  .login-card {
    padding: 26px 20px;
    border-radius: 24px;
  }

  .login-card__head {
    margin-bottom: 27px;
  }

  .login-card__head h2 {
    font-size: 24px;
  }

  .login-options {
    align-items: flex-start;
  }
}
</style>
