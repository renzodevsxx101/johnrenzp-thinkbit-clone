<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const services = [
  {
    title: 'Outsource teams',
    desc: 'We provide certified industry professionals who integrate seamlessly with your existing workflows, ensuring quality, efficiency, and timely delivery.',
  },
  {
    title: 'Websites',
    desc: 'SEO-first, mobile-optimized approaches that drive traffic, engage visitors, and convert leads into loyal customers through modern web experiences.',
  },
  {
    title: 'Web Apps',
    desc: 'Polished, secure, and scalable solutions built with cutting-edge frameworks to handle complex business logic and high traffic demands.',
  },
  {
    title: 'Mobile Apps',
    desc: 'Intuitive mobile experiences that captivate users across iOS and Android, from concept through deployment and ongoing support.',
  },
  {
    title: 'Games and Asset Production',
    desc: 'Engaging and visually stunning mobile games and digital assets that bring your creative vision to life with performance-optimized pipelines.',
  },
]

const headingRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollAnimation(headingRef)
useScrollAnimation(gridRef, { stagger: 0.12 })
</script>

<template>
  <section class="py-20 lg:py-24 bg-[#F3F4F6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="headingRef" class="text-[32px] sm:text-[40px] font-bold leading-[1.3] text-[#0A2540] text-center mb-12">
        FROM IDEA TO LAUNCH
      </h2>
      <div ref="gridRef" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="s in services"
          :key="s.title"
          class="bg-white rounded-xl p-6 hover:shadow-lg transition-shadow"
        >
          <h3 class="text-xl font-semibold text-[#0A2540] mb-3">{{ s.title }}</h3>
          <p class="text-[#4B5563] text-sm leading-relaxed mb-4">{{ s.desc }}</p>
          <a href="#" class="text-[#F97316] text-sm font-semibold hover:underline">LEARN MORE</a>
        </div>
      </div>
    </div>
  </section>
</template>
