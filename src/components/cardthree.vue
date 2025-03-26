<template>
  <div class="w-[90%] sm:w-[60%] h-[80%] sm:h-[80%] text-black border-4 border-black bg-white rounded-lg shadow-lg flex flex-col overflow-hidden">
    <!-- Titre -->
    <h1 class="font-londrina text-4xl sm:text-8xl text-left pb-4 sm:pb-10 p-2">Projets</h1>

    <!-- Grille des projets -->
    <div class="grid grid-cols-2 lg:grid-cols-3 w-full h-full border-t border-black">
      <div 
        v-for="(project, index) in displayedProjects"
        :key="index" 
        class="border border-black flex flex-col justify-between p-2 bg-center cursor-pointer"
        @mouseenter="handleMouseEnter(index)"
        @mouseleave="handleMouseLeave"
        @click="openUrl(project.url)"
        :style="{ backgroundImage: `url(${hoveredIndex === index ? project.patern : project.patern_black})`}"
      >
        <!-- Titre -->
         <div>
          <h2 class="font-londrina font-light text-2xl sm:text-3xl pb-1">{{ project.title }}</h2>

          <!-- Description -->
          <p class="text-[10px] sm:text-xs pb-1">{{ project.description }}</p>
        </div>

        <!-- Image -->
        <div class="w-full max-h-20 pb-1">
          <img 
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-contain sm:hidden" 
          />
          <img 
            v-if="hoveredIndex === index"
            :src="project.image" 
            :alt="project.title" 
            class="w-full h-full object-contain hidden sm:block" 
          />
          <img 
            v-else
            :src="project.image_black" 
            :alt="project.title" 
            class="w-full h-full object-contain hidden sm:block" 
          />
        </div>


        <!-- Compétences -->
        <div class="hidden sm:flex flex-wrap mt-1">
          <span 
            v-for="(skill, i) in project.skills" 
            :key="i" 
            class="text-xs px-0.5 py-0.5 mr-1 mb-1 font-bold"
          >
            #{{ skill }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import soyrev from "../assets/soyrev.svg";
import eklo from "../assets/eklo.svg";
import moodly from "../assets/moodly.svg";
import smartwin from "../assets/smartwin.svg";
import supavenir from "../assets/supavenir.svg";
import vva from "../assets/vva.svg";
import soyrev_black from "../assets/soyrev_black.svg";
import eklo_black from "../assets/eklo_black.svg";
import moodly_black from "../assets/moodly_black.svg";
import smartwin_black from "../assets/smartwin_black.svg";
import supavenir_black from "../assets/supavenir_black.svg";
import vva_black from "../assets/vva_black.svg";

import soyrev_bg from "../assets/soyrev_bg.svg";
import eklo_bg from "../assets/eklo_bg.svg";
import moodly_bg from "../assets/moodly_bg.svg";
import smartwin_bg from "../assets/smartwin_bg.svg";
import supavenir_bg from "../assets/supavenir_bg.svg";
import vva_bg from "../assets/vva_bg.svg";
import soyrev_bg_black from "../assets/soyrev_bg_black.svg";
import eklo_bg_black from "../assets/eklo_bg_black.svg";
import moodly_bg_black from "../assets/moodly_bg_black.svg";
import smartwin_bg_black from "../assets/smartwin_bg_black.svg";
import supavenir_bg_black from "../assets/supavenir_bg_black.svg";
import vva_bg_black from "../assets/vva_bg_black.svg";

export default {
  name: "cardthree",
  data() {
    return {
      hoveredIndex: null,
      projects: [
      {
          title: "Moodly",
          description:
            "Outil d’analyse du moral des employés.",
          skills: ["React Native", "Strapi", "Figma"],
          image: moodly,
          image_black: moodly_black,
          patern: moodly_bg,
          patern_black: moodly_bg_black,
        },
        {
          title: "EKLO!",
          description:
            "La plateforme de freelance 100% étudiante !",
          skills: ["Entreprenariat", "Gestion de projet"],
          image: eklo,
          image_black: eklo_black,
          patern: eklo_bg,
          patern_black: eklo_bg_black,
          url: 'https://eklo-freelance.com',
        },
        {
          title: "SoyRev",
          description:
            "Création de la DA et Developpement du site web.",
          skills: ["Entreprenariat"],
          image: soyrev,
          image_black: soyrev_black,
          patern: soyrev_bg,
          patern_black: soyrev_bg_black,
          url: 'https://eklo-freelance.com',
        },
        {
          title: "SmartWin",
          description:
            "Lotterie Ethereum avec smart contract",
          skills: ["Solidity", "Remix", "Hardat"],
          image: smartwin,
          image_black: smartwin_black,
          patern: smartwin_bg,
          patern_black: smartwin_bg_black,
        },
        {
          title: "Schoolize",
          description:
            "Conception et création du site web.",
          skills: ["Python", "JavaScript"],
          image: supavenir,
          image_black: supavenir_black,
          patern: supavenir_bg,
          patern_black: supavenir_bg_black,
        },
        {
          title: "VVA",
          description:
            "Outil permettant d’analyser en temps réel le moral des employés.",
          skills: ["Python", "JavaScript"],
          image: vva,
          image_black: vva_black,
          patern: vva_bg,
          patern_black: vva_bg_black,
        },
      ],
    }
  },
  computed: {
    displayedProjects() {
      return window.innerWidth < 640 ? this.projects.slice(0, 4) : this.projects;
    },
  },
  methods: {
    handleMouseEnter(index) {
      if (window.innerWidth >= 640) {
        this.hoveredIndex = index;
      }
    },
    handleMouseLeave() {
      if (window.innerWidth >= 640) {
        this.hoveredIndex = null;
      }
    },
    openUrl(url) {
      window.open(url, '_blank'); // Ouvre l'URL dans un nouvel onglet
    }
  }
};
</script>