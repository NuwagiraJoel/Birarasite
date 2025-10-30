<template>
  <footer
    class="bg-gray-50 dark:bg-gray-900 py-10 w-full border-t border-green-100 dark:border-gray-700 transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto px-6 text-center">
      <!-- Navigation Links -->
      <nav
        class="flex flex-wrap justify-center space-x-8 mb-4 text-green-700 dark:text-green-400 text-sm md:text-base"
      >
        <a
          href="#about"
          class="hover:text-green-900 dark:hover:text-green-200 transition-colors"
          >About</a
        >
        <a
          href="#accommodation"
          class="hover:text-green-900 dark:hover:text-green-200 transition-colors"
          >Accommodation</a
        >
        <a
          href="#experiences"
          class="hover:text-green-900 dark:hover:text-green-200 transition-colors"
          >Experiences</a
        >
        <a
          href="#dining"
          class="hover:text-green-900 dark:hover:text-green-200 transition-colors"
          >Dining</a
        >
        <a
          href="#gallery"
          class="hover:text-green-900 dark:hover:text-green-200 transition-colors"
          >Gallery</a
        >
        <a
          href="#contact"
          class="hover:text-green-900 dark:hover:text-green-200 transition-colors"
          >Contact</a
        >
      </nav>

      <!-- Copyright -->
      <p class="text-green-700 dark:text-green-400 text-sm">
        © 2024 Birara Resort. All rights reserved.
      </p>
    </div>
  </footer>
</template>

<script setup>
// Static footer — no script logic required.
</script>

<style scoped>
footer a {
  font-family: "Playfair Display", serif;
}
</style>
