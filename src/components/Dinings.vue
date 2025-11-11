<template>
  <!-- Dining & Bar Section -->
  <section
    id="dining"
    class="bg-gray-50 dark:bg-birara-700 py-16 transition-colors duration-500"
  >
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        Dining &amp; Bar
      </h2>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- The Terrace Restaurant -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
            alt="The Terrace Restaurant"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
            >
              The Terrace Restaurant
            </h3>
            <p
              class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
            >
              Savor exquisite cuisine crafted from locally sourced ingredients.
            </p>
          </div>
        </div>

        <!-- The Lounge Bar -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
            alt="The Lounge Bar"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
            >
              The Lounge Bar
            </h3>
            <p
              class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
            >
              Unwind with handcrafted cocktails and a selection of fine wines.
            </p>
          </div>
        </div>

        <!-- In-Room Dining -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl shadow hover:shadow-lg transition duration-300 overflow-hidden"
        >
          <img
            src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?auto=format&fit=crop&w=800&q=80"
            alt="In-Room Dining"
            class="w-full h-56 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2"
            >
              In-Room Dining
            </h3>
            <p
              class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
            >
              Enjoy a private dining experience in the comfort of your room.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>

  
</template>

<script setup>
// No special logic needed for static layout
</script>

<style scoped>
/* Optional: subtle card hover lift */
div:hover img {
  transform: scale(1.02);
  transition: transform 0.4s ease;
}
</style>
