<template>
  <main class="bg-cover bg-center h-[100dvh] overflow-hidden" style="background-image: url('/bg.jpg');">
    <div class="flex flex-col sm:flex-row h-[100dvh]">
      <navbar :currentStep="currentStep" @changeStep="goToStep" />

      <div class="absolute bottom-1 sm:bottom-4 left-4 font-inter text-xs sm:text-sm">
        <div v-if="currentStep === 3" class="flex flex-row sm:flex-col">
          <p class="">Crafted and Developed by Me</p>
          <span class="sm:hidden">&nbsp;-&nbsp;</span>
          <a href="/" class="underline sm:no-underline sm:hover:underline">Questions</a>
        </div>
      </div>


      <!-- Cards -->
      <section class="flex-1 flex items-center justify-center relative">
        <cardone class="absolute rotate-1 z-10 card cardone" />
        <cardtwo class="absolute rotate-6 z-20 card cardtwo" />
        <cardthree class="absolute -rotate-1 z-30 card cardthree" />
        <cardfour class="absolute rotate-3 z-40 card cardfour" />
      </section>

    </div>
  </main>
</template>

<script>
import { gsap } from "gsap";

import navbar from "../components/navbar.vue";
import cardone from "../components/cardone.vue";
import cardtwo from "../components/cardtwo.vue";
import cardthree from "../components/cardthree.vue";
import cardfour from "../components/cardfour.vue";

gsap.registerPlugin();

export default {
  name: "HomeView",
  components: {
    cardone,
    navbar,
    cardtwo,
    cardthree,
    cardfour,
  },
  data() {
    return {
      currentStep: 0, // Indice de l'animation actuelle
      totalSteps: 3, // Nombre total de cartes à animer (hors cardone)
      isAnimating: false, // Empêche le spam
      animationDelay: 400,
      showScrollIndicator: true, // ✅ Ajout de l’indicateur au départ
    };
  },
  mounted() {
    this.initAnimation();
    window.addEventListener("wheel", this.handleScroll);
    window.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchend", this.handleTouchEnd);
  },
  unmounted() {
    window.removeEventListener("wheel", this.handleScroll);
    window.removeEventListener("touchstart", this.handleTouchStart);
    window.removeEventListener("touchend", this.handleTouchEnd);
  },
  methods: {
    initAnimation() {
      gsap.set(".card", { opacity: 0, y: 800 }); // Masque toutes les cartes sauf la première
      gsap.to(".cardone", { opacity: 1, y: 0, duration: 0.5 }); // Affiche la première
    },
    handleScroll(event) {
      if (this.isAnimating) return;

      // ✅ Masquer l’indicateur après le premier scroll
      if (this.showScrollIndicator) {
        this.showScrollIndicator = false;
      }

      if (event.deltaY > 0 && this.currentStep < this.totalSteps) {
        // Scroll vers le bas -> afficher la carte suivante
        this.isAnimating = true;
        this.revealNextCard();
      } else if (event.deltaY < 0 && this.currentStep > 0) {
        // Scroll vers le haut -> cacher la carte actuelle
        this.isAnimating = true;
        this.hideCurrentCard();
      }
    },
    handleTouchStart(event) {
      this.startY = event.touches[0].clientY;
    },
    handleTouchEnd(event) {
      let endY = event.changedTouches[0].clientY;
      if (this.startY - endY > 50 && this.currentStep < this.totalSteps) {
        this.isAnimating = true;
        this.revealNextCard();
      } else if (endY - this.startY > 50 && this.currentStep > 0) {
        this.isAnimating = true;
        this.hideCurrentCard();
      }
    },
    revealNextCard() {
      this.currentStep++;
      const cardClasses = [".cardtwo", ".cardthree", ".cardfour"];
      const nextCard = cardClasses[this.currentStep - 1];

      if (nextCard) {
        gsap.to(nextCard, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: "power2.out",
          onComplete: () => {
            setTimeout(() => (this.isAnimating = false), this.animationDelay);
          },
        });
      }
    },
    hideCurrentCard() {
      const cardClasses = [".cardtwo", ".cardthree", ".cardfour"];
      const currentCard = cardClasses[this.currentStep - 1];

      if (currentCard) {
        this.currentStep--;
        gsap.to(currentCard, {
          opacity: 0,
          y: 800, // Déplacement vers le bas
          duration: 0.5,
          onComplete: () => {
            setTimeout(() => (this.isAnimating = false), this.animationDelay);
          },
        });
      }
    },
    goToStep(step) {
      if (step > this.currentStep) {
        while (this.currentStep < step) this.revealNextCard();
      } else if (step < this.currentStep) {
        while (this.currentStep > step) this.hideCurrentCard();
      }
    },
  },
};
</script> 