<template>
  <section
    id="gallery"
    class="bg-gray-50 dark:bg-gray-900 py-16 transition-colors duration-500"
  >
    <div class="max-w-7xl mx-auto px-6">
      <h2 class="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-10">
        Gallery
      </h2>

      <div class="relative w-full overflow-hidden rounded-xl">
        <!-- Carousel Images -->
        <div
          class="flex transition-transform duration-700"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(img, index) in images"
            :key="index"
            class="flex-shrink-0 w-full"
          >
            <img
              :src="img.src"
              :alt="img.alt"
              class="w-full h-120 object-cover rounded-xl"
            />
          </div>
        </div>

        <!-- Navigation Buttons -->
        <button
          @click="prev"
          class="absolute top-1/2 left-2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ‹
        </button>
        <button
          @click="next"
          class="absolute top-1/2 right-2 -translate-y-1/2 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 rounded-full p-2 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
        >
          ›
        </button>
      </div>

      <!-- Pagination Dots -->
      <div class="flex justify-center mt-4 space-x-2">
        <span
          v-for="(img, index) in images"
          :key="index"
          class="w-3 h-3 rounded-full cursor-pointer"
          :class="
            currentIndex === index
              ? 'bg-green-700 dark:bg-green-400'
              : 'bg-gray-400 dark:bg-gray-600'
          "
          @click="goToSlide(index)"
        ></span>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const images = [
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Resort Lake View",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "Luxury Poolside",
  },
  {
    src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    alt: "Resort Bedroom",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    alt: "Dining Area",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80",
    alt: "Pool and Palms",
  },
  {
    src: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&w=800&q=80",
    alt: "Ocean View Suite",
  },
];

const currentIndex = ref(0);

// Navigate to previous slide
const prev = () => {
  currentIndex.value =
    currentIndex.value === 0 ? images.length - 1 : currentIndex.value - 1;
};

// Navigate to next slide
const next = () => {
  currentIndex.value =
    currentIndex.value === images.length - 1 ? 0 : currentIndex.value + 1;
};

// Go to specific slide
const goToSlide = (index) => {
  currentIndex.value = index;
};

// Auto-slide every 3 seconds
let interval;
onMounted(() => {
  interval = setInterval(next, 3000);
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<style scoped>
/* Optional hover shadow effect */
img:hover {
  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.15);
}
</style>
