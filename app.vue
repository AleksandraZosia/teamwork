<script setup lang="ts">
import { ref, watch } from "vue";
import type { IData, IItem } from "~/types/content";

const { data, error } = await useFetch<IData>(
  () => "https://eoyge3duj7xtdqd.m.pipedream.net/",
);

const activeItem = ref<IItem>();
const expandedItem = ref<IItem | null>(null);

const checkOpen = (item: IItem) => expandedItem.value?.title === item.title;

watch(
  data,
  (val) => {
    if (val?.items?.length) {
      activeItem.value = val.items[0];
      expandedItem.value = val.items[0];
    }
  },
  { immediate: true },
);

const toggleItem = (item: IItem) => {
  activeItem.value = item;

  if (checkOpen(item)) {
    expandedItem.value = null;
  } else {
    expandedItem.value = item;
  }
};
</script>

<template>
  <main>
    <Error v-if="error" />
    <Content
      v-else-if="activeItem && data"
      :data="data"
      :active-item="activeItem"
      :check-open="checkOpen"
      :toggle-item="toggleItem"
    />
  </main>
</template>
