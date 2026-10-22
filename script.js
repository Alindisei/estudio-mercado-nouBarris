
function mostrarPerfilNouBarris() {


    const panel = document.getElementById("barrio-panel");
    const nombre = document.getElementById("barrio-nombre");
    const contenido = document.querySelector(".barrio-contenido");
    const seccion = document.getElementById("seccion-contenido");

    if (!panel || !nombre || !contenido || !seccion) {
        return;
    }

    // Mostrar el panel
    panel.classList.add("activo");

    // Mostrar directamente el contenido
    contenido.style.display = "none";
    seccion.classList.add("activo");

    // Título del panel
    nombre.textContent = "Nou Barris";

    // Activar TERRITORIO
    const navItems = document.querySelectorAll(".nav-item");

    navItems.forEach(function(item) {
        item.classList.remove("active");
    });

    
    const botonTerritorio = document.querySelector(
        '.nav-item[data-seccion="perfil"]'
    );


    if (botonTerritorio) {
        botonTerritorio.classList.add("active");
    }



    // ===============================
    // CONTENIDO LIMPIO
    // ===============================

    seccion.innerHTML = `

          <div class="seccion-etiqueta">
                02 · PERFIL DE LA POBLACIÓ
            </div>

            <p class="seccion-intro">
               Característiques demogràfiques i socioeconòmiques del districte
                i els seus 13 barris.
            </p>


        <!-- DATOS PRINCIPALES -->


        <div class="perfil-resumen-graficos">

            <div class="grafico-bloque compacto">

                <div class="grafico-titulo">
                    POBLACIÓ PER BARRI
                </div>

                <p class="grafico-subtitulo">
                    Habitants · 2024 · barres relatives al barri més poblat
                </p>

                <div class="ranking-grafico compacto">
                    ${crearRankingPoblacion()}
                </div>

            </div>


            <div class="grafico-bloque compacto">

                <div class="grafico-titulo">
                    ESTRUCTURA D'EDATS
                </div>

                <p class="grafico-subtitulo">
                    Distribució de la població de Nou Barris per grups d'edat · 2024
                </p>

                <div class="territorio-edad-leyenda">
                    <span><i class="edad-infancia"></i>Infància i adolescència · 0–14 anys</span>
                    <span><i class="edad-adulta"></i>Població adulta · 15–64 anys</span>
                    <span><i class="edad-mayores"></i>Persones majors · 65 anys o més</span>
                </div>

                <div class="ranking-grafico compacto">
                    ${crearRankingEstructuraEdades()}
                </div>

            </div>

        </div>


       <div class="educacion-resumen-compacto">
            <div class="educacion-resumen-titulo">
                NIVELL EDUCATIU<span>· NOU BARRIS</span>
            </div>

            <div class="educacion-dato">
                <span>Universitaris / CFGS</span>
                <strong>17,4 <small>%</small></strong>
            </div>

            <div class="educacion-dato">
                <span>Primaris o sense estudis</span>
                <strong>25,5 <small>%</small></strong>
            </div>
        </div>

        
        <div class="territorio-anexos">

           <div class="territorio-detalle">
                <h4 class="territorio-detalle-titulo">
                    Estructura de les llars · Nou Barris · 2024
                </h4>

            <p class="territorio-nota">
               Nombre de persones empadronades a cada domicili.
            </p>

            <div class="estructura-hogares">

                <div class="hogar-item">
                    <div class="hogar-cabecera">
                        <span class="hogar-nombre">1 persona</span>
                        <strong class="hogar-porcentaje">29,4 %</strong>
                    </div>
                    <div class="hogar-barra-fondo">
                        <div class="hogar-barra" style="width:29.4%"></div>
                    </div>
                    <span class="hogar-cantidad">20.001 domicilis</span>
                </div>

                <div class="hogar-item">
                    <div class="hogar-cabecera">
                        <span class="hogar-nombre">2 persones</span>
                        <strong class="hogar-porcentaje">29,2 %</strong>
                    </div>
                    <div class="hogar-barra-fondo">
                        <div class="hogar-barra" style="width:29.2%"></div>
                    </div>
                    <span class="hogar-cantidad">19.898 domicilis</span>
                </div>

                <div class="hogar-item">
                    <div class="hogar-cabecera">
                        <span class="hogar-nombre">3 persones</span>
                        <strong class="hogar-porcentaje">18,7 %</strong>
                    </div>
                    <div class="hogar-barra-fondo">
                        <div class="hogar-barra" style="width:18.7%"></div>
                    </div>
                    <span class="hogar-cantidad">12.717 domicilis</span>
                </div>

                <div class="hogar-item">
                    <div class="hogar-cabecera">
                        <span class="hogar-nombre">4 persones</span>
                        <strong class="hogar-porcentaje">13,4 %</strong>
                    </div>
                    <div class="hogar-barra-fondo">
                        <div class="hogar-barra" style="width:13.4%"></div>
                    </div>
                    <span class="hogar-cantidad">9.120 domicilis</span>
                </div>

                <div class="hogar-item">
                    <div class="hogar-cabecera">
                        <span class="hogar-nombre">5 o més persones</span>
                        <strong class="hogar-porcentaje">9,4 %</strong>
                    </div>
                    <div class="hogar-barra-fondo">
                        <div class="hogar-barra" style="width:9.4%"></div>
                    </div>
                    <span class="hogar-cantidad">6.400 domicilis</span>
                </div>

            </div>


            <p class="territorio-nota">
               Font: Ajuntament de Barcelona, ​​padró municipal a 1 de gener del 2024.
            </p>
        </div>

            
            <div class="territorio-detalle">
                <summary>Nivell educatiu · consulta per barri · 2024</summary>

                <p class="territorio-nota">
                    Recompte de persones de 16 o més anys per nivell educatiu.
                    Seleccioneu un barri per consultar les vostres dades.
                </p>

                <label class="educacion-label" for="selector-educacion">
                    Barri
                </label>

                <select id="selector-educacion" class="educacion-selector">
                    ${Object.keys(datosTerritorioPorBarrio).map(function(barrio) {
                        return `<option value="${barrio}">${barrio}</option>`;
                    }).join("")}
                </select>

                <div id="grafico-educacion" class="grafico-educacion"></div>

            </div>

            
                
            
        <div class="territorio-detalle">
            <summary>Renda estimada per barri · valor central del rang · 2023</summary>

            <p class="territorio-nota">
                Valor central estimat de la renda anual per persona (€).
            </p>

            <div class="renta-horizontal">
                ${Object.entries(datosTerritorioPorBarrio)
                    .filter(function(item) {
                        return item[1].renta;
                    })
                    .map(function(item) {
                        const renta = item[1].renta;
                        return {
                            nombre: item[0],
                            valor: (Number(renta.minimo) + Number(renta.maximo)) / 2
                        };
                    })
                    .sort(function(a, b) {
                        return a.valor - b.valor;
                    })
                    .map(function(item) {
                        const porcentaje = item.valor / 27000 * 100;

                        return `
                            <div class="renta-horizontal-fila">
                                <span class="renta-horizontal-nombre">${item.nombre}</span>

                                <div class="renta-horizontal-pista">
                                    <div class="renta-horizontal-barra"
                                        style="width:${porcentaje}%"></div>
                                </div>

                                <span class="renta-horizontal-valor">
                                    ${Math.round(item.valor).toLocaleString("es-ES")} €
                                </span>
                            </div>
                        `;
                    }).join("")}
            </div>
        </div>



            <details class="territorio-detalle territorio-fuentes">
                <summary>Fonts oficials</summary>
                <ul>
                    <li><a href="https://opendata-ajuntament.barcelona.cat/data/ca/dataset/pad_mdbas_sexe/resource/3febe572-f530-4f89-8e9c-5c23c7d3d807" target="_blank" rel="noopener noreferrer">Padrón por sexo · población total · 2024</a></li>
                    <li><a href="https://opendata-ajuntament.barcelona.cat/data/ca/dataset/pad_mdbas_edat-q/resource/1587842e-6f6d-443c-8a74-8d391efb768b" target="_blank" rel="noopener noreferrer">Padrón por edad quinquenal · 2024</a></li>
                    <li><a href="https://opendata-ajuntament.barcelona.cat/data/ca/dataset/pad_dom_mdbas_n-persones/resource/a0106702-309d-43c7-be92-dab2d982a212" target="_blank" rel="noopener noreferrer">Domicilios por número de personas · 2024</a></li>
                    <li><a href="https://opendata-ajuntament.barcelona.cat/data/ca/dataset/pad_mdbas_niv-educa-esta_sexe/resource/072daedd-2816-4d49-9afb-7a7dee4d1741" target="_blank" rel="noopener noreferrer">Padrón por titulación académica y sexo · 2024</a></li>
                    <li><a href="https://opendata-ajuntament.barcelona.cat/data/ca/dataset/pad-dimensions" target="_blank" rel="noopener noreferrer">Diccionario de dimensiones del padrón</a></li>
                    <li><a href="https://opendata-ajuntament.barcelona.cat/data/ca/dataset/renda-disponible-llars-bcn/resource/f18e28ed-dcee-4904-b350-52088201a7a0" target="_blank" rel="noopener noreferrer">Renta disponible por sección censal · 2023</a></li>
                </ul>
              
            </details>

        </div>

        `;


    // Inicializar el gráfico educativo cuando se crea la sección
    const selectorEducacion = document.getElementById("selector-educacion");

    if (selectorEducacion) {
        actualizarGraficoEducacion(selectorEducacion.value);
    }


}


function mostrarNouBarris() {

    const panel = document.getElementById("barrio-panel");
    const nombre = document.getElementById("barrio-nombre");
    const contenido = document.querySelector(".barrio-contenido");
    const seccion = document.getElementById("seccion-contenido");

    if (!panel || !nombre || !contenido || !seccion) {
        return;
    }

    panel.classList.add("activo");
    contenido.style.display = "none";
    seccion.classList.add("activo");

    nombre.textContent = "Nou Barris";

    document.querySelectorAll(".nav-item").forEach(function(item) {
        item.classList.remove("active");
    });

    const botonTerritorio = document.querySelector(
        '.nav-item[data-seccion="territorio"]'
    );

    if (botonTerritorio) {
        botonTerritorio.classList.add("active");
    }

    seccion.innerHTML = `
        <div class="seccion-etiqueta">
            01 · TERRITORI I CONTEXT
        </div>


        <div class="datos-grid">

            <div class="dato-card">
                <strong>13</strong>
                <span>barris</span>
            </div>

            <div class="dato-card">
                <strong>179.590</strong>
                <span>habitants · 2024</span>
            </div>

            <div class="dato-card">
                <strong>3</strong>
                <span>ortopèdies especialitzades </span>
            </div>

            <div class="dato-card">
                <strong>7</strong>
                <span>farmacias amb servei ortopèdic </span>
            </div>

            <div class="dato-card">
                <strong>1</strong>
                <span>distribuidor productes ortopèdics</span>
            </div>

        </div>

        <div class="grafico-bloque compacto">
            <div class="grafico-titulo">
                ELS 13 BARRIS DEL DISTRICTE
            </div>


            <ul class="lista-barrios-territorio">
                <li>Can Peguera</li>
                <li>Canyelles</li>
                <li>Ciutat Meridiana</li>
                <li>la Guineueta</li>
                <li>la Prosperitat</li>
                <li>la Trinitat Nova</li>
                <li>la Vallbona</li>
                <li>la Torre Baró</li>
                <li>les Roquetes</li>
                <li>Porta</li>
                <li>el Turó de la Peira</li>
                <li>Verdun</li>
                <li>Vilapicina i la Torre Llobeta</li>
            </ul>
        </div>

        
    `;
}



function actualizarGraficoEducacion(barrio) {

    const contenedor = document.getElementById("grafico-educacion");
    const datos = datosTerritorioPorBarrio[barrio];

    if (!contenedor || !datos || !datos.educacion) return;

    const niveles = [
        {
            etiqueta: "Primaris / EGB",
            valor: datos.educacion.primarios,
            color: "#78A6C8"
        },
        {
            etiqueta: "ESO / FPI",
            valor: datos.educacion.esoFpi,
            color: "#5A9A91"
        },
        {
            etiqueta: "Batxillerat / CFGM",
            valor: datos.educacion.bachilleratoCfgm,
            color: "#D49A45"
        },
        {
            etiqueta: "Universitaris / CFGS",
            valor: datos.educacion.superior,
            color: "#8A79B8"
        }
    ];

    const maximo = Math.max(
        ...niveles.map(function(nivel) {
            return Number(nivel.valor) || 0;
        }),
        1
    );

    contenedor.innerHTML = `
        <div class="educacion-lista">

            ${niveles.map(function(nivel) {

                const valor = Number(nivel.valor) || 0;
                const ancho = valor / maximo * 100;

                return `
                    <div class="educacion-item">

                        <div class="educacion-cabecera">
                            <span class="educacion-nombre">
                                <i style="background-color:${nivel.color}"></i>
                                ${nivel.etiqueta}
                            </span>

                            <strong class="educacion-valor">
                                ${valor.toLocaleString("es-ES")}
                            </strong>
                        </div>

                        <div class="educacion-barra-fondo">
                            <div
                                class="educacion-barra"
                                style="width:${ancho}%; background-color:${nivel.color}">
                            </div>
                        </div>

                    </div>
                `;
            }).join("")}

        </div>
    `;
}


