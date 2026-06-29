<script setup lang="ts">
import { ref } from 'vue'
import { Menu, X, ChevronDown } from '@lucide/vue'

const isOpen = ref(false)
const servicesOpen = ref(false)
const eventsOpen = ref(false)

const servicesLinks = ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Consulting']
const eventsLinks = ['Onsite', 'Raffle', 'Conference']
</script>

<template>
  <nav class="sticky top-0 w-full bg-white shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 lg:h-20">
        <a href="#" class="text-2xl font-extrabold text-[#0A2540]">
          <span class="text-[#F97316]">Think</span>BIT
        </a>

        <div class="hidden lg:flex items-center gap-6">
          <div class="relative" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
            <button class="flex items-center gap-1 text-sm font-medium text-[#0A2540] hover:text-[#F97316] transition-colors">
              Services <ChevronDown :size="14" />
            </button>
            <div v-if="servicesOpen" class="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-xl p-2 min-w-[180px]">
              <a v-for="link in servicesLinks" :key="link" href="#" class="block px-4 py-2 text-sm text-[#0A2540] hover:bg-[#F3F4F6] rounded-lg transition-colors">{{ link }}</a>
            </div>
          </div>

          <div class="relative" @mouseenter="eventsOpen = true" @mouseleave="eventsOpen = false">
            <button class="flex items-center gap-1 text-sm font-medium text-[#0A2540] hover:text-[#F97316] transition-colors">
              Events <ChevronDown :size="14" />
            </button>
            <div v-if="eventsOpen" class="absolute top-full left-0 mt-1 bg-white shadow-lg rounded-xl p-2 min-w-[180px]">
              <a v-for="link in eventsLinks" :key="link" href="#" class="block px-4 py-2 text-sm text-[#0A2540] hover:bg-[#F3F4F6] rounded-lg transition-colors">{{ link }}</a>
            </div>
          </div>

          <a href="#" class="text-sm font-medium text-[#0A2540] hover:text-[#F97316] transition-colors">Odoo</a>
          <a href="#projects" class="text-sm font-medium text-[#0A2540] hover:text-[#F97316] transition-colors">Projects</a>
          <a href="#team" class="text-sm font-medium text-[#0A2540] hover:text-[#F97316] transition-colors">Team</a>
          <a href="#careers" class="text-sm font-medium text-[#0A2540] hover:text-[#F97316] transition-colors">Careers</a>

          <a href="#" class="bg-[#F97316] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#e0670e] transition-all active:scale-95">
            Let's Talk
          </a>
        </div>

        <button class="lg:hidden p-2 text-[#0A2540]" @click="isOpen = !isOpen">
          <Menu v-if="!isOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>

    <div v-if="isOpen" class="lg:hidden bg-white border-t">
      <div class="flex flex-col gap-4 px-4 py-6">
        <a href="#" class="text-[#0A2540] font-medium">Services</a>
        <a href="#" class="text-[#0A2540] font-medium">Events</a>
        <a href="#" class="text-[#0A2540] font-medium">Odoo</a>
        <a href="#projects" class="text-[#0A2540] font-medium">Projects</a>
        <a href="#team" class="text-[#0A2540] font-medium">Team</a>
        <a href="#careers" class="text-[#0A2540] font-medium">Careers</a>
        <a href="#" class="bg-[#F97316] text-white px-6 py-3 rounded-full font-semibold text-center hover:bg-[#e0670e] transition-all">
          Let's Talk
        </a>
      </div>
    </div>
  </nav>
</template>
