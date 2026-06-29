<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const projects = [
  {
    title: 'Hotel 101 Booking Platform',
    desc: 'End-to-end reservation system with real-time inventory, payment gateway integration, and admin dashboard for a major hospitality chain.',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    tags: ['Web App', 'React', 'Node.js'],
  },
  {
    title: 'PhilHealth Portal',
    desc: 'Secure member portal and claims management system serving millions of Filipinos with role-based access and audit logging.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop',
    tags: ['Web App', 'Vue', 'PostgreSQL'],
  },
  {
    title: 'Ogilvy Campaign Manager',
    desc: 'Multi-channel campaign tracking tool with real-time analytics, creative asset management, and automated reporting pipelines.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    tags: ['Dashboard', 'Analytics', 'AWS'],
  },
  {
    title: 'UNDP Field Data App',
    desc: 'Offline-first mobile application for field data collection in remote areas, with sync capabilities and geospatial mapping.',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop',
    tags: ['Mobile App', 'Flutter', 'GIS'],
  },
  {
    title: 'Globe Telecom Self-Service',
    desc: 'Customer self-service portal handling account management, bill payments, and support ticketing for millions of subscribers.',
    image: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=600&h=400&fit=crop',
    tags: ['Web App', 'Angular', 'Microservices'],
  },
  {
    title: 'Mobile Game: Island Rush',
    desc: 'Engaging mobile puzzle game with procedurally generated levels, leaderboards, and in-app purchases for iOS and Android.',
    image: 'https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?w=600&h=400&fit=crop',
    tags: ['Game', 'Unity', 'C#'],
  },
]

const headingRef = ref<HTMLElement | null>(null)
const gridRef = ref<HTMLElement | null>(null)

useScrollAnimation(headingRef)
useScrollAnimation(gridRef, { stagger: 0.1 })
</script>

<template>
  <section id="projects" class="py-20 bg-[#F3F4F6]">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 ref="headingRef" class="text-[32px] sm:text-[40px] font-bold leading-[1.3] text-[#0A2540] text-center mb-12">
        Featured Projects
      </h2>
      <div ref="gridRef" class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <div
          v-for="p in projects"
          :key="p.title"
          class="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
        >
          <img
            :src="p.image"
            :alt="p.title"
            class="w-full h-48 object-cover"
            loading="lazy"
          />
          <div class="p-6">
            <h3 class="text-lg font-semibold text-[#0A2540] mb-2">{{ p.title }}</h3>
            <p class="text-[#4B5563] text-sm leading-relaxed mb-4">{{ p.desc }}</p>
            <div class="flex flex-wrap gap-2">
              <span
                v-for="tag in p.tags"
                :key="tag"
                class="bg-[#F97316]/10 text-[#F97316] text-xs font-medium px-2.5 py-1 rounded"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
