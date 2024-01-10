<template>
  <div>
    <Navbar />
    <div>
      <div v-if="loading">
        Loading...
      </div>
      <div v-else-if="post">
        <h1 class="text-center font-bold text-2xl uppercase mt-5">{{ post.title }}</h1>
        <div v-html="post.html" class="text-center mt-5 mx-10"></div>
      </div>
      <div v-else>
        Post not found.
      </div>
    </div>
  </div>
</template>

<script>
import { getPostById } from '../ghost-config';
import Navbar from '../components/navbar.vue';

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      loading: false,
      post: null,
    };
  },
  watch: {
    '$route.params.id'() {
      this.fetchPostDetails();
    },
  },
  mounted() {
    this.fetchPostDetails();
  },
  methods: {
    async fetchPostDetails() {
      try {
        this.loading = true;
        const postId = this.$route.params.id;
        const post = await getPostById(postId);

        if (post) {
          this.post = post;
        } else {
          this.post = null;
        }

        this.loading = false;
      } catch (error) {
        console.error('Error fetching data:', error);
        this.loading = false;
      }
    },
  },
};
</script>
