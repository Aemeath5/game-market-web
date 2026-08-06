import { createRouter, createWebHistory } from 'vue-router'
import AppLayout from '@/layouts/AppLayout.vue'
import DashboardPage from '@/pages/DashboardPage.vue'
import MarketPage from '@/pages/MarketPage.vue'
import ProductDetailPage from '@/pages/ProductDetailPage.vue'
import ListingsPage from '@/pages/ListingsPage.vue'
import OrdersPage from '@/pages/OrdersPage.vue'
import ChatPage from '@/pages/ChatPage.vue'
import ProfilePage from '@/pages/ProfilePage.vue'
import LoginPage from '@/pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/login', component: LoginPage },
    {
      path: '/',
      component: AppLayout,
      children: [
        { path: '', name: 'dashboard', component: DashboardPage },
        { path: 'market', name: 'market', component: MarketPage },
        { path: 'market/:id', name: 'product-detail', component: ProductDetailPage },
        { path: 'listings', name: 'listings', component: ListingsPage },
        { path: 'orders', name: 'orders', component: OrdersPage },
        { path: 'chat', name: 'chat', component: ChatPage },
        { path: 'profile', name: 'profile', component: ProfilePage },
      ],
    },
  ],
})

export default router