document.addEventListener("change", function(evento) {
    if (evento.target.id === "selector-educacion") {
        actualizarGraficoEducacion(evento.target.value);
    }
});


function mostrarBarrio(nombre) {

    const panel = document.getElementById("barrio-info");
    const titulo = document.getElementById("barrio-title");

    if (!panel || !titulo) {
        return;
    }

    titulo.textContent = nombre;

    panel.classList.remove("hidden");

    panel.scrollIntoView({
        behavior: "smooth"
    });
}


function cerrarBarrio() {

    const panel = document.getElementById("barrio-info");

    if (!panel) {
        return;
    }

    panel.classList.add("hidden");
}

const mapContainer = document.getElementById('map');
let map = null;

if (!mapContainer) {
    console.warn('No se encontró el contenedor #map. El mapa no se inicializará.');
} else {
    map = L.map('map').setView([41.3874, 2.1686], 11);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
    }).addTo(map);
}

// =====================================
// DISTRITOS REALES DE BARCELONA
// =====================================
const capaDistritos = L.layerGroup().addTo(map);
const capaOrtopedias = L.layerGroup();
const capaBarrios = L.layerGroup();
const capaSanidad = L.layerGroup();


const marcadorPrueba = L.marker([41.445, 2.160]);

const marcadoresEstablecimientos = [];

function obtenerOfertaBarrio(nombreBarrio) {

    const oferta = {
        ortopedias: [],
        farmacias: [],
        distribuidores: []
    };

    marcadoresEstablecimientos.forEach(function(marcador) {

        const establecimiento = marcador.establecimiento;

        if (!establecimiento) {
            return;
        }

        if (establecimiento.barrio !== nombreBarrio) {
            return;
        }

        if (establecimiento.tipo === "principal") {
            oferta.ortopedias.push(establecimiento);
        }

        if (establecimiento.tipo === "farmacia") {
            oferta.farmacias.push(establecimiento);
        }

        if (establecimiento.tipo === "distribuidor") {
            oferta.distribuidores.push(establecimiento);
        }

    });

    return oferta;
}


const nombresFiltros = {

   "mobilitat": "Mobilitat",
    "ortesi": "Ortesi",
    "protesi": "Pròtesi",
    "productes-suport": "Productes de suport",

    "pediatria": "Pediatria",
    "cad3d": "CAD / 3D",
    "fabricació": "Fabricació pròpia",
    "domiciliària": "Atenció domiciliària",

    "mesura": "A mida",
    "taller": "Taller / reparació",
    "lloguer": "Lloguer",
    "assessorament": "Assessorament",
    "protètica": "Protètica",
    "accessibilitat": "Accessibilitat",
    "venda-online": "Venda online",
    "recollida-botiga": "Recollida a la botiga",
    "domicili-lliurament": "Lliurament a domicili",
    "òptica": "Òptica",
    "ajudes-tecniques": "Ajudes tècniques",
    "CatSalut": "Gestió CatSalut",
    "horari-ampli": "Horari ampli",
    "distribucio": "Distribucio",
    "productes especialitzats": "Productes especialitzats"

};

const establecimientosPrueba = [

    // =====================================================
    // ORTOPEDIAS ESPECIALIZADAS
    // =====================================================

    {
        nombre: "Ortopèdia Toraq",
        barrio: "Porta",
        direccion: "Passeig Valldaura, 175-177",
        coords: [41.43885, 2.17274],
        tipo: "principal",

        servicios: [
            "mobilitat",
            "ortesi",
            "productes-suport"
        ],

        caracteristicas: [
            "fabricació",
            "mesura",
            "taller",
            "lloguer",
            "domiciliària"
        ],

        descripcion:
          "Ortopèdia especialitzada amb productes estàndard i a mida. " +
            "Disposa de fabricació d'ortesis i plantilles, taller propi" +
            "per a reparacions i ajustaments, lloguer de productes i entrega," +
            "muntatge i explicació a domicili."
    },


    {
        nombre: "Ortopèdia Ortogan Verdum",
        barrio: "Verdun",
        direccion: "Passeig de Verdum, 8",
        coords: [41.43749, 2.17373],
        tipo: "principal",

        servicios: [
            "mobilitat",
            "ortesi",
            "productes-suport"
        ],

        caracteristicas: [
            "lloguer",
            "assessorament"
        ],

        descripcion:
           "Ortopèdia especialitzada en productes ortopèdics i ajuts" +
            "tècniques, incloent solucions de mobilitat, cadires de rodes, " +
            "scooters, grues, llits articulats i òrtesis."
    },


    {
        nombre: "Ortopèdia BIME'S",
        barrio: "Porta",
        direccion: "Carrer del Doctor Pi i Molist, 50",
        coords: [41.43517, 2.17216],
        tipo: "principal",

        servicios: [
            "ortesi",
            "protesi"
        ],

        caracteristicas: [
            "protètica",
            "accesibilidad"
        ],

        descripcion:
           "Establiment especialitzat en ortopèdia i protètica." +
            "Ofereix atenció i venda de productes ortopèdics."
    },


    // =====================================================
    // FARMACIAS CON SERVICIO ORTOPÉDICO
    // =====================================================

    {
        nombre: "Farmacia Ortopedia Nou Pins",
        barrio: "la Prosperitat",
        direccion: "Carrer de Pablo Iglesias, 48-50",
        coords: [41.434, 2.174],
        tipo: "farmacia",

        servicios: [
            "ortesi",
            "productes-suport"
        ],

        caracteristicas: [
          "venda-online",
            "recollida-botiga",
            "domicili-lliurament"
        ],

        descripcion:
            "Farmàcia amb servei d'ortopèdia i venda online." +
            "Disposa de recollida a farmàcia i servei de lliurament."
    },


    {
        nombre: "Farmacia Ortopedia Prats Gorrochategui",
        barrio: "les Roquetes",
        direccion: "Carrer d'Alcàntara, 1",
        coords: [41.44515, 2.17192],
        tipo: "farmacia",

        servicios: [
            "ortesi",
            "productes-suport"
        ],

        caracteristicas: [
            "domiciliària"
        ],

        descripcion:
            "Farmàcia amb servei d'ortopèdia situada en les Roquetes. " +
            "Les fonts públiques consultades indiquen servei a domicili."
    },


    {
        nombre: "Farmàcia Guineueta - Ortopèdia i Òptica",
        barrio: "la Guineueta",
        direccion: "Carrer de la Guineueta, 19",
        coords: [41.442, 2.169],
        tipo: "farmacia",

        servicios: [
            "ortesi"
        ],

        caracteristicas: [
            "optica",
            "venta-online",
            "domicili-lliurament"
        ],

        descripcion:
           "Farmàcia amb servei d'ortopèdia i òptica." +
            "També disposa de compra en línia i lliuraments a domicili."
    },


    {
        nombre: "Farmàcia Garrofers",
        barrio: "Porta",
        direccion: "Carrer dels Garrofers, 52",
        coords: [41.437, 2.180],
        tipo: "farmacia",

        servicios: [
            "ortesi",
            "productes-suport"
        ],

        caracteristicas: [
           "ajudes-tècniques",
            "CatSalut"
        ],

        descripcion:
            "Farmàcia especialitzada en productes d'ortesi i ajuts" +
            "tècniques. Disposa de caminadors, rollators i cadires de rodes" +
            "i tramita receptes del CatSalut per a productes ortopèdics estàndard."
    },


    {
        nombre: "Farmàcia Sánchez Santaló",
        barrio: "la Prosperitat",
        direccion: "Carrer de Joaquim Valls, 86-88",
        coords: [41.44423, 2.17927],
        tipo: "farmacia",

        servicios: [
            "ortesi"
        ],

        caracteristicas: [
            "horari-ampli"
        ],

        descripcion:
            "Farmàcia amb servei d'ortopèdia. Compte amb un horari" +
            "ampli d'atenció durant tota la setmana."
    },


    {
        nombre: "Farmàcia Ortopèdia Ventura Buxados",
        barrio: "Porta",
        direccion: "Carrer de Deià, 20",
        coords: [41.43417, 2.17454],
        tipo: "farmacia",

        servicios: [
            "ortesi"
        ],

        caracteristicas: [
            "domiciliària",
            "accesibilitat"
        ],

        descripcion:
            "Farmàcia amb servei d'ortopèdia. Les fonts públiques " +
            "consultades indiquen servei a domicili i accesibilitat " +
            "para personas usuarias de silla de ruedas."
    },


    {
        nombre: "Farmàcia Plaça Roja",
        barrio: "Ciutat Meridiana",
        direccion: "Carrer de Vallcivera, 6",
        coords: [41.46129, 2.17937],
        tipo: "farmacia",

        servicios: [
            "ortesi",
            "productes-suport"
        ],

        caracteristicas: [
            "alquiler"
        ],

        descripcion:
            "Farmàcia amb servei d'ortopèdia. Ofereix productes " +
            "orientats a la mobilitat i benestar físic i també " +
            "disposa d'alquiler d'equips ortopèdics."
    },


    // =====================================================
    // DISTRIBUIDOR
    // =====================================================

    {
        nombre: "Supace Orto Distribución",
        barrio: "Torre Baró",
        direccion: "Carrer de l'Escultor Llimona, 17",
        coords: [41.439, 2.180],
        tipo: "distribuidor",

        servicios: [
            "productes-suport",
            "movilitat"
        ],

        caracteristicas: [
            "distribució",
            "productos-especializados"
        ],

        descripcion:
           "Distribuïdor de productes ortopèdics i dispositius de suport. " +
            "La seva funció dins del mapa és de distribució i subministrament," +
            "no d'atenció directa equivalent a una ortopèdia."
    }

];




const centrosSanitariosMapa = [
   
    {
        nombre: "CAP Cotxeres",
        barrio: "Vilapicina i la Torre Llobeta",
        direccion: "Avinguda dels Quinze, 18-30",
        coords: [41.426296, 2.176143],
        tipo: "CAP"
    },

    {
        nombre: "CAP Guineueta",
        barrio: "la Guineueta",
        direccion: "Passeig de Valldaura, 135",
        coords: [41.43959, 2.16610],
        tipo: "CAP"
    },
    {
        nombre: "CAP Rio de Janeiro",
        barrio: "la Prosperitat",
        direccion: "Avinguda de Rio de Janeiro, 83-91",
        coords: [41.43989, 2.18187],
        tipo: "CAP"
    },
    {
        nombre: "CAP Roquetes-Canteres",
        barrio: "les Roquetes",
        direccion: "Carrer de Garigliano, 23-27",
        coords: [41.44627, 2.17373],
        tipo: "CAP"
    },
    {
        nombre: "CAP Turó",
        barrio: "el Turó de la Peira",
        direccion: "Carrer del Cadí, 58-62",
        coords: [41.43305, 2.17049],
        tipo: "CAP"
    },
   {
        nombre: "CAP Chafarinas",
        barrio: "la Trinitat Nova",
        direccion: "Via Favència, 297",
        coords: [41.44716, 2.18347],
        tipo: "CAP"
    },
    {
        nombre: "CAP Ciutat Meridiana",
        barrio: "Ciutat Meridiana",
        direccion: "Carrer de Sant Feliu de Codines, 2",
        coords: [41.46060, 2.18050],
        tipo: "CAP"
    },
    {
        nombre: "CUAP Cotxeres",
        barrio: "Vilapicina i la Torre Llobeta",
        direccion: "Avinguda dels Quinze, 18-30",
        coords: null,
        tipo: "CUAP"
    }
];



centrosSanitariosMapa.forEach(function (centro) {

    if (!centro.coords) {
        return;
    }

    const marcador = L.marker(centro.coords, {
        icon: crearIconoEstablecimiento(centro.tipo)
    });

    marcador.bindPopup(`
        <strong>${centro.nombre}</strong><br>
        ${centro.barrio}<br>
        ${centro.direccion}
    `);

    capaSanidad.addLayer(marcador);

});


