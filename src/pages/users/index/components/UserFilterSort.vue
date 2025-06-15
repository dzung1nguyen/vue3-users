<script setup lang="ts">
import BaseInput from '@/components/base/BaseInput.vue';
import BaseSelect from '@/components/base/BaseSelect.vue';
import { SortOption, useUserStore } from '@/stores/userStore';
import { debounce } from 'lodash';
import { computed, onBeforeUnmount } from 'vue';
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
const userStore = useUserStore();

const sortOptions = computed<{ value: SortOption; text: string }[]>(() => {
    return [
        {
            value: SortOption.ID_ASC,
            text: t('users.sort.id_asc')
        },{
            value: SortOption.ID_DESC,
            text: t('users.sort.id_desc')
        },
        {
            value: SortOption.NAME_ASC,
            text: t('users.sort.name_asc')
        },
        {
            value: SortOption.NAME_DESC,
            text: t('users.sort.name_desc')
        }
    ]
})

const debouncedSetKeyword = debounce((val: string) => {
  userStore.setKeyword(val.trim());
}, 300);

const keywordModel = computed({
  get: () => userStore.keyword,
  set: (val: string) => {
    debouncedSetKeyword(val);
  },
});

const sortOptionModel = computed({
  get: () => userStore.sortOption,
  set: (value: SortOption) => {
    userStore.setSortOption(value);
  }
});

onBeforeUnmount(() => {
  debouncedSetKeyword.cancel();
});
</script>

<template>
  <div class="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
    <div class="xl:col-span-2">
      <BaseInput
        v-model="keywordModel"
        :label="$t('common.filter')"
        :placeholder="$t('users.filterPlaceholder')"
      />
    </div>
    <div>
      <BaseSelect
        v-model="sortOptionModel"
        :options="sortOptions"
        :label="$t('common.sort')"
      />
    </div>
  </div>
</template>