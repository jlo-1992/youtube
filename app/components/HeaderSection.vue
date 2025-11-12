<script setup lang="ts">  </script>

<template> 
   <div id="appbar" class="flex flex-row justify-between items-center cursor-pointer h-15 px-5">
  
    <div id="leftside" class="flex items-center">
      <Icon name="mdi-menu" size="24" />
      <button id="logo" to="/" >
        <img src="../assets/images/youtubelogo.png" alt="youtubelogo" class="h-8 ml-5">
      </button>
    </div> 
    <div id="center" class="flex items-center">
      <div id="searchbar" class="mr-5" >
        <input type="text" class="border border-gray-400 rounded-full rounded-r-md p-1 pl-5 mr-2 w-100 h-10" placeholder="搜尋">
      
        <button class="bg-gray-100 rounded-full rounded-l-md px-2 w-15 h-10 border border-gray-400 -ml-2 cursor-pointer">
          <Icon name="mdi-search" size="30" class="mt-1 " />
        </button>
      </div>
      <button id="voiceSearch" class="bg-gray-100 rounded-full px-2 cursor-pointer">
        <Icon class="mt-2" name="mdi-microphone" size="24" />
      </button>
    </div>  
    <div id="rightside" class="w-45 flex justify-between items-center">
      <div>
        <button class="bg-gray-100 w-20 rounded-full h-10">＋建立</button>
      </div>
      <div>
        <button class="mx-3">
          <Icon name="mdi-bell-outline" size="24" />
        </button>
      </div>
      <div>
        <button>
          <img src="../assets/images/quokka.jpg" class="rounded-full w-1/2" alt="profilephoto">
        </button>
      </div>
    </div>
  </div>


</template>

<style scoped> </style> 