<template>
  <button  @click="toggleItem"
           @keydown.enter.prevent="toggleItem"
           :aria-label="buttonName"
           >
    <svg
        v-if="!isOpen"
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0 0L6.96866 8L14 0H0Z"
          fill="#494E6A"
      />
    </svg>
    <svg
        v-else
        width="14"
        height="8"
        viewBox="0 0 14 8"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
      <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M14 8L7.03134 0L0 8L14 8Z"
          fill="#494E6A"/>
    </svg>
  </button>
  </template>
<script setup lang="ts">
const {isOpen, buttonName, toggleItem} = defineProps<{
  isOpen: boolean
  buttonName: string
  toggleItem: () => void
}>()
</script>