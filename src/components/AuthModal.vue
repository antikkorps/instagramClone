<script setup>
import { ref, defineProps, reactive } from 'vue';
import { useUserStore } from '../stores/users';
import { storeToRefs } from 'pinia';

const props = defineProps(['isLogin']);
const visible = ref(false);
const userStore = useUserStore();
const { errorMessage } = storeToRefs(userStore);

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

const title = props.isLogin ? 'Login' : 'Signup';
</script>

<template>
  <div>
    <a-button type="primary" @click="showModal" class="btn">{{
      title
    }}</a-button>
    <a-modal v-model:visible="visible" :title="props.isLogin" @ok="handleOk">
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
