<template>
  <div>
    <!-- Why Choose Birara Section -->
    <section
      class="bg-gray-50 dark:bg-gray-900 py-20 transition-colors duration-500"
    >
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10">
          Why Choose Birara?
        </h2>

        <div class="grid md:grid-cols-2 gap-8">
          <!-- Sustainability -->
          <div
            class="border border-green-200 dark:border-gray-700 rounded-xl p-8 bg-white dark:bg-gray-800 hover:shadow-md dark:hover:shadow-lg transition duration-300"
          >
            <div class="flex items-start space-x-4">
              <div class="text-3xl text-green-700 dark:text-green-400">
                <i class="fa-solid fa-leaf"></i>
              </div>
              <div>
                <h3
                  class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
                >
                  Sustainability
                </h3>
                <p
                  class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
                >
                  We are committed to eco-friendly practices to minimize our
                  environmental impact.
                </p>
              </div>
            </div>
          </div>

          <!-- Exceptional Hospitality -->
          <div
            class="border border-green-200 dark:border-gray-700 rounded-xl p-8 bg-white dark:bg-gray-800 hover:shadow-md dark:hover:shadow-lg transition duration-300"
          >
            <div class="flex items-start space-x-4">
              <div class="text-3xl text-green-700 dark:text-green-400">
                <i class="fa-solid fa-users"></i>
              </div>
              <div>
                <h3
                  class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
                >
                  Exceptional Hospitality
                </h3>
                <p
                  class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
                >
                  Our dedicated team ensures personalized service and attention
                  to detail.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
// Font Awesome is used for icons (you can switch to Flowbite icons if preferred)
</script>

<style scoped>
/* Optional subtle hover lift */
div:hover i {
  transform: scale(1.1);
  transition: transform 0.3s ease;
}
</style>
