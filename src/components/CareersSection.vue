<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const openings = [
  {
    title: 'Senior Full-Stack Developer',
    location: 'Manila, Philippines',
    type: 'Full-Time',
    desc: 'Build and maintain scalable web applications using Vue, React, and Node.js. Lead a team of 3-5 developers on client projects.',
  },
  {
    title: 'Mobile Engineer (Flutter)',
    location: 'Remote',
    type: 'Full-Time',
    desc: 'Design and develop cross-platform mobile applications. Experience with offline-first architecture and GIS integration is a plus.',
  },
  {
    title: 'DevOps Engineer',
    location: 'Manila, Philippines',
    type: 'Full-Time',
    desc: 'Manage CI/CD pipelines, cloud infrastructure (AWS/GCP), and containerized deployments. Automate everything you can.',
  },
  {
    title: 'UI/UX Designer',
    location: 'Remote',
    type: 'Contract',
    desc: 'Create intuitive, accessible interfaces for web and mobile applications. Work closely with developers and product owners.',
  },
  {
    title: 'QA Engineer',
    location: 'Cebu, Philippines',
    type: 'Full-Time',
    desc: 'Write and execute test plans, automate regression suites, and ensure delivery quality across multiple concurrent projects.',
  },
  {
    title: 'Junior Game Developer',
    location: 'Manila, Philippines',
    type: 'Full-Time',
    desc: 'Develop mobile games using Unity. Ideal for recent graduates with a passion for game development and a strong portfolio.',
  },
]

const headingRef = ref<HTMLElement | null>(null)
const listRef = ref<HTMLElement | null>(null)

useScrollAnimation(headingRef)
useScrollAnimation(listRef, { stagger: 0.1 })
</script>

<template>
  <section id="careers" class="py-20 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="headingRef" class="text-[32px] sm:text-[40px] font-bold leading-[1.3] text-[#0A2540] text-center mb-4">
        Join Our Team
      </h2>
      <p class="text-[#4B5563] text-center mb-12 max-w-xl mx-auto">
        Help us build the future of software. We're looking for passionate people who love solving hard problems.
      </p>
      <div ref="listRef" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <div
          v-for="job in openings"
          :key="job.title"
          class="bg-[#F3F4F6] rounded-xl p-4 hover:shadow-md transition-shadow flex flex-col"
        >
          <h3 class="text-sm font-semibold text-[#0A2540] leading-snug">{{ job.title }}</h3>
          <div class="flex flex-wrap items-center gap-2 mt-2 mb-3">
            <span class="text-[#4B5563] text-xs">{{ job.location }}</span>
            <span class="text-[#F97316] text-[10px] font-medium bg-[#F97316]/10 px-2 py-0.5 rounded">{{ job.type }}</span>
          </div>
          <p class="text-[#4B5563] text-xs leading-relaxed flex-1">{{ job.desc }}</p>
          <a
            href="#"
            class="mt-3 inline-block bg-[#F97316] text-white text-xs px-4 py-1.5 rounded-full font-semibold hover:bg-[#e0670e] transition-all active:scale-95 text-center"
          >
            Apply Now
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
