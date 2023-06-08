<script setup>
import { defineProps } from 'vue';

const props = defineProps(['posts']);
const { VITE_APP_SUPABASE_URL } = import.meta.env;
</script>

<template>
  <div class="image-gallery-container">
    <img v-for="post in posts" :key="post.id" :src="post.image" alt="" />
  </div>
</template>

<style scoped>
.image-gallery-container {
  display: flex;
  justify-content: left;
  flex-wrap: wrap;
}

img {
  width: 10em;
  height: 10em;
  object-fit: cover;
  margin: 0.5em;
}
</style>
