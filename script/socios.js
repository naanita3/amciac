// ============================================
// BASE DE DATOS DE SOCIOS (CON SOPORTE PARA LOGOS)
// ============================================
const sociosData = [
    {
        id: 1,
        nombre: "ABCD CONCRETOS Y DERIVADOS",
        logo: "assets/img/socios/abcd.png",
        direccion: "Monterrey, NL",
        lat: 25.6866,
        lng: -100.3161,
        estado: "Nuevo León",
        telefono: "81 1234 5678",
        web: "https://www.abcdconcretos.com"
    },
    {
        id: 2,
        nombre: "ASFALTOS TECNICOS DE LA BAJA",
        logo: "assets/img/socios/asfaltec.png",
        direccion: "Tijuana, BC",
        lat: 32.5149,
        lng: -117.0382,
        estado: "Baja California",
        telefono: "664 123 4567",
        web: "https://www.asfaltec.com"
    },
    {
        id: 3,
        nombre: "BASFALTOS Y AGREGADOS",
        logo: "",
        direccion: "Hermosillo, Son.",
        lat: 29.0729,
        lng: -110.9559,
        estado: "Sonora",
        telefono: "662 234 5678",
        web: "https://www.basfaltos.com"
    },
    {
        id: 4,
        nombre: "BEAR CONCRETOS MATERIALES Y CONSTRUCCION",
        logo: "assets/img/socios/bear.png",
        direccion: "Querétaro, Qro.",
        lat: 20.5888,
        lng: -100.3899,
        estado: "Querétaro",
        telefono: "442 345 6789",
        web: "https://www.bearconcretos.com"
    },
    {
        id: 5,
        nombre: "CEMENCOSTA",
        logo: "assets/img/socios/cemencosta.png",
        direccion: "Mazatlán, Sin.",
        lat: 23.2494,
        lng: -106.4111,
        estado: "Sinaloa",
        telefono: "669 456 7890",
        web: "https://www.cemencosta.com"
    },
    {
        id: 6,
        nombre: "CLASICO CONCRETOS",
        logo: "assets/img/socios/clasico.png",
        direccion: "León, Gto.",
        lat: 21.1236,
        lng: -101.6803,
        estado: "Guanajuato",
        telefono: "477 567 8901",
        web: "https://www.clasicoconcretos.com"
    },
    {
        id: 7,
        nombre: "COINSA CONCRETOS",
        logo: "assets/img/socios/coinsa.png",
        direccion: "Guadalajara, Jal.",
        lat: 20.6597,
        lng: -103.3496,
        estado: "Jalisco",
        telefono: "33 6789 0123",
        web: "https://www.coinsaconcretos.com"
    },
    {
        id: 8,
        nombre: "COMERCIAL RIVAS PALACIOS",
        logo: "assets/img/socios/rivas.png",
        direccion: "Puebla, Pue.",
        lat: 19.0414,
        lng: -98.2063,
        estado: "Puebla",
        telefono: "222 789 0123",
        web: "https://www.rivaspalacios.com"
    },
    {
        id: 9,
        nombre: "CONCRETEV",
        logo: "assets/img/socios/concretev.png",
        direccion: "Toluca, Mex.",
        lat: 19.2826,
        lng: -99.6557,
        estado: "Estado de México",
        telefono: "722 890 1234",
        web: "https://www.concretev.com"
    },
    {
        id: 10,
        nombre: "CONCRETOS AVE SA DE CV",
        logo: "assets/img/socios/ave.png",
        direccion: "Aguascalientes, Ags.",
        lat: 21.8853,
        lng: -102.2916,
        estado: "Aguascalientes",
        telefono: "449 901 2345",
        web: "https://www.concretosave.com"
    },
    {
        id: 11,
        nombre: "CONCRETOS COLOSO",
        logo: "assets/img/socios/coloso.png",
        direccion: "Culiacán, Sin.",
        lat: 24.8091,
        lng: -107.3940,
        estado: "Sinaloa",
        telefono: "667 012 3456",
        web: "https://www.concretoscoloso.com"
    },
    {
        id: 12,
        nombre: "CONCRETOS CONCRETIZA",
        logo: "assets/img/socios/concretiza.png",
        direccion: "CDMX",
        lat: 19.4326,
        lng: -99.1332,
        estado: "Ciudad de México",
        telefono: "55 1234 5678",
        web: "https://www.concretiza.com"
    },
    {
        id: 13,
        nombre: "CONCRETOS CUBICO",
        logo: "assets/img/socios/cubico.png",
        direccion: "Monterrey, NL",
        lat: 25.6866,
        lng: -100.3161,
        estado: "Nuevo León",
        telefono: "81 2345 6789",
        web: "https://www.concretoscubico.com"
    },
    {
        id: 14,
        nombre: "CONCRETOS DEL GOLFO",
        logo: "assets/img/socios/golfo.png",
        direccion: "Veracruz, Ver.",
        lat: 19.1738,
        lng: -96.1342,
        estado: "Veracruz",
        telefono: "229 345 6789",
        web: "https://www.concretosdelgolfo.com"
    },
    {
        id: 15,
        nombre: "CONCRETOS LA SILLA",
        logo: "assets/img/socios/silla.png",
        direccion: "Monterrey, NL",
        lat: 25.6866,
        lng: -100.3161,
        estado: "Nuevo León",
        telefono: "81 4567 8901",
        web: "https://www.concretoslasilla.com"
    },
    {
        id: 16,
        nombre: "CONCRETOS MAGNO",
        logo: "assets/img/socios/magno.png",
        direccion: "Tijuana, BC",
        lat: 32.5149,
        lng: -117.0382,
        estado: "Baja California",
        telefono: "664 567 8901",
        web: "https://www.concretosmagno.com"
    },
    {
        id: 17,
        nombre: "CONCRETOS PILARES",
        logo: "assets/img/socios/pilares.png",
        direccion: "Guadalajara, Jal.",
        lat: 20.6597,
        lng: -103.3496,
        estado: "Jalisco",
        telefono: "33 6789 0123",
        web: "https://www.concretospilares.com"
    },
    {
        id: 18,
        nombre: "CONCRETOS RICASA CANCUN",
        logo: "assets/img/socios/ricasa.png",
        direccion: "Cancún, Q.Roo",
        lat: 21.1619,
        lng: -86.8515,
        estado: "Quintana Roo",
        telefono: "998 789 0123",
        web: "https://www.ricasa.com"
    },
    {
        id: 19,
        nombre: "CONCRETOS SILOH",
        logo: "assets/img/socios/siloh.png",
        direccion: "Puebla, Pue.",
        lat: 19.0414,
        lng: -98.2063,
        estado: "Puebla",
        telefono: "222 890 1234",
        web: "https://www.siloh.com"
    },
    {
        id: 20,
        nombre: "CONCRETOS TECNICOS DE MEXICO",
        logo: "assets/img/socios/ctm.png",
        direccion: "CDMX",
        lat: 19.4326,
        lng: -99.1332,
        estado: "Ciudad de México",
        telefono: "55 9012 3456",
        web: "https://www.ctm.com"
    },
    {
        id: 21,
        nombre: "CONCRETOS TEPEYAC",
        logo: "assets/img/socios/tepeyac.png",
        direccion: "CDMX",
        lat: 19.4326,
        lng: -99.1332,
        estado: "Ciudad de México",
        telefono: "55 0123 4567",
        web: "https://www.tepeyac.com"
    },
    {
        id: 22,
        nombre: "CONSTRUCTORA Y PROVEEDORA FUENTES",
        logo: "assets/img/socios/fuentes.png",
        direccion: "Chihuahua, Chih.",
        lat: 28.6320,
        lng: -106.0691,
        estado: "Chihuahua",
        telefono: "614 123 4567",
        web: "https://www.fuentes.com"
    },
    {
        id: 23,
        nombre: "COPROFUSA CONCRETOS",
        logo: "assets/img/socios/coprofusa.png",
        direccion: "Durango, Dgo.",
        lat: 24.0277,
        lng: -104.6532,
        estado: "Durango",
        telefono: "618 234 5678",
        web: "https://www.coprofusa.com"
    },
    {
        id: 24,
        nombre: "DURO CONCRETOS",
        logo: "assets/img/socios/duro.png",
        direccion: "San Luis Potosí, SLP",
        lat: 22.1565,
        lng: -100.9855,
        estado: "San Luis Potosí",
        telefono: "444 345 6789",
        web: "https://www.duroconcretos.com"
    },
    {
        id: 25,
        nombre: "ESPECIALIZADOS DEL PACIFICO EN CONCRETO",
        logo: "assets/img/socios/epc.png",
        direccion: "Mazatlán, Sin.",
        lat: 23.2494,
        lng: -106.4111,
        estado: "Sinaloa",
        telefono: "669 456 7890",
        web: "https://www.epconcreto.com"
    },
    {
        id: 26,
        nombre: "GSA CONCRETOS CONCRESA",
        logo: "assets/img/socios/gsa.png",
        direccion: "Guadalajara, Jal.",
        lat: 20.6597,
        lng: -103.3496,
        estado: "Jalisco",
        telefono: "33 5678 9012",
        web: "https://www.gsaconcretos.com"
    },
    {
        id: 27,
        nombre: "HAICO SOLUCIONES EN CONCRETO",
        logo: "assets/img/socios/haico.png",
        direccion: "Querétaro, Qro.",
        lat: 20.5888,
        lng: -100.3899,
        estado: "Querétaro",
        telefono: "442 678 9012",
        web: "https://www.haico.com"
    },
    {
        id: 28,
        nombre: "JESCA CONCRETOS",
        logo: "assets/img/socios/jesca.png",
        direccion: "Torreón, Coah.",
        lat: 25.5428,
        lng: -103.4068,
        estado: "Coahuila",
        telefono: "871 789 0123",
        web: "https://www.jescaconcretos.com"
    },
    {
        id: 29,
        nombre: "MF CONCRETOS",
        logo: "assets/img/socios/mf.png",
        direccion: "Monterrey, NL",
        lat: 25.6866,
        lng: -100.3161,
        estado: "Nuevo León",
        telefono: "81 8901 2345",
        web: "https://www.mfconcretos.com"
    },
    {
        id: 30,
        nombre: "MTP CONCRETOS",
        logo: "assets/img/socios/mtp.png",
        direccion: "Puebla, Pue.",
        lat: 19.0414,
        lng: -98.2063,
        estado: "Puebla",
        telefono: "222 9012 3456",
        web: "https://www.mtpconcretos.com"
    },
    {
        id: 31,
        nombre: "OMEGA",
        logo: "assets/img/socios/omega.png",
        direccion: "CDMX",
        lat: 19.4326,
        lng: -99.1332,
        estado: "Ciudad de México",
        telefono: "55 0123 4567",
        web: "https://www.omega.com"
    },
    {
        id: 32,
        nombre: "OPERADORA MIRACLE",
        logo: "assets/img/socios/miracle.png",
        direccion: "León, Gto.",
        lat: 21.1236,
        lng: -101.6803,
        estado: "Guanajuato",
        telefono: "477 123 4567",
        web: "https://www.miracle.com"
    },
    {
        id: 33,
        nombre: "PRECONCRETOS DE VERACRUZ",
        logo: "assets/img/socios/preconcretos.png",
        direccion: "Veracruz, Ver.",
        lat: 19.1738,
        lng: -96.1342,
        estado: "Veracruz",
        telefono: "229 234 5678",
        web: "https://www.preconcretosver.com"
    },
    {
        id: 34,
        nombre: "SISTINDACEMA TMX",
        logo: "assets/img/socios/sistindacema.png",
        direccion: "Tlaxcala, Tlax.",
        lat: 19.3139,
        lng: -98.2404,
        estado: "Tlaxcala",
        telefono: "246 345 6789",
        web: "https://www.sistindacema.com"
    },
    {
        id: 35,
        nombre: "STUCK CONCRETOS",
        logo: "assets/img/socios/stuck.png",
        direccion: "Morelia, Mich.",
        lat: 19.7025,
        lng: -101.1924,
        estado: "Michoacán",
        telefono: "443 456 7890",
        web: "https://www.stuckconcretos.com"
    },
    {
        id: 36,
        nombre: "TRITURADOS Y PREMEZCLADOS DE ALTAMIRA",
        logo: "assets/img/socios/tpaltamira.png",
        direccion: "Altamira, Tamps.",
        lat: 22.3919,
        lng: -97.9387,
        estado: "Tamaulipas",
        telefono: "833 567 8901",
        web: "https://www.tpaltamira.com"
    },
    {
        id: 37,
        nombre: "TUUNICH CONCRETOS",
        logo: "assets/img/socios/tuunich.png",
        direccion: "Mérida, Yuc.",
        lat: 20.9670,
        lng: -89.6236,
        estado: "Yucatán",
        telefono: "999 678 9012",
        web: "https://www.tuunich.com"
    },
    {
        id: 38,
        nombre: "UNICONCRETOS",
        logo: "assets/img/socios/uniconcretos.png",
        direccion: "Cuernavaca, Mor.",
        lat: 18.9242,
        lng: -99.2216,
        estado: "Morelos",
        telefono: "777 789 0123",
        web: "https://www.uniconcretos.com"
    },
    {
        id: 39,
        nombre: "URBANIZACIONES NASA",
        logo: "assets/img/socios/nasa.png",
        direccion: "Coatzacoalcos, Ver.",
        lat: 18.1391,
        lng: -94.4502,
        estado: "Veracruz",
        telefono: "921 890 1234",
        web: "https://www.nasaurb.com"
    },
    {
        id: 40,
        nombre: "VACSA",
        logo: "assets/img/socios/vacsa.png",
        direccion: "Villahermosa, Tab.",
        lat: 17.9892,
        lng: -92.9281,
        estado: "Tabasco",
        telefono: "993 901 2345",
        web: "https://www.vacsa.com"
    },
    {
        id: 41,
        nombre: "CAYCO",
        logo: "assets/img/socios/cayco.png",
        direccion: "Mérida, Yuc.",
        lat: 20.9670,
        lng: -89.6236,
        estado: "Yucatán",
        telefono: "999 012 3456",
        web: "https://www.cayco.com"
    },
    {
        id: 42,
        nombre: "EXCELENCIA EN CONCRETOS DE ATOTONILCO",
        logo: "assets/img/socios/excelencia.png",
        direccion: "Atotonilco de Tula, Hgo.",
        lat: 20.0,
        lng: -99.0,
        estado: "Hidalgo",
        telefono: "771 123 4567",
        web: "https://www.excelenciaconcretos.com"
    }
];

