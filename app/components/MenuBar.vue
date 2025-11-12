<script setup lang="ts"></script>

<template>
  <div id="menu" class="p-5 flex flex-col gap-4 w-75"  >
    <div>
      <button to="home" width="100%">
        <Icon name="mdi-home" size="24"  class="mr-5"/>
        哈利波特</button>
    </div>
  <div>
      <button to="home">
        <Icon name="mdi-compass" size="24"  class="mr-5"/>
        電影</button>
    </div>
      <div>
      <button to="home">
        <Icon name="mdi-bell-outline" size="24"  class="mr-5"/>
        書本</button>
    </div>
  </div>
</template>

<style scoped> </style>