<template>
  <nav
    class="bg-white border-b border-gray-200 fixed w-full z-50 top-0 left-0 dark:bg-birara-700 dark:border-gray-700 dark:text-gray-100 transition-colors duration-500"
  >
    <div
      class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
    >
      <!-- Logo -->
      <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="../assets/images/birara-logo.png"
          class="h-10"
          alt="Birara Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white transition-colors duration-500"
        >
          Birara Resort
        </span>
      </a>

      <!-- Mobile Menu Button -->
      <button
        @click="toggleMenu"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 focus:outline-none transition-colors duration-300"
      >
        <svg
          class="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      <!-- Nav Links -->
      <div
        :class="menuOpen ? 'block' : 'hidden'"
        class="w-full md:block md:w-auto"
      >
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-900 dark:border-gray-700 md:dark:bg-transparent transition-colors duration-500"
        >
          <li v-for="link in links" :key="link.label" class="relative">
            <a
              :href="link.href"
              class="block py-2 px-3 md:p-0 transition-colors duration-300"
              :class="[
                activeSection === link.href
                  ? 'text-green-600 border-b-2 border-green-600 dark:text-green-400 dark:border-green-400'
                  : 'text-gray-900 dark:text-gray-200 hover:text-green-600 dark:hover:text-green-400',
              ]"
              @click="scrollTo(link.href)"
            >
              {{ link.label }}
            </a>
          </li>

          <!-- Book Now Button -->
          <li>
            <a
              href="#book"
              class="text-white bg-green-600 hover:bg-green-700 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2 text-center md:ml-2 dark:focus:ring-green-800 transition-all duration-300"
            >
              Book Now
            </a>
          </li>

          <!-- Theme Toggle -->
          <li>
            <button
              id="theme-toggle"
              @click="toggleTheme"
              type="button"
              class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5 transition-all duration-300"
            >
              <!-- Sun (Light) -->
              <svg
                v-if="isDark"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                ></path>
              </svg>

              <!-- Moon (Dark) -->
              <svg
                v-else
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 
                  0V3a1 1 0 011-1zm4 8a4 4 0 11-8 
                  0 4 4 0 018 0zm-.464 4.95l.707.707a1 
                  1 0 001.414-1.414l-.707-.707a1 1 0 
                  00-1.414 1.414zm2.12-10.607a1 1 0 
                  010 1.414l-.706.707a1 1 0 
                  11-1.414-1.414l.707-.707a1 1 
                  0 011.414 0zM17 11a1 1 0 
                  100-2h-1a1 1 0 100 2h1zm-7 
                  4a1 1 0 011 1v1a1 1 0 
                  11-2 0v-1a1 1 0 011-1zM5.05 
                  6.464A1 1 0 106.465 
                  5.05l-.708-.707a1 1 0 
                  00-1.414 1.414l.707.707zm1.414 
                  8.486l-.707.707a1 1 0 
                  01-1.414-1.414l.707-.707a1 1 0 
                  011.414 1.414zM4 11a1 1 0 
                  100-2H3a1 1 0 000 2h1z"
                ></path>
              </svg>
            </button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const menuOpen = ref(false);
const toggleMenu = () => (menuOpen.value = !menuOpen.value);

const links = [
  { label: "About", href: "#about" },
  { label: "Accommodation", href: "#accommodation" },
  { label: "Experiences", href: "#experiences" },
  { label: "Dining", href: "#dining" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

const activeSection = ref("#about");

const scrollTo = (id) => {
  menuOpen.value = false;
  const target = document.querySelector(id);
  if (target) {
    window.scrollTo({
      top: target.offsetTop - 80,
      behavior: "smooth",
    });
  }
};

const handleScroll = () => {
  let current = "";
  const sections = document.querySelectorAll("section[id]");
  const scrollY = window.scrollY + 120;

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = `#${section.getAttribute("id")}`;
    }
  });

  if (current) activeSection.value = current;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const isDark = ref(false);

const toggleTheme = () => {
  isDark.value = !isDark.value;
  if (isDark.value) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("color-theme", "dark");
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("color-theme", "light");
  }
};

onMounted(() => {
  isDark.value =
    localStorage.getItem("color-theme") === "dark" ||
    (!("color-theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);
});
</script>
