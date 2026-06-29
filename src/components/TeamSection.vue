<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const team = [
  {
    name: 'Carlos Reyes',
    role: 'CEO & Founder',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Sofia Dela Cruz',
    role: 'CTO',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Miguel Santos',
    role: 'Head of Engineering',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Ana Gonzales',
    role: 'VP of Design',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face',
  },
  {
    name: 'Jose Mercado',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face',
  },
]

const headingRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollAnimation(headingRef)
useScrollAnimation(gridRef, { stagger: 0.1 })
</script>

<template>
  <section id="team" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="headingRef" class="text-[32px] sm:text-[40px] font-bold leading-[1.3] text-[#0A2540] text-center mb-12">
        Meet Our Team
      </h2>
      <div ref="gridRef" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
        <div
          v-for="m in team"
          :key="m.name"
          class="text-center"
        >
          <img
            :src="m.image"
            :alt="m.name"
            class="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full object-cover mx-auto mb-3 shadow-sm"
            loading="lazy"
          />
          <h3 class="text-sm sm:text-base font-semibold text-[#0A2540]">{{ m.name }}</h3>
          <p class="text-xs sm:text-sm text-[#F97316] font-medium">{{ m.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
