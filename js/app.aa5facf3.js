(function(a){function e(e){for(var t,n,c=e[0],s=e[1],l=e[2],d=0,u=[];d<c.length;d++)n=c[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&u.push(r[n][0]),r[n]=0;for(t in s)Object.prototype.hasOwnProperty.call(s,t)&&(a[t]=s[t]);p&&p(e);while(u.length)u.shift()();return o.push.apply(o,l||[]),i()}function i(){for(var a,e=0;e<o.length;e++){for(var i=o[e],t=!0,n=1;n<i.length;n++){var c=i[n];0!==r[c]&&(t=!1)}t&&(o.splice(e--,1),a=s(s.s=i[0]))}return a}var t={},n={app:0},r={app:0},o=[];function c(a){return s.p+"js/"+({}[a]||a)+"."+{"chunk-0206bfa0":"c4f45331","chunk-027270b8":"1a98e312","chunk-04b93936":"8a5781d1","chunk-0cc9fca2":"f3025ea7","chunk-13a6037e":"27079a13","chunk-2c06842c":"a33809da","chunk-2d208d90":"36453f58","chunk-2d21d0e2":"78d823e9","chunk-2d22c123":"4bb049ae","chunk-2e80bb9a":"e977fea7","chunk-43bc8300":"bbfb90f1","chunk-4cdd78c0":"e21c3854","chunk-4ebcb52d":"24d91454","chunk-515a8379":"9431eeba","chunk-53ccb27e":"cb8bc9ca","chunk-5855c82e":"6f551a60","chunk-7781d802":"55c5a79e","chunk-7c83fc0b":"818d626b","chunk-839300a6":"351e947a","chunk-b6ac33c0":"1c3796f6","chunk-c796899c":"1167df84","chunk-d9f92dce":"86df48de"}[a]+".js"}function s(e){if(t[e])return t[e].exports;var i=t[e]={i:e,l:!1,exports:{}};return a[e].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(a){var e=[],i={"chunk-027270b8":1,"chunk-04b93936":1,"chunk-0cc9fca2":1,"chunk-43bc8300":1,"chunk-4ebcb52d":1,"chunk-515a8379":1,"chunk-5855c82e":1,"chunk-7781d802":1,"chunk-7c83fc0b":1,"chunk-839300a6":1,"chunk-b6ac33c0":1,"chunk-d9f92dce":1};n[a]?e.push(n[a]):0!==n[a]&&i[a]&&e.push(n[a]=new Promise((function(e,i){for(var t="css/"+({}[a]||a)+"."+{"chunk-0206bfa0":"31d6cfe0","chunk-027270b8":"239be14b","chunk-04b93936":"2cd5135e","chunk-0cc9fca2":"d035a47c","chunk-13a6037e":"31d6cfe0","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-43bc8300":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-4ebcb52d":"1dbe8d4a","chunk-515a8379":"0459bc8c","chunk-53ccb27e":"31d6cfe0","chunk-5855c82e":"d035a47c","chunk-7781d802":"49fc7758","chunk-7c83fc0b":"d035a47c","chunk-839300a6":"b67dc245","chunk-b6ac33c0":"d035a47c","chunk-c796899c":"31d6cfe0","chunk-d9f92dce":"d035a47c"}[a]+".css",r=s.p+t,o=document.getElementsByTagName("link"),c=0;c<o.length;c++){var l=o[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===t||d===r))return e()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===t||d===r)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var t=e&&e.target&&e.target.src||r,o=new Error("Loading CSS chunk "+a+" failed.\n("+t+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=t,delete n[a],p.parentNode.removeChild(p),i(o)},p.href=r;var m=document.getElementsByTagName("head")[0];m.appendChild(p)})).then((function(){n[a]=0})));var t=r[a];if(0!==t)if(t)e.push(t[2]);else{var o=new Promise((function(e,i){t=r[a]=[e,i]}));e.push(t[2]=o);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(a);var u=new Error;l=function(e){d.onerror=d.onload=null,clearTimeout(p);var i=r[a];if(0!==i){if(i){var t=e&&("load"===e.type?"missing":e.type),n=e&&e.target&&e.target.src;u.message="Loading chunk "+a+" failed.\n("+t+": "+n+")",u.name="ChunkLoadError",u.type=t,u.request=n,i[1](u)}r[a]=void 0}};var p=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(e)},s.m=a,s.c=t,s.d=function(a,e,i){s.o(a,e)||Object.defineProperty(a,e,{enumerable:!0,get:i})},s.r=function(a){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(a,"__esModule",{value:!0})},s.t=function(a,e){if(1&e&&(a=s(a)),8&e)return a;if(4&e&&"object"===typeof a&&a&&a.__esModule)return a;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:a}),2&e&&"string"!=typeof a)for(var t in a)s.d(i,t,function(e){return a[e]}.bind(null,t));return i},s.n=function(a){var e=a&&a.__esModule?function(){return a["default"]}:function(){return a};return s.d(e,"a",e),e},s.o=function(a,e){return Object.prototype.hasOwnProperty.call(a,e)},s.p="",s.oe=function(a){throw console.error(a),a};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var p=d;o.push([0,"chunk-vendors"]),i()})({0:function(a,e,i){a.exports=i("56d7")},"56d7":function(a,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var t=i("68f3"),n=function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"app",attrs:{id:"app"}},[a._m(0),i("div",{staticClass:"contenedor-principal"},[i("section",{staticClass:"seccion-principal"},[i("Inicio")],1)])])},r=[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("header",{staticClass:"header"},[t("div",{staticClass:"container"},[t("div",{staticClass:"row align-items-center justify-content-between"},[t("div",{staticClass:"col col-sm-auto d-flex align-items-center justify-content-between justify-content-sm-star"},[t("img",{staticClass:"header__logo me-sm-5",attrs:{src:i("9eb5")}})])])])])}],o=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("section",[t("div",{staticClass:"banner-principal mb-5"},[t("div",{staticClass:"container tarjeta p-4 p-sm-5",style:{"background-image":"url("+i("e6b0")+")"}},[a._m(0)])]),a._m(1),a._m(2),a._m(3),a._m(4),a._m(5),a._m(6),t("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[a._m(7),t("div",{staticClass:"creditos"},a._l(Object.keys(a.creditosData),(function(e,i){return t("div",{class:i!=Object.keys(a.creditosData).length-1?"mb-4":""},[t("div",{staticClass:"creditos__titulo"},[a._v(a._s(a.configTitulos[e]))]),t("table",[t("tbody",a._l(a.creditosData[e],(function(i,n){return t("tr",{key:e+n},[t("td",{staticClass:"text-bold",attrs:{colspan:"2"},domProps:{innerHTML:a._s(a.renderText(i.nombre))}}),t("td",{attrs:{colspan:"2"},domProps:{innerHTML:a._s(a.renderText(i.cargo))}}),t("td",{attrs:{colspan:"3"},domProps:{innerHTML:a._s(a.renderText(i.centro))}})])})),0)])])})),0)]),t("Footer")],1)},c=[function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"row justify-content-around align-items-center"},[i("div",{staticClass:"col-lg-7 col-xxl-6 banner-principal__info"},[i("div",{staticClass:"banner-principal__programa"},[i("div",{staticClass:"h1 mb-0"},[a._v("Contabilización de operaciones comerciales y financieras")])]),i("div",{staticClass:"h2"},[a._v("Información del programa")]),i("div",{staticClass:"banner-principal__datos"},[i("ul",[i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Nombre del programa: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("Contabilización de operaciones comerciales y financieras")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Código: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("133100")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Total: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("2208 horas")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Duración: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("15 meses")])]),i("li",{staticClass:"mb-3 banner-principal__datos__item"},[i("p",{staticClass:"h4 mb-0 me-3 banner-principal__datos__item__titulo"},[a._v("Modalidad: ")]),i("p",{staticClass:"banner-principal__datos__item__texto"},[a._v("virtual ")])])])])]),i("div",{staticClass:"d-none d-lg-block col-lg-5"},[i("div",{staticClass:"video"},[i("iframe",{attrs:{"data-v-1f9e4816":"",width:"560",height:"315",src:"https://www.youtube.com/embed/hMa7z8ltG24",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:"allowfullscreen"}})])])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[a._v("1. Presentación")])]),i("p",{staticClass:"mb-0"},[a._v("El SENA le da un cordial y fraterno saludo de bienvenida al programa de formación Técnico en Contabilización de operaciones comerciales y financieras, el cual le brinda una formación profesional integral, desde el saber ser, el saber y el saber hacer, desarrollando habilidades y destrezas que le permitirán sobresalir y ser competitivo en el campo laboral, en aras de ser un ejemplo a seguir, para lograr una sociedad justa, comprometida y con responsabilidad social."),i("br"),i("br"),a._v("El objetivo del programa de contabilización de operaciones comerciales y financieras es aplicar actividades dinámicas que permitan desarrollar las competencias contables, tributarias, laborales, financieras, administrativas y sociales adquiridas a lo largo de la formación académica, para mejorar las opciones laborales en el desarrollo de competencias comportamentales inmersas en el saber, saber hacer y el ser."),i("br"),i("br"),a._v("En el ejercicio de la práctica, el aprendiz puede desempeñarse laboralmente apoyando operaciones financieras, con capacidad crítica, emprendedora e innovadora para adaptarse a las tendencias tecnológicas y requerimientos en el sector productivo, lo cual le permite aportar positivamente a la productividad y la competitividad, la legalidad, la equidad y el desarrollo del país."),i("br"),i("br"),a._v("A través del desarrollo de competencias laborales alcanzadas con la formación teórico-práctica, y cumpliendo con las condiciones requeridas, se otorga la certificación como Técnico profesional en contabilización de operaciones comerciales y financieras; contando con una fácil inserción al mercado laboral, desempeñándose como técnico profesional en el área contable y financiera, con una visión integral, aplicando estándares internacionales de información financiera, impuestos y comercial, utilizando las tecnologías de la información y la comunicación para dar respuesta a las necesidades de los diferentes sectores productivos a nivel nacional e internacional.")])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[a._v("2. Justificación"),i("br"),a._v("del programa")])]),i("p",{staticClass:"mb-0"},[a._v("El Estado colombiano, preocupado por dar respuesta al área ocupacional de finanzas y administración de los diferentes sectores productivos, a las necesidades sociales, al emprendimiento, y cumpliendo un papel importante en la formación laboral del capital humano, generando así oportunidades para la inclusión social y laboral requerida para alcanzar el crecimiento y desarrollo socioeconómico, encomienda esta misión al SENA, institución educativa que ofrece programas con todos los elementos de formación profesional integral técnica y tecnológica. "),i("br"),i("br"),a._v("Por lo anterior, crea el programa Técnico en contabilización de operaciones comerciales y financieras, para brindar a los diferentes sectores de la economía nacional e internacional la posibilidad de incorporar personal con un mayor nivel de cualificación, estructurado para que el aprendiz se pueda desempeñar laboralmente apoyando operaciones de contabilidad, caja, cuentas por cobrar, facturación, tesorería, nómina y prestaciones sociales; con una visión integral, aplicando normas internacionales de contabilidad y de información financiera, utilizando las tecnologías de la información y la comunicación, para desempeñarse en cualquier tipo de empresa a nivel nacional e internacional. "),i("br"),i("br"),a._v("Además, el programa incorpora competencias comportamentales inmersas en el saber, hacer y el ser, potenciando la formación de ciudadanos con capacidad crítica, solidarios y emprendedores, a través del desarrollo de competencias laborales alcanzadas con la formación práctica, que garantiza la integralidad de la formación durante el desarrollo del proceso formativo, pertinente, coherente con su proyecto de vida, las necesidades del sector productivo y de la sociedad en general. Generando en los aprendices, una capacidad emprendedora e innovadora para adaptarse a las tendencias tecnológicas y requerimientos sociales, lo cual le permite aportar positivamente a la productividad, la competitividad, la legalidad, la equidad y el desarrollo del país.")])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[a._v("3. Competencias "),i("br"),a._v("a desarrollar")])]),i("p",[i("strong",[a._v("Competencias técnicas o específicas:")])]),i("ul",{staticClass:"lista-ul--color mb-4"},[i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("210303022 - Reconocer recursos financieros de acuerdo con metodología y normativa.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("210601020 - Atender clientes de acuerdo con procedimiento de servicio y normativa.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("Resultados de Aprendizaje Etapa Práctica.")])]),i("p",[i("strong",[a._v("Competencias transversales:")])]),i("ul",{staticClass:"lista-ul--color mb-4"},[i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("240201530 - Competencia de la inducción.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("220601501 - Aplicar prácticas de protección ambiental, seguridad y salud en el trabajo, de acuerdo con las políticas organizacionales y la normatividad vigente. Medio ambiente, salud y seguridad.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("230101507 - Generar hábitos saludables de vida mediante la aplicación de programas de actividad física en los contextos productivos y sociales. Actividad física y hábitos de vida saludable.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("240201529 - Gestionar procesos propios de la cultura emprendedora y empresarial de acuerdo con el perfil personal y los requerimientos de los contextos productivo y social. Cultura emprendedora y empresarial.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("240201526 - Enrique Low Murtra-Interactuar en el contexto productivo y social de acuerdo con principios éticos para la construcción de una cultura de paz. Ética para la construcción de una cultura de paz.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("210201501 - Ejercer derechos fundamentales del trabajo en el marco de la Constitución Política y los convenios internacionales. Derechos fundamentales del trabajo.")])]),i("p",[i("strong",[a._v("Competencias claves:")])]),i("ul",{staticClass:"lista-ul--color"},[i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("240201528 - Razonar cuantitativamente frente a situaciones susceptibles de ser abordadas de manera matemática en contextos laborales, sociales y personales. Matemáticas.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("220501046 - Utilizar herramientas informáticas de acuerdo con las necesidades de manejo de información. TIC Tecnologías de la información y la comunicación.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("240202501 - Interactuar en lengua inglesa de forma oral y escrita dentro de contextos sociales y laborales, según los criterios establecidos por el Marco Común Europeo de Referencia para las Lenguas. Inglés.")]),i("li",[i("i",{staticClass:"lista-ul__vineta"}),a._v("240201524 - Desarrollar procesos de comunicación eficaces y efectivos, teniendo en cuenta situaciones de orden social, personal y productivo. Comunicación.")])])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[a._v("4. Perfil de ingreso.")])]),i("ul",{staticClass:"lista-ul--color mb-0"},[i("li",[i("i",{staticClass:"fas fa-check"}),a._v("Superar la prueba de aptitud, motivación, interés y competencias mínimas de ingreso.")]),i("li",[i("i",{staticClass:"fas fa-check"}),a._v("Contar con certificado académico de grado 9°.")]),i("li",{staticClass:"mb-0"},[i("i",{staticClass:"fas fa-check"}),a._v("Ser mayor de 14 años.")])])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[a._v("5. Perfil de egreso")])]),i("ul",{staticClass:"lista-ul--color"},[i("p",{staticClass:"mb-0"},[a._v("El Técnico en contabilización de operaciones comerciales y financieras está en capacidad de verificar, seleccionar, reconocer y medir hechos económicos presentados en las organizaciones bajo normatividad vigente, diligenciar soportes contables y libros con parámetros técnicos y normatividad contable."),i("br"),i("br"),a._v("Podrá clasificar los tributos generados en la organización de acuerdo con la normatividad técnica y apoyar en la verificación de la información contable. Además, estará en capacidad de producir, diligenciar, clasificar y verificar documentos de acuerdo con los procedimientos técnicos."),i("br"),i("br"),a._v("Se podrá desempeñar en el cargo de auxiliar de cuentas por cobrar, auxiliar de cuentas por pagar, auxiliar de tesorería, auxiliar de facturación, auxiliar de contabilidad de costos, auxiliar contable, demostrando responsabilidad, trabajo en equipo, proactividad, calidad de servicio al cliente, manejo de tecnologías de la información y la comunicación en empresas públicas y privadas.")])])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"container tarjeta tarjeta__template--azul-claro p-4 p-md-5 mb-5",attrs:{"data-aos":"fade-up"}},[i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[a._v("6. Estrategia metodológica")])]),i("p",[a._v("Centrada en la construcción de autonomía para garantizar la calidad de la formación en el marco de la formación por competencias, el aprendizaje por proyectos y el uso de técnicas didácticas activas que estimulan el pensamiento para la resolución de problemas simulados y reales; soportada en la utilización de las tecnologías de la información y la comunicación; integrada en ambientes abiertos y pluritecnológicos que, en todo caso, recrean el contexto productivo y vinculan al aprendiz con la realidad cotidiana y el desarrollo de las competencias."),i("br"),i("br"),a._v("Igualmente, debe estimular de manera permanente la autocrítica y la reflexión del aprendiz sobre el quehacer y los resultados de aprendizaje que logra a través de la vinculación activa de las cuatro fuentes de información para la construcción de conocimiento:")]),i("ul",{staticClass:"lista-ul--color mb-0"},[i("li",[i("i",{staticClass:"fas fa-chevron-right"}),a._v("El instructor – Tutor")]),i("li",[i("i",{staticClass:"fas fa-chevron-right"}),a._v("El entorno")]),i("li",[i("i",{staticClass:"fas fa-chevron-right"}),a._v("Las TIC")]),i("li",[i("i",{staticClass:"fas fa-chevron-right"}),a._v("El trabajo colaborativo")])])])},function(){var a=this,e=a.$createElement,i=a._self._c||e;return i("div",{staticClass:"titulo__template--a mb-4"},[i("span",{staticClass:"h4"},[a._v("Créditos")])])}],s=(i("159b"),{name:"Inicio",data:function(){return{configTitulos:{liderEquipo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",contenidoInstruccional:"CONTENIDO INSTRUCCIONAL",desarrolloProducto:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",gestoresRepositorio:"GESTORES DE REPOSITORIO"}}},computed:{creditosData:function(){return this.$config.creditos}},methods:{renderText:function(a){var e="";return Array.isArray(a)?a.forEach((function(a,i){e+=(i?"<br/>":"")+a})):e+=a,e}}}),l=s,d=(i("6e1b"),i("2877")),u=Object(d["a"])(l,o,c,!1,null,null,null),p=u.exports,m={name:"App",components:{Inicio:p},mounted:function(){this.$aos.init()}},b=m,f=(i("cf25"),Object(d["a"])(b,n,r,!1,null,null,null)),v=f.exports,_=i("1c2c"),g=(i("a3a0"),{creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Yuly Esperanza Ávila Vargas",cargo:"Experta temática",centro:"Centro de Servicios Financieros - Regional Distrito Capital"},{nombre:"Sandra Inés Acosta Ortegón",cargo:"Experta temática",centro:"Centro de Servicios Financieros - Regional Distrito Capital"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Zenith Chinchilla Ruedas",cargo:"Diseñador instruccional",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Alix Cecilia Chinchilla Rueda",cargo:"Diseñador instruccional",centro:"Centro de Gestión Industrial - Regional Distrito Capital"},{nombre:"Uriel Darío González Montoya",cargo:"Revisión y corrección de estilo",centro:"Centro Agropecuario La Granja - Regional Tolima"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Carmen Alicia Martinez Torres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Gilberto Junior Rodriguez Rodriguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"María Carolina Tamayo Lopez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Wilson Andrés Arenales Caceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"},{nombre:"Zuleidy María Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"María Isabel Román Rueda",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios Regional Tolima"}]}});t["a"].prototype.$config=g;var h=i("9224");t["a"].prototype.$package=h,new t["a"]({store:_["a"],render:function(a){return a(v)}}).$mount("#app")},"6e1b":function(a,e,i){"use strict";i("703c")},"703c":function(a,e,i){},9224:function(a){a.exports=JSON.parse('{"name":"sena-base-info-2021","version":"1.1.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.12","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(a,e,i){a.exports=i.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(a,e,i){},cf25:function(a,e,i){"use strict";i("fea6")},e6b0:function(a,e,i){a.exports=i.p+"img/fondo-banner-principal.1a23e7aa.png"},fea6:function(a,e,i){}});
//# sourceMappingURL=app.aa5facf3.js.map