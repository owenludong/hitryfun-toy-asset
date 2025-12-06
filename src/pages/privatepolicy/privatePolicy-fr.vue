<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
      <div class="content-box">
        <h1>Politique de confidentialité</h1>

        <p>
          Merci de visiter <strong>CalmPurr</strong> (« CalmPurr », « nous », « notre » ou « nos »).
          La protection de votre vie privée est très importante pour nous. La présente Politique de confidentialité
          explique comment nous collectons, utilisons et protégeons vos informations personnelles lorsque vous visitez
          ou effectuez un achat sur
          <a href="https://www.calmpurr.com" target="_blank">www.calmpurr.com</a> (le « Site »)
          et lorsque vous communiquez avec nous (collectivement, les « Services »).
        </p>

        <h2>1. Les informations que nous collectons</h2>
        <p><strong>a. Informations que vous fournissez directement</strong></p>
        <p>
          Nous collectons les informations personnelles que vous nous fournissez volontairement lorsque vous créez un compte,
          passez une commande, vous abonnez à notre newsletter ou nous contactez. Cela peut inclure votre nom,
          votre adresse e-mail, votre numéro de téléphone, vos adresses de facturation et de livraison,
          ainsi que vos informations de paiement.
        </p>

        <p><strong>b. Informations collectées automatiquement</strong></p>
        <p>
          Lorsque vous naviguez sur notre Site, nous collectons automatiquement certaines données telles que votre adresse IP,
          le type de navigateur, les informations sur l’appareil et votre historique d’interactions.
          Ces informations nous aident à améliorer les performances du Site et l’expérience utilisateur.
        </p>

        <p><strong>c. Informations provenant de tiers</strong></p>
        <p>
          Nous pouvons recevoir des informations limitées vous concernant de la part de prestataires de paiement,
          de partenaires de livraison ou de services d’analyse, uniquement pour traiter les commandes, prévenir la fraude
          ou améliorer nos Services.
        </p>

        <h2>2. Comment nous utilisons vos informations</h2>
        <p>
          Nous utilisons vos informations personnelles pour traiter vos commandes, gérer le service client,
          envoyer des confirmations et mises à jour de commande, vous communiquer des offres promotionnelles
          (avec votre consentement) et améliorer le fonctionnement de notre Site.
          Nous ne vendons pas vos données personnelles à des tiers.
        </p>

        <h2>3. Partage de vos informations</h2>
        <p>
          Vos données peuvent être partagées uniquement avec des prestataires de services de confiance qui nous aident
          dans des opérations telles que le paiement, la livraison, l’analyse de données ou l’envoi d’e-mails.
          Tous nos partenaires sont tenus de protéger la confidentialité et la sécurité de vos informations.
        </p>

        <h2>4. Conservation et sécurité des données</h2>
        <p>
          Nous conservons vos données personnelles uniquement pendant la durée nécessaire aux finalités décrites ci-dessus.
          CalmPurr utilise le chiffrement HTTPS et des serveurs sécurisés, mais aucun système ne peut être garanti
          comme totalement exempt de risques.
        </p>

        <h2>5. Vos droits et vos choix</h2>
        <p>
          Vous disposez du droit d’accéder à vos informations personnelles, de les corriger ou de demander leur suppression,
          ainsi que de retirer votre consentement à la réception de communications marketing.
        </p>

        <h2>6. Cookies et technologies de suivi</h2>
        <p>
          Nous utilisons des cookies pour mémoriser vos préférences, analyser le trafic et personnaliser le contenu.
          Vous pouvez désactiver les cookies dans les paramètres de votre navigateur, mais certaines fonctionnalités du Site
          pourraient alors ne pas fonctionner correctement.
        </p>

        <h2>7. Protection de la vie privée des enfants</h2>
        <p>
          Notre Site n’est pas destiné aux enfants de moins de 16 ans. Nous ne collectons pas sciemment de données
          personnelles auprès d’enfants. Si vous pensez qu’un enfant nous a transmis des informations, veuillez nous contacter
          afin que nous puissions les supprimer.
        </p>

        <h2>8. Utilisateurs internationaux</h2>
        <p>
          Si vous accédez à nos Services depuis un pays autre que notre principal pays d’exploitation, vos informations
          peuvent être transférées et stockées à l’international. Nous mettons en place les garanties appropriées
          pour assurer la protection de vos données conformément aux lois applicables.
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
