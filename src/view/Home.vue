<template>
    <div>
        <h1 class="m-2">Welcome to the Home Page</h1>
        <p>This is a simple home page for your Vue.js application.</p>
        <router-link to="/about">Go to About Page</router-link>
    </div>
</template>

<script>
export default {
    name: 'Home'
}
</script>