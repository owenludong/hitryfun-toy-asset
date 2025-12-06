<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
       <div class="content-box">
         <h1>Rückgabe- & Erstattungsrichtlinie</h1>

         <h2>30-tägiges Rückgaberecht</h2>
         <p>
           Wir bieten ein 30-tägiges Rückgaberecht. Das bedeutet, dass du innerhalb von 30 Tagen nach Erhalt deiner Bestellung eine Rückgabe anfragen kannst.
         </p>
         <p>
           Damit ein Artikel für eine Rückgabe in Frage kommt, muss er sich im gleichen Zustand befinden,
           in dem du ihn erhalten hast – ungetragen bzw. unbenutzt, mit Etiketten und in der Originalverpackung.
           Außerdem benötigst du die Rechnung oder einen Kaufnachweis.
         </p>

         <h2>So startest du eine Rückgabe</h2>
         <p>
           Um eine Rückgabe zu starten, <strong>erstelle bitte ein Support-Ticket über unsere Website</strong>.
           Du kannst dies auf der Kontakt-/Support-Seite tun.
         </p>
         <p class="subtle">
           Sobald deine Rückgabeanfrage akzeptiert wurde, stellen wir dir ein Rücksendeetikett zur Verfügung
           und senden dir Anweisungen, wie und wohin du das Paket zurückschicken sollst.
           <strong>Artikel, die ohne vorher genehmigte Rückgabeanfrage zurückgesendet werden, können nicht angenommen werden.</strong>
         </p>

         <h2>Beschädigte oder fehlerhafte Artikel</h2>
         <p>
           Bitte überprüfe deine Bestellung direkt nach Erhalt und <strong>erstelle umgehend ein Ticket</strong>,
           falls der Artikel beschädigt, fehlerhaft ist oder du den falschen Artikel erhalten hast,
           damit wir das Problem prüfen und eine Lösung finden können.
         </p>

         <h2>Ausnahmen / Vom Umtausch ausgeschlossene Artikel</h2>
         <p>
           Einige Artikel sind von der Rückgabe ausgeschlossen, darunter unter anderem:
         </p>
         <ul>
           <li><strong>Maßanfertigungen oder personalisierte Produkte</strong> (z. B. Artikel, die nach Foto oder speziell auf Bestellung gefertigt werden)</li>
           <li>Sale-/Abverkaufsartikel sowie Geschenkgutscheine</li>
         </ul>
         <p>
           Wenn du dir nicht sicher bist, ob dein Artikel zurückgegeben werden kann, sende uns bitte vorab ein Ticket.
         </p>

         <h2>Umtausch</h2>
         <p>
           Die schnellste Möglichkeit, einen anderen Artikel zu erhalten, ist, den ursprünglichen Artikel zurückzugeben.
           Sobald deine Rückgabe akzeptiert wurde, kannst du separat eine neue Bestellung für den gewünschten Artikel aufgeben.
         </p>

         <h2>Europäische Union – 14-tägiges Widerrufsrecht</h2>
         <p>
           Wenn deine Bestellung in ein Land der Europäischen Union geliefert wird, hast du das Recht,
           deine Bestellung innerhalb von 14 Tagen ohne Angabe von Gründen zu widerrufen oder zurückzugeben.
           Wie oben beschrieben, muss sich der Artikel im gleichen Zustand befinden, in dem du ihn erhalten hast:
           ungetragen/unbenutzt, mit Etiketten und in der Originalverpackung, und du benötigst einen Kaufnachweis.
         </p>
         <p class="subtle">
           Bitte beachte: Nach EU-Verbraucherrecht gilt das 14-tägige Widerrufsrecht <strong>nicht</strong> für
           <strong>maßgefertigte oder personalisierte Artikel</strong>. Für solche Produkte akzeptieren wir Rückgaben
           nur bei Herstellungsfehlern oder Transportschäden.
         </p>

         <h2>Erstattungen</h2>
         <p>
           Wir informieren dich, sobald wir deine Rücksendung erhalten und geprüft haben, und teilen dir mit,
           ob deine Erstattung genehmigt wurde. Wenn sie genehmigt ist, erstatten wir den Betrag innerhalb von
           <strong>10 Werktagen</strong> auf deine ursprüngliche Zahlungsmethode.
           Je nach Bank oder Kartenanbieter kann es zusätzliche Zeit dauern, bis die Erstattung gutgeschrieben wird.
         </p>
         <p>
           Sollten mehr als <strong>15 Werktage</strong> seit der Genehmigung deiner Rückgabe vergangen sein
           und du noch keine Erstattung erhalten hast, <strong>erstelle bitte ein Support-Ticket auf unserer Website</strong>,
           damit wir dir weiterhelfen können.
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
