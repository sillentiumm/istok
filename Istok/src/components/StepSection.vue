<template>
  <article class="step-row" :class="[`step-row--${imageSide}`, `step-row--${number}`]">
    <div class="step-content">
      <div class="step-heading">
        <span class="step-number">{{ number }} </span>
        <h2>{{ title }}</h2>
      </div>
      <p>{{ text }}</p>
      <p v-if="extra" class="step-extra"><strong>Зачем это нужно?</strong> {{ extra.replace('Зачем это нужно? ', '') }}</p>
      <div v-if="note && !rightContent" class="note"><span class="note-mark">!</span><span v-html="note.replace(/^Важно:/, '<strong>Важно:</strong>').replace(/^Внимание!/, '<strong>Внимание!</strong>')"></span></div>
    </div>
    <div v-if="rightContent">
      <div v-if="note" class="note"><span class="note-mark">!</span><span v-html="note.replace(/^Важно:/, '<strong>Важно:</strong>').replace(/^Внимание!/, '<strong>Внимание!</strong>')"></span></div>
    </div>
    <ImagePlaceholder v-if="imageSide !== 'none'" :image-title="imageTitle" :label="imageLabel" :ratio="number === 4 ? 'wide' : 'landscape'" />
  </article>
</template>

<script setup>
import ImagePlaceholder from './ImagePlaceholder.vue'
const props = defineProps({
  number: Number,
  title: String,
  text: String,
  extra: String,
  note: String,
  imageSide: { type: String, default: 'right' },
  imageLabel: String,
  imageTitle: String,
  imageUrl: String,
  rightContent: Boolean
})

</script>
