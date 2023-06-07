<script setup>
import Container from '@/components/Container.vue';
import UserBar from '@/components/UserBar.vue';
import ImageGallery from './ImageGallery.vue';
</script>

<template>
  <Container>
    <div class="profile-container">
      <UserBar
        username="Selena"
        :userInfo="{
          posts: 4,
          followers: 100,
          following: 342,
        }"
      />
      <ImageGallery
        :posts="[
          {
            id: 1,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/250px-Michael_Jordan_in_2014.jpg',
          },
          {
            id: 1,
            image:
              'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Michael_Jordan_in_2014.jpg/250px-Michael_Jordan_in_2014.jpg',
          },
        ]"
      />
    </div>
  </Container>
</template>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  padding: 2em 0;
}
</style>
