<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
      <div class="content-box">
        <h1>Terms & Conditions</h1>

        <p><strong>This website is operated by calmpurr.com.</strong></p>
        <p>
          Welcome to <strong>CalmPurr</strong> (“we”, “us”, or “our”). These Terms & Conditions (“Terms”)
          govern your use of our website <a href="https://www.calmpurr.com" target="_blank">www.calmpurr.com</a>
          (the “Site”) and any purchases, communications, or related services you engage in
          (collectively, the “Services”). By accessing or using the Site, you agree to be bound by
          these Terms. If you do not agree with any part of these Terms, please discontinue use
          of the Site and our Services.
        </p>

        <h2>1. Online Store Terms</h2>
        <p>
          You represent that you are at least the age of majority in your jurisdiction, or that you
          have obtained parental or guardian consent. You may not use our Services for any illegal
          or unauthorized purpose, and you must comply with all applicable laws and regulations.
        </p>
        <p>
          You must not transmit any viruses, malicious code, or attempt to interfere with the security
          or operation of the Site.
        </p>

        <h2>2. General Conditions</h2>
        <p>
          We reserve the right to refuse service, terminate accounts, remove or edit content,
          and cancel orders at our sole discretion. Prices, availability, and shipping terms
          may change without notice. CalmPurr is not liable for losses resulting from misuse
          of the Services or breach of these Terms.
        </p>

        <h2>3. Products, Orders & Pricing</h2>
        <p>
          We strive to display accurate product descriptions, images, and pricing, but errors
          may occasionally occur. After placing an order, you will receive a confirmation email.
          Your order is not considered accepted until it has been shipped.
        </p>
        <p>
          We may impose quantity limits or modify promotional terms at our discretion.
        </p>

        <h2>4. Custom & Personalized Products</h2>
        <p>
          For custom or personalized items (such as silicone cat toys made from your photos),
          cancellations or modifications cannot be guaranteed once production begins.
          Cancellations made after production starts may incur additional fees or be denied.
        </p>

        <h2>5. Returns & Refunds</h2>
        <p>
          Please refer to our separate
          <router-link to="/refund-policy">Return & Refund Policy</router-link>
          for detailed information about eligibility, process, and timelines.
          Any unauthorized or late return requests may be declined.
        </p>

        <h2>6. Intellectual Property</h2>
        <p>
          All content on this Site — including text, graphics, logos, images, videos, and software —
          is owned by or licensed to CalmPurr and protected by applicable intellectual property laws.
          You may view, download, or print content for personal, non-commercial use only.
          Reproduction, modification, or redistribution without permission is prohibited.
        </p>

        <h2>7. User-Generated Content</h2>
        <p>
          If you submit photos, names, comments, or other materials (“User Content”), you grant
          CalmPurr a non-exclusive, worldwide, royalty-free license to use, reproduce, and display
          such content in connection with providing the Services. You confirm that your content
          does not violate any laws or infringe the rights of others. We reserve the right to remove
          inappropriate content at our discretion.
        </p>

        <h2>8. Disclaimer & Limitation of Liability</h2>
        <p>
          While we make every effort to ensure quality and reliability, we do not guarantee
          error-free performance. To the fullest extent permitted by law, CalmPurr shall not
          be liable for any indirect, incidental, or consequential damages arising from your
          use of the Site or Services.
        </p>
        <p>
          Some jurisdictions do not allow the exclusion or limitation of liability for certain
          damages; in such cases, our liability shall be limited to the maximum extent permitted
          by law.
        </p>

        <h2>9. Governing Law & Jurisdiction</h2>
        <p>
          These Terms and your use of the Site are governed by the laws of the jurisdiction
          where CalmPurr is registered. Any disputes shall be resolved exclusively in the
          competent courts of that jurisdiction.
        </p>

        <h2>10. Severability</h2>
        <p>
          If any provision of these Terms is found to be invalid or unenforceable, that provision
          shall be severed and the remaining provisions shall remain in full force and effect.
        </p>

        <h2>11. Changes to Terms</h2>
        <p>
          We may update these Terms at any time by posting the revised version on this page.
          The “Last updated” date will reflect any changes. Your continued use of the Site
          after updates constitutes acceptance of the revised Terms.
        </p>

        <h2>12. Contact & Support</h2>
        <p>
          For any questions or concerns about these Terms or our Services, please submit a
          support ticket via our website’s Contact or Support page. We will respond as soon
          as reasonably possible.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
export default {
  name: 'TermsPage',
  components: { MyHeader }
}
</script>

<style lang="scss" scoped>
.page-container {
  background: #f8fafb;
  font-family: "Work Sans", "Poppins", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  padding-top: 60px;
  min-height: 100vh;
}

/* === 内容主区 === */
.page-content {
  max-width: 900px;
  margin: 0 auto;
  padding: 30px 16px 60px;
  display: flex;
  justify-content: center;
}

.content-box {
  background: #fff;
  border-radius: 16px;
  padding: 28px 22px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  color: #444;
  line-height: 1.8;
  font-size: 1rem;
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.08);
  }

  h1 {
    color: #8dd9bf;
    text-align: center;
    font-size: 1.9rem;
    font-weight: 600;
    letter-spacing: 0.5px;
    margin-bottom: 28px;
  }

  h2 {
    color: #333;
    margin-top: 30px;
    font-size: 1.25rem;
    font-weight: 600;
    border-left: 4px solid #8dd9bf;
    padding-left: 10px;
    line-height: 1.4;
  }

  p {
    margin-top: 10px;
    color: #555;
  }

  a,
  .router-link-active {
    color: #8dd9bf;
    text-decoration: none;
  }

  a:hover,
  .router-link-active:hover {
    text-decoration: underline;
  }
}

/* === 响应式优化 === */
@media (max-width: 640px) {
  .content-box {
    padding: 20px 14px;

    h1 {
      font-size: 1.5rem;
    }

    h2 {
      font-size: 1.1rem;
    }

    p {
      font-size: 0.95rem;
    }
  }
}
</style>
