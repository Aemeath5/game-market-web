<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/lib/utils'

const props = withDefaults(
  defineProps<{
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
    size?: 'sm' | 'md' | 'lg' | 'icon'
    class?: string
    type?: 'button' | 'submit' | 'reset'
  }>(),
  {
    variant: 'primary',
    size: 'md',
    type: 'button',
  },
)

const classes = computed(() =>
  cn(
    'inline-flex items-center justify-center gap-2 font-black uppercase tracking-wide disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]',
    props.variant === 'primary' &&
      'bg-[var(--accent)] text-black shadow-[4px_4px_0_#000] hover:brightness-110 active:translate-x-[2px] active:translate-y-[2px] active:shadow-[2px_2px_0_#000]',
    props.variant === 'secondary' &&
      'bg-white text-black shadow-[4px_4px_0_#000] hover:bg-zinc-100',
    props.variant === 'ghost' &&
      'bg-transparent text-zinc-300 hover:bg-white/8 hover:text-white',
    props.variant === 'outline' &&
      'border border-white/20 bg-black/30 text-white hover:border-[var(--accent)]',
    props.size === 'sm' && 'h-9 px-3 text-xs',
    props.size === 'md' && 'h-11 px-5 text-sm',
    props.size === 'lg' && 'h-13 px-7 text-base',
    props.size === 'icon' && 'size-11 p-0',
    props.class,
  ),
)
</script>

<template>
  <button :type="type" :class="classes">
    <slot />
  </button>
</template>
