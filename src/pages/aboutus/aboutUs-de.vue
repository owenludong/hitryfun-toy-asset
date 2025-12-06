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
        <h2>Unsere Geschichte</h2>
        <p>
          CalmPurr begann mit einem kleinen, aber herzlichen Traum – den Charme echter Katzen in weiche, handgefertigte Silikonkunst zu verwandeln.
          Gegründet von einem lebenslangen Katzenliebhaber und Künstler, entsteht jedes Squishy aus echter Zuneigung und Kreativität.
          Jede CalmPurr-Katze wird von Hand gegossen, bemalt und veredelt – nicht massenproduziert – und wird so zu einem einzigartigen kleinen Begleiter, der mit Sorgfalt und Liebe gestaltet wird.
        </p>

        <h2>Unsere Handwerkskunst</h2>
        <p>
          Wir glauben, dass jede Katze – und jedes Squishy – eine eigene Persönlichkeit besitzt.
          Jede CalmPurr-Kreation besteht aus lebensmittelechtem Silikon mit Slow-Rebound-Technik, das dieses realistische, weiche Gefühl vermittelt – fast wie das Halten eines echten Kätzchens.
          Unsere Kunsthandwerker bemalen jedes Detail sorgfältig von Hand, damit jeder CalmPurr-Squishy Wärme, Kunstfertigkeit und Individualität ausstrahlt – eine kleine Skulptur der Freude, inspiriert von deinem Katzenfoto.
        </p>

        <h2>Warum wir das tun</h2>
        <p>
          CalmPurr basiert auf einem einfachen Glauben – handgefertigte Dinge tragen Gefühle in sich.
          Jeder Squishy ist mehr als ein Spielzeug; er ist eine kleine Verbindung zwischen dir, deinem Haustier und unserer Handwerkskunst.
          Ob Geschenk oder Erinnerung – wir hoffen, dass jedes Stück dir Ruhe, Süße und ein Lächeln schenkt. Denn Liebe, einmal in Silikon gegossen, wird zu etwas, das du in den Händen halten kannst.
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

