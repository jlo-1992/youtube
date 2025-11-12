<script setup lang="ts">
const { data } = await useFetch("/api/data");

async function handleFormSubmit() {
  const response = await $fetch("/api/submit", {
    method: "POST",
    body: {
      // My form data
    },
  });
}
</script>

<template>
  <div>
    <div class="w-90">
      <img src="../assets/images/quokka.jpg" alt="quokkavideo" class="h-60 w-full rounded-xl object-cover object-top" />
      <div class="mt-3 grid grid-flow-col">
        <div class="">
          <img src="../assets/images/quokka.jpg" class="m-auto w-1/3 rounded-full" alt="channellogo" />
        </div>
        <div>
          <h1 class="font-bold">video title</h1>
          <h3 class="text-gray-500">channel name</h3>
          <h4 class="text-gray-500">video state . days published</h4>
        </div>
        <div>
          <button type="button">
            <Icon name="meteor-icons:ellipsis" size="20" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
