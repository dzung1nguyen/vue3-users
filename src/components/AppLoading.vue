<script setup lang="ts">
defineProps<{
  show: boolean;
}>();
</script>

<template>
  <div
    v-show="show"
    class="flex top-0 left-0 fixed z-50 items-center justify-center w-full h-full bg-black/50"
  >
    <span className="loading loading-spinner text-primary" />
  </div>
</template>
