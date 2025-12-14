<script setup lang="ts">
import type { IData, IItem } from "~/types/content";

const { data, checkOpen, activeItem } = defineProps<{
  data: IData;
  checkOpen: (item: IItem) => boolean;
  activeItem: IItem;
  toggleItem: (item: IItem) => void;
}>();
</script>

<template>
  <section>
    <NuxtPicture
      class="hero-img"
      :key="activeItem.image"
      v-if="activeItem.image"
      :src="activeItem.image"
      alt="Screenshot demonstrating how the application helps with planning"
      width="650"
      height="570"
      media="(min-width: 992px)"
      sizes="50vw sm:50vw"
      format="webp"
      placeholder="blur"
      fit="contain"
    />
    <div class="content">
      <header class="header">
        <p class="tagline">{{ data.tag }}</p>
        <h1 class="main-heading">{{ data.title }}</h1>
      </header>
      <div class="accordion-wrapper">
        <Accordion
          v-for="item in data?.items ?? []"
          :key="item.title"
          :item="item"
          :is-open="checkOpen(item)"
          :toggle-item="() => toggleItem(item)"
          accordion-name="plan-accordion"
        />
      </div>
    </div>
  </section>
</template>
