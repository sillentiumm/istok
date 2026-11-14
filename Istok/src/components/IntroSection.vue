<template>
  <section class="intro">
    <div class="intro-copy">
      <h2>Видеоинструкция</h2>
      <div class="hero-video">
        <!-- <video src="@/assets/video/instruction.mp4" controls>Видео инструкция</video> -->
        <iframe
          class="hero-iframe"
          height="570"
          src="https://rutube.ru/play/embed/1986c396a2c815e4f7e5d9a45913d64d"
          style="border: none;"
          allow="clipboard-write; autoplay"
          allowFullScreen
          controls
        ></iframe>
      </div>
      <!-- <h2>Дорогой читатель!</h2>
      <p>Благодарим за выбор нашей продукции! Выращивание микрозелени — это не только способ добавить в свой рацион полезные и незаменимые витамины, но и маленький домашний ритуал. Посеять семена, каждый день замечать перемены и наблюдать, как появляются свежие ростки — мы уверены, что вы получите удовольствие не только от результата, но и от самого процесса выращивания.</p>
      <p>Мы подготовили всё необходимое для этого: составили этот набор, тщательно подбирая культуры семян и их инвентарь, а также продумали план для комфортного выращивания. У вас всё получится! :)</p> -->
    </div>
    <!-- <ImagePlaceholder class="intro-art" label="Место для декоративной иллюстрации" ratio="portrait" /> -->
  </section>
</template>

<script setup>
import ImagePlaceholder from './ImagePlaceholder.vue'
</script>

<style scoped>

.intro { position: relative; border-bottom: 1px solid var(--forest); padding: 0 14px 28px; margin-top: 12px; margin-bottom: 4px; }
.intro-copy { max-width: 900px; }
/* .intro h2, .step-heading h2, .culture h2, .reuse h2 { font: 700 clamp(29px, 4vw, 43px)/1.05 'Cormorant Garamond', Georgia, serif; margin: 0 0 12px; } */
/* .intro p { font-size: clamp(16px, 2.15vw, 23px); line-height: 1.22; margin: 8px 0; } */

.intro h2 {
  font-size: 24px;
  margin: 0;
  margin-bottom: 12px;
}
.intro p {
  font-size: 16px;
  margin: 0;
}


</style>
