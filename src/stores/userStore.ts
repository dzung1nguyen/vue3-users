import userService from '@/services/userService';
import type { UserModel } from '@/types/models';
import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useErrorStore } from './errorStore';
import { useAppStore } from './appStore';

export enum SortOption {
  ID_ASC = 'id_asc',
  ID_DESC = 'id_desc',
  NAME_ASC = 'name_asc',
  NAME_DESC = 'name_desc',
}

export const useUserStore = defineStore('user', () => {
  const users = ref<UserModel[]>([]);
  const keyword = ref('');
  const sortOption = ref<SortOption>(SortOption.ID_ASC);
  const errorStore = useErrorStore();
  const appStore = useAppStore();

  const filteredAndSortedUsers = computed(() => {
    let result = [...users.value];

    const kw = keyword.value.toLowerCase();
    if (kw) {
      result = result.filter(
        (user) =>
          user.id.toString().includes(kw) ||
          user.name.toLowerCase().includes(kw) ||
          user.email.toLowerCase().includes(kw) ||
          user.phone.toLowerCase().includes(kw)
      );
    }

    result.sort((a, b) => {
      switch (sortOption.value) {
        case SortOption.ID_ASC:
          return a.id - b.id;
        case SortOption.ID_DESC:
          return b.id - a.id;
        case SortOption.NAME_ASC:
          return a.name.localeCompare(b.name);
        case SortOption.NAME_DESC:
          return b.name.localeCompare(a.name);
        default:
          return 0;
      }
    });

    return result;
  });

  const fetchUsers = async () => {
    appStore.showLoading();
    try {
      const data = await userService.getUsers();
      users.value = data;
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unknown error';
      errorStore.setError(message);
    } finally {
      appStore.hideLoading();
    }
  };

  const setKeyword = (kw: string) => {
    keyword.value = kw;
  };

  const setSortOption = (option: SortOption) => {
    sortOption.value = option;
  };

  const reset = () => {
    keyword.value = '';
    sortOption.value = SortOption.ID_ASC;
  };

  return {
    users,
    keyword,
    sortOption,
    filteredAndSortedUsers,
    setKeyword,
    setSortOption,
    reset,
    fetchUsers,
  };
});
