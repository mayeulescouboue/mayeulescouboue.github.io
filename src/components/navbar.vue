<template>
  <nav class="w-auto sm:w-1/6 flex flex-col items-center justify-center mt-8 sm:mt-0 sm:ml-8">
    <ul class="space-y-2 sm:space-y-6 text-lg sm:text-3xl text-center sm:text-start capitalize font-inter">
      <li v-for="(link, index) in links" :key="index">
        <button
          @click="$emit('changeStep', index)"
          :class="{ 'opacity-100 text-black': isActive(index), 'opacity-20': !isActive(index) }"
          class="cursor-pointer transition duration-300 ease-in-out font-bold"
        >
          {{ link }}
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "navbar",
  props: {
    currentStep: Number, // Récupère le step actif depuis HomeView
  },
  data() {
    return {
      links: ["Index", "Formations", "Projets", "Contact"], // Correspond aux cartes
    };
  },
  methods: {
    isActive(index) {
      return index === this.currentStep;
    }
  }
};
</script>