<script setup lang="ts">
import BaseTable, { type Column } from '@/components/base/BaseTable.vue';
import { useUserStore } from '@/stores/userStore';
import type { UserModel } from '@/types/models';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
const userStore = useUserStore();
const {t} = useI18n()

const columns = computed(() => [
  { key: 'id', label: t('table.id') },
  { key: 'name', label: t('table.name') },
  { key: 'email', label: t('table.email') },
  { key: 'phone', label: t('table.phone') },
] as { key: keyof UserModel; label: string }[]);
</script>

<template>
  <BaseTable
    :columns="columns as Column<UserModel>[]"
    :data="userStore.filteredAndSortedUsers as UserModel[]"
  />
</template>