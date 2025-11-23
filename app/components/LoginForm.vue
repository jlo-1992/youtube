<script setup lang="ts">
import * as z from 'zod';
import type { FormSubmitEvent } from '@nuxt/ui';

const schema = z.object({
  email: z.email('請輸入正確的 email 格式'),
  password: z.string('密碼為必填'),
});

type Schema = z.output<typeof schema>;

const form = reactive<Partial<Schema>>({
  email: '',
  password: '',
});

const toast = useToast();
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: '登入成功.', color: 'success' });
  console.log(event.data);
  // emit('login', form);
}

// const emit = defineEmits(['login']);

// function handleLogin(form: { email: string; password: string }) {
//   console.log(form);
// }
</script>

<template>
  <div class="flex w-full items-center justify-center">
    <UForm
      :schema="schema"
      :state="form"
      class="w-[400px] space-y-4 rounded-md border border-gray-200 p-10"
      @submit="onSubmit"
    >
      <NuxtLink to="/">
        <img src="/images/youtubelogo.png" alt="youtubelogo" class="m-auto h-15" />
      </NuxtLink>
      <UFormField label="Email" name="email" class="mt-5">
        <UInput
          v-model="form.email"
          autofocus
          autocomplete="true"
          class="w-full"
          placeholder="請輸入帳號或 email"
          size="xl"
        />
      </UFormField>
      <UFormField label="Password" name="password">
        <UInput v-model="form.password" class="w-full" type="password" placeholder="請輸入密碼" size="xl" />
      </UFormField>
      <div class="text-center">
        <UButton color="error" class="mt-2 w-full justify-center" type="submit">登入</UButton>
        <div class="mt-1 text-right text-sm underline underline-offset-4">忘記密碼？</div>
      </div>
      <div class="text-center text-sm">or sign in with</div>
      <div class="text-center">
        <a href="/auth/google">
          <UIcon name="logos:google-icon" class="text-xl" />
        </a>
      </div>
    </UForm>
  </div>
</template>
