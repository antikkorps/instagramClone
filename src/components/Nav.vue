<script setup>
import { RouterLink, useRouter } from 'vue-router';
import { ref } from 'vue';
import Container from './Container.vue';
import AuthModal from './AuthModal.vue';

const router = useRouter();

const searchUsername = ref('');
const isAuthenticated = ref(false);

const onSearch = () => {
  if (searchUsername.value) {
    router.push(`/profile/${searchUsername}`);
    searchUsername.value = '';
    //     window.location.href = `https://instagram.com/${searchUsername.value}`;
  }
};
</script>

<template>
  <a-layout-header>
    <Container>
      <div class="nav-container">
        <div class="left-content">
          <RouterLink to="/">Instagram</RouterLink>
          <a-input-search
            v-model:value="searchUsername"
            placeholder="Username..."
            style="width: 200px"
            @search="onSearch"
          />
        </div>
        <div class="right-content" v-if="!isAuthenticated">
          <AuthModal :isLogin="false" />
          <AuthModal :isLogin="true" />
        </div>
        <div class="right-content" v-else>
          <a-button type="primary">Profile</a-button>
          <a-button type="primary">Logout</a-button>
        </div>
      </div>
    </Container>
  </a-layout-header>
</template>

<style scoped>
.nav-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.right-content {
  display: flex;
  align-items: center;
}
.right-content button {
  margin-left: 0.5em;
}
.left-content a {
  margin-right: 0.5em;
}
.left-content {
  display: flex;
  align-items: center;
}
</style>
