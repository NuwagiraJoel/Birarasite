<template>
  <section class="bg-gray-50 py-16 w-full">
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2 class="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
        Location &amp; Contact
      </h2>

      <!-- Embedded Map -->
      <div class="rounded-xl overflow-hidden shadow-md mb-6">
        <iframe
          class="w-full h-96"
          style="border:0;"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0925162389473!2d-122.42177848468147!3d37.77492927975819!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c7e4bdf6f%3A0x7e57c8b7d2e7a4e!2sTaylor%20Park%20Reservoir!5e0!3m2!1sen!2sus!4v1679303847654!5m2!1sen!2sus"
        ></iframe>
      </div>

      <!-- Contact Info -->
      <div class="text-gray-800 text-base md:text-lg leading-relaxed">
        <p>123 Resort Road, Countryside, State, 12345</p>
        <p>Phone: (123) 456-7890</p>
        <p>Email: info@birararesort.com</p>
      </div>
    </div>
  </section>
</template>

<script setup>
// Static section – no dynamic behavior required
</script>

<style scoped>
iframe {
  filter: brightness(0.98);
  transition: transform 0.3s ease;
}
iframe:hover {
  transform: scale(1.01);
}
</style>
