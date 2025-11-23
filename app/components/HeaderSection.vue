<script setup lang="ts">
const { loggedIn } = useUserSession();
</script>

<template>
  <div id="appbar" class="flex h-15 cursor-pointer flex-row items-center justify-between px-5">
    <div id="leftside" class="flex items-center">
      <HeaderBtn to-page="/" icon-name="mdi-menu" class="ml-2" />
      <NuxtLink to="/">
        <img src="/images/youtubelogo.png" alt="youtubelogo" class="ml-5 h-8" />
      </NuxtLink>
    </div>
    <div id="center" class="flex items-center">
      <SearchBar />
      <button type="button" class="cursor-pointer rounded-full bg-gray-100 px-2">
        <Icon class="mt-2" name="mdi-microphone" size="24" />
      </button>
    </div>
    <div id="rightside" class="flex w-45 items-center justify-between gap-2">
      <div>
        <button type="button" class="h-10 w-20 rounded-full bg-gray-100">＋建立</button>
      </div>
      <div>
        <HeaderBtn to-page="/" icon-name="mdi-bell-outline" />
      </div>
      <div>
        <UButton v-if="!loggedIn" class="rounded-full border bg-white" to="/login">
          <UIcon name="mdi-login" class="text-xl text-black" />
        </UButton>
        <button v-else type="button">
          <img src="/images/quokka.jpg" class="w-1/2 rounded-full" alt="profilephoto" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
