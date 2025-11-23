<script setup lang="ts">
const { loggedIn, clear } = useUserSession();

interface Btn {
  to: string;
  icon: string;
  name: string;
}

const logOut = () => {
  clear();
  navigateTo('/');
};

const btns: Btn[] = [
  {
    to: '/',
    icon: 'mdi-home',
    name: '所有人物',
  },
  {
    to: '/shorts',
    icon: 'mdi-compass',
    name: '短影音',
  },
  {
    to: '/movies',
    icon: 'icomoon-free:video-camera',
    name: '電影',
  },
];
</script>

<template>
  <div class="flex min-w-50 flex-col gap-4 p-5">
    <UButton v-for="btn in btns" :key="btn.name" :to="btn.to" class="btn">
      <UIcon :name="btn.icon" class="mr-5 text-xl" />
      {{ btn.name }}
    </UButton>
    <template v-if="loggedIn">
      <UButton class="btn" @click="logOut">
        <UIcon name="mdi-logout" class="mr-5 text-xl" />
        登出
      </UButton>
    </template>
    <template v-else>
      <UButton class="btn" to="/logIn">
        <UIcon name="mdi-login" class="mr-5 text-xl" />
        登入
      </UButton>
    </template>
  </div>
</template>

<style scoped>
.btn {
  background-color: white;
  color: black;
}

.btn:hover {
  background: #000;
  color: white;
}
</style>
