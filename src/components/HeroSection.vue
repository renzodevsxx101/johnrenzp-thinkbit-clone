<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const contentRef = ref<HTMLElement | null>(null)
const imageRef = ref<HTMLElement | null>(null)

useScrollAnimation(contentRef, { start: 'top 80%' })
useScrollAnimation(imageRef, { from: { x: 40 }, to: { x: 0 }, start: 'top 80%' })
</script>

<template>
  <section class="bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 lg:pt-20 pb-12 lg:pb-16">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div ref="contentRef">
          <h1 class="text-[40px] sm:text-[48px] lg:text-[56px] font-extrabold leading-[1.2] text-[#0A2540] mb-6">
            Let's launch your software!
          </h1>
          <p class="text-base lg:text-lg text-[#4B5563] leading-relaxed mb-8 max-w-xl">
            Trusted by Enterprises, Government Agencies, NGOs, SMEs, and Startups
          </p>
          <a href="#" class="inline-block bg-[#F97316] text-white px-8 py-3.5 rounded-full text-base font-semibold hover:bg-[#e0670e] transition-all active:scale-95 shadow-lg shadow-[#F97316]/25">
            INQUIRE NOW
          </a>
        </div>
        <div ref="imageRef" class="rounded-xl overflow-hidden h-72 lg:h-96">
          <img
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=500&fit=crop&auto=format"
            alt="Team working on software development"
            class="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
</template>
