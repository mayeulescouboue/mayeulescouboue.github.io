<template>
  <div class="w-[90%] sm:w-[60%] h-[80%] sm:h-[80%] text-black border-4 border-black bg-white rounded-lg shadow-lg flex flex-col items-start justify-between">
    <!-- Titre de la section des expériences professionnelles -->
    <h1 class="font-londrina text-4xl sm:text-8xl text-left p-2 pb-6 sm:pb-14">CAREER</h1>
    
    <!-- Liste des expériences -->
    <div class="w-full flex flex-col h-full overflow-">
      <div
        v-for="(experience, index) in experiences"
        :key="index"
        :class="[
          'h-full px-2 sm:px-6 flex flex-row sm:justify-between items-center text-black place-content-center transition-all duration-200 sm:hover:bg-black sm:hover:text-white cursor-pointer',
          index !== 0 ? 'border-t-2 border-black' : ''
        ]"
        @mouseover="hoveredIndex = index"
        @mouseleave="hoveredIndex = null"
        @click="openUrl(experience.url)"
      >

      <img 
        :src="experience.logo"
        alt="Logo" 
        class="object-contain transition-all duration-200 h-6 sm:h-11 sm:hidden"
      />

        <div class="w-full flex flex-col sm:flex-row sm:justify-between items-end sm:items-center">
          <!-- Logo de l'entreprise (change au survol) -->
          <img 
            :src="hoveredIndex === index ? experience.logo2 : experience.logo" 
            alt="Logo" 
            class="object-contain transition-all duration-200 h-6 sm:h-11 hidden sm:block"
          />

          <!-- Titre de l'expérience -->
          <div class="flex font-londrina text-lg sm:text-2xl items-center">
            <span class="text-xl sm:text-2xl">{{ experience.name }}</span>&nbsp;-&nbsp;<span>{{ experience.title }}</span>
          </div>


          <!-- Dates -->
          <div class="flex flex-row sm:flex-col gap-x-2 text-right font-inter">
            <div class="text-xs" :class="{'text-darkred': experience.dateF === 'Aujourd\'hui'}">{{ experience.dateF }}</div>
            <div class="text-xs">{{ experience.dateD }}</div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import chanel from "../assets/chanel_svg.svg";
import chanel_black from "../assets/chanel_black.svg";
import eklo from "../assets/eklo_svg.svg";
import epitech from "../assets/epitech_svg.svg";
import epitech_black from "../assets/epitech_black.svg";
import global_partner from "../assets/global_partner_svg.svg";
import freelance from "../assets/freelance_svg.svg";

export default {
  name: "cardtwo",
  data() {
    return {
      hoveredIndex: null, // Stocke l'index survolé
      // Contenu des expériences professionnelles
      experiences: [
        {
          name: "EKLO",
          title: "Co-fondateur et CEO",
          dateD: "Sept. 2024",
          dateF: "Aujourd'hui",
          url: "https://eklo-freelance.com/",
          logo: eklo,
          logo2: eklo
        },
        {
          name: "CHANEL",
          title: "stage Chef de Projet Digital",
          dateD: "Janv. 2024",
          dateF: "Juil. 2024",
          url: "https://www.linkedin.com/in/mayeul-escoubou%C3%A9-256387272/",
          logo: chanel_black,
          logo2: chanel,
        },
        {
          name: "ISEG",
          title: "Intervenant développement web",
          dateD: "Févr. 2025",
          dateF: "Janv. 2025",
          url: "https://dribbble.com/Mayeul_E",
          logo: freelance,
          logo2: freelance
        },
        {
          name: "FREELANCE",
          title: "Création de Site Web",
          dateD: "Févr. 2024",
          dateF: "Aujourd'hui",
          url: "https://dribbble.com/Mayeul_E",
          logo: freelance,
          logo2: freelance
        },
        // {
        //   name: "GLOBAL PARTNER",
        //   title: "stage Responsable Technique",
        //   dateD: "Juin 2023",
        //   dateF: "Août 2023",
        //   url: "https://www.linkedin.com/in/mayeul-escoubou%C3%A9-256387272/",
        //   logo: global_partner,
        //   logo2: global_partner
        // },
        {
          name: "EPITECH",
          title: "Coordinateur LAB",
          dateD: "Févr. 2023",
          dateF: "Aujourd'hui",
          url: "https://www.linkedin.com/in/mayeul-escoubou%C3%A9-256387272/",
          logo: epitech_black,
          logo2: epitech
        }
      ]
    };
  },
  methods: {
    openUrl(url) {
      window.open(url, '_blank'); // Ouvre l'URL dans un nouvel onglet
    }
  }
};
</script>

<style scoped>

</style>
