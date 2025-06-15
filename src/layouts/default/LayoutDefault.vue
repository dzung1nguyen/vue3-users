<script setup lang="ts">
import config from '@/config';
import { routes } from '@/router/routes';
import { computed } from 'vue';

const menuRoutes = computed(() => {
  return routes.filter(route => route.meta?.menu);
});
</script>

<template>
  <div class="flex flex-col h-full">
    <div class="navbar bg-base-300 shadow-sm ">
      <div class="navbar">
        <div class="flex-1">
          <router-link
            to="/"
            class="btn btn-ghost text-xl"
          >
            {{ config.appName }}
          </router-link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal px-1">
            <li
              v-for="menu in menuRoutes"
              :key="menu.name"
            >
              <router-link :to="{ name: menu.name }">
                {{ $t(`menu.${menu.meta?.title}`) }}
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <main class="container mx-auto px-4 flex-1 py-6">
      <slot />
    </main>
  </div>
</template>