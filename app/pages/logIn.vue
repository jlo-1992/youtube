<script setup lang="ts">
const googleLogin = () => {
  window.location.href = 'http://localhost:3000/api/auth/google';
};
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <form action="">
      <div class="mt-10 flex flex-col gap-8 rounded-2xl p-10 text-center shadow-xl shadow-gray-300">
        <NuxtLink to="/"> <img src="/images/youtubelogo.png" alt="youtubelogo" class="m-auto h-15" /> </NuxtLink>
        <h1 class="text-center font-bold">Sign In with Email</h1>
        <input class="w-100 rounded-md border-2 p-3" autofocus type="text" placeholder="請輸入信箱" />
        <input class="w-100 rounded-md border-2 p-3" type="text" placeholder="請輸入密碼" />
        <div>
          <Button class="w-full bg-red-500 font-bold text-white" type="button">登入</Button>
          <!-- <div class="mt-3 text-right under">忘記密碼</div> -->
          <div class="mt-1 text-right underline underline-offset-4">忘記密碼？</div>
        </div>
        <hr />
        <h1 class="text-center">or sign in with</h1>
        <Button class="border" type="button" @click="googleLogin">Google 登入</Button>
      </div>
    </form>
  </div>
</template>