// ============================================
// INICIALIZAR MAPA SECUNDARIO (checkpoints)
// ============================================
function initSecondaryMap() {
    const map = L.map('socios-map').setView([23.6345, -102.5528], 5.5);

    L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: ''
    }).addTo(map);

    sociosData.forEach(socio => {
        if (socio.lat && socio.lng) {
            const marker = L.marker([socio.lat, socio.lng]).addTo(map);
            marker.bindPopup(`
                <b>${socio.nombre}</b><br>
                ${socio.direccion}<br>
                <a href="${socio.web}" target="_blank" rel="noopener noreferrer">Visitar sitio web</a>
            `);
        }
    });
}

// ============================================
// RENDERIZAR TARJETAS CON LOGOS
// ============================================
function renderSocios(socios = sociosData) {
    const grid = document.getElementById('sociosGrid');
    const resultadosSpan = document.getElementById('resultadosCount');

    if (!grid) return;

    grid.innerHTML = '';

    if (socios.length === 0) {
        grid.innerHTML = `
            <div class="no-results">
                <i class="fas fa-search"></i>
                <h3>No hay resultados</h3>
                <p>Intenta con otros filtros</p>
                <button class="btn-clear" onclick="limpiarFiltros()">
                    <i class="fas fa-times-circle"></i> Limpiar filtros
                </button>
            </div>
        `;
        document.getElementById('btnLimpiarContainer').style.display = 'none';
        resultadosSpan.textContent = '0';
        return;
    }

    socios.forEach((socio, index) => {
        const card = document.createElement('div');
        card.className = 'socio-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 30).toString());

        const inicial = socio.nombre.charAt(0);

        // Determinar si mostrar logo o inicial
        let logoHtml;
        if (socio.logo) {
            logoHtml = `<img src="${socio.logo}" alt="${socio.nombre}" onerror="this.style.display='none'; this.parentElement.innerHTML='${inicial}';">`;
        } else {
            logoHtml = inicial;
        }

        card.innerHTML = `
            <div class="card-header">
                <div class="socio-logo">
                    ${logoHtml}
                </div>
                <a href="${socio.web}" target="_blank" rel="noopener noreferrer" class="socio-nombre">
                    ${socio.nombre}
                </a>
            </div>
            <div class="card-body">
                <div class="detail-item">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${socio.direccion}</span>
                </div>
                <div class="detail-item">
                    <i class="fas fa-phone"></i>
                    <a href="tel:${socio.telefono.replace(/[^0-9+]/g, '')}">${socio.telefono}</a>
                </div>
            </div>
            <div class="card-footer">
                <a href="${socio.web}" target="_blank" rel="noopener noreferrer" class="btn-sitio">
                    <i class="fas fa-globe"></i> Visitar sitio web
                </a>
            </div>
        `;

        grid.appendChild(card);
    });

    resultadosSpan.textContent = socios.length;
    document.getElementById('totalCount').textContent = sociosData.length;
    document.getElementById('btnLimpiarContainer').style.display = (socios.length === sociosData.length || !filtrosActivos()) ? 'none' : 'block';
}

