<template>
    <Navbar />
    <div>
        <h1 class="text-center mt-5 font-bold text-2xl">LAYANAN DIGITAL</h1>
        <h2 class="text-center mt-3">BAGIAN UMUM KPDJP</h2>
    </div>
    <div class="mx-auto mt-10 w-[300px] md:w-[600px] lg:w-[1000px]">
        <div class="flex flex-wrap gap-10 justify-center">
            <div v-for="post in contentData" :key="post.id" class="p-3 text-center shadow-lg rounded-xl bg-white">
                <img :src="post.feature_image" alt="Post Image" v-if="post.feature_image" class="w-[250px] h-[250px] object-cover" />
                <h2 class="font-semibold text-lg mt-2 uppercase">{{ post.title }}</h2>
                <router-link :to="{ name: 'post-detail', params: { id: post.id } }" class="">
                    <div class="mt-2 text-white bg-black w-full p-2">Detail</div>
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import { getPosts } from '../ghost-config';
import Navbar from '../components/navbar.vue';

export default {
    components: {
        Navbar,
    },
    data() {
        return {
            contentData: [],
        };
    },
    methods: {
        async fetchContent() {
            try {
                const posts = await getPosts();
                this.contentData = posts;
                console.log('Fetched content from Ghost:', posts);
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