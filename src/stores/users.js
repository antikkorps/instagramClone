import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref('');

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {};
  const handleSignup = (credentials) => {
    const { email, password, username } = credentials;

    if (password.length < 6) {
      return (errorMessage.value =
        'Password must be at least 7 characters long');
    }

    if (username.length < 4) {
      return (errorMessage.value =
        'Username must be at least 4 characters long');
    }

    if (!validateEmail(email)) {
      return (errorMessage.value = 'Please enter a valid email address');
    }

    errorMessage.value = '';
  };
  const handleLogout = () => {};
  const getUser = () => {};

  return {
    user,
    errorMessage,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
  };
});
