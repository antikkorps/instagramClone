<script setup>
import { ref, defineProps, reactive } from 'vue';
import { useUserStore } from '../stores/users';
import { storeToRefs } from 'pinia';

const props = defineProps(['isLogin']);
const visible = ref(false);
const userStore = useUserStore();
const { errorMessage, loading } = storeToRefs(userStore);

const userCredentials = reactive({
  email: '',
  password: '',
  username: '',
});

const showModal = () => {
  visible.value = true;
};

const handleOk = (e) => {
  userStore.handleSignup(userCredentials);
};

const handleCancel = () => {
  userStore.clearErrorMessage();
  visible.value = false;
};

const title = props.isLogin ? 'Login' : 'Signup';
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="btn">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="props.isLogin" @ok="handleOk">
      <template #footer>
        <a-button key="back" @click="handleCancel">Cancel</a-button>
        <a-button
          :disable="loading"
          key="submit"
          type="primary"
          :loading="loading"
          @click="handleOk"
          >Submit</a-button
        >
      </template>
      <div v-if="!loading" class="input-container">
        <a-input
          class="input"
          v-if="!isLogin"
          v-model:value="userCredentials.username"
          placeholder="Username"
        />
        <a-input
          class="input"
          v-model:value="userCredentials.email"
          placeholder="Email"
        />
        <a-input
          type="password"
          class="input"
          v-model:value="userCredentials.password"
          placeholder="Password"
        />
      </div>
      <div v-else="loading" class="spinner">
        <a-spin />
      </div>
      <a-typography-text v-if="errorMessage" type="danger">{{
        errorMessage
      }}</a-typography-text>
    </a-modal>
  </div>
</template>

<style scoped>
.btn {
  margin-left: 0.5em;
}
.input {
  margin-top: 1em;
}
</style>
