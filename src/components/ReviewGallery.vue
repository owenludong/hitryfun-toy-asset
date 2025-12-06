<template>
  <section class="cp-reviews">
    <h2 class="cp-section-title">{{ $t('ourcustomershow') }}</h2>
    <div class="cp-masonry">
      <div v-for="(r, i) in reviews" :key="i" class="cp-rev-card">
        <img :src="r.img" alt="review" class="cp-rev-img" loading="lazy"/>
        <div class="cp-rev-body">
          <div class="cp-name">{{ r.name }}</div>
          <div class="cp-stars">
            <span v-for="n in 5" :key="n" class="star" :class="{ filled: n <= r.rating }">★</span>
          </div>
          <div class="cp-rev-text">{{ r.text }}</div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ReviewGalleryMasonry',
  data() {
    const makeImg = (t, c, h) =>
      'data:image/svg+xml;utf8,' +
      encodeURIComponent(
        `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="${h}">
          <rect width="400" height="${h}" fill="${c}"/>
          <text x="50%" y="50%" text-anchor="middle" font-size="18" fill="#666">${t}</text>
        </svg>`
      );

    return {
      reviews: [
        {
          name: 'Dawn',
          rating: 5,
          img: "https://www.calmpurr.com/img/review/1763435324992.webp",
          text: this.$t('review1'),
        },
        {
          name: 'Kimbrell',
          rating: 5,
          img: "https://www.calmpurr.com/img/review/1763435450725.webp",
          text: this.$t('review2'),
        },
        {
          name: 'Joel',
          rating: 5,
          img: "https://www.calmpurr.com/img/review/1763435471471.webp",
          text: this.$t('review3'),
        },
        {
          name: 'Emily',
          rating: 5,
          img: 'https://www.calmpurr.com/img/review/1763435495131.webp',
          text: this.$t('review4'),
        },
        {
          name: 'Lucas',
          rating: 5,
          img: "https://www.calmpurr.com/img/review/1763435514747.webp",
          text: this.$t('review5'),
        },
        {
          name: 'Sophie',
          rating: 5,
          img: 'https://www.calmpurr.com/img/review/1763435532292.webp',
          text: this.$t('review6'),
        },
        {
          name: 'Mark',
          rating: 5,
          img: 'https://www.calmpurr.com/img/review/1763435554690.webp',
          text: this.$t('review7'),
        },
        {
          name: 'Anna',
          rating: 5,
          img: "https://www.calmpurr.com/img/review/1763435572493.webp",
          text: this.$t('review8'),
        }
      ],
    };
  },
};
</script>

<style scoped>
.cp-reviews {
  padding: 16px;
  background: #f9fafb;
}

/* Masonry layout */
.cp-masonry {
  column-count: 2;
  column-gap: 12px;
}

/* 柔和文艺风卡片 */
.cp-rev-card {
  display: inline-block;
  width: 100%;
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  margin-bottom: 12px;
  overflow: hidden;
  transition: transform 0.25s ease, box-shadow 0.25s ease;
}
.cp-rev-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.12);
}

.cp-rev-img {
  width: 100%;
  height: auto;
  display: block;
  border-bottom: 1px solid #f0f0f0;
  transition: transform 0.3s ease;
}
.cp-rev-card:hover .cp-rev-img {
  transform: scale(1.02);
}

.cp-rev-body {
  padding: 10px;
}

/* 用户名 */
.cp-name {
  font-family: "Georgia", "Times New Roman", "PingFang SC", "Songti SC", serif;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 4px;
  color: #333;
  text-align: center;
}

/* 星级 */
.cp-stars {
  color: #fbc531;
  font-size: 0.8rem;
  line-height: 1;
  margin-bottom: 6px;
  text-align: center;
}
.star {
  opacity: 0.3;
}
.star.filled {
  opacity: 1;
}

/* 评价文字 */
.cp-rev-text {
  font-family: "Georgia", "Times New Roman", "PingFang SC", "Songti SC", serif;
  font-size: 0.85rem;
  line-height: 1.6;
  color: #444;
  letter-spacing: 0.2px;
  word-break: break-word;
  text-align: center;
  margin-top: 4px;
  transition: color 0.3s ease;
}
.cp-rev-text:hover {
  color: #222;
}

/* 标题 */
.cp-section-title {
  font-family: "Poppins", "Helvetica Neue", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin: 24px 0 14px;
  position: relative;
}
.cp-section-title::after {
  content: "";
  display: block;
  width: 60px;
  height: 3px;
  background: linear-gradient(90deg, #9dd6c2, #7fb0d1);
  border-radius: 2px;
  margin: 8px auto 0;
}
</style>