function contarEstablecimientosPorTipo(tipo) {
    return establecimientosPrueba.filter(function(establecimiento) {
        return establecimiento.tipo === tipo;
    }).length;
}


function crearIconoEstablecimiento(tipo) {

    let color = "#d65a3a";
    let forma = "border-radius: 50%;";

    if (tipo === "farmàcia" || tipo === "farmacia") {
        color = "#8a8a8a";
        forma = "border-radius: 4px;";
    }

    if (tipo === "distribuidor") {
        color = "#666666";
        forma = "transform: rotate(45deg);";
    }

    if (tipo === "CAP") {
        color = "#7c9dc9";
        forma = "border-radius: 50%;";
    }

    if (tipo === "CUAP") {
        color = "#8056b3";
        forma = "border-radius: 4px;";
    }

    return L.divIcon({
        className: "marcador-establecimiento",
        html: `
            <div style="
                width: 18px;
                height: 18px;
                background: ${color};
                border: 3px solid white;
                ${forma}
                box-shadow: 0 2px 6px rgba(0,0,0,0.25);
            "></div>
        `,
        iconSize: [18, 18],
        iconAnchor: [9, 9]
    });
}


establecimientosPrueba.forEach(function (establecimiento) {

    const marcador = L.marker(
        establecimiento.coords,
        {
            icon: crearIconoEstablecimiento(establecimiento.tipo)
        }
    );

    marcador.establecimiento = establecimiento;

    marcador.on("click", function () {

        document.getElementById("barrio-panel").classList.add("activo");

        contenidoBarrio.style.display = "none";
        contenidoSeccion.classList.add("activo");

        contenidoSeccion.innerHTML = `

            <button id="volver-oferta" class="volver-secciones">
                ← Volver a oferta
            </button>

            <div class="ortopedia-tarjeta">

                <div class="ortopedia-etiqueta">
                    ESTABLECIMIENTO
                </div>

                <h3>${establecimiento.nombre}</h3>

                <p class="ortopedia-descripcion">
                    ${establecimiento.descripcion ||
                    "Establecimiento del sector ortopédico localizado en Nou Barris."}
                </p>

                <div class="ortopedia-grupo">

    <div class="ortopedia-grupo-titulo">
        SERVICIOS
    </div>

    <div class="ortopedia-caracteristicas">
            ${establecimiento.servicios.map(function(servicio) {
                return `<span>${nombresFiltros[servicio] || servicio}</span>`;
            }).join("")}
    </div>

    </div>

    <div class="ortopedia-grupo">

        <div class="ortopedia-grupo-titulo">
            CARACTERÍSTICAS
        </div>

        <div class="ortopedia-caracteristicas">
            ${establecimiento.caracteristicas.map(function(caracteristica) {
                return `<span>${nombresFiltros[caracteristica] || caracteristica}</span>`;
            }).join("")}
        </div>

    </div>

        <div class="ortopedia-extra">

            <div>
                <strong>Dirección</strong>
                <span>${establecimiento.direccion}</span>
            </div>

            <div>
                <strong>Barrio</strong>
                <span>${establecimiento.barrio}</span>
            </div>

            <div>
                <strong>Tipo</strong>
                <span>Ortopedia especializada</span>
            </div>

        </div>

    `;

        document.getElementById("volver-oferta").addEventListener("click", function () {
            mostrarOferta();
        });

    });

    marcadoresEstablecimientos.push(marcador);
    capaOrtopedias.addLayer(marcador);



});

// ==========================================
// UBICACIÓN PROPUESTA · NUEVA ORTOPEDIA
// ==========================================

const marcadorUbicacionPropuesta = L.marker(
    [41.4480, 2.1785],
    {
        icon: L.divIcon({
            className: "marcador-ortopedia-propuesta",
            html: `
                <div class="marcador-propuesta-pin">
                    <span>+</span>
                </div>
            `,
            iconSize: [34, 42],
            iconAnchor: [17, 42]
        }),
        zIndexOffset: 1000
    }
);

marcadorUbicacionPropuesta.bindPopup(`
    <div class="popup-ubicacion-propuesta">
        <strong>Ubicación propuesta</strong>
        <p>Posible emplazamiento para una nueva ortopedia.</p>
        <span>Zona norte de Nou Barris · Ubicación orientativa</span>
    </div>
`);

capaOrtopedias.addLayer(marcadorUbicacionPropuesta);


function mostrarOferta() {

    const ortopedias = establecimientosPrueba.filter(function(establecimiento) {
        return establecimiento.tipo === "principal";
    });
    const totalFarmacias = contarEstablecimientosPorTipo("farmacia") + contarEstablecimientosPorTipo("farmàcia");
    const totalDistribuidores = contarEstablecimientosPorTipo("distribuidor");

    contenidoSeccion.innerHTML = `

        
        
        <div class="seccion-etiqueta">
            03 · OFERTA ORTOPRTÉSICA
        </div>



        <div class="panel-bloque">

            <div class="panel-bloque-titulo">
                RESUMEN DE LA OFERTA IDENTIFICADA
            </div>

            <div class="datos-grid oferta-resumen-compacto">

                <div class="dato-card">
                    <strong>${ortopedias.length}</strong>
                    <span>ortopèdies especialitzades</span>
                </div>

                <div class="dato-card">
                    <strong>${totalFarmacias}</strong>
                    <span>farmàcies amb servei ortopèdic</span>
                </div>

                <div class="dato-card">
                    <strong>${totalDistribuidores}</strong>
                    <span>distribuïdors</span>
                </div>

            </div>

        </div>
<div class="ortopedias-grid">

    <!-- =========================
         ORTOPÈDIA TORAQ
    ========================== -->

    <article class="ortopedia-card">

        <div class="ortopedia-imagen">
            <img 
                src="https://www.momentumhealthcare.co.uk/images/gmc/process3.jpg"
                alt="Fabricación de productos ortopédicos"
            >
        </div>

        <div class="ortopedia-contenido">

            <div class="ortopedia-cabecera">
                <h3>Ortopèdia Toraq</h3>
                <p>Porta · Passeig Valldaura, 175-177</p>
            </div>

            <div class="ortopedia-separador"></div>

            <div class="ortopedia-bloque">

                <h4>Oferta clave</h4>

                <ul class="oferta-lista">
                    <li>Fabricació a mida</li>
                    <li>Taller i reparacions</li>
                    <li>Lloguer de productes</li>
                    <li>Adaptació de cotxe</li>
                </ul>

            </div>

            <div class="ortopedia-diferencial">

                <span>DIFERENCIAL</span>

                <p>
                    Servei a domicili
                </p>

            </div>

            <a 
                href="https://toraq.es/"
                target="_blank"
                rel="noopener noreferrer"
                class="ortopedia-web"
            >
                Veure pàgina web →
            </a>

        </div>

    </article>


    <!-- =========================
         ORTOPÈDIA ORTOGAN VERDUM
    ========================== -->

    <article class="ortopedia-card">

        <div class="ortopedia-imagen">
            <img 
                src="https://www.sanitaetshaus-bremen.de/files/werkstatt-einlagen-kontrolle.jpg"
                alt="Productos ortopédicos"
            >
        </div>

        <div class="ortopedia-contenido">

            <div class="ortopedia-cabecera">
                <h3>Ortopèdia Ortogan Verdum</h3>
                <p>Verdun · Passeig de Verdum, 8</p>
            </div>

            <div class="ortopedia-separador"></div>

            <div class="ortopedia-bloque">

                <h4>Oferta clave</h4>

                <ul class="oferta-lista">
                    <li>Òrtesi</li>
                    <li>Productes de mobilitat</li>
                    <li>Grues i llits articulats</li>
                    <li>Ajudes tècniques</li>
                    <li>Lloguer de productes</li>
                </ul>

            </div>

            <div class="ortopedia-diferencial">

                <span>DIFERENCIAL</span>

                <p>
                    Reparació i manteniment
                </p>

            </div>

            <a 
                href="https://www.instagram.com/ortoganserveis/"
                target="_blank"
                rel="noopener noreferrer"
                class="ortopedia-web"
            >
                Veure pàgina web →
            </a>

        </div>

    </article>


    <!-- =========================
         ORTOPÈDIA BIME'S
    ========================== -->

    <article class="ortopedia-card">

      <div class="ortopedia-imagen">
            <img 
                src="https://www.centroortopedicotecnologico.com/pics_fotosservicios/22/med_full_33271-cl-jk-ra11-4cwb11hotspotzoom.jpg"
                alt="Prótesis de pierna"
            >
        </div>

        <div class="ortopedia-contenido">

            <div class="ortopedia-cabecera">
                <h3>Ortopèdia BIME'S</h3>
                <p>Porta · Doctor Pi i Molist, 50</p>
            </div>

            <div class="ortopedia-separador"></div>

            <div class="ortopedia-bloque">

                <h4>Oferta clave</h4>

                <ul class="oferta-lista">
                    <li>Fabricació a mida: Òrtesi i Prótesi</li>
                    <li>Calçat ortopédic estàndard i a mida</li>
                    <li>Peces de compressió estàndard i a mida</li>
                    <li>Reparació i manteniment</li>
                    <li>Assesorament</li>
                    <li>Gruas, bipedestadors, cadiras de rodas i scooters</li>
                    <li>Plantilles ortopèdiques</li>
                </ul>

            </div>

            <div class="ortopedia-diferencial">

                <span>DIFERENCIAL</span>

                <p>
                    Oferta especializada en òrtesi i prótesi
                </p>

            </div>

            <div class="ortopedia-web ortopedia-web-no">
                Pàgina web no identificada
            </div>

        </div>

    </article>

</div>
       
    `;


    document.getElementById("volver-oferta")
    .addEventListener("click", function() {

        contenidoSeccion.classList.remove("activo");

        contenidoBarrio.style.display = "none";

        mostrarNouBarris();

    });

}


function aplicarFiltros() {

    const contador = document.getElementById("oferta-contador");

    let establecimientosVisibles = 0;

    if (!contador) {
        console.warn('No se encontró #oferta-contador. Se omite la actualización del contador.');
    }

    const filtrosSeleccionados = [];

    document.querySelectorAll(".filtro input:checked").forEach(function(filtro) {

        if (filtro.dataset.filtro !== "todos") {
            filtrosSeleccionados.push(filtro.dataset.filtro);
        }

    });


    establecimientosPrueba.forEach(function(establecimiento) {

        const marcador = encontrarMarcador(establecimiento);

        if (!marcador) {
            return;
        }


        // Los secundarios siempre permanecen visibles
        if (establecimiento.tipo !== "principal") {

            marcador.addTo(capaOrtopedias);

            return;
        }


        // A partir de aquí solo trabajamos con las ortopedias principales

        if (filtrosSeleccionados.length === 0) {

            marcador.addTo(capaOrtopedias);

            establecimientosVisibles++;

        } else {

            const coincide = filtrosSeleccionados.some(function(filtro) {

                return (
                    establecimiento.servicios.includes(filtro) ||
                    establecimiento.caracteristicas.includes(filtro)
                );

            });


            if (coincide) {

                marcador.addTo(capaOrtopedias);

                establecimientosVisibles++;

            } else {

                capaOrtopedias.removeLayer(marcador);

            }

        }

    });


    if (contador) {
        contador.innerHTML =
            "<strong>" +
            establecimientosVisibles +
            "</strong> ortopedias especializadas";
    }

}

function encontrarMarcador(establecimiento) {

    return marcadoresEstablecimientos.find(function(marcador) {

        return marcador.establecimiento === establecimiento;

    });

}

// Definición del sistema de coordenadas ETRS89 / UTM zona 31N
proj4.defs(
    "EPSG:25831",
    "+proj=utm +zone=31 +ellps=GRS80 +units=m +no_defs +type=crs"
);

// Sistema de coordenadas oficial
const origen = "EPSG:25831";
const destino = "EPSG:4326";


// Convertir una coordenada UTM a latitud/longitud
function convertirCoordenada(coordenada) {

    const resultado = proj4(
        origen,
        destino,
        coordenada
    );

    return [
        resultado[1],
        resultado[0]
    ];
}


