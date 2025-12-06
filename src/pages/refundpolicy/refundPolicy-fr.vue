refundPolicy-en.vue<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
       <div class="content-box">
         <h1>Politique de retour et de remboursement</h1>

         <h2>Délai de retour de 30 jours</h2>
         <p>
           Nous offrons une période de retour de 30 jours. Cela signifie que vous disposez de 30 jours après la réception de votre commande pour demander un retour.
         </p>
         <p>
           Pour que votre article soit éligible, il doit être dans le même état que lors de sa réception :
           non porté ou non utilisé, avec les étiquettes et dans son emballage d’origine.
           Vous devrez également fournir la facture ou une preuve d’achat.
         </p>

         <h2>Comment initier un retour</h2>
         <p>
           Pour commencer une procédure de retour, veuillez <strong>soumettre un ticket d’assistance sur notre site</strong>.
           Vous pouvez le faire depuis la page Contact/Support.
         </p>
         <p class="subtle">
           Une fois votre demande de retour acceptée, nous vous fournirons une étiquette de retour
           ainsi que les instructions sur la manière et l’adresse de renvoi du colis.
           <strong>Tout article renvoyé sans demande de retour préalablement approuvée ne pourra pas être accepté.</strong>
         </p>

         <h2>Articles endommagés ou problèmes</h2>
         <p>
           Merci d’inspecter votre commande dès sa réception et de <strong>soumettre immédiatement un ticket</strong>
           si l’article est défectueux, endommagé ou si vous avez reçu le mauvais article,
           afin que nous puissions examiner la situation et trouver une solution.
         </p>

         <h2>Exceptions / Articles non retournables</h2>
         <p>
           Certains types d’articles ne peuvent pas être retournés, notamment (sans s’y limiter) :
         </p>
         <ul>
           <li><strong>Produits personnalisés ou sur mesure</strong> (par exemple, articles fabriqués à la demande ou à partir d’une photo)</li>
           <li>Articles en promotion / déstockage et cartes-cadeaux</li>
         </ul>
         <p>
           Si vous avez un doute sur l’éligibilité de votre article, veuillez nous contacter via un ticket avant de procéder au retour.
         </p>

         <h2>Échanges</h2>
         <p>
           Le moyen le plus rapide d’obtenir un autre article est de retourner celui que vous avez reçu.
           Une fois votre retour approuvé, vous pouvez passer une nouvelle commande séparément pour l’article souhaité.
         </p>

         <h2>Union européenne – Délai de rétractation de 14 jours</h2>
         <p>
           Si votre commande est livrée dans un pays de l’Union européenne, vous disposez d’un délai de 14 jours
           pour annuler ou retourner votre commande, pour n’importe quelle raison et sans justification.
           Comme mentionné plus haut, l’article doit être dans le même état que lors de sa réception :
           non porté/non utilisé, avec les étiquettes et dans l’emballage d’origine,
           et vous devrez fournir une preuve d’achat.
         </p>
         <p class="subtle">
           Veuillez noter : conformément aux règles de protection des consommateurs de l’UE,
           le droit de rétractation de 14 jours ne s’applique <strong>pas</strong> aux
           <strong>articles personnalisés ou fabriqués sur mesure</strong>. Pour ces produits,
           nous ne pouvons accepter un retour qu’en cas de défaut de fabrication ou de dommage lié au transport.
         </p>

         <h2>Remboursements</h2>
         <p>
           Nous vous informerons dès que nous aurons reçu et inspecté votre retour, et nous vous indiquerons
           si le remboursement est approuvé. Le cas échéant, un remboursement sera effectué sur votre moyen de paiement
           initial dans un délai d’environ <strong>10 jours ouvrables</strong>.
           Votre banque ou l’émetteur de votre carte peut nécessiter un délai supplémentaire pour afficher le remboursement.
         </p>
         <p>
           Si plus de <strong>15 jours ouvrables</strong> se sont écoulés depuis l’approbation de votre retour
           et que vous n’avez toujours pas reçu votre remboursement, veuillez
           <strong>soumettre un ticket d’assistance sur notre site</strong> afin que nous puissions vous aider.
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
