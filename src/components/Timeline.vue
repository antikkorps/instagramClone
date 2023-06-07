<script setup>
import Container from '@/components/Container.vue';
import Card from '@/components/Card.vue';

const data = [
  {
    id: 1,
    username: 'Selena',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Selena_Gomez_at_White_House.jpg/640px-Selena_Gomez_at_White_House.jpg',
    caption: 'I like pizza',
  },
  {
    id: 2,
    username: 'TheWeeknd',
    url: 'https://images.bfmtv.com/V6V_qHvmKsq7WhicToXqjlDBREc=/12x2:1612x902/1600x0/images/The-Weeknd-en-janvier-2022-1203220.jpg',
    caption: 'Hello Guys',
  },
];
</script>

<template>
  <Container>
    <div class="timeline-container">
      <Card v-for="post in data" :key="post.id" :post="post" />
    </div>
  </Container>
</template>

<style scoped>
.timeline-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2em 0;
}
</style>
