<!--
TODO:
-divide into smaller components
-style
- nice error handling
- loading animations
-->

<template>
  <section>
        <NuxtPicture v-if="activeItem?.image" :src="activeItem?.image" alt='Screenshot demonstaiting activeItem?.title in the application'  height="1140" width="1300"  :placeholder="[1300, 1140, 75, 10]" loading="lazy" format="webp"
        sizes="sm:0 md:300px lg:500 "
        />
<p>{{data?.tag ?? ""}}</p>
        <h1>{{data?.title ?? ""}}</h1>
        <div v-for="item in data?.items ?? []" :key="item.id || item.title" @click="toggleItem(item)"
            tabindex="0">
          <div><h2>{{ item.title }} </h2>
          <Button
              :is-open="isOpen(item)"
              :button-name="buttonName(item)"
              :toggle-item="() => toggleItem(item)"
          />
          </div>
          <div v-if="isOpen(item)"><p >{{item.text}}</p>
          <NuxtPicture v-if="activeItem?.image" :src="activeItem?.image" alt='Screenshot demonstaiting activeItem?.title in the application'  height="1140" width="1300"  :placeholder="[1300, 1140, 75, 10]" loading="lazy" format="webp"
                       sizes="md:0px "
          /></div>
        </div>
        <pre>{{ error }}</pre>
  </section>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import type {IItem} from "~/types/content";

const { data, error } = await useFetch(()=>"https://eoyge3duj7xtdqd.m.pipedream.net/")

const activeItem = ref<IItem | null>(null);
const expandedItem = ref<IItem | null>(null);

const isOpen =(item: IItem) =>
  expandedItem.value?.title === item.title


const buttonName = (item: IItem) =>
  isOpen(item) ? 'hide more' : 'show more'


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

  if (isOpen(item)) {
    expandedItem.value = null
  }
  else {
    expandedItem.value = item
  }
}

</script>
