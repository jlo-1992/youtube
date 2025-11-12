<script setup lang="ts"></script>

<template>
  <div id="menu" class="flex w-75 flex-col gap-4 p-5">
    <div>
      <button type="button" to="home" width="100%">
        <Icon name="mdi-home" size="24" class="mr-5" />
        哈利波特
      </button>
    </div>
    <div>
      <button type="button" to="home">
        <Icon name="mdi-compass" size="24" class="mr-5" />
        電影
      </button>
    </div>
    <div>
      <button type="button" to="home">
        <Icon name="mdi-bell-outline" size="24" class="mr-5" />
        書本
      </button>
    </div>
  </div>
</template>

<style scoped></style>
