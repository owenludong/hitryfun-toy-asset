<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
      <div class="content-box">
        <h1>Return & Refund Policy</h1>

        <h2>30-Day Return Window</h2>
        <p>
          We have a 30-day return policy, which means you have 30 days after receiving your item to request a return.
        </p>
        <p>
          To be eligible, your item must be in the same condition that you received it —
          unworn or unused, with tags, and in its original packaging. You’ll also need
          the receipt or proof of purchase.
        </p>

        <h2>How to Start a Return</h2>
        <p>
          To start a return, please <strong>submit a support ticket on our website</strong>.
          You can do this from the Contact/Support page.
        </p>
        <p class="subtle">
          Once your return request is accepted, we’ll issue a return shipping label and
          provide instructions on how and where to send your package. <strong>Items sent back
          without an approved return request will not be accepted.</strong>
        </p>

        <h2>Damages & Issues</h2>
        <p>
          Please inspect your order upon reception and <strong>submit a ticket immediately</strong>
          if the item is defective, damaged, or if you received the wrong item, so that we can
          evaluate the issue and make it right.
        </p>

        <h2>Exceptions / Non-Returnable Items</h2>
        <p>
          Certain types of items cannot be returned, including (but not limited to):
        </p>
        <ul>
          <li><strong>Custom or personalized products</strong> (e.g., made-to-order or photo-customized items)</li>
          <li>Sale/clearance items and gift cards</li>
        </ul>
        <p>
          If you have questions about whether your item qualifies, please submit a ticket before returning the item.
        </p>

        <h2>Exchanges</h2>
        <p>
          The fastest way to get what you want is to return the item you have. Once your return is
          accepted, you may place a new order for the replacement item separately.
        </p>

        <h2>European Union — 14-Day Cooling-Off Period</h2>
        <p>
          If your order is shipped into the European Union, you have the right to cancel or return
          your order within 14 days for any reason and without justification. As above, the item must
          be in the same condition you received it, unworn/unused, with tags and in the original packaging,
          and you’ll need the receipt or proof of purchase.
        </p>
        <p class="subtle">
          Please note: under EU consumer rules, the 14-day cooling-off right does <strong>not</strong> apply to
          <strong>custom-made or personalized items</strong>. For such items, we can only accept returns for
          manufacturing defects or damage in transit.
        </p>

        <h2>Refunds</h2>
        <p>
          We will notify you once we’ve received and inspected your return, and let you know if the refund is approved.
          If approved, a refund will be issued to your original payment method within <strong>10 business days</strong>.
          Your bank or card issuer may take additional time to post the refund.
        </p>
        <p>
          If more than <strong>15 business days</strong> have passed since your return was approved and you have not
          received your refund, please <strong>submit a support ticket on our website</strong> so we can assist.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from '@/components/header.vue'
export default {
  name: 'RefundPolicyPage',
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

  ul {
    margin: 8px 0 16px;
    padding-left: 20px;

    li {
      margin-bottom: 6px;
    }
  }

  .subtle {
    color: #666;
    font-size: 0.95rem;
  }

  a {
    color: #8dd9bf;
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  .cta {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 14px;
    border-radius: 8px;
    background: #8dd9bf;
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: 0.2s ease;
  }

  .cta:hover {
    opacity: 0.9;
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

    p, li {
      font-size: 0.95rem;
    }
  }
}
</style>
