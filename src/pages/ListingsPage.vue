<script setup lang="ts">
import { ImagePlus, PackagePlus } from 'lucide-vue-next'
import Button from '@/components/ui/Button.vue'
</script>

<template>
  <div class="space-y-5">
    <div class="section-heading">
      <div>
        <span class="section-kicker">SELLER CENTER</span>
        <h1>我的上架</h1>
      </div>
      <Button><PackagePlus class="size-4" /> 新建商品</Button>
    </div>

    <div class="grid gap-5 xl:grid-cols-[1fr_360px]">
      <section class="panel p-5 md:p-7">
        <h2 class="text-xl font-black">发布商品</h2>
        <div class="mt-5 grid gap-4 sm:grid-cols-2">
          <label class="form-label sm:col-span-2">商品标题<input class="field mt-2" placeholder="请输入清晰、准确的商品标题" /></label>
          <label class="form-label">游戏<select class="field mt-2"><option>绝区零</option></select></label>
          <label class="form-label">服务器<select class="field mt-2"><option>官服</option><option>B服</option></select></label>
          <label class="form-label">售价<input class="field mt-2" type="number" placeholder="0.00" /></label>
          <label class="form-label">交付方式<select class="field mt-2"><option>换绑交付</option><option>平台托管</option></select></label>
          <label class="form-label sm:col-span-2">商品说明<textarea class="field mt-2 min-h-36 resize-y" placeholder="填写角色、武器、账号安全情况..." /></label>
        </div>
        <Button class="mt-5" size="lg">保存并提交审核</Button>
      </section>

      <aside class="panel p-5">
        <div class="flex min-h-52 flex-col items-center justify-center border border-dashed border-white/20 bg-black/25 p-5 text-center">
          <ImagePlus class="size-9 text-zinc-500" />
          <p class="mt-3 font-black">上传商品截图</p>
          <p class="mt-2 text-xs leading-5 text-zinc-500">后端接入后将保存到服务器本地存储，并生成缩略图。</p>
          <Button variant="outline" size="sm" class="mt-4">选择图片</Button>
        </div>
      </aside>
    </div>
  </div>
</template>
