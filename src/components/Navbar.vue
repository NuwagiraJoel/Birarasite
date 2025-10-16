<template>
  <nav class="bg-white border-b border-gray-200 fixed w-full z-50 top-0 left-0">
    <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Birara Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900">
          Birara Resort
        </span>
      </a>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
      >
        <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Nav Links -->
      <div :class="menuOpen ? 'block' : 'hidden'" class="w-full md:block md:w-auto">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white"
        >
          <li
            v-for="link in links"
            :key="link.label"
            class="relative"
          >
            <a
              :href="link.href"
              class="block py-2 px-3 md:p-0 transition-colors duration-200"
              :class="activeSection === link.href ? 'text-green-600 border-b-2 border-green-600' : 'text-gray-900 hover:text-green-600'"
              @click="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>
          <li>
            <a
              href="#book"
              class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:ml-2"
            >
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => (menuOpen.value = !menuOpen.value)

const links = [
  { label: 'About', href: '#about' },
  { label: 'Accommodation', href: '#accommodation' },
  { label: 'Experiences', href: '#experiences' },
  { label: 'Dining', href: '#dining' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
]

const activeSection = ref('#about')

const scrollTo = (id) => {
  menuOpen.value = false
  const target = document.querySelector(id)
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 80, // offset for navbar
      behavior: 'smooth',
    })
  }
}

// detect active section on scroll
const handleScroll = () => {
  let current = ''
  const sections = document.querySelectorAll('section[id]')
  const scrollY = window.scrollY + 120 // offset for navbar height

  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.offsetHeight
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = `#${section.getAttribute('id')}`
    }
  })

  if (current) activeSection.value = current
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