// Cargar distritos
fetch('https://geoportal.barcelona.cat/geoBCN/serveis/territori/districtes/?geometria=true&out_proj=4326')
    .then(response => {

        if (!response.ok) {
            throw new Error("No se pudieron cargar los distritos");
        }

        return response.json();

    })
    .then(data => {

        console.log("Distritos cargados:", data.resultats.length);

        data.resultats.forEach(distrito => {

            const coordenadasOriginales =
                distrito.geometria.coordinates[0];

            const coordenadas =
                coordenadasOriginales.map(convertirCoordenada);


            const poligono = L.polygon(coordenadas, {

                color: "#777",
                weight: 1,
                fillColor: "#d9d9d9",
                fillOpacity: 0.35

            }).addTo(capaDistritos);


            poligono.feature = {
                properties: {
                    nombre: distrito.descripcio,
                    codigo: distrito.codi
                }
            };


            poligono.on("mouseover", resaltarDistrito);

            poligono.on("mouseout", quitarResaltado);

            poligono.on("click", seleccionarDistrito);


            poligono.bindTooltip(
                distrito.descripcio
            );

        });

    })
    .catch(error => {

        console.error("ERROR AL CARGAR DISTRITOS:", error);

    });

// ===============================
// CONFIGURACIÓN DE LOS DISTRITOS
// ===============================

function estiloDistrito(feature) {

    return {
        color: "#555",
        weight: 1,
        fillColor: "#d9d9d9",
        fillOpacity: 0.35
    };
}


function resaltarDistrito(e) {

    const capa = e.target;

    capa.setStyle({
        weight: 3,
        fillColor: "#d65a3a",
        fillOpacity: 0.55
    });

    capa.bringToFront();
}


function quitarResaltado(e) {

    e.target.setStyle({
        color: "#777",
        weight: 1,
        fillColor: "#d9d9d9",
        fillOpacity: 0.35
    });

}


function seleccionarDistrito(e) {

    const capa = e.target;
    const nombre = capa.feature.properties.nombre;

    console.log("Distrito seleccionado:", nombre);

    if (nombre === "Nou Barris") {

        capa.setStyle({
            color: "#d65a3a",
            weight: 3,
            fillColor: "#d65a3a",
            fillOpacity: 0.55
        });

        if (map) {
            map.fitBounds(capa.getBounds());
            capaBarrios.addTo(map);
            capaOrtopedias.addTo(map);
            capaSanidad.addTo(map);
        }

        // Mostrar el panel lateral
        mostrarNouBarris();
    }
}


    // =====================================
    // BARRIOS DE NOU BARRIS
    // =====================================

  const datosBarrios = {

    "Vilapicina i la Torre Llobeta": {
        poblacion: "26.293",
        poblacionNumero: 26293,
        extranjeros: "18,2%",
        mayores65: "24,6%",
        mayores65Numero: 24.6,
        discapacidad: "2.607",
        discapacidadPorcentaje: "10,1%",
        discapacidadAnio: "2019"
    },

    "Porta": {
        poblacion: "31.329",
        poblacionNumero: 31329,
        extranjeros: "31,4%",
        mayores65: "20,9%",
        mayores65Numero: 20.9,
        discapacidad: "2.876",
        discapacidadPorcentaje: "10,9%",
        discapacidadAnio: "2019"
    },

    "el Turó de la Peira": {
        poblacion: "16.820",
        poblacionNumero: 16820,
        extranjeros: "25,9%",
        mayores65: "18,2%",
        mayores65Numero: 18.2,
        discapacidad: "1.661",
        discapacidadPorcentaje: "10,6%",
        discapacidadAnio: "2019"
    },

    "Can Peguera": {
        poblacion: "2.180",
        poblacionNumero: 2180,
        extranjeros: "10,0%",
        mayores65: "22,2%",
        mayores65Numero: 22.2,
        discapacidad: "420",
        discapacidadPorcentaje: "18,4%",
        discapacidadAnio: "2019"
    },

    "la Guineueta": {
        poblacion: "15.373",
        poblacionNumero: 15373,
        extranjeros: "12,5%",
        mayores65: "27,2%",
        mayores65Numero: 27.2,
        discapacidad: "2.025",
        discapacidadPorcentaje: "13,2%",
        discapacidadAnio: "2019"
    },

    "Canyelles": {
        poblacion: "6.797",
        poblacionNumero: 6797,
        extranjeros: "8,6%",
        mayores65: "30,8%",
        mayores65Numero: 30.8,
        discapacidad: "1.013",
        discapacidadPorcentaje: "14,7%",
        discapacidadAnio: "2019"
    },

    "les Roquetes": {
        poblacion: "16.941",
        poblacionNumero: 16941,
        extranjeros: "27,3%",
        mayores65: "17,3%",
        mayores65Numero: 17.3,
        discapacidad: "2.003",
        discapacidadPorcentaje: "12,4%",
        discapacidadAnio: "2019"
    },

    "Verdun": {
        poblacion: "13.194",
        poblacionNumero: 13194,
        extranjeros: "24,9%",
        mayores65: "20,2%",
        mayores65Numero: 20.2,
        discapacidad: "1.541",
        discapacidadPorcentaje: "12,3%",
        discapacidadAnio: "2019"
    },

    "la Prosperitat": {
        poblacion: "27.291",
        poblacionNumero: 27291,
        extranjeros: "19,9%",
        mayores65: "24,2%",
        mayores65Numero: 24.2,
        discapacidad: "3.038",
        discapacidadPorcentaje: "11,3%",
        discapacidadAnio: "2019"
    },

    "la Trinitat Nova": {
        poblacion: "7.726",
        poblacionNumero: 7726,
        extranjeros: "24,9%",
        mayores65: "17,6%",
        mayores65Numero: 17.6,
        discapacidad: "952",
        discapacidadPorcentaje: "12,5%",
        discapacidadAnio: "2019"
    },

    "Torre Baró": {
        poblacion: "3.119",
        poblacionNumero: 3119,
        extranjeros: "21,8%",
        mayores65: "13,8%",
        mayores65Numero: 13.8,
        discapacidad: "453",
        discapacidadPorcentaje: "15,6%",
        discapacidadAnio: "2019"
    },

    "Ciutat Meridiana": {
        poblacion: "11.090",
        poblacionNumero: 11090,
        extranjeros: "31,1%",
        mayores65: "16,6%",
        mayores65Numero: 16.6,
        discapacidad: "1.388",
        discapacidadPorcentaje: "12,9%",
        discapacidadAnio: "2019"
    },

    "Vallbona": {
        poblacion: "1.437",
        poblacionNumero: 1437,
        extranjeros: "17,4%",
        mayores65: "18,9%",
        mayores65Numero: 18.9,
        discapacidad: "222",
        discapacidadPorcentaje: "15,8%",
        discapacidadAnio: "2019"
    }

};

const totalBarriosDatos = Object.keys(datosBarrios).length;
const totalPoblacionBarrios = Object.values(datosBarrios).reduce(
    function(total, datos) {
        return total + datos.poblacionNumero;
    },
    0
);

const datosTerritorioPorBarrio = {
    "Vilapicina i la Torre Llobeta": {
        edad014: 2837, edad1564: 16975, domicilios: 10732, unipersonales: 3283,
        educacion: { primarios: 3975, esoFpi: 6109, bachilleratoCfgm: 6526, superior: 6193 },
        renta: { secciones: 19, minimo: 19487, maximo: 25541 }
    },
    "Porta": {
        edad014: 3541, edad1564: 21682, domicilios: 10348, unipersonales: 3194,
        educacion: { primarios: 5842, esoFpi: 8238, bachilleratoCfgm: 7580, superior: 5293 },
        renta: { secciones: 18, minimo: 16775, maximo: 23767 }
    },
    "el Turó de la Peira": {
        edad014: 2295, edad1564: 11540, domicilios: 6453, unipersonales: 1940,
        educacion: { primarios: 2992, esoFpi: 4380, bachilleratoCfgm: 3972, superior: 2657 },
        renta: { secciones: 10, minimo: 14334, maximo: 20966 }
    },
    "Can Peguera": {
        edad014: 258, edad1564: 1430, domicilios: 940, unipersonales: 346,
        educacion: { primarios: 596, esoFpi: 662, bachilleratoCfgm: 369, superior: 205 },
        renta: { secciones: 2, minimo: 13787, maximo: 18202 }
    },
    "la Guineueta": {
        edad014: 1724, edad1564: 9484, domicilios: 6217, unipersonales: 1798,
        educacion: { primarios: 2696, esoFpi: 3908, bachilleratoCfgm: 3662, superior: 2914 },
        renta: { secciones: 11, minimo: 19060, maximo: 26660 }
    },
    "Canyelles": {
        edad014: 687, edad1564: 4019, domicilios: 2822, unipersonales: 761,
        educacion: { primarios: 1629, esoFpi: 2062, bachilleratoCfgm: 1312, superior: 907 },
        renta: { secciones: 5, minimo: 19154, maximo: 24107 }
    },
    "les Roquetes": {
        edad014: 2432, edad1564: 11585, domicilios: 6200, unipersonales: 1619,
        educacion: { primarios: 3983, esoFpi: 5088, bachilleratoCfgm: 3172, superior: 1735 },
        renta: { secciones: 10, minimo: 13964, maximo: 18334 }
    },
    "Verdun": {
        edad014: 1669, edad1564: 8965, domicilios: 5261, unipersonales: 1636,
        educacion: { primarios: 2770, esoFpi: 3818, bachilleratoCfgm: 2848, superior: 1688 },
        renta: { secciones: 8, minimo: 15697, maximo: 18433 }
    },
    "la Prosperitat": {
        edad014: 3086, edad1564: 17721, domicilios: 10893, unipersonales: 3243,
        educacion: { primarios: 5756, esoFpi: 7817, bachilleratoCfgm: 5980, superior: 3670 },
        renta: { secciones: 20, minimo: 16190, maximo: 22292 }
    },
    "la Trinitat Nova": {
        edad014: 1012, edad1564: 5342, domicilios: 2989, unipersonales: 931,
        educacion: { primarios: 1806, esoFpi: 2514, bachilleratoCfgm: 1457, superior: 707 },
        renta: { secciones: 5, minimo: 14227, maximo: 16350 }
    },
    "Torre Baró": {
        edad014: 507, edad1564: 2190, domicilios: 1056, unipersonales: 238,
        educacion: { primarios: 848, esoFpi: 882, bachilleratoCfgm: 505, superior: 277 },
        renta: { secciones: 2, minimo: 14568, maximo: 15177 }
    },
    "Ciutat Meridiana": {
        edad014: 1842, edad1564: 7446, domicilios: 3729, unipersonales: 876,
        educacion: { primarios: 3012, esoFpi: 3282, bachilleratoCfgm: 1888, superior: 738 },
        renta: { secciones: 6, minimo: 12315, maximo: 14222 }
    },
    "Vallbona": {
        edad014: 216, edad1564: 948, domicilios: 496, unipersonales: 136,
        educacion: { primarios: 397, esoFpi: 454, bachilleratoCfgm: 197, superior: 108 },
        renta: { secciones: 1, minimo: 15483, maximo: 15483 }
    }
};

const totalDomiciliosBarrios = Object.values(datosTerritorioPorBarrio).reduce(
    function(total, datos) {
        return total + datos.domicilios;
    },
    0
);

const centrosSanitarios = {
    "Vilapicina i la Torre Llobeta": [
        { nombre: "CAP Cotxeres", tipo: "CAP" },
        { nombre: "CUAP Cotxeres", tipo: "CUAP" }
    ],
    "la Guineueta": [
        { nombre: "CAP Guineueta", tipo: "CAP" }
    ],
    "la Prosperitat": [
        { nombre: "CAP Rio de Janeiro", tipo: "CAP" }
    ],
    "les Roquetes": [
        { nombre: "CAP Roquetes-Canteres", tipo: "CAP" }
    ],
    "el Turó de la Peira": [
        { nombre: "CAP Turó", tipo: "CAP" }
    ],
    "la Trinitat Nova": [
        { nombre: "CAP Xafarines", tipo: "CAP" }
    ],

   "Ciutat Meridiana": [
        {
            nombre: "CAP Ciutat Meridiana", tipo: "CAP" }
    ],
};

// =====================================
// RECURSOS VISUALES · PERFIL
// =====================================