// ============================================
// FILTROS
// ============================================
let estadoActivo = '';
let textoBusqueda = '';

function aplicarFiltros() {
    let resultados = [...sociosData];

    if (estadoActivo) {
        resultados = resultados.filter(s => s.estado === estadoActivo);
    }

    if (textoBusqueda.trim() !== '') {
        const busqueda = textoBusqueda.toLowerCase().trim();
        resultados = resultados.filter(s =>
            s.nombre.toLowerCase().includes(busqueda) ||
            s.direccion.toLowerCase().includes(busqueda)
        );
    }

    renderSocios(resultados);
}

function filtrosActivos() {
    return estadoActivo !== '' || textoBusqueda !== '';
}

function limpiarFiltros() {
    estadoActivo = '';
    textoBusqueda = '';
    document.getElementById('buscador').value = '';
    document.getElementById('estadoFilter').value = '';
    aplicarFiltros();
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 600, once: true });
    }

    // Inicializar mapa secundario
    initSecondaryMap();

    // Renderizar socios
    renderSocios();

    // Event listeners para filtros
    const buscador = document.getElementById('buscador');
    const btnBuscar = document.getElementById('btnBuscar');
    const estadoFilter = document.getElementById('estadoFilter');
    const btnLimpiar = document.getElementById('btnLimpiarFiltros');

    if (buscador) {
        buscador.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') {
                textoBusqueda = this.value;
                aplicarFiltros();
            }
        });
    }

    if (btnBuscar) {
        btnBuscar.addEventListener('click', function () {
            textoBusqueda = buscador.value;
            aplicarFiltros();
        });
    }

    if (estadoFilter) {
        estadoFilter.addEventListener('change', function () {
            estadoActivo = this.value;
            aplicarFiltros();
        });
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarFiltros);
    }
});