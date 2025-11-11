<template>
  <div class="font-sans text-gray-800 scroll-smooth">
    <Navbar />
    <main class="pt-10">
      <Hero />
      <About />
      <Rooms />
      <Experiences />
      <Dinings />
      <Booking />
      <About2 />
      <Gallery />
      <Location />

      <!-- <Contact /> -->
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Navbar from "./components/Navbar.vue";
import Hero from "./components/Hero.vue";
import About from "./components/About.vue";
import Rooms from "./components/Rooms.vue";
import Experiences from "./components/Experiences.vue";
import Dinings from "./components/Dinings.vue";
import About2 from "./components/About2.vue";
import Location from "./components/Location.vue";
import Gallery from "./components/Gallery.vue";
// import Contact from "./components/Contact.vue";
import Footer from "./components/Footer.vue";
import Booking from "./components/Booking.vue";
</script>
