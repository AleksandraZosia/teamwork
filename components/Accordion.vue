<script setup lang="ts">
import type { IItem } from "~/types/content";
import Arrow from "~/components/Arrow.vue";

const { item, isOpen, toggleItem, accordionName } = defineProps<{
  item: IItem;
  isOpen: boolean;
  toggleItem: () => void;
  accordionName: string;
}>();

const accordionId = computed(
  () => `${accordionName}-${item.title.replace(/\s+/g, "-").toLowerCase()}`,
);
</script>

<template>
  <div class="accordion-section">
    <button
      class="accordion-trigger"
      type="button"
      :aria-expanded="isOpen"
      :aria-controls="accordionId"
      @click="toggleItem"
    >
      <span :class="['accordion-heading', { open: isOpen }]">{{
        item.title
      }}</span>
      <Arrow :class="{ open: isOpen }" />
    </button>
    <div
      :id="accordionId"
      class="accordion-panel"
      role="region"
      :aria-hidden="!isOpen"
      :style="{ maxHeight: isOpen ? '500px' : '0px' }"
    >
      <div class="accordion-content">
        <p>{{ item.text }}</p>
        <NuxtImg
          v-if="item.image"
          :srcset="item.image"
          class="mobile-img"
          width="282"
          height="247"
          alt="Screenshot demonstrating how the application helps with planning"
        />
      </div>
    </div>
  </div>
</template>
