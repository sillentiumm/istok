<template>
  <section class="hero">
    <div class="hero-inner">
      <header class="brand">
        <span>Наш интернет магазин Ozon</span>
        <div class="brand-name">ИСТОК<span class="brand-sprout">✦</span></div>
        <div class="brand-subtitle"><i></i>БЮРО СЕМЯН<i></i></div>
      </header>
      <div class="hero-img">
        <img src="@/assets/img/prewiew.jpg" alt="">
      </div>
      
      <!-- <div class="hero-copy">
        <h1>Набор для выращивания микрозелени</h1>
        <p>От маленького семечка — к урожаю выращенному своими руками.</p>
      </div> -->

      <!-- <div class="hero-video">
        <video src="@/assets/video/instruction.mp4" controls>Видео инструкция</video>
      </div> -->
      
      <!-- <video src="@/assets/video/instruction.mov">Видео</video> -->
      <!-- <img src="@/assets/img/1.jpg" alt=""> -->

      <!-- <a class="video-link" href="#guide" aria-label="Перейти к инструкции">
        <span class="play-icon">▶</span>
        <span>Посмотреть подробную<br />видеоинструкцию</span>
      </a> -->

      <!-- <div class="hero-bottom">
        <div class="qr-placeholder" aria-label="Место для QR-кода"></div>
        <span class="hero-arrow">↙</span>
      </div> -->
    </div>
  </section>
</template>

<style scoped>

h1 {
  font-size: 32px;
  font-weight: 500;
}

p {
  font-size: 26px;
}
.hero { background: var(--forest); color: var(--white); min-height: 100vh; padding: clamp(48px, 9.6vh, 108px) 7.5vw clamp(0px, 6vh, 68px); overflow: hidden; }

.hero-copy { margin-top: auto; flex: 0 0 auto; }
/* .hero-copy h1 { font: 500 clamp(42px, 7vw, 82px)/1.02 'Cormorant Garamond', Georgia, serif; margin: 0 0 42px; letter-spacing: -.025em; } */
/* .hero-copy p { font: 500 clamp(23px, 3.1vw, 38px)/1.28 'Cormorant Garamond', Georgia, serif; margin: 0 0 58px; } */
.hero-copy h1 {
  margin: 4px;
}
.hero-copy p {
  margin: 4px;
}

.hero-img {
  width: 400px;
  margin: 0 auto;
}

.hero-img img {
  width: 100%;
}

.hero-inner { max-width: 1120px; width: 100%; height: 100%; min-height: 0; margin: 0 auto; }

.brand { width: max-content; margin: 0 auto clamp(28px, 2vh, 66px); text-align: center; flex: 0 0 auto; }
.brand-name { font-family: 'Cormorant Garamond', Georgia, serif; font-size: clamp(74px, 12vw, 142px); font-weight: 600; letter-spacing: -0.075em; line-height: .82; position: relative; }
.brand-name {font-size: 52px;}
.brand-sprout { font-family: Georgia, serif; font-size: .27em; position: absolute; top: -.23em; left: 38%; transform: rotate(-20deg); }
.brand-subtitle { display: flex; align-items: center; justify-content: center; gap: 18px; letter-spacing: .42em; font-size: 18px; margin-top: 14px; }
.brand-subtitle i { width: 70px; height: 1px; background: var(--white); display: block; }

@media (max-width: 700px) {
  .hero-copy h1 {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 8px;
  }
  .hero-copy p {
    font-size: 16px;
    font-weight: 400;
  }

  .hero-img {
    width: 100%;
    margin: 0 auto;
  }

  .brand-subtitle i { width: 24px;}
}

</style>
