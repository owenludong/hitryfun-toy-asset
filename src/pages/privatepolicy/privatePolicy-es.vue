<template>
  <div class="page-container">
    <my-header />
    <div class="page-content">
      <div class="content-box">
        <h1>Política de privacidad</h1>

        <p>
          Gracias por visitar <strong>CalmPurr</strong> («CalmPurr», «nosotros» o «nuestro»).
          Tu privacidad es muy importante para nosotros. Esta Política de privacidad explica cómo recopilamos,
          utilizamos y protegemos tu información personal cuando visitas o realizas una compra en
          <a href="https://www.calmpurr.com" target="_blank">www.calmpurr.com</a> (el «Sitio»)
          y cuando te comunicas con nosotros (en conjunto, los «Servicios»).
        </p>

        <h2>1. Información que recopilamos</h2>
        <p><strong>a. Información que proporcionas directamente</strong></p>
        <p>
          Recopilamos la información personal que nos proporcionas de forma voluntaria cuando creas una cuenta,
          realizas un pedido, te suscribes a nuestro boletín o nos contactas. Esto puede incluir tu nombre,
          dirección de correo electrónico, número de teléfono, direcciones de facturación y envío,
          y datos de pago.
        </p>

        <p><strong>b. Información recopilada automáticamente</strong></p>
        <p>
          Cuando navegas por nuestro Sitio, recopilamos automáticamente ciertos datos como tu dirección IP,
          tipo de navegador, información del dispositivo y tu historial de interacción. Estos datos nos ayudan
          a mejorar el rendimiento del Sitio y la experiencia de usuario.
        </p>

        <p><strong>c. Información de terceros</strong></p>
        <p>
          Podemos recibir información limitada sobre ti de pasarelas de pago, socios de envío o proveedores de analítica,
          únicamente para procesar pedidos, prevenir fraudes o mejorar nuestros Servicios.
        </p>

        <h2>2. Cómo utilizamos tu información</h2>
        <p>
          Utilizamos tu información personal para procesar pedidos, gestionar la atención al cliente,
          enviarte confirmaciones y actualizaciones de pedidos, comunicar promociones (con tu consentimiento)
          y mejorar la funcionalidad de nuestro Sitio.
          No vendemos tus datos personales a terceros.
        </p>

        <h2>3. Cómo compartimos tu información</h2>
        <p>
          Tus datos pueden compartirse solo con proveedores de servicios de confianza que nos ayudan con tareas como
          el procesamiento de pagos, el envío, el análisis de datos o el envío de correos electrónicos.
          Todos estos socios están obligados a mantener la seguridad y confidencialidad de tu información.
        </p>

        <h2>4. Conservación y seguridad de los datos</h2>
        <p>
          Conservamos tu información personal únicamente durante el tiempo necesario para los fines descritos anteriormente.
          CalmPurr utiliza cifrado HTTPS y servidores seguros, pero ningún sistema puede garantizar una protección
          absoluta frente a todos los riesgos.
        </p>

        <h2>5. Tus derechos y opciones</h2>
        <p>
          Tienes derecho a acceder, corregir o solicitar la eliminación de tus datos personales,
          así como a retirar tu consentimiento para recibir comunicaciones de marketing.
        </p>

        <h2>6. Cookies y tecnologías de seguimiento</h2>
        <p>
          Utilizamos cookies para recordar tus preferencias, analizar el tráfico y personalizar el contenido.
          Puedes desactivar las cookies desde la configuración de tu navegador, pero algunas funciones del Sitio
          podrían dejar de funcionar correctamente.
        </p>

        <h2>7. Privacidad de los menores</h2>
        <p>
          Nuestro Sitio no está dirigido a menores de 16 años. No recopilamos de forma consciente datos personales
          de niños. Si crees que un menor nos ha proporcionado información, ponte en contacto con nosotros
          para que podamos eliminarla.
        </p>

        <h2>8. Usuarios internacionales</h2>
        <p>
          Si utilizas nuestros Servicios desde fuera de nuestro principal país de operación, tu información puede
          ser transferida y almacenada a nivel internacional. Aplicamos las medidas de protección adecuadas para
          garantizar la seguridad de tus datos de acuerdo con la legislación aplicable.
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
