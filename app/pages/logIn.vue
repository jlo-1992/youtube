<script setup lang="ts"></script>

<template>
  <div class="flex w-full items-center justify-center">
    <div class="mt-50 flex flex-col gap-8 rounded-2xl p-10 text-center shadow-xl shadow-gray-300">
      <NuxtLink to="/">
        <Button type="button" class="cursor-pointer">
          <img src="/images/youtubelogo.png" alt="youtubelogo" class="h-15" />
        </Button>
      </NuxtLink>
      <h1 class="text-center font-bold">Sign In with Email</h1>
      <input class="w-100 rounded-md border-2 p-3 pl-2" autofocus type="text" placeholder="請輸入信箱" />
      <input class="w-100 rounded-md border-2 p-3 pl-2" type="text" placeholder="請輸入密碼" />
      <Button btnClass="bg-red-500 font-bold text-white" type="button">送出</Button>
      <hr />
      <h1 class="text-center">or sign in with</h1>
      <Button btnClass="border" type="button">Google 登入</Button>
    </div>
  </div>
</template>

<style scoped></style>
