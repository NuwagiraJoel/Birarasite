<template>
  <section
    class="hero-bg relative h-screen bg-cover bg-center flex items-center justify-center text-center transition-all duration-[2000ms]"
    :style="{ backgroundImage: `url(${currentImage})` }"
  >
    <!-- Overlay (changes slightly based on theme) -->
    <div
      class="absolute inset-0 bg-black/10 dark:bg-black/30 transition-all"
    ></div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-2xl mx-auto px-4 text-gray-900 dark:text-gray-100 transition-colors duration-500"
      data-aos="fade-up"
    >
      <h1
        class="text-5xl md:text-6xl font-extrabold mb-4 font-serif text-gray-100 dark:text-white"
      >
        Birara Resort
      </h1>
      <p
        class="text-lg md:text-xl mb-8 font-light text-gray-200 dark:text-gray-300"
      >
        Unwind. Reconnect. Recharge.
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-4">
        <!-- Book Now Button -->
        <a
          href="#book"
          class="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-lg transition-all duration-300"
        >
          Book Now
        </a>

        <!-- Explore Button -->
        <a
          href="#about"
          class="bg-white text-gray-900 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-all duration-300 dark:bg-gray-800 dark:text-gray-100 dark:hover:bg-gray-700"
        >
          Explore
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

// Hero background images located in /public
const images = ["/hero4.png", "/hero2.jpg", "/hero3.jpg"];

const index = ref(0);
const currentImage = ref(images[0]);

let interval;

onMounted(() => {
  interval = setInterval(() => {
    index.value = (index.value + 1) % images.length;
    currentImage.value = images[index.value];
  }, 7000); // 7 seconds for cinematic pacing
});

onUnmounted(() => clearInterval(interval));
</script>

<style scoped>
.hero-bg {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  /* Cinematic fade & zoom */
  transition: background-image 1.8s ease-in-out, transform 7s ease-in-out;

  animation: zoomAnim 7s infinite alternate;
}

@keyframes zoomAnim {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.07);
  }
}
</style>
