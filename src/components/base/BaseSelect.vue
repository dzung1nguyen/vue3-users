<script setup lang="ts">
type Option = {
  value: string | number;
  text: string;
};

defineProps<{
  modelValue: string | number;
  options: Option[];
  label?: string;
}>();

const emit = defineEmits<(event: 'update:modelValue', value: string | number) => void>();
</script>

<template>
  <div>
    <label
      v-if="label"
      class="block font-bold mb-2"
    >
      {{ label }}
    </label>
    <select
      class="select w-full"
      :value="modelValue"
      @change="emit('update:modelValue', ($event.target as HTMLSelectElement).value)"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.text }}
      </option>
    </select>
  </div>
</template>