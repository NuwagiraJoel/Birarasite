<template>
  <section
    class="bg-gray-50 dark:bg-birara-700 py-16 w-full transition-colors duration-500"
  >
    <div class="max-w-4xl mx-auto px-6 text-center">
      <h2
        class="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
      >
        Location &amp; Contact
      </h2>

      <!-- Embedded Map -->
      <div class="rounded-xl overflow-hidden shadow-md mb-6">
        <iframe
          class="w-full h-96"
          style="border: 0; filter: brightness(0.98)"
          loading="lazy"
          allowfullscreen
          referrerpolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3989.356817512915!2d29.866543374965076!3d-0.8714699991200843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwNTInMTcuMyJTIDI5wrA1MicwOC44IkU!5e0!3m2!1sen!2sug!4v1761817751451!5m2!1sen!2sug"
        ></iframe>
      </div>

      <!-- Contact Info -->
      <div
        class="text-gray-800 dark:text-gray-200 text-base md:text-lg leading-relaxed"
      >
        <!-- <p>123 Resort Road, Countryside, State, 12345</p> -->
        <p>Calls: (+256) 772-448-357</p>
        <p>Whatsapp: (+256) 781-364-238</p>
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
