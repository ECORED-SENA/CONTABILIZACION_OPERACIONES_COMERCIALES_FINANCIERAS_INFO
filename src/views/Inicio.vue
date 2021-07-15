<template lang="pug">
section
  .banner-principal.mb-5
    .container.tarjeta.p-4.p-sm-5(
      :style="{'background-image': `url(${require('@/assets/curso/fondo-banner-principal.png')})`}"
    )
      .row.justify-content-around.align-items-center
        .col-lg-7.col-xxl-6.banner-principal__info
          .banner-principal__programa
            .h1.mb-0 Contabilización de operaciones comerciales y financieras
          
          .h2 Información del programa
          .banner-principal__datos
            ul
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Nombre del programa: 
                p.banner-principal__datos__item__texto Contabilización de operaciones comerciales y financieras
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Código: 
                p.banner-principal__datos__item__texto 133100
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Total Horas: 
                p.banner-principal__datos__item__texto 2208 horas
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Duración en semanas: 
                p.banner-principal__datos__item__texto 14 meses
              li.mb-3.banner-principal__datos__item
                p.h4.mb-0.me-3.banner-principal__datos__item__titulo Modalidad: 
                p.banner-principal__datos__item__texto virtual              

        .d-none.d-lg-block.col-lg-5
          //- img(src="@/assets/curso/banner-princiapal.svg")
          .video
            | <iframe data-v-1f9e4816="" width="560" height="315" src="https://www.youtube.com/embed/tQrEK7qJgvk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="allowfullscreen"></iframe>          

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 1. Presentación

    p.mb-0 El SENA le da un cordial y fraterno saludo de bienvenida al programa de formación Técnico en Contabilización de operaciones comerciales y financieras, el cual le brinda una formación profesional integral, desde el saber ser, el saber y el saber hacer, desarrollando habilidades y destrezas que le permitirán sobresalir y ser competitivo en el campo laboral, en aras de ser un ejemplo a seguir, para lograr una sociedad justa, comprometida y con responsabilidad social.
      br
      br
      | El objetivo del programa de contabilización de operaciones comerciales y financieras es aplicar actividades dinámicas que permitan desarrollar las competencias contables, tributarias, laborales, financieras, administrativas y sociales adquiridas a lo largo de la formación académica, para mejorar las opciones laborales en el desarrollo de competencias comportamentales inmersas en el saber, saber hacer y el ser.
      br
      br
      | En el ejercicio de la práctica, el aprendiz puede desempeñarse laboralmente apoyando operaciones financieras, con capacidad crítica, emprendedora e innovadora para adaptarse a las tendencias tecnológicas y requerimientos en el sector productivo, lo cual le permite aportar positivamente a la productividad y la competitividad, la legalidad, la equidad y el desarrollo del país.
      br
      br
      | A través del desarrollo de competencias laborales alcanzadas con la formación teórico-práctica, y cumpliendo con las condiciones requeridas, se otorga la certificación como Técnico profesional en contabilización de operaciones comerciales y financieras; contando con una fácil inserción al mercado laboral, desempeñándose como técnico profesional en el área contable y financiera, con una visión integral, aplicando estándares internacionales de información financiera, impuestos y comercial, utilizando las tecnologías de la información y la comunicación para dar respuesta a las necesidades de los diferentes sectores productivos a nivel nacional e internacional.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 2. Justificación<br>del programa

    p.mb-0 El Estado colombiano, preocupado por dar respuesta al área ocupacional de finanzas y administración de los diferentes sectores productivos, a las necesidades sociales, al emprendimiento, y cumpliendo un papel importante en la formación laboral del capital humano, generando así oportunidades para la inclusión social y laboral requerida para alcanzar el crecimiento y desarrollo socioeconómico, encomienda esta misión al SENA, institución educativa que ofrece programas con todos los elementos de formación profesional integral técnica y tecnológica. 
      br
      br
      | Por lo anterior, crea el programa Técnico en contabilización de operaciones comerciales y financieras, para brindar a los diferentes sectores de la economía nacional e internacional la posibilidad de incorporar personal con un mayor nivel de cualificación, estructurado para que el aprendiz se pueda desempeñar laboralmente apoyando operaciones de contabilidad, caja, cuentas por cobrar, facturación, tesorería, nómina y prestaciones sociales; con una visión integral, aplicando normas internacionales de contabilidad y de información financiera, utilizando las tecnologías de la información y la comunicación, para desempeñarse en cualquier tipo de empresa a nivel nacional e internacional. 
      br
      br
      | Además, el programa incorpora competencias comportamentales inmersas en el saber, hacer y el ser, potenciando la formación de ciudadanos con capacidad crítica, solidarios y emprendedores, a través del desarrollo de competencias laborales alcanzadas con la formación práctica, que garantiza la integralidad de la formación durante el desarrollo del proceso formativo, pertinente, coherente con su proyecto de vida, las necesidades del sector productivo y de la sociedad en general. Generando en los aprendices, una capacidad emprendedora e innovadora para adaptarse a las tendencias tecnológicas y requerimientos sociales, lo cual le permite aportar positivamente a la productividad, la competitividad, la legalidad, la equidad y el desarrollo del país.


  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 3. Competencias <br>a desarrollar

    p #[strong Competencias técnicas o específicas:]
    ul.lista-ul--color.mb-4
      li
        i.lista-ul__vineta
        | 210303022 - Reconocer recursos financieros de acuerdo con metodología y normativa.
      li
        i.lista-ul__vineta
        | 210601020 - Atender clientes de acuerdo con procedimiento de servicio y normativa.
      li
        i.lista-ul__vineta
        | Resultados de Aprendizaje Etapa Práctica.

    p #[strong Competencias transversales:]
    ul.lista-ul--color.mb-4
      li
        i.lista-ul__vineta
        | 240201530 - Competencia de la inducción.
      li
        i.lista-ul__vineta
        | 220601501 - Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo, de acuerdo con las políticas organizacionales y la normatividad vigente. Medio ambiente, salud y seguridad.
      li
        i.lista-ul__vineta
        | 230101507 - Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales. Actividad física y hábitos de vida saludable.
      li
        i.lista-ul__vineta
        | 240201529 - Gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos de los contextos productivo y social. Cultura emprendedora y empresarial.
      li
        i.lista-ul__vineta
        | 240201526 - Enrique Low Murtra-Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz. Ética para la construcción de una cultura de paz.
      li
        i.lista-ul__vineta
        | 210201501 - Ejercer derechos fundamentales del trabajo en el marco de la Constitución Política y los convenios internacionales. Derechos fundamentales del trabajo.

    p #[strong Competencias claves:]
    ul.lista-ul--color
      li
        i.lista-ul__vineta
        | 240201528 - Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales. Matemáticas.
      li
        i.lista-ul__vineta
        | 240201528 - Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales. Matemáticas.
      li
        i.lista-ul__vineta
        | 240201528 - Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales. Matemáticas.
      li
        i.lista-ul__vineta
        | 240201528 - Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales. Matemáticas.



  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 4. Perfil de ingreso

    ul.lista-ul--color.mb-0
      li
        i.fas.fa-check
        | Superar la prueba de aptitud, motivación, interés y competencias mínimas de ingreso
      li
        i.fas.fa-check
        | Contar con certificado académico de grado 9°
      li.mb-0
        i.fas.fa-check
        | Ser mayor de 14 años

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 5. Perfil de egreso

    ul.lista-ul--color
      p.mb-0 El Técnico en contabilización de operaciones comerciales y financieras está en capacidad de verificar, seleccionar, reconocer y medir hechos económicos presentados en las organizaciones bajo normatividad vigente, diligenciar soportes contables y libros con parámetros técnicos y normatividad contable.
        br
        br
        | Podrá clasificar los tributos generados en la organización de acuerdo con la normatividad técnica y apoyar en la verificación de la información contable. Además, estará en capacidad de producir, diligenciar, clasificar y verificar documentos de acuerdo con los procedimientos técnicos.
        br
        br
        | Se podrá desempeñar en el cargo de auxiliar de cuentas por cobrar, auxiliar de cuentas por pagar, auxiliar de tesorería, auxiliar de facturación, auxiliar de contabilidad de costos, auxiliar contable, demostrando responsabilidad, trabajo en equipo, proactividad, calidad de servicio al cliente, manejo de tecnologías de la información y la comunicación en empresas públicas y privadas.

  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 6. Estrategia metodológica

    p Centrada en la construcción de autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportada en la utilización de las tecnologías de la información y la comunicación; integrada en ambientes abiertos y pluritecnológicos que, en todo caso, recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias.
      br
      br
      | Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento.
    
    ul.lista-ul--color.mb-0
      li
        i.fas.fa-chevron-right
        | El instructor – Tutor
      li
        i.fas.fa-chevron-right
        | El entorno
      li
        i.fas.fa-chevron-right
        | Las TIC
      li
        i.fas.fa-chevron-right
        | El trabajo colaborativo



  //- Créditos
  .container.tarjeta.tarjeta__template--azul-claro.p-4.p-md-5.mb-5(data-aos="fade-up")
    .titulo__template--a.mb-4
      span.h4 Créditos

    
    .creditos
      div(
        v-for="(creditoKey, index) of Object.keys(creditosData)"
        :class="index != Object.keys(creditosData).length -1 ? 'mb-4' : ''" 
      )
        .creditos__titulo {{configTitulos[creditoKey]}}
        table
          tbody
            tr(
              v-for="(item, idx) of creditosData[creditoKey]" 
              :key="creditoKey+idx"
            )
              td.text-bold(colspan='2' v-html="renderText(item.nombre)")
              td(colspan='2' v-html="renderText(item.cargo)")
              td(colspan='3' v-html="renderText(item.centro)")

  Footer

</template>
<script>
export default {
  name: 'Inicio',
  data: () => ({
    configTitulos: {
      liderEquipo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      contenidoInstruccional: 'CONTENIDO INSTRUCCIONAL',
      desarrolloProducto:
        'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      gestoresRepositorio: 'GESTORES DE REPOSITORIO',
    },
  }),
  computed: {
    creditosData() {
      return this.$config.creditos
    },
  },
  methods: {
    renderText(textObj) {
      let newText = ''
      if (Array.isArray(textObj)) {
        textObj.forEach((texto, index) => {
          newText += (index ? '<br/>' : '') + texto
        })
      } else {
        newText += textObj
      }
      return newText
    },
  },
}
</script>

<style lang="sass">
.creditos
  td, th
    border-color: $color-sistema-c
</style>
