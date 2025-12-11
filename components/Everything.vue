<!--
TODO:
-divide into smaller components
-style
- nice error handling
- loading animations
-->

<template>
  <section id="plan">
    <div>
      <div>
        <NuxtPicture v-if="activeItem?.image" :src="activeItem?.image" alt="Item image" height="540" placeholder />
<h1>{{data?.tag ?? ""}}</h1>
        <h2>{{data?.title ?? ""}}</h2>
        <dl v-for="item in data?.items ?? []" :key="item.id || item.title" @click="toggleItem(item)"
            @keydown.enter.prevent="toggleItem(item)" tabindex="0">
          <dt>{{ item.title }} </dt>
          <dd v-if="expandedItem?.title == item.title">{{item.text}}</dd>
        </dl>
        <pre>{{ error }}</pre>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type {IItem} from "~/types/content";

const { data, error } = await useFetch(()=>"https://eoyge3duj7xtdqd.m.pipedream.net/")

const activeItem = ref<IItem | null>(null);
const expandedItem = ref<IItem | null>(null);

watch(
    data,
    (val) => {
      if (val?.items?.length) {
        activeItem.value = val.items[0];
        expandedItem.value = val.items[0]
      }
    },
    { immediate: true }
)

const toggleItem = (item : IItem) => {

  activeItem.value = item

  if (expandedItem.value === item) {
    expandedItem.value = null
  }
  else {
    expandedItem.value = item
  }
}

</script>