function crearRankingPoblacion() {

    const colores = [
        "#4776A8",
        "#5A9A91",
        "#E0A458",
        "#C87563",
        "#8A79B8",
        "#78A6C8",
        "#A3B86C",
        "#D18BA8",
        "#6F8FAD",
        "#B59A78",
        "#7BA7A1",
        "#B7A2D1",
        "#A0A7AE"
    ];

    const barrios = Object.entries(datosBarrios)
        .sort(function(a, b) {
            return b[1].poblacionNumero - a[1].poblacionNumero;
        });

    const total = barrios.reduce(function(suma, item) {
        return suma + item[1].poblacionNumero;
    }, 0);

    let anguloAcumulado = 0;

    const segmentos = barrios.map(function(item, indice) {

        const habitantes = item[1].poblacionNumero;
        const porcentaje = (habitantes / total) * 100;
        const inicio = anguloAcumulado;
        const fin = inicio + porcentaje;

        anguloAcumulado = fin;

        return {
            nombre: item[0],
            habitantes: habitantes,
            porcentaje: porcentaje,
            color: colores[indice % colores.length],
            inicio: inicio,
            fin: fin
        };
    });

    const gradiente = segmentos.map(function(segmento) {
        return `${segmento.color} ${segmento.inicio}% ${segmento.fin}%`;
    }).join(", ");

    return `
        <div class="poblacion-circular">

            <div class="poblacion-donut"
                style="background: conic-gradient(${gradiente});">

                <div class="poblacion-donut-centro">
                    <strong>${total.toLocaleString("es-ES")}</strong>
                    <span>habitants</span>
                </div>

            </div>

            <div class="poblacion-leyenda">

                ${segmentos.map(function(segmento) {
                    return `
                        <div class="poblacion-leyenda-item">

                            <span
                                class="poblacion-color"
                                style="background:${segmento.color}">
                            </span>

                            <span class="poblacion-barrio">
                                ${segmento.nombre}
                            </span>

                            <strong class="poblacion-cifra">
                                ${segmento.habitantes.toLocaleString("es-ES")}
                            </strong>

                        </div>
                    `;
                }).join("")}

            </div>

        </div>
    `;
}




function crearRankingEstructuraEdades() {

    const barrios = Object.entries(datosBarrios);

    const totalPoblacion = barrios.reduce(function(total, item) {
        return total + item[1].poblacionNumero;
    }, 0);

    const infancia = barrios.reduce(function(total, item) {
        const territorio = datosTerritorioPorBarrio[item[0]];
        return total + (territorio ? Number(territorio.edad014) || 0 : 0);
    }, 0);

    const adultos = barrios.reduce(function(total, item) {
        const territorio = datosTerritorioPorBarrio[item[0]];
        return total + (territorio ? Number(territorio.edad1564) || 0 : 0);
    }, 0);

    const mayores = totalPoblacion - infancia - adultos;

    const tramos = [
        {
            etiqueta: "Infància i adolescència",
            edades: "0–14 anys",
            valor: infancia,
            clase: "edad-infancia",
            color: "#4776A8"
        },
        {
            etiqueta: "Població adulta",
            edades: "15–64 anys",
            valor: adultos,
            clase: "edad-adulta",
            color: "#5A9A91"
        },
        {
            etiqueta: "Població major",
            edades: "65 anys o més",
            valor: mayores,
            clase: "edad-mayores",
            color: "#D49A45"
        }
    ];

    return `
        <div class="edad-resumen">

            <div class="edad-resumen-barra"
                 role="img"
                 aria-label="Distribució de la població per grups d'edat">

                ${tramos.map(function(tramo) {
                    const porcentaje = totalPoblacion > 0
                        ? tramo.valor / totalPoblacion * 100
                        : 0;

                    return `
                        <span
                            class="territorio-edad-tramo ${tramo.clase}"
                            style="width:${porcentaje}%; background-color:${tramo.color}">
                        </span>
                    `;
                }).join("")}

            </div>

            <div class="edad-resumen-tarjetas">

                ${tramos.map(function(tramo) {
                    const porcentaje = totalPoblacion > 0
                        ? tramo.valor / totalPoblacion * 100
                        : 0;

                    return `
                        <div class="edad-resumen-tarjeta ${tramo.clase}">

                            <div class="edad-resumen-cabecera">
                                <span class="edad-resumen-indicador"
                                      style="background-color:${tramo.color}">
                                </span>

                                <span class="edad-resumen-etiqueta">
                                    ${tramo.etiqueta}
                                </span>
                            </div>

                            <strong class="edad-resumen-porcentaje">
                                ${porcentaje.toLocaleString("es-ES", {
                                    minimumFractionDigits: 1,
                                    maximumFractionDigits: 1
                                })}%
                            </strong>

                            <span class="edad-resumen-rango">
                                ${tramo.edades}
                            </span>

                            <span class="edad-resumen-personas">
                                ${tramo.valor.toLocaleString("es-ES")} personas
                            </span>

                        </div>
                    `;
                }).join("")}

            </div>

        </div>
    `;
}


function crearDemandaMayoresPorBarrio() {

    const barrios = Object.entries(datosTerritorioPorBarrio)
        .map(function(item) {

            const nombre = item[0];
            const territorio = item[1];
            const datosPoblacion = datosBarrios[nombre];

            if (!datosPoblacion || !datosPoblacion.poblacionNumero) {
                return null;
            }

            const poblacion = Number(datosPoblacion.poblacionNumero);
            const infancia = Number(territorio.edad014) || 0;
            const adultos = Number(territorio.edad1564) || 0;

            const mayores = Math.max(
                0,
                poblacion - infancia - adultos
            );

            return {
                nombre: nombre,
                mayores: mayores,
                porcentaje: poblacion > 0
                    ? mayores / poblacion * 100
                    : 0
            };
        })
        .filter(function(item) {
            return item !== null;
        })
        .sort(function(a, b) {
            return b.porcentaje - a.porcentaje;
        });

    const maximo = barrios.length > 0
        ? barrios[0].porcentaje
        : 1;

    return barrios.map(function(item) {

        const ancho = maximo > 0
            ? item.porcentaje / maximo * 100
            : 0;

        return `
            <div style="margin-bottom: 14px;">

                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    gap: 12px;
                    margin-bottom: 5px;
                ">
                    <span style="font-size: 0.9rem;">
                        ${item.nombre}
                    </span>

                    <strong style="
                        font-size: 0.9rem;
                        white-space: nowrap;
                    ">
                        ${item.porcentaje.toLocaleString("es-ES", {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        })} %
                    </strong>
                </div>

                <div style="
                    height: 7px;
                    background: #edf0f2;
                    border-radius: 5px;
                    overflow: hidden;
                ">
                    <div style="
                        height: 100%;
                        width: ${ancho}%;
                        background: #5A9A91;
                        border-radius: 5px;
                    "></div>
                </div>

                <div style="
                    margin-top: 3px;
                    font-size: 0.76rem;
                    color: #68727d;
                ">
                    ${item.mayores.toLocaleString("es-ES")} persones
                </div>

            </div>
        `;
    }).join("");
}


function crearDemandaHogaresUnipersonales() {

    const barrios = Object.entries(datosTerritorioPorBarrio)
        .map(function(item) {

            const nombre = item[0];
            const datos = item[1];

            const domicilios = Number(datos.domicilios) || 0;
            const unipersonales = Number(datos.unipersonales) || 0;

            return {
                nombre: nombre,
                domicilios: domicilios,
                unipersonales: unipersonales,
                porcentaje: domicilios > 0
                    ? unipersonales / domicilios * 100
                    : 0
            };
        })
        .sort(function(a, b) {
            return b.porcentaje - a.porcentaje;
        });

    const maximo = barrios.length > 0
        ? barrios[0].porcentaje
        : 1;

    return barrios.map(function(item) {

        const ancho = maximo > 0
            ? item.porcentaje / maximo * 100
            : 0;

        return `
            <div style="margin-bottom: 14px;">

                <div style="
                    display: flex;
                    justify-content: space-between;
                    align-items: baseline;
                    gap: 12px;
                    margin-bottom: 5px;
                ">
                    <span style="font-size: 0.9rem;">
                        ${item.nombre}
                    </span>

                    <strong style="
                        font-size: 0.9rem;
                        white-space: nowrap;
                    ">
                        ${item.porcentaje.toLocaleString("es-ES", {
                            minimumFractionDigits: 1,
                            maximumFractionDigits: 1
                        })} %
                    </strong>
                </div>

                <div style="
                    height: 7px;
                    background: #edf0f2;
                    border-radius: 5px;
                    overflow: hidden;
                ">
                    <div style="
                        height: 100%;
                        width: ${ancho}%;
                        background: #4776A8;
                        border-radius: 5px;
                    "></div>
                </div>

                <div style="
                    margin-top: 3px;
                    font-size: 0.76rem;
                    color: #68727d;
                ">
                    ${item.unipersonales.toLocaleString("es-ES")} domicilis unipersonals
                </div>

            </div>
        `;
    }).join("");
}



    // =====================================
    // CARGAR BARRIOS DE NOU BARRIS
    // =====================================

    fetch(
        'https://geoportal.barcelona.cat/geoBCN/serveis/territori/barris/?geometria=true'
    )
    .then(response => {
        if (!response.ok) {
            throw new Error("No se pudieron cargar los barrios");
        }

        return response.json();
    })
    .then(data => {

    console.log("BARRIOS RECIBIDOS:", data);
    console.log("Número de barrios:", data.resultats.length);
    console.log(
    "BARRIOS:",
    data.resultats.map(barrio => ({
        codigo: barrio.codi,
        nombre: barrio.nom
        }))
    );

        // Códigos oficiales de los 13 barrios de Nou Barris
    const codigosNouBarris = [
        "44", "45", "46", "47", "48", "49",
        "50", "51", "52", "53", "54", "55", "56"
    ];

    data.resultats.forEach(barrio => {

        // Solo dibujar barrios de Nou Barris
        if (!codigosNouBarris.includes(barrio.codi)) {
            return;
        }

        const coordenadasOriginales =
            barrio.geometria.coordinates[0];

        const coordenadas =
            coordenadasOriginales.map(convertirCoordenada);

        const poligono = L.polygon(coordenadas, {
            color: "#777",
            weight: 1.5,
            fillColor: "#f3d7ce",
            fillOpacity: 0.45
        }).addTo(capaBarrios);

        poligono.bindTooltip(barrio.nom);
        poligono.on("click", function () {

            // SEGUNDO CLIC EN EL MISMO BARRIO
            if (poligono._seleccionado) {

                poligono._seleccionado = false;

                poligono.setStyle({
                    color: "#777",
                    weight: 1.5,
                    fillColor: "#f3d7ce",
                    fillOpacity: 0.45
                });

                mostrarNouBarris();

                return;
            }


            // QUITAR SELECCIÓN DE LOS DEMÁS BARRIOS
            capaBarrios.eachLayer(function (otroPoligono) {

                otroPoligono._seleccionado = false;

                otroPoligono.setStyle({
                    color: "#777",
                    weight: 1.5,
                    fillColor: "#f3d7ce",
                    fillOpacity: 0.45
                });

            });


            // SELECCIONAR ESTE BARRIO
            poligono._seleccionado = true;

            poligono.setStyle({
                color: "#d65a3a",
                weight: 3,
                fillColor: "#d65a3a",
                fillOpacity: 0.35
            });


            // DATOS DEL BARRIO
            const datos = datosBarrios[barrio.nom];
            const territorio = datosTerritorioPorBarrio[barrio.nom];
            

            // PANEL
            const panel = document.getElementById("barrio-panel");
            const nombre = document.getElementById("barrio-nombre");
            const contenido = document.querySelector(".barrio-contenido");
            const seccion = document.getElementById("seccion-contenido");


            // MOSTRAR VISTA DEL BARRIO
            panel.classList.add("activo");
            seccion.classList.remove("activo");
            contenido.style.display = "block";


           // NOMBRE
            nombre.textContent = barrio.nom;


            // INFORMACIÓN DEL BARRIO
            contenido.innerHTML = `

                <button id="volver-nou-barris" class="volver-secciones">
                    ← Tornar a Nou Barris
                </button>

                <div class="panel-datos">

                    <div class="panel-dato">
                        <strong>${datos.poblacion || "—"}</strong>
                        <span>habitants</span>
                    </div>

                    <div class="panel-dato">
                        <strong>${territorio.edad014.toLocaleString("es-ES")}</strong>
                        <span>població 0–14 anys · 2024</span>
                    </div>

                    <div class="panel-dato">
                        <strong>${territorio.edad1564.toLocaleString("es-ES")}</strong>
                        <span>població 15–64 anys · 2024</span>
                    </div>

                </div>

            `;
            document.getElementById("volver-nou-barris").addEventListener("click", function () {

        // Quitar selección visual del barrio
            poligono._seleccionado = false;

                poligono.setStyle({
                    color: "#777",
                    weight: 1.5,
                    fillColor: "#f3d7ce",
                    fillOpacity: 0.45
                });

                // Volver al distrito
                mostrarNouBarris();

            });
        });
    });

})


const cerrarPanelBtn = document.getElementById("cerrar-panel");
const panelPrincipal = document.getElementById("barrio-panel");

