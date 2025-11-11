<template>
  <section
    id="book"
    class="py-16 bg-gray-50 dark:bg-gray-900 transition-colors"
  >
    <div
      class="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8"
    >
      <h2
        class="text-3xl font-bold text-center mb-6 text-gray-800 dark:text-white"
      >
        Book Your Stay
      </h2>
      <p class="text-center text-gray-600 dark:text-gray-300 mb-10">
        Fill in the details below and we'll confirm your reservation.
      </p>

      <form @submit.prevent="submitBooking" class="space-y-6">
        <!-- Name -->
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Full Name
          </label>
          <input
            v-model="form.name"
            type="text"
            required
            placeholder="John Doe"
            class="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-900 focus:ring-green-600 focus:border-green-600"
          />
        </div>

        <!-- Email -->
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Email
          </label>
          <input
            v-model="form.email"
            type="email"
            required
            placeholder="you@example.com"
            class="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-900 focus:ring-green-600 focus:border-green-600"
          />
        </div>

        <!-- Phone -->
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Phone
          </label>
          <input
            v-model="form.phone"
            type="tel"
            required
            placeholder="+256 700 000000"
            class="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-900 focus:ring-green-600 focus:border-green-600"
          />
        </div>

        <!-- Dates -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Check-in Date
            </label>
            <input
              v-model="form.checkIn"
              type="date"
              required
              class="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-900 focus:ring-green-600 focus:border-green-600"
            />
          </div>

          <div>
            <label
              class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Check-out Date
            </label>
            <input
              v-model="form.checkOut"
              type="date"
              required
              class="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-900 focus:ring-green-600 focus:border-green-600"
            />
          </div>
        </div>

        <!-- Guests -->
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Number of Guests
          </label>
          <input
            v-model="form.guests"
            type="number"
            min="1"
            required
            placeholder="2"
            class="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-900 focus:ring-green-600 focus:border-green-600"
          />
        </div>

        <!-- Special Requests -->
        <div>
          <label
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            Special Requests
          </label>
          <textarea
            v-model="form.requests"
            placeholder="Any requests?"
            class="w-full rounded-lg border-gray-300 dark:border-gray-600 dark:bg-gray-200 dark:text-gray-900 focus:ring-green-600 focus:border-green-600"
          ></textarea>
        </div>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-green-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-green-700 transition-all dark:bg-green-500 dark:hover:bg-green-600"
        >
          Confirm Booking
        </button>
      </form>
    </div>
  </section>

  <fwb-modal v-if="showModal" @close="showModal = false">
    <template #header> ✅ Booking Submitted </template>

    <template #body>
      <p class="text-gray-700 dark:text-gray-300">
        Thank you for booking with us! We will contact you shortly to confirm
        your stay.
      </p>
    </template>

    <template #footer>
      <button
        @click="showModal = false"
        class="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700"
      >
        Close
      </button>
    </template>
  </fwb-modal>
</template>

<script setup>
import { ref } from "vue";

const showModal = ref(false);

const form = ref({
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  guests: 1,
  requests: "",
});

async function submitBooking() {
  try {
    const res = await fetch("https://formspree.io/f/xkgknboz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form.value),
    });

    if (res.ok) {
      showModal.value = true; // ✅ open modal
      Object.keys(form.value).forEach((k) => (form.value[k] = "")); // reset form
    } else {
      alert("Something went wrong. Try again.");
    }
  } catch (error) {
    alert("Submission failed.");
  }
}
</script>
