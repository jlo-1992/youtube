<script setups lang="ts">
definePageMeta({
  middleware() {
    const { loggedIn } = useUserSession();
    if (!loggedIn.value) {
      const toast = useToast();
      toast.add({ title: '請登入', description: '需登入才能瀏覽該頁面', color: 'error' });
      return navigateTo('/login');
    }
  },
});
</script>

<template>
  <div>
    <h1>會員頁面</h1>
    <p>沒有登入不能進來</p>
  </div>
</template>
