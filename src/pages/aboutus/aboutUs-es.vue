<template>
  <div class="about-page">
    <my-header></my-header>

    <!-- 顶部 Banner -->
    <section class="about-banner">
      <img
        class="banner-img"
        src="https://www.calmpurr.com/img/logo/aboutus-banner.png"
        alt="About CalmPurr"
      />
      <div class="banner-text">
        <h1>About CalmPurr</h1>
        <p>Handcrafted with Love, Inspired by Cats 🐾</p>
      </div>
    </section>

    <!-- 内容区 -->
    <section class="about-content">
      <div class="content-box">
        <h2>Nuestra historia</h2>
        <p>
          CalmPurr nació de un sueño pequeño pero lleno de corazón: convertir el encanto de los gatos reales en arte suave de silicona hecho a mano.
          Fundado por una amante de los animales desde la infancia, cada squishy surge de un cariño auténtico y una creatividad sincera.
          Cada gatito CalmPurr es moldeado, pintado y terminado a mano — nunca producido en masa — para convertirse en un compañero único, creado con dedicación y amor.
        </p>

        <h2>Nuestro arte y oficio</h2>
        <p>
          Creemos que cada gato, así como cada squishy, tiene su propia personalidad.
          Todas nuestras creaciones CalmPurr están hechas con silicona de grado alimenticio y una técnica de rebote lento que ofrece una suavidad realista, como si sostuvieras un gatito de verdad.
          Nuestros artesanos pintan cada detalle cuidadosamente a mano, para que cada squishy refleje calidez, arte e individualidad — una pequeña escultura de alegría inspirada en la foto de tu gato.
        </p>

        <h2>Por qué lo hacemos</h2>
        <p>
          CalmPurr se construyó sobre una creencia: las cosas hechas a mano transmiten emociones.
          Cada squishy es más que un juguete; es un pequeño puente entre tú, tu mascota y nuestro trabajo artesanal.
          Ya sea un regalo o un recuerdo especial, esperamos que cada pieza te aporte calma, dulzura y una sonrisa — porque el amor, cuando se vierte en silicona, se convierte en algo que puedes sostener.
        </p>

      </div>
    </section>

  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
import SiteFooter from '@/components/SiteFooter.vue'

export default {
  name: 'AboutUs',
  components: { MyHeader, SiteFooter }
}
</script>

<style lang="scss" scoped>
.about-page {
  background: #f8fafb;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Work Sans", "Poppins", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
    color: #333;
}

/* === Banner 样式 === */
.about-banner {
  margin-top: 60px; /* ✅ 预留给固定头部的高度 */
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: linear-gradient(180deg, #b8e8db 0%, #d5f3ea 100%);

  .banner-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.78);
  }

  .banner-text {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    text-align: center;
    text-shadow: 0 1px 3px rgba(0, 0, 0, 0.25);

    h1 {
      font-size: 1.9rem;
      font-weight: 600;
      letter-spacing: 0.4px;
    }

    p {
      margin-top: 8px;
      font-size: 1rem;
      font-weight: 400;
      opacity: 0.92;
    }
  }
}

/* === 内容区 === */
.about-content {
  flex: 1;
  padding: 30px 16px 60px;
  display: flex;
  justify-content: center;

  .content-box {
    max-width: 800px;
    background: #fff;
    border-radius: 18px;
    padding: 26px 22px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    transition: all 0.3s ease;

    &:hover {
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
    }

    h2 {
      font-size: 1.3rem;
      font-weight: 600;
      color: #222;
      margin-top: 28px;
      border-left: 4px solid #8dd9bf;
      padding-left: 10px;
      line-height: 1.4;
    }

    p {
      color: #555;
      line-height: 1.85;
      margin-top: 10px;
      font-size: 1rem;
      font-weight: 400;
      letter-spacing: 0.2px;
    }
  }
}

/* === 底部 === */
.local-footer {
  margin-top: auto;
  position: static;
}

/* === 响应式 === */
@media (max-width: 640px) {
  .about-banner {
    height: 180px;

    .banner-text h1 {
      font-size: 1.45rem;
    }

    .banner-text p {
      font-size: 0.9rem;
    }
  }

  .about-content .content-box {
    padding: 20px 14px;

    h2 {
      font-size: 1.15rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
}
</style>

