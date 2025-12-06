<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
        <div class="content-box">
          <h1>Términos y condiciones</h1>

          <p><strong>Este sitio web es operado por calmpurr.com.</strong></p>
          <p>
            Bienvenido a <strong>CalmPurr</strong> («nosotros» o «nuestro»).
            Estos Términos y condiciones («Términos») regulan el uso que haces de nuestro sitio web
            <a href="https://www.calmpurr.com" target="_blank">www.calmpurr.com</a>
            (el «Sitio») y de cualquier compra, comunicación o servicio relacionado
            (en conjunto, los «Servicios»). Al acceder al Sitio o utilizar los Servicios,
            aceptas quedar sujeto(a) a estos Términos. Si no estás de acuerdo con alguna parte de ellos,
            por favor deja de utilizar el Sitio y nuestros Servicios.
          </p>

          <h2>1. Condiciones de la tienda en línea</h2>
          <p>
            Declaras que eres mayor de edad en tu jurisdicción o que cuentas con el consentimiento de tu padre,
            madre o tutor legal. No puedes utilizar nuestros Servicios para ningún propósito ilegal o no autorizado
            y debes cumplir con todas las leyes y normativas aplicables.
          </p>
          <p>
            No debes transmitir virus, código malicioso ni intentar interferir con la seguridad
            o el funcionamiento del Sitio.
          </p>

          <h2>2. Condiciones generales</h2>
          <p>
            Nos reservamos el derecho, a nuestra entera discreción, de rechazar un servicio, cerrar cuentas,
            eliminar o modificar contenido y cancelar pedidos.
            Los precios, la disponibilidad y las condiciones de envío pueden cambiar sin previo aviso.
            CalmPurr no será responsable de pérdidas derivadas del uso indebido de los Servicios
            o del incumplimiento de estos Términos.
          </p>

          <h2>3. Productos, pedidos y precios</h2>
          <p>
            Nos esforzamos por mostrar descripciones de productos, imágenes y precios de forma precisa,
            pero pueden ocurrir errores de forma ocasional. Después de realizar un pedido,
            recibirás un correo electrónico de confirmación. Tu pedido no se considera aceptado
            hasta que haya sido enviado.
          </p>
          <p>
            Podemos limitar las cantidades disponibles o modificar las condiciones de promociones
            según nuestro criterio.
          </p>

          <h2>4. Productos personalizados</h2>
          <p>
            En el caso de artículos personalizados (por ejemplo, juguetes de silicona basados en tus fotos),
            no podemos garantizar cancelaciones o modificaciones una vez que la producción haya comenzado.
            Las cancelaciones después del inicio de la producción pueden conllevar cargos adicionales
            o ser rechazadas.
          </p>

          <h2>5. Devoluciones y reembolsos</h2>
          <p>
            Por favor consulta nuestra
            <router-link to="/refund-policy">Política de devoluciones y reembolsos</router-link>
            para obtener información detallada sobre los requisitos, el proceso y los plazos.
            Las solicitudes de devolución no autorizadas o presentadas fuera de plazo pueden ser rechazadas.
          </p>

          <h2>6. Propiedad intelectual</h2>
          <p>
            Todo el contenido presente en este Sitio — incluidos textos, gráficos, logotipos, imágenes,
            vídeos y software — es propiedad de CalmPurr o se utiliza bajo licencia,
            y está protegido por las leyes de propiedad intelectual aplicables.
            Puedes ver, descargar o imprimir el contenido únicamente para uso personal y no comercial.
            Cualquier reproducción, modificación o redistribución sin nuestro permiso previo está prohibida.
          </p>

          <h2>7. Contenido generado por el usuario</h2>
          <p>
            Si envías fotos, nombres, comentarios u otros materiales («Contenido de usuario»),
            concedes a CalmPurr una licencia no exclusiva, mundial y libre de regalías para utilizar,
            reproducir y mostrar dicho contenido en relación con la prestación de los Servicios.
            Confirmas que tu contenido no infringe ninguna ley ni los derechos de terceros.
            Nos reservamos el derecho de eliminar cualquier contenido inapropiado a nuestra discreción.
          </p>

          <h2>8. Descargo de responsabilidad y limitación de responsabilidad</h2>
          <p>
            Aunque hacemos todo lo posible por garantizar la calidad y fiabilidad de nuestros Servicios,
            no podemos asegurar un funcionamiento totalmente libre de errores.
            En la máxima medida permitida por la ley, CalmPurr no será responsable de daños indirectos,
            incidentales o consecuentes derivados del uso del Sitio o de los Servicios.
          </p>
          <p>
            Algunas jurisdicciones no permiten la exclusión o limitación de responsabilidad por ciertos daños;
            en esos casos, nuestra responsabilidad se limitará en la medida máxima permitida por la ley.
          </p>

          <h2>9. Ley aplicable y jurisdicción</h2>
          <p>
            Estos Términos y el uso que haces del Sitio se rigen por las leyes del país en el que CalmPurr
            se encuentra registrado. Cualquier disputa se resolverá exclusivamente ante los tribunales competentes
            de dicha jurisdicción.
          </p>

          <h2>10. Divisibilidad</h2>
          <p>
            Si alguna disposición de estos Términos se considera inválida o inaplicable,
            dicha disposición se entenderá separada, y las disposiciones restantes seguirán siendo
            plenamente válidas y aplicables.
          </p>

          <h2>11. Cambios en los Términos</h2>
          <p>
            Podemos actualizar estos Términos en cualquier momento publicando la versión revisada en esta página.
            La fecha de «Última actualización» reflejará los cambios realizados.
            El uso continuado del Sitio después de dichas modificaciones implicará la aceptación
            de los nuevos Términos.
          </p>

          <h2>12. Contacto y soporte</h2>
          <p>
            Si tienes preguntas o dudas sobre estos Términos o sobre nuestros Servicios, envía por favor
            un ticket de soporte a través de la página de Contacto o Soporte de nuestro Sitio.
            Te responderemos lo antes posible.
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
