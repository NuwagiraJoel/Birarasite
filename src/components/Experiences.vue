<!-- src/components/Experiences.vue -->
<template>
  <section
    id="experiences"
    class="py-20 bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-500"
  >
    <div class="max-w-6xl mx-auto px-6 text-center">
      <h2 class="text-3xl md:text-4xl font-extrabold mb-12 font-serif">
        Experiences & Activities
      </h2>

      <!-- Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div
          v-for="(exp, i) in experiences"
          :key="i"
          class="border border-green-200 rounded-xl p-8 flex flex-col items-center justify-center bg-white hover:bg-green-50 hover:shadow-md dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:shadow-lg transition-all duration-300 cursor-pointer"
        >
          <!-- Card button -->
          <button
            type="button"
            :data-modal-target="modalId(i)"
            :data-modal-toggle="modalId(i)"
            class="flex flex-col items-center justify-center w-full h-full"
          >
            <component
              :is="exp.icon"
              class="w-10 h-10 mb-4 text-gray-800 dark:text-green-400"
            />
            <h3 class="text-xl font-semibold font-serif">{{ exp.title }}</h3>
          </button>
        </div>
      </div>

      <!-- Modals -->
      <div v-for="(exp, i) in experiences" :key="'modal-' + i">
        <div
          :id="modalId(i)"
          tabindex="-1"
          aria-hidden="true"
          class="hidden overflow-y-auto overflow-x-hidden fixed inset-0 z-50 flex justify-center items-center w-full h-full"
        >
          <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
              <!-- Header -->
              <div
                class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-700"
              >
                <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                  {{ exp.title }}
                </h3>
                <button
                  type="button"
                  :data-modal-hide="modalId(i)"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fill-rule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>

              <!-- Body -->
              <div class="p-6 space-y-4">
                <p class="text-gray-700 dark:text-gray-200">
                  {{ exp.description }}
                </p>
                <img
                  v-if="exp.img"
                  :src="exp.img"
                  class="w-full rounded-lg mt-4"
                  alt=""
                />
              </div>

              <!-- Footer -->
              <div
                class="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-700"
              >
                <button
                  :data-modal-hide="modalId(i)"
                  type="button"
                  class="text-white bg-green-600 hover:bg-green-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End of Modals -->
    </div>
  </section>
</template>

<script setup>
import { ref, h } from "vue";

// helper to make inline SVG components
const makeIcon =
  (d) =>
  (props, { attrs }) =>
    h(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        ...attrs,
      },
      [
        h("path", {
          "stroke-linecap": "round",
          "stroke-linejoin": "round",
          "stroke-width": "1.5",
          d,
        }),
      ]
    );

const HikingIcon = makeIcon("M3 20h18M12 3l3.5 6h-7L12 3zm0 6l-3.5 6h7L12 9z");
const PoolIcon = makeIcon("M3 15h18m-9-6v12");
const BeachIcon = makeIcon("M4 20h16M4 16h16M8 12h8m-8-4h8m-8-4h8");
const YogaIcon = makeIcon("M12 4a8 8 0 100 16 8 8 0 000-16zm0 4v8m4-4H8");

const experiences = ref([
  {
    title: "Hiking Trails",
    description: "Explore scenic forest paths and breathtaking viewpoints.",
    icon: HikingIcon,
    img: "/hero2.jpg",
  },
  {
    title: "Poolside Relaxation",
    description: "Unwind by our serene infinity pool with a cocktail in hand.",
    icon: PoolIcon,
    img: "/hero3.jpg",
  },
  {
    title: "Beach Access",
    description: "Enjoy exclusive beach access for sunrise and sunset walks.",
    icon: BeachIcon,
    img: "/hero4.png",
  },
  {
    title: "Yoga & Wellness",
    description: "Recharge your body and mind with our guided yoga sessions.",
    icon: YogaIcon,
    img: "/hero2.jpg",
  },
]);

const modalId = (i) => `experienceModal-${i}`;
</script>
