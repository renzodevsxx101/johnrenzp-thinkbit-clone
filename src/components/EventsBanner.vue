<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const products = [
  { title: 'Onsite', desc: 'Digital Registration Done Right' },
  { title: 'Raffle', desc: 'Make your events more exciting' },
  { title: 'Conference', desc: "Your event's mobile app companion" },
]

const headingRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollAnimation(headingRef)
useScrollAnimation(gridRef, { stagger: 0.18 })
</script>

<template>
  <section class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="headingRef" class="text-[32px] sm:text-[40px] font-bold leading-[1.3] text-[#0A2540] text-center mb-12">
        Powering Every Moment, End-to-End with ThinkBIT Events
      </h2>
      <div ref="gridRef" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div v-for="p in products" :key="p.title" class="text-center p-6">
          <h3 class="text-xl font-semibold text-[#0A2540] mb-2">{{ p.title }}</h3>
          <p class="text-[#4B5563] text-sm">{{ p.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>
