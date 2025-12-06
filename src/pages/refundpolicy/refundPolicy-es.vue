<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
       <div class="content-box">
         <h1>Política de devoluciones y reembolsos</h1>

         <h2>Plazo de devolución de 30 días</h2>
         <p>
           Contamos con una política de devolución de 30 días. Esto significa que dispones de 30 días desde la recepción de tu pedido para solicitar una devolución.
         </p>
         <p>
           Para que un artículo sea elegible, debe estar en el mismo estado en el que lo recibiste:
           sin usar, sin señales de desgaste, con las etiquetas y en su embalaje original.
           También deberás presentar el recibo o comprobante de compra.
         </p>

         <h2>Cómo iniciar una devolución</h2>
         <p>
           Para iniciar una devolución, por favor <strong>envía un ticket de soporte en nuestra página web</strong>.
           Puedes hacerlo desde la página de Contacto/Soporte.
         </p>
         <p class="subtle">
           Una vez que tu solicitud de devolución haya sido aceptada, te enviaremos una etiqueta de envío de devolución
           y las instrucciones sobre cómo y a qué dirección enviar el paquete.
           <strong>No se aceptarán artículos enviados de vuelta sin una solicitud de devolución previamente aprobada.</strong>
         </p>

         <h2>Artículos dañados o con problemas</h2>
         <p>
           Te pedimos que revises tu pedido en cuanto lo recibas y que <strong>envíes un ticket de inmediato</strong>
           si el artículo está defectuoso, dañado o si has recibido un producto incorrecto, para que podamos evaluar el caso
           y ofrecerte una solución.
         </p>

         <h2>Excepciones / Artículos que no se pueden devolver</h2>
         <p>
           Algunos tipos de artículos no pueden devolverse, incluyendo (entre otros):
         </p>
         <ul>
           <li><strong>Productos personalizados o hechos a medida</strong> (por ejemplo, artículos creados por encargo o a partir de una foto)</li>
           <li>Artículos en oferta/liquidación y tarjetas de regalo</li>
         </ul>
         <p>
           Si tienes dudas sobre si tu artículo es elegible para devolución, por favor consúltanos mediante un ticket antes de enviarlo.
         </p>

         <h2>Cambios</h2>
         <p>
           La forma más rápida de obtener el producto que deseas es devolver el artículo que tienes.
           Una vez aceptada la devolución, podrás realizar un nuevo pedido del producto de reemplazo por separado.
         </p>

         <h2>Unión Europea — Periodo de desistimiento de 14 días</h2>
         <p>
           Si tu pedido se envía a un país de la Unión Europea, tienes derecho a cancelar o devolver tu pedido
           en un plazo de 14 días, por cualquier motivo y sin necesidad de justificación.
           Como se indica más arriba, el artículo debe estar en el mismo estado en que lo recibiste:
           sin usar, con etiquetas y en su embalaje original, y deberás disponer del comprobante de compra.
         </p>
         <p class="subtle">
           Ten en cuenta que, según la normativa de consumo de la UE, el derecho de desistimiento de 14 días
           <strong>no</strong> se aplica a los <strong>artículos personalizados o hechos a medida</strong>.
           En estos casos, solo podremos aceptar devoluciones por defectos de fabricación o daños sufridos durante el transporte.
         </p>

         <h2>Reembolsos</h2>
         <p>
           Te notificaremos cuando hayamos recibido e inspeccionado tu devolución y te informaremos
           si el reembolso ha sido aprobado. Si se aprueba, se emitirá el reembolso a tu método de pago original
           en un plazo de aproximadamente <strong>10 días laborables</strong>.
           Tu banco o el emisor de tu tarjeta puede tardar algo más en reflejar el reembolso.
         </p>
         <p>
           Si han pasado más de <strong>15 días laborables</strong> desde que se aprobó tu devolución
           y aún no has recibido tu reembolso, por favor
           <strong>envía un ticket de soporte en nuestra página web</strong> para que podamos ayudarte.
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
