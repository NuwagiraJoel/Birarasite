<template>
  <section id="gallery" class="bg-gray-50 py-16 w-full">
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-gray-900 mb-10">Gallery</h2>

      <!-- Responsive image grid -->
      <div
        class="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 justify-items-center"
      >
        <!-- Image 1 -->
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Resort Lake View"
          class="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
        />

        <!-- Image 2 -->
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
          alt="Luxury Poolside"
          class="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
        />

        <!-- Image 3 -->
        <img
          src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
          alt="Resort Bedroom"
          class="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
        />

        <!-- Image 4 -->
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
          alt="Dining Area"
          class="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
        />

        <!-- Image 5 -->
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
          alt="Pool and Palms"
          class="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
        />

        <!-- Image 6 -->
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
          alt="Ocean View Suite"
          class="rounded-xl object-cover w-full h-64 hover:scale-105 transition-transform duration-300"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// Static gallery, no script logic required.
</script>

<style scoped>
/* Optional subtle hover animation */
img:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}
</style>
