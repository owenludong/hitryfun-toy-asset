<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
       <div class="content-box">
         <h1>Datenschutzerklärung</h1>

         <p>
           Vielen Dank für deinen Besuch bei <strong>CalmPurr</strong> („CalmPurr“, „wir“, „uns“ oder „unser“).
           Der Schutz deiner Privatsphäre ist uns sehr wichtig. In dieser Datenschutzerklärung erklären wir,
           wie wir deine personenbezogenen Daten erfassen, verwenden und schützen, wenn du unsere Website besuchst
           oder einen Kauf tätigst unter
           <a href="https://www.calmpurr.com" target="_blank">www.calmpurr.com</a> (die „Website“)
           und wenn du mit uns kommunizierst (zusammen die „Dienste“).
         </p>

         <h2>1. Welche Daten wir erfassen</h2>
         <p><strong>a. Daten, die du uns direkt zur Verfügung stellst</strong></p>
         <p>
           Wir erfassen personenbezogene Daten, die du uns freiwillig zur Verfügung stellst, wenn du ein Konto erstellst,
           eine Bestellung aufgibst, unseren Newsletter abonnierst oder uns kontaktierst. Dazu können dein Name,
           deine E-Mail-Adresse, Telefonnummer, Rechnungs- und Versandadresse sowie Zahlungsdaten gehören.
         </p>

         <p><strong>b. Daten, die automatisch erfasst werden</strong></p>
         <p>
           Wenn du unsere Website besuchst, erfassen wir automatisch bestimmte Informationen wie IP-Adresse,
           Browsertyp, Geräteinformationen und dein Nutzungsverhalten. Diese Daten helfen uns, die Leistung
           unserer Website zu verbessern und das Nutzererlebnis zu optimieren.
         </p>

         <p><strong>c. Daten von Drittanbietern</strong></p>
         <p>
           Wir können begrenzte Informationen über dich von Zahlungsdienstleistern, Versandpartnern oder
           Analyseanbietern erhalten – ausschließlich zur Bestellabwicklung, Betrugsprävention oder zur
           Verbesserung unserer Dienste.
         </p>

         <h2>2. Wie wir deine Daten verwenden</h2>
         <p>
           Wir verwenden deine personenbezogenen Daten, um Bestellungen zu bearbeiten, den Kundenservice
           sicherzustellen, Bestellbestätigungen und Status-Updates zu versenden, dir (mit deiner Einwilligung)
           Aktionen und Angebote mitzuteilen und die Funktionalität unserer Website zu verbessern.
           Wir verkaufen deine personenbezogenen Daten nicht an Dritte.
         </p>

         <h2>3. Weitergabe deiner Daten</h2>
         <p>
           Deine Daten werden nur an vertrauenswürdige Dienstleister weitergegeben, die uns bei Vorgängen wie
           Zahlungsabwicklung, Versand, Datenanalyse oder E-Mail-Versand unterstützen.
           Diese Partner sind verpflichtet, deine Daten sicher und vertraulich zu behandeln.
         </p>

         <h2>4. Aufbewahrung und Sicherheit der Daten</h2>
         <p>
           Wir bewahren deine personenbezogenen Daten nur so lange auf, wie es für die oben beschriebenen Zwecke
           erforderlich ist. CalmPurr verwendet HTTPS-Verschlüsselung und sichere Server, dennoch kann kein System
           einen absoluten Schutz vor allen Risiken garantieren.
         </p>

         <h2>5. Deine Rechte und Wahlmöglichkeiten</h2>
         <p>
           Du hast das Recht, Auskunft über deine personenbezogenen Daten zu erhalten, sie zu korrigieren oder löschen
           zu lassen sowie deine Einwilligung für Marketing-Mitteilungen zu widerrufen.
         </p>

         <h2>6. Cookies und Tracking-Technologien</h2>
         <p>
           Wir verwenden Cookies, um deine Einstellungen zu speichern, den Datenverkehr zu analysieren und Inhalte
           zu personalisieren. Du kannst Cookies in deinem Browser deaktivieren, allerdings funktionieren manche
           Bereiche unserer Website dann möglicherweise nicht mehr vollständig.
         </p>

         <h2>7. Datenschutz bei Kindern</h2>
         <p>
           Unsere Website richtet sich nicht an Kinder unter 16 Jahren. Wir erfassen wissentlich keine
           personenbezogenen Daten von Kindern. Wenn du glaubst, dass uns ein Kind Daten zur Verfügung gestellt hat,
           kontaktiere uns bitte, damit wir diese umgehend löschen können.
         </p>

         <h2>8. Internationale Nutzer</h2>
         <p>
           Wenn du unsere Dienste von außerhalb unseres primären Betriebslandes nutzt, können deine Daten
           international übertragen und gespeichert werden. Wir stellen sicher, dass geeignete Schutzmaßnahmen
           zum Datenschutz gemäß den geltenden gesetzlichen Bestimmungen getroffen werden.
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
