<script setup lang="ts">
import { useRoute } from 'vue-router';
import LayoutDefault from '@/layouts/default/LayoutDefault.vue';
import { computed } from 'vue';
import type { Component } from 'vue';
import { LAYOUT_DEFAULT_KEY } from './common';
import AppLoading from './components/AppLoading.vue';
import { useAppStore } from './stores/appStore';
const route = useRoute();
const appStore = useAppStore();

const layoutMap: Record<string, Component> = {
  [LAYOUT_DEFAULT_KEY]: LayoutDefault,
};

const currentLayout = computed(() => {
  return layoutMap[route.meta.layout as string] || LayoutDefault;
});
</script>

<template>
  <component :is="currentLayout">
    <router-view />
  </component>
  <AppLoading :show="appStore.loading" />
</template>