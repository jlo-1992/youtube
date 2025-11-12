<script setup lang="ts"></script>

<template>
  <div id="appbar" class="flex h-15 cursor-pointer flex-row items-center justify-between px-5">
    <div id="leftside" class="flex items-center">
      <Icon name="mdi-menu" size="24" />
      <button id="logo" type="button" to="/">
        <img src="/images/youtubelogo.png" alt="youtubelogo" class="ml-5 h-8" />
      </button>
    </div>
    <div id="center" class="flex items-center">
      <div id="searchbar" class="mr-5">
        <input
          type="text"
          class="mr-2 h-10 w-100 rounded-full rounded-r-md border border-gray-400 p-1 pl-5"
          placeholder="搜尋"
        />

        <button
          type="button"
          class="-ml-2 h-10 w-15 cursor-pointer rounded-full rounded-l-md border border-gray-400 bg-gray-100 px-2"
        >
          <Icon name="mdi-search" size="30" class="mt-1" />
        </button>
      </div>
      <button id="voiceSearch" type="button" class="cursor-pointer rounded-full bg-gray-100 px-2">
        <Icon class="mt-2" name="mdi-microphone" size="24" />
      </button>
    </div>
    <div id="rightside" class="flex w-45 items-center justify-between">
      <div>
        <button type="button" class="h-10 w-20 rounded-full bg-gray-100">＋建立</button>
      </div>
      <div>
        <button type="button" class="mx-3">
          <Icon name="mdi-bell-outline" size="24" />
        </button>
      </div>
      <div>
        <button type="button">
          <img src="/images/quokka.jpg" class="w-1/2 rounded-full" alt="profilephoto" />
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
