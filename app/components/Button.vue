<script setup lang="ts">
interface BtnPropsType {
  btnClass?: string;
  icon?: string;
  iconClass?: string;
}

// const props = defineProps<{ btn: BtnPropsType }>();
const props = defineProps<BtnPropsType>();
</script>

<template>
  <!-- <button
    class="cursor-pointer rounded-md p-2"
    :type="props.btn.type"
    :text="props.btn.text"
    :class="props.btn.btnClass"
  >
    <span :class="props.btn.iconClass" v-if="props.btn.icon">
      <Icon :name="props.btn.icon" :class="props.btn.iconClass"></Icon>
    </span>
    <slot></slot>
  </button> -->
  <button class="cursor-pointer rounded-md p-2" :type="props.type" :class="props.btnClass">
    <span :class="props.iconClass" v-if="props.icon">
      <Icon :name="props.icon" :class="props.iconClass"></Icon>
    </span>
    <slot></slot>
  </button>
</template>
