<template>
  <section class="bg-gray-50 py-20">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-gray-900 mb-10">Why Choose Birara?</h2>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Sustainability -->
        <div
          class="border border-green-200 rounded-xl p-8 bg-white hover:shadow-md transition duration-300"
        >
          <div class="flex items-start space-x-4">
            <div class="text-3xl text-green-700">
              <i class="fa-solid fa-leaf"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Sustainability
              </h3>
              <p class="text-green-700 text-lg leading-relaxed">
                We are committed to eco-friendly practices to minimize our
                environmental impact.
              </p>
            </div>
          </div>
        </div>

        <!-- Exceptional Hospitality -->
        <div
          class="border border-green-200 rounded-xl p-8 bg-white hover:shadow-md transition duration-300"
        >
          <div class="flex items-start space-x-4">
            <div class="text-3xl text-green-700">
              <i class="fa-solid fa-users"></i>
            </div>
            <div>
              <h3 class="text-xl font-semibold text-gray-900 mb-2">
                Exceptional Hospitality
              </h3>
              <p class="text-green-700 text-lg leading-relaxed">
                Our dedicated team ensures personalized service and attention to
                detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
