<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '../composables/useScrollAnimation'

const sectionRef = ref<HTMLElement | null>(null)
useScrollAnimation(sectionRef)
</script>

<template>
  <footer ref="sectionRef" class="bg-[#0A2540] text-gray-400 pt-16 pb-8">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <span class="text-2xl font-extrabold text-white block mb-2">
            <span class="text-[#F97316]">Think</span>BIT Clone
          </span>
          <p class="text-sm text-gray-400">10 Years</p>
          <p class="text-sm text-gray-400 mt-2">We make Ideas Happen</p>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Services</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Outsource teams</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Websites</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Web Apps</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Mobile Apps</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Company</h4>
          <ul class="space-y-2 text-sm">
            <li><a href="#" class="hover:text-white transition-colors">Events</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Our Company</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Let's Talk</a></li>
          </ul>
        </div>
        <div>
          <h4 class="text-white font-semibold mb-4">Certifications</h4>
          <div class="flex flex-wrap gap-2">
            <span class="bg-white/10 text-white text-xs px-3 py-1.5 rounded">ISO 27001</span>
            <span class="bg-white/10 text-white text-xs px-3 py-1.5 rounded">PSIA</span>
            <span class="bg-white/10 text-white text-xs px-3 py-1.5 rounded">DMAP</span>
            <span class="bg-white/10 text-white text-xs px-3 py-1.5 rounded">GDAP</span>
          </div>
        </div>
      </div>
      <div class="border-t border-gray-700 pt-8 text-center text-sm">
        2026 &copy; ThinkBIT Clone. Privacy Policy.
      </div>
    </div>
  </footer>
</template>
