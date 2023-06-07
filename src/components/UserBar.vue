<script setup>
import { defineProps } from 'vue';

const props = defineProps(['username', 'userInfo']);
</script>

<template>
  <div class="userbar-container">
    <div class="top-content">
      <a-typography-title :level="2">{{ props.username }}</a-typography-title>
    </div>
    <div class="bottom-content">
      <a-typography-title :level="5"
        >{{ props.userInfo.posts }} Posts</a-typography-title
      >
      <a-typography-title :level="5"
        >{{ props.userInfo.followers }} Followers</a-typography-title
      >
      <a-typography-title :level="5"
        >{{ props.userInfo.following }} Following</a-typography-title
      >
    </div>
  </div>
</template>

<style scoped>
.userbar-container {
  display: flex;
  flex-direction: column;
  padding: 3em 0;
}
.bottom-content {
  display: flex;
  align-items: center;
  justify-content: start;
}

.bottom-content h5 {
  margin: 0 1em 0 0;
}
</style>