if (cerrarPanelBtn && panelPrincipal) {
    cerrarPanelBtn.addEventListener("click", function () {
        panelPrincipal.classList.remove("activo");
    });
}

const contenidoSeccion = document.getElementById("seccion-contenido");
const contenidoBarrio = document.querySelector(".barrio-contenido");

const navItems = document.querySelectorAll(".nav-item");

navItems.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const seccion = boton.dataset.seccion;

            console.log("BOTÓN PULSADO:", seccion);

            if (!seccion) {
                return;
            }

            // Activar botón
            navItems.forEach(function(item) {
                item.classList.remove("active");
            });

            boton.classList.add("active");

            // Ocultar contenido principal
            contenidoBarrio.style.display = "none";

            // Mostrar sección
            contenidoSeccion.classList.add("activo");


    // =========================
    // TERRITORIO
    // =========================

    
    
if (seccion === "territorio") {

    const nombreBarrioActual =
        document.getElementById("barrio-nombre").textContent.trim();

    if (nombreBarrioActual === "Nou Barris") {
        mostrarNouBarris();
        return;
    }
}



            
    // =========================
    // PERFIL
    // =========================

    if (seccion === "perfil") {

        
        const nombreBarrioActual = document
            .getElementById("barrio-nombre")
            .textContent
            .trim();

        if (nombreBarrioActual === "Nou Barris") {
            mostrarPerfilNouBarris();
            return;
        }


        const nombreBarrio =
            document.getElementById("barrio-nombre").textContent.trim();


        // =========================
        // PERFIL · BARRIO
        // =========================

        const datos = datosBarrios[nombreBarrio];
        const territorio = datosTerritorioPorBarrio[nombreBarrio];

        if (!datos || !territorio) {

            contenidoSeccion.innerHTML = `

                <div class="seccion-etiqueta">
                    02 · PERFIL DE LA POBLACIÓ
                </div>

                <h3>
                    Qui viu a aquest barri?
                </h3>

                <p class="seccion-intro">
                    No hi ha dades disponibles per a aquest àmbit.
                </p>

            `;

            return;
        }


        contenidoSeccion.innerHTML = `

            <div class="seccion-etiqueta">
                01 · TERRITORI I CONTEXT
            </div>

            <h3>
                Qui viu a aquí?
            </h3>

            <p class="seccion-intro">
                Característiques demogràfiques de
                <strong>${nombreBarrio}</strong>.
            </p>

            <div class="datos-grid territorio-barrio-indicadores">

                <div class="dato-card">

                    <strong>${datos.poblacion}</strong>

                    <span>
                        habitants · 2024
                    </span>

                </div>


                <div class="dato-card">

                    <strong>${territorio.edad014.toLocaleString("es-ES")}</strong>

                    <span>
                        població 0–14 anys · 2024
                    </span>

                </div>


                <div class="dato-card">

                    <strong>${territorio.edad1564.toLocaleString("es-ES")}</strong>

                    <span>
                        població 15–64 anys · 2024
                    </span>

                </div>

                <div class="dato-card">
                    <strong>${(datos.poblacionNumero - territorio.edad014 - territorio.edad1564).toLocaleString("es-ES")}</strong>
                    <span>població 65+ · càlcul residual · 2024</span>
                </div>

            </div>


            <div class="panel-bloque">

                <div class="panel-bloque-titulo">
                    ESTRUCTURA DELS DOMICILIS · 2024
                </div>

                <p>
                    <strong>${territorio.domicilios.toLocaleString("es-ES")}</strong>
                    domicilis registrats; <strong>${territorio.unipersonales.toLocaleString("es-ES")}</strong>
                    són unipersonals (${(100 * territorio.unipersonales / territorio.domicilios).toFixed(1).replace(".", ",")}%).
                </p>

            </div>


            <div class="lectura-dato">

                <span class="lectura-titulo">
                    LECTURA DEL PERFIL
                </span>

                <p>
                    Les edats i els domicilis descriuen la composició
                    demogràfica del barri; no són mesures
                    ortoprotésiques.
                </p>

            </div>

            

        `;

    }

    // =========================
    // DEMANDA
    // =========================

    if (seccion === "demanda") {

        const nombreBarrio =
            document.getElementById("barrio-nombre").textContent.trim();


        // =========================
        // DEMANDA · NOU BARRIS
        // =========================

        
    if (nombreBarrio === "Nou Barris") {

        
        

contenidoSeccion.innerHTML = `
    <div class="seccion-cabecera">
        <div class="seccion-etiqueta">05 · DEMANDA POTENCIAL</div>
        <h3>Factors que poden influir en la demanda</h3>
        <p>
            Indicadors socials i demogràfics que permeten identificar
            possibles necessitats de productes ortoprotèsics i productes
            de suport a Nou Barris.
        </p>
    </div>

    <div class="comparativas-demanda">

        <!-- DISCAPACIDAD RECONOCIDA -->

        <section class="comparativa-card">
            <h4>Discapacitat reconeguda</h4>
            <p class="comparativa-subtitulo">
                Percentatge de població · 2024
            </p>

            <div class="comparativa-grupo">
                <div class="comparativa-sexo">Dones</div>

                <div class="comparativa-fila">
                    <span>Nou Barris</span>
                    <strong>13,4 %</strong>
                </div>

                <div class="comparativa-fila">
                    <span>Barcelona ciudad</span>
                    <strong>10,6 %</strong>
                </div>
            </div>

            <div class="comparativa-grupo">
                <div class="comparativa-sexo">Homes</div>

                <div class="comparativa-fila">
                    <span>Nou Barris</span>
                    <strong>12,2 %</strong>
                </div>

                <div class="comparativa-fila">
                    <span>Barcelona ciudad</span>
                    <strong>9,0 %</strong>
                </div>
            </div>
        </section>


        <!-- RIESGO DE POBREZA -->

        <section class="comparativa-card">
            <h4>Riesgo de pobreza</h4>
            <p class="comparativa-subtitulo">
                Percentatge de població · 2024
            </p>

            <div class="comparativa-grupo">
                <div class="comparativa-sexo">Dones</div>

                <div class="comparativa-fila">
                    <span>Nou Barris</span>
                    <strong>35,5 %</strong>
                </div>

                <div class="comparativa-fila">
                    <span>Barcelona ciudad</span>
                    <strong>20,4 %</strong>
                </div>
            </div>

            <div class="comparativa-grupo">
                <div class="comparativa-sexo">Homes</div>

                <div class="comparativa-fila">
                    <span>Nou Barris</span>
                    <strong>35,7 %</strong>
                </div>

                <div class="comparativa-fila">
                    <span>Barcelona ciudad</span>
                    <strong>19,5 %</strong>
                </div>
            </div>
        </section>


        <!-- POBLACIÓN MAYOR -->

        <section class="comparativa-card">
            <h4>Població de 65 anys o més</h4>
            <p class="comparativa-subtitulo">
                Proporció de la població · 2024
            </p>

            <div class="comparativa-grupo">
                <div class="comparativa-fila">
                    <span>Nou Barris</span>
                    <strong>21,2 %</strong>
                </div>

                <div class="comparativa-fila">
                    <span>Barcelona ciudad</span>
                    <strong>21,1 %</strong>
                </div>
            </div>
        </section>


        <!-- INFANCIA Y ADOLESCENCIA -->

        <section class="comparativa-card">
            <h4>Població de 0 a 15 anys</h4>
            <p class="comparativa-subtitulo">
                Proporció de la població · 2023
            </p>

            <div class="comparativa-grupo">
                <div class="comparativa-fila">
                    <span>Nou Barris</span>
                    <strong>13,6 %</strong>
                </div>

                <div class="comparativa-fila">
                    <span>Barcelona ciudad</span>
                    <strong>12,5 %</strong>
                </div>
            </div>
        </section>


        <!-- DIABETES MELLITUS -->

        <section class="comparativa-card">
            <h4>Diabetes mellitus</h4>
            <p class="comparativa-subtitulo">
                Persones ateses en atenció primària · 2011
            </p>

            <div class="comparativa-grupo">
                <div class="comparativa-fila">
                    <span>Nou Barris</span>
                    <strong>11,2 %</strong>
                </div>

                <div class="comparativa-fila">
                    <span>Barcelona ciudad</span>
                    <strong>9,3 %</strong>
                </div>
            </div>
        </section>

    </div>
`;




        return;
    }



        // =========================
        // DEMANDA · BARRIO
        // =========================

        const datos = datosBarrios[nombreBarrio];


        if (!datos) {

            contenidoSeccion.innerHTML = `

                <div class="seccion-etiqueta">
                    04 · DEMANDA POTENCIAL
                </div>

                <h3>
                    Demanda potencial
                </h3>

                <p class="seccion-intro">
                    No hay datos disponibles para este ámbito.
                </p>

            `;

            return;
        }


        contenidoSeccion.innerHTML = `

            <div class="seccion-cabecera">

                <div class="seccion-etiqueta">
                    04 · DEMANDA POTENCIAL
                </div>

                <h3>
                    Quines necessitats potencials hi pot haver?
                </h3>

                <p>
                    Indicadors demogràfics i socials que permeten
                    contextualitzar les possibles necessitats del barri.
                </p>

            </div>


            <div class="datos-grid">

                <div class="dato-card">

                    <strong>
                        ${datos.mayores65}
                    </strong>

                    <span>
                        població ≥65 anys · 2024
                    </span>

                </div>


                <div class="dato-card">

                    <strong>
                        ${datos.discapacidadPorcentaje}
                    </strong>

                    <span>
                        població amb discapacitat · 2019
                    </span>

                </div>


                <div class="dato-card">

                    <strong>
                        ${datos.discapacidad}
                    </strong>

                    <span>
                        persones amb discapacitat · 2019
                    </span>

                </div>

            </div>


            <div class="panel-bloque">

                <div class="panel-bloque-titulo">
                    INDICADORES DEL BARRIO
                </div>

                <p>
                    En <strong>${nombreBarrio}</strong>, el
                    <strong>${datos.mayores65}</strong>
                    de la població té 65 anys o més.
                </p>

                <p>
                    Els datos disponibles indiquen a més
                    <strong>${datos.discapacidad}</strong>
                    persones amb discapacitat, equivalentes al
                    <strong>${datos.discapacidadPorcentaje}</strong>
                    de la població segons el dato oficial de 2019.
                </p>

            </div>


            <div class="lectura-dato">

                <span class="lectura-titulo">
                    PER QUÈ ÉS RELLEVANT?
                </span>

                <p>
                    L'estructura d'edat i la presència de població
                    amb discapacitat poden estar relacionades amb
                    differents necessitats de mobilitat, autonomia
                    i productes de suport.
                </p>

                <p>
                   Aquests indicadors no permeten determinar quantes
                    persones necessiten realment productes ortoprotèsics.
                    La seva utilitat apareix en creuar-los amb la sanitat
                    i l'oferta existent.
                </p>

            </div>


            

        `;

    }


    // =========================
    // SANIDAD
    // =========================

    if (seccion === "sanidad") {

        const nombreBarrio =
            document.getElementById("barrio-nombre").textContent.trim();


        // =========================
        // SANIDAD · NOU BARRIS
        // =========================

        if (nombreBarrio === "Nou Barris") {

        

    contenidoSeccion.innerHTML = `
            
    
        <div class="seccion-etiqueta">
            04 · XARXA SANITÀRIA
        </div>

        <section class="red-sanitaria">

            <div class="sanitaria-cabecera">
                <h2>XARXA SANITÀRIA</h2>
            </div>

            <div class="sanitaria-resumen">
                <div class="sanitaria-total">
                    <strong>7</strong>
                    <span>CAP</span>
                </div>

                <div class="sanitaria-listado">
                    <div class="sanitaria-item">
                        <span class="sanitaria-punto"></span>
                        <div>
                            <strong>CAP Cotxeres</strong>
                            <span>Vilapicina i la Torre Llobeta</span>
                        </div>
                    </div>

                    <div class="sanitaria-item">
                        <span class="sanitaria-punto"></span>
                        <div>
                            <strong>CAP Guineueta</strong>
                            <span>la Guineueta</span>
                        </div>
                    </div>

                    <div class="sanitaria-item">
                        <span class="sanitaria-punto"></span>
                        <div>
                            <strong>CAP Rio de Janeiro</strong>
                            <span>la Prosperitat</span>
                        </div>
                    </div>

                    <div class="sanitaria-item">
                        <span class="sanitaria-punto"></span>
                        <div>
                            <strong>CAP Roquetes-Canteres</strong>
                            <span>les Roquetes</span>
                        </div>
                    </div>

                    <div class="sanitaria-item">
                        <span class="sanitaria-punto"></span>
                        <div>
                            <strong>CAP Turó</strong>
                            <span>el Turó de la Peira</span>
                        </div>
                    </div>

                    <div class="sanitaria-item">
                        <span class="sanitaria-punto"></span>
                        <div>
                            <strong>CAP Chafarinas</strong>
                            <span>la Trinitat Nova</span>
                        </div>
                    </div>

                    <div class="sanitaria-item">
                        <span class="sanitaria-punto"></span>
                        <div>
                            <strong>CAP Ciutat Meridiana</strong>
                            <span>Ciutat Meridiana</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sanitaria-cuap">
                <span class="sanitaria-cuap-etiqueta">ATENCIÓ URGENT</span>
                <div>
                    <strong>CUAP Cotxeres</strong>
                    <span>Vilapicina i la Torre Llobeta</span>
                </div>
            </div>

        </section>
    `;



            return;
        }


        // =========================
        // SANIDAD · BARRIO
        // =========================

        const centros = centrosSanitarios[nombreBarrio] || [];


        // =========================
        // SIN CENTROS EN EL BARRIO
        // =========================

        if (centros.length === 0) {

            contenidoSeccion.innerHTML = `

                <div class="seccion-cabecera">

                    <div class="seccion-etiqueta">
                        03 · SANITAT
                    </div>

                    <h3>
                        Xarxa sanitària
                    </h3>

                    <p>
                        A l'inventari utilitzat per a aquest estudi
                        no s'identifica un CAP o CUAP situat a dins
                        dels límits de
                        <strong>${nombreBarrio}</strong>.
                    </p>

                </div>


                <div class="datos-grid">

                    <div class="dato-card">

                        <strong>0</strong>

                        <span>
                            CAP / CUAP identificats
                        </span>

                    </div>

                </div>


                <div class="lectura-dato">

                    <span class="lectura-titulo">
                        IMPORTANT
                    </span>

                    <p>
                        L´absència d´un centre sanitari dins del barri
                        no vol dir absència d'atenció sanitària per
                        població.
                    </p>

                    <p>
                        La població pot estar adscrita o utilitzar centres
                        situats a barris propers. Per això, aquesta dada
                        s'interpretarà juntament amb l'estructura territorial
                        i no com a mesura directa d'accessibilitat sanitària.
                    </p>

                </div>


            
            `;

            return;
        }


        // =========================
        // CON CENTROS EN EL BARRIO
        // =========================

        contenidoSeccion.innerHTML = `

            <div class="seccion-cabecera">

                <div class="seccion-etiqueta">
                    03 · SANITAT
                </div>

                <h3>
                    Xarxa sanitària del barri
                </h3>

                <p>
                    Equipaments sanitaris identificats dins de
                    <strong>${nombreBarrio}</strong>.
                </p>

            </div>


            <div class="datos-grid">

                <div class="dato-card">

                    <strong>
                        ${centros.length}
                    </strong>

                    <span>
                        centres identificats
                    </span>

                </div>


                <div class="dato-card">

                    <strong>
                        ${centros.filter(function(c) {
                            return c.tipo === "CAP";
                        }).length}
                    </strong>
                    <span>CAP</span>
                </div>


                <div class="dato-card">

                    <strong>
                        ${centros.filter(function(c) {
                            return c.tipo === "CUAP";
                        }).length}
                    </strong>

                    <span> CUAP</span>

                </div>

            </div>


            <div class="sanidad-lista">

                ${centros.map(function(centro) {

                    return `

                        <div class="sanidad-item">

                            <strong> ${centro.nombre} </strong>

                            <span>
                                ${centro.tipo === "CAP"
                                    ? "Centre de Atenció Primària"
                                    : "Centre de Urgències de Atenció Primària"}
                            </span>

                        </div>

                    `;

                }).join("")}

            </div>


            <div class="lectura-dato">

                <span class="lectura-titulo">
                    LECTURA SANITÀRIA
                </span>

                <p>
                    La presència d'atenció primària dins del barri
                    constitue un element de context per analitzar
                    posteriorment la relació entre població, necessitats
                    potencials i oferta ortopèdica.
                </p>

                <p>
                    No s'interpreta l'existència d'un CAP o CUAP com
                    una mesura directa de demanda ortoprotèsica.
                </p>

            </div>


           

        `;

    }


    // =========================
    // OFERTA
    // =========================

    if (seccion === "oferta") {

        mostrarOferta();

        return;
    }


    // =========================
    // CRUCE
    // =========================

    if (seccion === "cruce") {

        const nombreBarrio =
            document.getElementById("barrio-nombre").textContent.trim();


    // =========================
    // CRUCE · NOU BARRIS
    // =========================

    if (nombreBarrio === "Nou Barris") {


        const barriosCruce = Object.entries(datosBarrios)
            .map(function(item) {

                const nombre = item[0];
                const datos = item[1];
                const oferta = obtenerOfertaBarrio(nombre);
                const centros = centrosSanitarios[nombre] || [];

                // En el cruce principal contamos únicamente
                // las ortopedias especializadas.
                const ortopediasEspecializadas =
                    oferta.ortopedias.length;

                return {
                    nombre: nombre,

                    poblacion: datos.poblacionNumero,

                    mayores65: datos.mayores65Numero,

                    discapacidad: parseFloat(
                        datos.discapacidadPorcentaje
                            .replace(",", ".")
                    ),

                    oferta: ortopediasEspecializadas,

                    farmacias: oferta.farmacias.length,

                    distribuidores: oferta.distribuidores.length,

                    caps: centros.filter(function(centro) {
                        return centro.tipo === "CAP";
                    }).length,

                    cuaps: centros.filter(function(centro) {
                        return centro.tipo === "CUAP";
                    }).length

                };

            });



        // =========================
        // CRUCE PRINCIPAL
        // =========================

        const tablaCruce = [...barriosCruce]
            .sort(function(a, b) {
                return b.poblacion - a.poblacion;
            })
            .map(function(item) {

                return `

                    <div class="cruce-fila">

                        <div class="cruce-nombre">
                            ${item.nombre}
                        </div>

                        <div class="cruce-dato">
                            ${item.poblacion.toLocaleString("es-ES")}
                        </div>

                        <div class="cruce-dato">
                            ${item.mayores65
                                .toFixed(1)
                                .replace(".", ",")}%
                        </div>

                        <div class="cruce-dato">
                            ${item.discapacidad
                                .toFixed(1)
                                .replace(".", ",")}%
                        </div>

                        
                        <div class="cruce-dato ${item.oferta > 0 ? "tiene-ortopedia" : ""}">
                            ${item.oferta}
                        </div>


                        <div class="cruce-dato">
                            ${item.farmacias}
                        </div>

                        <div class="cruce-dato">
                            ${item.distribuidores}
                        </div>

                        <div class="cruce-dato">
                            ${item.caps}
                        </div>

                        <div class="cruce-dato">
                            ${item.cuaps}
                        </div>

                    </div>

                `;

            })
            .join("");


        // =========================
        // NOU BARRIS
        // =========================

        

    contenidoSeccion.innerHTML = `

        <div class="seccion-cabecera">
            <div class="seccion-etiqueta">06 · ENCREUAMENT D'INFORMACIÓ </div>
            
        </div>

        <!-- CIFRAS PRINCIPALES -->

        <div class="cruce-resumen">

            <div class="cruce-indicador">
                <span class="cruce-indicador-etiqueta">POBLACIÓ DEL DISTRICTE</span>
                <strong>179.590</strong>
                <span class="cruce-indicador-detalle">Habitants · 2024</span>
            </div>

            <div class="cruce-indicador">
                <span class="cruce-indicador-etiqueta">POBLACIÓ ≥ 65 ANYS</span>
                <strong>21,2 %</strong>
                <span class="cruce-indicador-detalle">Nou Barris · 2024</span>
            </div>

            <div class="cruce-indicador">
                <span class="cruce-indicador-etiqueta">ORTOPÈDIES</span>
                <strong>${barriosCruce.reduce(
                    (total, item) => total + item.oferta, 0
                )}</strong>
                <span class="cruce-indicador-detalle">Establiments registrats</span>
            </div>

            <div class="cruce-indicador">
                <span class="cruce-indicador-etiqueta">FARMÀCIES ORTOPÈDIQUES</span>
                <strong>${barriosCruce.reduce(
                    (total, item) => total + item.farmacias, 0
                )}</strong>
                <span class="cruce-indicador-detalle">Oferta complementària</span>
            </div>

        </div>

        <!-- COMPARACIÓN VISUAL POR BARRIOS -->

        <div class="cruce-bloque">

            <div class="cruce-bloque-cabecera">
                <div>
                    <span class="cruce-kicker">COMPARACIÓ PER BARRIS</span>
                    <h4>On es concentra la població gran?</h4>
                </div>
                <span class="cruce-unidad">% de població · 2024</span>
            </div>

            <div class="cruce-ranking">
                ${[...barriosCruce]
                    .sort((a, b) => b.mayores65 - a.mayores65)
                    .map(item => `
                        <div class="cruce-ranking-fila">
                            <span class="cruce-ranking-nombre">${item.nombre}</span>
                            <div class="cruce-ranking-pista">
                                <div class="cruce-ranking-barra"
                                    style="width:${Math.max(0, Math.min(100, item.mayores65 / 35 * 100))}%">
                                </div>
                            </div>
                            <strong class="cruce-ranking-valor">
                                ${item.mayores65.toFixed(1)} %
                            </strong>
                        </div>
                    `).join("")}
            </div>

        </div>

        <!-- TABLA COMPLETA -->

        <div class="cruce-bloque">

            <div class="cruce-bloque-cabecera">
                <div>
                    <span class="cruce-kicker">DADES DETALLADES</span>
                    <h4>Comparativa dels 13 barris</h4>
                </div>
                <span class="cruce-unidad">9 indicadors</span>
            </div>

            <div class="cruce-tabla">
                <div class="cruce-cabecera">
                    <div>BARRI</div>
                    <div>HABITANTS · 2024</div>
                    <div>≥ 65 (%) · 2024</div>
                    <div>DISCAP. (%) · 2019</div>
                    <div>ORTOPÈDIES ESPECIALITZADES</div>
                    <div>FARMÀCIES ORTOPÈDIQUES</div>
                    <div>DISTRIBUÏDORS</div>
                    <div>CAP</div>
                    <div>CUAP</div>
                </div>

                ${tablaCruce}
            </div>

        </div>


    `;



        return;

        }


        // =========================
        // CRUCE · BARRIO
        // =========================

        const datos = datosBarrios[nombreBarrio];
        const oferta = obtenerOfertaBarrio(nombreBarrio);

        if (!datos) {

            contenidoSeccion.innerHTML = `

                <div class="seccion-etiqueta">
                    05 · ENCREUAMENT D'INFORMACIÓ
                </div>

                <h3>
                    ENCREUAMENT D'INFORMACIÓ
                </h3>

                <p class="seccion-intro">
                    No hi ha dades disponibles per a aquest àmbit.
                </p>

            `;

            return;
        }


        const centros = centrosSanitarios[nombreBarrio] || [];
        const totalOrtopedias = oferta.ortopedias.length;
        const totalFarmacias = oferta.farmacias.length;
        const totalDistribuidores = oferta.distribuidores.length;
        const totalCAP = centros.filter(function(centro) {
            return centro.tipo === "CAP";
        }).length;
        const totalCUAP = centros.filter(function(centro) {
            return centro.tipo === "CUAP";
        }).length;


        contenidoSeccion.innerHTML = `

            <div class="seccion-cabecera">

                <div class="seccion-etiqueta">
                    05 · ENCREUAMENT D'INFORMACIÓ
                </div>

                <h3>
                    Quina relació apareix a ${nombreBarrio}?
                </h3>

                <p>
                   Comparació descriptiva de població, indicadors
                    demogràfics, oferta registrada i xarxa sanitària ubicada.
                </p>

            </div>


            <div class="datos-grid">

                <div class="dato-card">

                    <strong>
                        ${datos.poblacion}
                    </strong>

                    <span>habitants</span>

                </div>

                <div class="dato-card">

                    <strong>
                        ${datos.mayores65}
                    </strong>

                    <span>població ≥65</span>

                </div>


                <div class="dato-card">

                    <strong>${totalOrtopedias}</strong>

                    <span>
                       ortopèdies especialitzades
                    </span>

                </div>

            </div>


            <div class="panel-bloque">

                <div class="panel-bloque-titulo">
                    INDICADORS DEL BARRI
                </div>

                <p>
                    <strong>${datos.poblacion}</strong> habitants.
                </p>

                <p>
                    <strong>${datos.mayores65}</strong> de població
                    de 65 anys o més.
                </p>

                <p>
                    <strong>${datos.discapacidadPorcentaje}</strong>
                    de població amb discapacitat segons el dato disponible
                    de 2019.
                </p>

                <p>
                   Oferta registrada al conjunt: <strong>${totalOrtopedias}</strong>
                    ortopèdies especialitzades, <strong>${totalFarmacias}</strong>
                    farmacies amb servei ortopèdic i
                    <strong>${totalDistribuidores}</strong> distribuidors.
                </p>

                <p>
                    Xarxa sanitària ubicada: <strong>${totalCAP}</strong> CAP y
                    <strong>${totalCUAP}</strong> CUAP. Aquests recomptes descriuen
                    localització; no mesuren cobertura ni accessibilitat.
                </p>

            </div>


            <div class="lectura-dato">

                <span class="lectura-titulo">
                    LECTURA DEL ENCREUAMENT
                </span>

                <p>
                    El barri presenta una determinada combinació de
                    població, estructura d'edat, discapacitat i oferta.
                </p>

                <p>
                    Aquesta combinació s'utilitzarà posteriorment per
                    comparar els barris entre si i detectar possibles
                    diferències territorials.
                </p>

            </div>


        

        `;

    }


    // =========================
    // OPORTUNIDADES
    // =========================

    if (seccion === "oportunidades") {

        const nombreBarrio =
            document.getElementById("barrio-nombre").textContent.trim();


        // =====================================================
        // PREPARAR DATOS
        // =====================================================

        const datosOportunidades = Object.entries(datosBarrios)
            .map(function(item) {

                const nombre = item[0];
                const datos = item[1];
                const oferta = obtenerOfertaBarrio(nombre);

                // Para el análisis principal contamos únicamente
                // las ortopedias especializadas.
                const ortopedias = oferta.ortopedias.length;

                return {

                    nombre: nombre,

                    poblacion: datos.poblacionNumero,

                    mayores65: datos.mayores65Numero,

                    discapacidad: parseFloat(
                        datos.discapacidadPorcentaje.replace(",", ".")
                    ),

                    ortopedias: ortopedias,

                    // Se mantienen como contexto, no como oferta principal.
                    farmacias: oferta.farmacias.length,

                    distribuidores: oferta.distribuidores.length

                };

            });


        const totalesOferta = datosOportunidades.reduce(
            function(totales, barrio) {
                totales.ortopedias += barrio.ortopedias;
                totales.farmacias += barrio.farmacias;
                totales.distribuidores += barrio.distribuidores;
                return totales;
            },
            { ortopedias: 0, farmacias: 0, distribuidores: 0 }
        );


        // =====================================================
        // ORDENAR
        // =====================================================

        const mayorPoblacion =
            [...datosOportunidades].sort(function(a, b) {

                return b.poblacion - a.poblacion;

            });


        const mayorDiscapacidad =
            [...datosOportunidades].sort(function(a, b) {

                return b.discapacidad - a.discapacidad;

            });


        const mayor65 =
            [...datosOportunidades].sort(function(a, b) {

                return b.mayores65 - a.mayores65;

            });


        // =====================================================
        // DATOS DESTACADOS
        // =====================================================

        const barrioMayorPoblacion =
            mayorPoblacion[0];

        const barrioMayorDiscapacidad =
            mayorDiscapacidad[0];

        const barrioMayor65 =
            mayor65[0];

        const barriosSinOrtopedia =
            datosOportunidades.filter(function(barrio) {
                return barrio.ortopedias === 0;
            });


        // =====================================================
        // FUNCIÓN · TARJETA DE OPORTUNIDAD
        // =====================================================

        function crearIndicadorOportunidad(
            titulo,
            barrio,
            dato,
            explicacion
        ) {

            return `

                <div class="oportunidad-item">

                    <div class="oportunidad-item-cabecera">

                        <strong>
                            ${titulo}
                        </strong>

                        <span>
                            ${dato}
                        </span>

                    </div>


                    <div class="oportunidad-barrio">

                        ${barrio}

                    </div>


                    <p>

                        ${explicacion}

                    </p>

                </div>

            `;

        }


        // =====================================================
        // NOU BARRIS
        // =====================================================

       
        // =====================================================
        // OPORTUNIDADES · NOU BARRIS
        // =====================================================

        if (nombreBarrio === "Nou Barris") {

            const nombresArea = [
                "Vallbona",
                "Ciutat Meridiana",
                "Torre Baró",
                "Les Roquetes",
                "Canyelles",
                "La Prosperitat"
            ];

            function normalizarNombre(nombre) {
                return nombre
                    .normalize("NFD")
                    .replace(/[\u0300-\u036f]/g, "")
                    .toLowerCase()
                    .trim();
            }

            const barriosArea = nombresArea
                .map(function(nombreBuscado) {
                    return datosOportunidades.find(function(barrio) {
                        return normalizarNombre(barrio.nombre) ===
                            normalizarNombre(nombreBuscado);
                    });
                })
                .filter(Boolean);

            const poblacionArea = barriosArea.reduce(
                function(total, barrio) {
                    return total + barrio.poblacion;
                },
                0
            );

            function formatoNumero(numero) {
                return numero.toLocaleString("es-ES");
            }

            function formatoPorcentaje(numero) {
                return Number.isFinite(numero)
                    ? numero.toFixed(1).replace(".", ",") + " %"
                    : "Dato no disponible";
            }

            const tarjetasArea = barriosArea
    .slice()
    .sort(function(a, b) {
        return b.mayores65 - a.mayores65;
    })
    .map(function(barrio) {

        const discapacidadDisponible =
            Number.isFinite(barrio.discapacidad);

        const porcentajeMayores =
            Number.isFinite(barrio.mayores65)
                ? barrio.mayores65
                : 0;

        const porcentajeDiscapacidad =
            discapacidadDisponible
                ? barrio.discapacidad
                : 0;

        return `
            <article class="oportunidad-zona-card">

                <div class="oportunidad-zona-cabecera">
                    <h4>${barrio.nombre}</h4>
                    <span>
                        ${formatoNumero(barrio.poblacion)} habitants
                    </span>
                </div>

                <div class="oportunidad-grafica-indicador">

                    <div class="oportunidad-grafica-label">
                        <span> Persones de 65 anys o més</span>
                        <strong>
                            ${formatoPorcentaje(barrio.mayores65)}
                        </strong>
                    </div>

                    <div class="oportunidad-barra-fondo">
                        <div
                            class="oportunidad-barra oportunidad-barra-mayores"
                            style="width: ${Math.min(porcentajeMayores / 35 * 100, 100)}%">
                        </div>
                    </div>

                </div>

                <div class="oportunidad-grafica-indicador">

                    <div class="oportunidad-grafica-label">
                        <span>Discapacitat reconeguda · 2019</span>
                        <strong>
                            ${discapacidadDisponible
                                ? formatoPorcentaje(barrio.discapacidad)
                                : "Dato no disponible"}
                        </strong>
                    </div>

                    <div class="oportunidad-barra-fondo">
                        <div
                            class="oportunidad-barra oportunidad-barra-discapacidad"
                            style="width: ${Math.min(porcentajeDiscapacidad / 35 * 100, 100)}%">
                        </div>
                    </div>

                </div>

                <div class="oportunidad-zona-pie">
                    <span class="oportunidad-sin-ortopedia">
                        ${barrio.ortopedias} ortopèdies registrades
                    </span>
                </div>

            </article>
        `;
    }).join("");

            contenidoSeccion.innerHTML = `

                <div class="seccion-cabecera">
                    <div class="seccion-etiqueta">
                        07 · OPORTUNITATS I CONCLUSIÓ
                    </div>

                </div>

                
            <div class="oportunidad-datos-compactos">

                <div class="oportunidad-dato-card">
                    <span class="oportunidad-dato-etiqueta">
                        ÀREA D'INFLUÈNCIA
                    </span>

                    <div class="oportunidad-dato-valor">
                        66.675
                        <span>habitants</span>
                    </div>

                </div>

                <div class="oportunidad-dato-card">
                    <span class="oportunidad-dato-etiqueta">
                        NITXOL D'INTERÈS
                    </span>

                    <div class="oportunidad-dato-valor">
                        11,2 %
                        <span>diabetis</span>
                    </div>

                </div>

            </div>


                <!-- COMPARACIÓN DE BARRIOS -->

                <div class="panel-bloque">

                    <div class="panel-bloque-titulo">
                        POBLACIÓ I NECESSITATS POTENCIALS
                    </div>


                    <div class="oportunidad-zona-grid">
                        ${tarjetasArea}
                    </div>

                </div>





<!-- PROPUESTA DE MERCADO -->

<div class="oportunidad-mercado-visual">

    <div class="mercado-cabecera">
        <h4>PROPOSTA DE MERCAT</h4>
        <p>
            Atenció orientada a gent gran, persones amb
            discapacitat i persones amb necessitats específiques
            relacionades amb la diabetis.
        </p>
    </div>

    <div class="mercado-lista">

        <div class="mercado-fila">
            <div class="mercado-categoria">
                Servei i assessorament a domicili
            </div>
        </div>

        <div class="mercado-fila">
            <div class="mercado-categoria">
                Presa de mides i motlles personalitzats
            </div>
        </div>

        <div class="mercado-fila">
            <div class="mercado-categoria">
                Calçat adaptat i plantilles ortopèdiques
            </div>
        </div>

        <div class="mercado-fila">
            <div class="mercado-categoria">
                Òrtesi i pròtesi
            </div>
        </div>

        <div class="mercado-fila">
            <div class="mercado-categoria">
                Sillas de ruedas, andadores y productos de apoyo
            </div>
        </div>

    </div>

</div>


        
            `;

            return;

        }



        // =====================================================
        // OPORTUNIDADES · BARRIO
        // =====================================================

        const datos = datosBarrios[nombreBarrio];

        const oferta = obtenerOfertaBarrio(nombreBarrio);


        if (!datos) {

            contenidoSeccion.innerHTML = `

                <div class="seccion-etiqueta">

                    06 · OPORTUNITATS I CONCLUSIÓ

                </div>


                <h3>

                    Possibles oportunitats

                </h3>



            `;

            return;

        }


        // Solo ortopedias especializadas para el análisis principal.

        const ortopedias =
            oferta.ortopedias.length;


        const farmacias =
            oferta.farmacias.length;


        const distribuidores =
            oferta.distribuidores.length;


        contenidoSeccion.innerHTML = `

            <div class="seccion-cabecera">

                <div class="seccion-etiqueta">

                    06 · OPORTUNITATS I CONCLUSIÓ

                </div>


                <h3>

                    Quines dades hi ha sobre ${nombreBarrio}?

                </h3>
               
            </div>


            <div class="datos-grid">


                <div class="dato-card">

                    <strong>${datos.poblacion}</strong>

                    <span>habitants · 2024</span>

                </div>


                <div class="dato-card">

                    <strong>

                        ${datos.discapacidadPorcentaje}

                    </strong>

                    <span>

                        discapacitat · 2019

                    </span>

                </div>


                <div class="dato-card">

                    <strong>${ortopedias}</strong>

                    <span>ortopèdies especialitzades</span>

                </div>

            </div>


            <div class="panel-bloque">

                <div class="panel-bloque-titulo">

                    LECTURA DEL BARRI

                </div>


                <p>

                    <strong>
                        ${datos.mayores65}
                    </strong>
                    de la població té 65 anys o més (2024).

                </p>


                <p>

                    La població amb discapacitat representa el
                    <strong>
                        ${datos.discapacidadPorcentaje}
                    </strong>
                    segons la dada disponible de 2019.

                </p>


                <p>

                    Se han identificado
                    <strong>
                        ${ortopedias}
                    </strong>
                    ortopèdies especialitzades en el barri.

                </p>


                <p>

                    Com a informació complementària, també s'han
                    identificat
                    <strong>
                        ${farmacias}
                    </strong>
                    farmacies con servicio ortopédico y
                    <strong>
                        ${distribuidores}
                    </strong>
                    distribuïdor/s.
                </p>

            </div>


            <div class="lectura-dato">

                <span class="lectura-titulo">

                    QUÈ SIGNIFICA?

                </span>


                <p>

                    Aquestes dades permeten situar
                    <strong>${nombreBarrio}</strong>
                    dins del conjunt de Nou Barris.
                </p>


            

            </div>

            </div>

        `;

        return;

    }

    })

});rgb(199, 165, 96)
