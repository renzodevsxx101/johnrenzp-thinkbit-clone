<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const stats = [
  { value: '600+', label: '# of total projects' },
  { value: '10+', label: 'Years in the business' },
  { value: '300+', label: 'Satisfied clients' },
  { value: '10+', label: 'Countries worked with' },
]

const headingRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollAnimation(headingRef)
useScrollAnimation(gridRef, { stagger: 0.15 })
</script>

<template>
  <section class="py-20 bg-[#0A2540]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="headingRef" class="text-[32px] sm:text-[40px] font-bold leading-[1.3] text-white text-center mb-12">
        ThinkBIT by the Numbers
      </h2>
      <div ref="gridRef" class="flex flex-wrap justify-center gap-8 lg:gap-16">
        <div v-for="stat in stats" :key="stat.label" class="text-center">
          <span class="block text-4xl lg:text-5xl font-extrabold text-white mb-1">{{ stat.value }}</span>
          <span class="block text-sm text-gray-300">{{ stat.label }}</span>
        </div>
      </div>
    </div>
  </section>
</template>
