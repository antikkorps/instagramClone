import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import { supabase } from '@/supabase';

export const useUserStore = defineStore('users', () => {
  const user = ref(null);
  const errorMessage = ref('');
  const loading = ref(false);

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleLogin = () => {};
  const handleSignup = async (credentials) => {
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

    loading.value = true;
    //validate if user exists //
    const { data: userWithUsername } = await supabase
      .from('users')
      .select()
      .eq('username', username)
      .single();

    if (userWithUsername) {
      loading.value = false;
      return (errorMessage.value = 'Username already registered');
    }
    errorMessage.value = '';

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) {
      loading.value = false;
      return (errorMessage.value = error.message);
    }
    await supabase.from('users').insert([{ username, email }]);

    loading.value = false;
  };
  const handleLogout = () => {};
  const getUser = () => {};

  const clearErrorMessage = () => {
    errorMessage.value = '';
  };

  return {
    user,
    errorMessage,
    handleLogin,
    handleSignup,
    handleLogout,
    getUser,
    clearErrorMessage,
  };
});
