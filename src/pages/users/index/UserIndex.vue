<script setup lang="ts">
import UserList from '@/pages/users/index/components/UserList.vue';
import UserFilterSort from '@/pages/users/index/components/UserFilterSort.vue';
import { useUserStore } from '@/stores/userStore';
import { onBeforeMount, onBeforeUnmount } from 'vue';

const userStore = useUserStore();
onBeforeMount(() => {
  userStore.fetchUsers()
})
onBeforeUnmount(() => {
  userStore.reset()
})
</script>

<template>
  <div>
    <h1 class="mb-4 text-2xl font-bold">
      {{ $t('users.title') }}
    </h1> 
    <UserFilterSort />
    <div class="mt-6">
      <UserList />
    </div>
  </div>
</template>