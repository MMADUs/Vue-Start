import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
    url: 'http://localhost:2368',
    key: '9409228f8898aca73cc9c3efd6',
    version: 'v3',
});

// Fetch posts
export async function getPosts() {
    try {
        const posts = await api.posts.browse({ limit: 5, include: 'tags,authors' });
        console.log('Fetched posts:', posts);

        return posts;
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
}

// Fetch post by ID
export async function getPostById(postId) {
    try {
        const post = await api.posts.read({ id: postId });
        console.log('Fetched post by ID:', post);

        return post;
    } catch (error) {
        console.error('Error fetching post by ID:', error);
        throw error;
    }
}