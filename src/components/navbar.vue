<!-- src/components/Navbar.vue -->
<template>
  <div v-if="isMobileNavOpen" class="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-10" />

  <nav class="bg-yellow-500 p-4">
    <div class="container flex mx-auto justify-between">

      <div class="text-white font-bold text-lg">
        Logo
      </div>

      <div>
        <button @click="toggleMobileNav" v-show="!isMobileNavOpen" class="text-white focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>

        <button v-if="isMobileNavOpen" @click="toggleMobileNav" class="text-white relative z-50 focus:outline-none">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>

      <transition>
        <div v-if="isMobileNavOpen" class="fixed inset-y-0 left-0 bg-yellow-400 z-50 w-64">

          <div class="flex flex-col items-start p-4">
            <router-link to="/About">
              <div class="text-white py-2">Home</div>
            </router-link>
            <div v-for="post in contentData" :key="post.id" class="py-2">
              <router-link :to="{ name: 'post-detail', params: { id: post.id } }" class="text-white">{{ post.title }}</router-link>
            </div>
          </div>
        </div>
      </transition>

    </div>
  </nav>
</template>

<script>
import { getPosts } from '../ghost-config';

export default {
  data() {
    return {
      isMobileNavOpen: false,
      contentData: [],
    };
  },
  methods: {
    toggleMobileNav() {
      this.isMobileNavOpen = !this.isMobileNavOpen;
    },
    async fetchContent() {
      try {
        const posts = await getPosts();
        this.contentData = posts;
        console.log('Fetched content from Ghost:', this.contentData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    },
  },
  mounted() {
    this.fetchContent();
  },
};
</script>

<style scoped>
</style>