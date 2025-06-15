<!-- eslint-disable @typescript-eslint/no-explicit-any -->
<script setup lang="ts" generic="T extends Record<string, any>">
export type Column<T> = {
  key: keyof T;
  label: string;
};

defineProps<{
  columns: Column<any>[];
  data: any[];
  loading?: boolean
}>();
</script>

<template>
  <div class="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
    <table class="table">
      <thead>
        <tr>
          <th
            v-for="col in columns"
            :key="String(col.key)"
          >
            {{ col.label }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading">
          <td
            :colspan="columns.length"
            class="text-center"
          >
            {{ $t('table.loadingData') }}
          </td>
        </tr>
        <template v-if="!loading">
          <tr
            v-for="(row, index) in data"
            :key="row.id ?? index"
          >
            <td
              v-for="col in columns"
              :key="String(col.key)"
            >
              {{ row[col.key] }}
            </td>
          </tr>
          <tr v-if="!loading && data.length === 0">
            <td
              :colspan="columns.length"
              class="text-center"
            >
              {{ $t('table.noData') }}
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>