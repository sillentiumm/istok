<template>
  <div class="image-placeholder" :class="`image-placeholder--${ratio}`" role="img" :aria-label="label">
    <!-- <span>{{ label }}</span> -->
    <!-- <img src="@/assets/img/1.jpg" alt=""> -->
    <!-- <img src="@/assets/img/1.jpg" alt=""> -->
    <img
      v-if="imageUrl"
      :src="imageUrl" 
      :alt="label" 
    />
    <!-- {{ imageUrl }} -->
  </div>
</template>

<script setup>

import { computed } from 'vue';

const props = defineProps({
  label: { type: String, default: 'Место для изображения' },
  ratio: { type: String, default: 'landscape' },
  imageTitle: { type: String, default: '1.jpg' },
})

const imageUrl = computed(() => {
  try {
    return new URL(`/src/assets/img/${props.imageTitle}`, import.meta.url).href;
    // return new URL(`@/assets/img/${props.imageTitle}`, import.meta.url).href;
  } catch (error) {
    console.error(`Изображение ${props.imageTitle} не найдено`, error);
    return '';
  }
});
</script>

<style scoped>

img{
  width: 100%;
  /* height: 100%; */
}

</style>
