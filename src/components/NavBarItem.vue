<script lang="ts" setup>
  import { computed } from 'vue'

  const props = defineProps({
    href: {
      type: String,
      required: false
    },
    to: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: ''
    },
    activeColor: {
      type: String,
      default: ''
    },
    active: {
      type: Boolean,
      default: false
    }
  })

  const is = computed(() => {
    if (props.href) {
      return 'a'
    }
    if (props.to) {
      return 'router-link'
    }
    return 'div'
  })

  const componentClass = computed(() => {
    const activeColor = props.activeColor ?? 'text-green-400 border-b-2 border-green-400'
    const base = [
      'items-center',
      'grow-0',
      'shrink-0',
      'relative',
      'cursor-pointer',
      'text-gray-600',
      'dark:text-gray-200',
      'hover:border-b-2',
      'border-green-400',
      'dark:hover:text-green-400',
      'border-opacity-0',
      'hover:border-opacity-100',
      'mx-6',
      'py-2',
      'delay-100',
      props.active ? activeColor : ''
    ]

    return base
  })

  const activeClass = computed(() => {
    return is.value === 'router-link' ? props.activeColor : null
  })
</script>

<template>
  <component
    :is="is"
    :to="to"
    :class="componentClass"
    :href="href"
    :exact-active-class="activeClass"
  >
    <slot />
  </component>
</template>
