<template>
  <section
    id="accommodation"
    class="py-20 bg-gray-50 dark:bg-birara-700 transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2
        class="text-3xl md:text-4xl font-extrabold mb-12 text-gray-800 dark:text-gray-100 font-serif"
      >
        Accommodation
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <!-- Deluxe Rooms -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          data-aos="fade-up"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Deluxe Room"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 font-serif"
            >
              Deluxe Rooms
            </h3>
            <p
              class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
            >
              Experience comfort and elegance in our well-appointed deluxe
              rooms.
            </p>
          </div>
        </div>

        <!-- Suites -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Suites"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 font-serif"
            >
              Suites
            </h3>
            <p
              class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
            >
              Indulge in spacious luxury with breathtaking views in our
              exclusive suites.
            </p>
          </div>
        </div>

        <!-- Villas -->
        <div
          class="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
            alt="Villas"
            class="w-full h-64 object-cover"
          />
          <div class="p-6">
            <h3
              class="text-2xl font-semibold mb-2 text-gray-900 dark:text-gray-100 font-serif"
            >
              Villas
            </h3>
            <p
              class="text-green-700 dark:text-green-400 text-lg leading-relaxed"
            >
              Enjoy ultimate privacy and luxury in our secluded villas with
              private pools.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
