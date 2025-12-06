<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
       <div class="content-box">
         <h1>Conditions générales d’utilisation</h1>

         <p><strong>Ce site web est exploité par calmpurr.com.</strong></p>
         <p>
           Bienvenue sur <strong>CalmPurr</strong> (« nous », « notre » ou « nos »).
           Les présentes Conditions générales d’utilisation (« Conditions ») régissent votre utilisation de notre site
           <a href="https://www.calmpurr.com" target="_blank">www.calmpurr.com</a>
           (le « Site ») ainsi que tout achat, communication ou service associé
           (collectivement, les « Services »). En accédant au Site ou en utilisant les Services,
           vous acceptez d’être lié(e) par ces Conditions. Si vous n’acceptez pas une partie de ces Conditions,
           veuillez cesser d’utiliser le Site et nos Services.
         </p>

         <h2>1. Conditions liées à la boutique en ligne</h2>
         <p>
           Vous déclarez être majeur(e) dans votre pays de résidence ou disposer de l’autorisation de votre
           parent ou représentant légal. Vous ne pouvez pas utiliser nos Services à des fins illégales ou non autorisées
           et vous devez respecter l’ensemble des lois et réglementations applicables.
         </p>
         <p>
           Il vous est interdit de transmettre des virus, du code malveillant ou de tenter de nuire à la sécurité
           ou au bon fonctionnement du Site.
         </p>

         <h2>2. Conditions générales</h2>
         <p>
           Nous nous réservons le droit de refuser un service, de fermer des comptes, de supprimer ou de modifier du contenu
           et d’annuler des commandes, à notre seule discrétion. Les prix, la disponibilité des produits et les conditions
           de livraison peuvent être modifiés à tout moment sans préavis.
           CalmPurr ne saurait être tenu responsable des pertes résultant d’une utilisation abusive des Services
           ou d’une violation des présentes Conditions.
         </p>

         <h2>3. Produits, commandes et prix</h2>
         <p>
           Nous nous efforçons de présenter des descriptions de produits, des images et des prix aussi précis que possible,
           mais des erreurs peuvent occasionnellement survenir. Après avoir passé une commande, vous recevrez
           un e-mail de confirmation. Votre commande n’est considérée comme acceptée qu’au moment de son expédition.
         </p>
         <p>
           Nous pouvons, à notre discrétion, limiter les quantités disponibles ou modifier les conditions
           de certaines promotions.
         </p>

         <h2>4. Produits personnalisés et sur mesure</h2>
         <p>
           Pour les articles personnalisés ou réalisés sur mesure (par exemple, des jouets en silicone créés à partir de vos photos),
           l’annulation ou la modification d’une commande ne peut pas être garantie une fois la production lancée.
           Les annulations après le début de la production peuvent entraîner des frais supplémentaires ou être refusées.
         </p>

         <h2>5. Retours et remboursements</h2>
         <p>
           Veuillez consulter notre
           <router-link to="/refund-policy">Politique de retour et de remboursement</router-link>
           pour connaître en détail les conditions d’éligibilité, les procédures et les délais.
           Toute demande de retour non autorisée ou tardive pourra être refusée.
         </p>

         <h2>6. Propriété intellectuelle</h2>
         <p>
           L’ensemble des contenus présents sur le Site — y compris les textes, graphiques, logos, images, vidéos
           et logiciels — est la propriété de CalmPurr ou utilisé sous licence, et protégé par les lois applicables
           en matière de propriété intellectuelle.
           Vous pouvez afficher, télécharger ou imprimer ces contenus pour un usage strictement personnel et non commercial.
           Toute reproduction, modification ou redistribution sans autorisation préalable est interdite.
         </p>

         <h2>7. Contenu généré par les utilisateurs</h2>
         <p>
           Si vous soumettez des photos, noms, commentaires ou autres éléments (« Contenu utilisateur »),
           vous accordez à CalmPurr une licence non exclusive, mondiale et sans redevance
           pour utiliser, reproduire et afficher ce contenu dans le cadre de la fourniture des Services.
           Vous garantissez que votre contenu ne viole aucune loi ni les droits de tiers.
           Nous nous réservons le droit de supprimer tout contenu jugé inapproprié, à notre discrétion.
         </p>

         <h2>8. Clause de non-responsabilité et limitation de responsabilité</h2>
         <p>
           Bien que nous mettions tout en œuvre pour assurer la qualité et la fiabilité de nos Services,
           nous ne garantissons pas l’absence totale d’erreurs ou d’interruptions.
           Dans toute la mesure permise par la loi, CalmPurr ne pourra être tenu responsable
           des dommages indirects, accessoires ou consécutifs résultant de votre utilisation du Site
           ou des Services.
         </p>
         <p>
           Certaines juridictions n’autorisent pas l’exclusion ou la limitation de responsabilité pour certains types de dommages.
           Dans ces cas, notre responsabilité est limitée dans la mesure maximale autorisée par la loi.
         </p>

         <h2>9. Droit applicable et juridiction</h2>
         <p>
           Les présentes Conditions ainsi que votre utilisation du Site sont régies par les lois du pays
           dans lequel CalmPurr est enregistré. Tout litige sera soumis exclusivement aux tribunaux compétents
           de cette juridiction.
         </p>

         <h2>10. Divisibilité</h2>
         <p>
           Si une disposition des présentes Conditions est jugée invalide ou inapplicable, cette disposition
           sera considérée comme dissociable, et les autres dispositions resteront pleinement valides et applicables.
         </p>

         <h2>11. Modifications des Conditions</h2>
         <p>
           Nous pouvons mettre à jour ces Conditions à tout moment en publiant une version révisée sur cette page.
           La date de « dernière mise à jour » indiquera quand des changements ont été effectués.
           Votre utilisation continue du Site après ces modifications vaut acceptation des nouvelles Conditions.
         </p>

         <h2>12. Contact et support</h2>
         <p>
           Pour toute question ou préoccupation concernant ces Conditions ou nos Services, veuillez soumettre
           un ticket d’assistance via la page Contact ou Support de notre Site. Nous vous répondrons dans les meilleurs délais.
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
