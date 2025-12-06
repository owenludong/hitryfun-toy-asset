<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
      <div class="content-box">
        <h1>Privacy Policy</h1>

        <p>
          Thank you for visiting <strong>CalmPurr</strong> (“CalmPurr”, “we”, “us”, or “our”).
          Your privacy is very important to us. This Privacy Policy explains how we collect,
          use, and protect your personal information when you visit or make a purchase from
          <a href="https://www.calmpurr.com" target="_blank">www.calmpurr.com</a> (the “Site”)
          and when you communicate with us (collectively, the “Services”).
        </p>

        <h2>1. Information We Collect</h2>
        <p><strong>a. Information You Provide Directly</strong></p>
        <p>
          We collect personal information that you voluntarily provide when you create an account,
          place an order, subscribe to our newsletter, or contact us. This may include your
          name, email address, phone number, billing/shipping address, and payment details.
        </p>

        <p><strong>b. Information Collected Automatically</strong></p>
        <p>
          When you browse our Site, we automatically collect certain data such as IP address,
          browser type, device information, and interaction history. This helps us improve our
          website performance and user experience.
        </p>

        <p><strong>c. Information from Third Parties</strong></p>
        <p>
          We may receive limited information about you from payment gateways, shipping partners,
          or analytics providers strictly for processing orders, preventing fraud, or improving
          our services.
        </p>

        <h2>2. How We Use Your Information</h2>
        <p>
          We use your personal information to process orders, manage customer service,
          send order updates, communicate promotions (with your consent), and improve our
          website functionality. We do not sell your personal data to any third parties.
        </p>

        <h2>3. Sharing Your Information</h2>
        <p>
          Your data may be shared only with trusted service providers who assist us in
          operations such as payment processing, shipping, analytics, or email services.
          All partners are required to keep your information secure and confidential.
        </p>

        <h2>4. Data Retention and Security</h2>
        <p>
          We keep your personal data only as long as necessary for the purposes described above.
          CalmPurr uses HTTPS encryption and secure servers, but please note that no system is
          completely immune from risks.
        </p>

        <h2>5. Your Rights and Choices</h2>
        <p>
          You have the right to access, correct, or delete your personal information, as well
          as to withdraw consent for marketing communications.
        </p>

        <h2>6. Cookies and Tracking Technologies</h2>
        <p>
          We use cookies to remember your preferences, analyze traffic, and personalize content.
          You may disable cookies in your browser, but some features of our Site may not function
          properly as a result.
        </p>

        <h2>7. Children’s Privacy</h2>
        <p>
          Our Site is not intended for children under 16. We do not knowingly collect personal
          data from children. If you believe a child has provided data to us, please contact us
          immediately for removal.
        </p>

        <h2>8. International Users</h2>
        <p>
          If you are visiting from outside our primary operating country, your information may
          be transferred internationally. We ensure appropriate safeguards for data protection
          under applicable laws.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
export default {
  name: 'PrivatePolicyPage',
  components: { MyHeader }
}
</script>

<style lang="scss" scoped>
.page-container {
  background: #f8fafb;
  font-family: "Work Sans", "Poppins", "Helvetica Neue", "PingFang SC", "Microsoft YaHei", sans-serif;
  padding-top: 60px; /* 避免 header 遮挡 */
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

  a {
    color: #8dd9bf;
    text-decoration: none;
  }

  a:hover {
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
