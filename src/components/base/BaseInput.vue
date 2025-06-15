<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  modelValue: string | number;
  label?: string;
  placeholder?: string;
  type?: 'text' | 'number' | 'email' | 'password' | 'tel' | 'url';
}>();

const emit = defineEmits<(event: 'update:modelValue', value: string | number) => void>();

const inputValue = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
});
</script>

<template>
  <div>
    <label
      v-if="label"
      class="block font-bold mb-2"
    >
      {{ label }}
    </label>
    <input
      v-model="inputValue"
      :type="type || 'text'"
      :placeholder="placeholder"
      class="input w-full"
    >
  </div>
</template>