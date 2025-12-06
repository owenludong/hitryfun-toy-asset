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
        <h2>Notre histoire</h2>
        <p>
          CalmPurr est né d’un petit rêve plein de tendresse : transformer le charme des vrais chats en œuvres d’art douces en silicone fait main.
          Créée par une amoureuse des animaux depuis toujours, chaque figurine est le résultat d’une véritable affection et d’une créativité sincère.
          Chaque chat CalmPurr est moulé, peint et fini à la main — jamais produit en masse — pour devenir un compagnon unique, façonné avec amour et soin.
        </p>

        <h2>Notre savoir-faire</h2>
        <p>
          Nous croyons que chaque chat, tout comme chaque squishy, possède sa propre personnalité.
          Chaque création CalmPurr est fabriquée en silicone de qualité alimentaire, avec une texture douce et un rebond lent qui rappelle la sensation de tenir un vrai chaton.
          Nos artisans peignent minutieusement les détails à la main afin que chaque squishy reflète chaleur, art et individualité — une petite sculpture de bonheur inspirée de la photo de votre chat.
        </p>

        <h2>Pourquoi nous le faisons</h2>
        <p>
          CalmPurr est construit sur une conviction : les objets faits main portent une émotion.
          Chaque squishy est plus qu’un jouet ; c’est un lien entre vous, votre compagnon et notre travail artisanal.
          Que ce soit un cadeau ou un souvenir précieux, nous espérons que chaque pièce vous apporte douceur, calme et un sourire — car l’amour, une fois moulé dans le silicone, devient quelque chose que l’on peut tenir dans les mains.
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

