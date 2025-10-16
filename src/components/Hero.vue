<template>
  <section
    class="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
    style="
      background-image: url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80');
    "
  >
    <!-- Overlay -->
    <div class="absolute inset-0 bg-black/50"></div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-2xl mx-auto px-4 text-white"
      data-aos="fade-up"
    >
      <h1 class="text-5xl md:text-6xl font-extrabold mb-4 font-serif">
        Birara Resort
      </h1>
      <p class="text-lg md:text-xl mb-8 font-light">
        Unwind. Reconnect. Recharge.
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-4">
        <a
          href="#book"
          class="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
        >
          Book Now
        </a>
        <a
          href="#about"
          class="bg-white text-gray-900 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300"
        >
          Explore
        </a>
      </div>
    </div>
  </section>
</template>
