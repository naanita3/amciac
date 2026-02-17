// ============================================
// BASE DE DATOS DE CURSOS
// ============================================
const cursosData = [
    {
        id: 1,
        nombre: "Fundamentos del concreto",
        descripcion: "Curso introductorio sobre los principios básicos del concreto, sus componentes y propiedades fundamentales.",
        duracion: "16 horas",
        modalidad: "Híbrido",
        dirigido: "Técnicos, ingenieros, supervisores y personal de planta",
        icono: "fa-cubes"
    },
    {
        id: 2,
        nombre: "Fundamentos del cemento",
        descripcion: "Estudio detallado de los tipos de cemento, procesos de fabricación y características químicas.",
        duracion: "8 horas",
        modalidad: "En línea",
        dirigido: "Personal técnico y laboratoristas",
        icono: "fa-flask"
    },
    {
        id: 3,
        nombre: "Visión práctica en la administración del concreto",
        descripcion: "Gestión operativa y administrativa de plantas de concreto premezclado, optimización de recursos y control de costos.",
        duracion: "12 horas",
        modalidad: "Presencial",
        dirigido: "Gerentes de planta, administradores y supervisores",
        icono: "fa-chart-line"
    },
    {
        id: 4,
        nombre: "Criterios de aceptación y rechazo",
        descripcion: "Normativas y procedimientos para la aceptación o rechazo del concreto en obra conforme a estándares nacionales e internacionales.",
        duracion: "8 horas",
        modalidad: "Presencial",
        dirigido: "Supervisores de obra, laboratoristas y personal de control de calidad",
        icono: "fa-check-circle"
    },
    {
        id: 5,
        nombre: "Fundamentos del concreto y diseño de mezclas de concreto",
        descripcion: "Metodologías para el diseño de mezclas de concreto, cálculo de proporciones y optimización de materiales.",
        duracion: "20 horas",
        modalidad: "Híbrido",
        dirigido: "Ingenieros, técnicos de laboratorio y jefes de producción",
        icono: "fa-calculator"
    },
    {
        id: 6,
        nombre: "Tecnología de los agregados",
        descripcion: "Estudio detallado de agregados para concreto, incluyendo clasificación, propiedades físicas y químicas, y control de calidad.",
        duracion: "12 horas",
        modalidad: "Presencial",
        dirigido: "Laboratoristas y supervisores de producción",
        icono: "fa-mountain"
    },
    {
        id: 7,
        nombre: "Pisos postensados de concreto",
        descripcion: "Diseño, construcción y supervisión de pisos industriales con sistemas de postensado.",
        duracion: "16 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros estructurales y supervisores de obra",
        icono: "fa-layer-group"
    },
    {
        id: 8,
        nombre: "Colocación de concreto en clima cálido",
        descripcion: "Técnicas y precauciones especiales para la colocación de concreto en condiciones de alta temperatura.",
        duracion: "8 horas",
        modalidad: "En línea",
        dirigido: "Personal de obra, supervisores y técnicos",
        icono: "fa-sun"
    },
    {
        id: 9,
        nombre: "Colocación de concreto en clima frío",
        descripcion: "Procedimientos para garantizar la calidad del concreto en condiciones de bajas temperaturas.",
        duracion: "8 horas",
        modalidad: "En línea",
        dirigido: "Personal de obra, supervisores y técnicos",
        icono: "fa-snowflake"
    },
    {
        id: 10,
        nombre: "Reforzamiento técnico de productos especiales",
        descripcion: "Estudio de productos especializados como concreto autocompactable, de alta resistencia y fibrorreforzado.",
        duracion: "12 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros, jefes de producción y técnicos especializados",
        icono: "fa-star"
    },
    {
        id: 11,
        nombre: "Durabilidad del concreto",
        descripcion: "Análisis de los factores que afectan la durabilidad del concreto, prevención de patologías y estrategias para prolongar su vida útil.",
        duracion: "16 horas",
        modalidad: "Híbrido",
        dirigido: "Ingenieros y especialistas en materiales",
        icono: "fa-shield"
    },
    {
        id: 12,
        nombre: "Pisos industriales",
        descripcion: "Diseño, construcción y acabado de pisos industriales de alta resistencia.",
        duracion: "20 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros civiles y contratistas especializados",
        icono: "fa-industry"
    },
    {
        id: 13,
        nombre: "Estrategia comercial",
        descripcion: "Desarrollo de estrategias comerciales para empresas concreteras, incluyendo ventas y atención al cliente.",
        duracion: "12 horas",
        modalidad: "En línea",
        dirigido: "Gerentes comerciales y vendedores técnicos",
        icono: "fa-chart-simple"
    },
    {
        id: 14,
        nombre: "Habilitado del acero de refuerzo",
        descripcion: "Técnicas de habilitado, corte y doblado de acero de refuerzo conforme a normativas vigentes.",
        duracion: "16 horas",
        modalidad: "Presencial",
        dirigido: "Personal de obra y habilitadores de acero",
        icono: "fa-wrench"
    },
    {
        id: 15,
        nombre: "Bombeo del concreto",
        descripcion: "Operación de equipos de bombeo, mantenimiento preventivo y buenas prácticas de seguridad.",
        duracion: "12 horas",
        modalidad: "Presencial",
        dirigido: "Operadores de bomba y supervisores de equipo",
        icono: "fa-truck"
    },
    {
        id: 16,
        nombre: "Pruebas físicas de cemento",
        descripcion: "Procedimientos de laboratorio para ensayos físicos de cemento conforme a normas NMX.",
        duracion: "16 horas",
        modalidad: "Presencial",
        dirigido: "Laboratoristas y técnicos de control de calidad",
        icono: "fa-microscope"
    },
    {
        id: 17,
        nombre: "Análisis y diseño estructural de pisos industriales",
        descripcion: "Cálculo estructural de pisos industriales considerando cargas, refuerzos y especificaciones técnicas.",
        duracion: "24 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros estructurales y calculistas",
        icono: "fa-draw-polygon"
    },
    {
        id: 18,
        nombre: "Bioclimática Módulo Uno",
        descripcion: "Principios de arquitectura bioclimática aplicados a estructuras de concreto.",
        duracion: "12 horas",
        modalidad: "En línea",
        dirigido: "Arquitectos, ingenieros civiles y diseñadores",
        icono: "fa-leaf"
    },
    {
        id: 19,
        nombre: "Bioclimática Módulo Dos",
        descripcion: "Aplicaciones avanzadas de diseño sustentable y eficiencia energética.",
        duracion: "12 horas",
        modalidad: "En línea",
        dirigido: "Arquitectos, ingenieros civiles y diseñadores",
        icono: "fa-recycle"
    },
    {
        id: 20,
        nombre: "Uso de fibras en el concreto",
        descripcion: "Tipos de fibras para refuerzo del concreto, aplicaciones y beneficios estructurales.",
        duracion: "8 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros y técnicos de producción",
        icono: "fa-cubes"
    },
    {
        id: 21,
        nombre: "Dosificación, mezclado, transporte y manejo del concreto",
        descripcion: "Proceso integral desde la dosificación en planta hasta la entrega en obra, incluyendo control de calidad en cada etapa.",
        duracion: "20 horas",
        modalidad: "Híbrido",
        dirigido: "Personal de planta, operadores y supervisores",
        icono: "fa-balance-scale"
    },
    {
        id: 22,
        nombre: "Aditivos para concreto",
        descripcion: "Estudio de los diferentes tipos de aditivos químicos, sus funciones, dosificación y aplicaciones específicas.",
        duracion: "12 horas",
        modalidad: "Presencial",
        dirigido: "Técnicos de producción y laboratoristas",
        icono: "fa-flask"
    },
    {
        id: 23,
        nombre: "Evaluación forense en las estructuras del concreto",
        descripcion: "Técnicas de análisis y diagnóstico de fallas estructurales, elaboración de peritajes y dictámenes técnicos.",
        duracion: "20 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros estructurales, peritos y especialistas",
        icono: "fa-gavel"
    },
    {
        id: 24,
        nombre: "Inspección y mantenimiento de puentes de concreto",
        descripcion: "Metodologías de inspección, evaluación de daños y desarrollo de planes de mantenimiento preventivo para puentes.",
        duracion: "16 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros civiles y supervisores de infraestructura",
        icono: "fa-bridge"
    },
    {
        id: 25,
        nombre: "Manual de construcción de vivienda",
        descripcion: "Buenas prácticas constructivas para vivienda con sistemas de concreto.",
        duracion: "12 horas",
        modalidad: "En línea",
        dirigido: "Constructores, maestros de obra y supervisores",
        icono: "fa-house"
    },
    {
        id: 26,
        nombre: "Pruebas no destructivas aplicadas al concreto",
        descripcion: "Aplicación de equipos y técnicas de ensayos no destructivos como esclerómetro, ultrasonido y radar.",
        duracion: "16 horas",
        modalidad: "Presencial",
        dirigido: "Laboratoristas, inspectores e ingenieros",
        icono: "fa-wave-square"
    },
    {
        id: 27,
        nombre: "Economía circular",
        descripcion: "Principios de economía circular aplicados a la industria del concreto, reciclaje y estrategias de sustentabilidad.",
        duracion: "8 horas",
        modalidad: "En línea",
        dirigido: "Gerentes y responsables de sustentabilidad",
        icono: "fa-rotate-left"
    },
    {
        id: 28,
        nombre: "El concreto en la geotecnia",
        descripcion: "Aplicaciones del concreto en obras geotécnicas como cimentaciones, muros de contención y pilotes.",
        duracion: "12 horas",
        modalidad: "Presencial",
        dirigido: "Ingenieros geotécnicos y constructores",
        icono: "fa-mountain"
    },
    {
        id: 29,
        nombre: "Técnico para pruebas al concreto en la obra",
        descripcion: "Capacitación práctica para la realización de pruebas de concreto fresco en campo.",
        duracion: "16 horas",
        modalidad: "Presencial",
        dirigido: "Técnicos de campo y supervisores de obra",
        icono: "fa-clipboard-check"
    }
];

// ============================================
// RENDERIZAR CURSOS
// ============================================
function renderCursos(cursos = cursosData) {
    const grid = document.getElementById('cursosGrid');
    const resultadosSpan = document.getElementById('resultadosCount');

    if (!grid) return;

    grid.innerHTML = '';

    if (cursos.length === 0) {
        grid.innerHTML = `
                    <div class="no-results">
                        <i class="fas fa-search"></i>
                        <h3>No se encontraron cursos</h3>
                        <p>Intenta con otros filtros</p>
                        <button class="btn-clear" onclick="limpiarFiltros()">
                            <i class="fas fa-times-circle"></i> Limpiar filtros
                        </button>
                    </div>
                `;
        document.getElementById('btnLimpiarContainer').style.display = 'block';
        resultadosSpan.textContent = '0';
        return;
    }

    cursos.forEach((curso, index) => {
        const card = document.createElement('div');
        card.className = 'curso-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 30).toString());

        // Determinar clase del badge según modalidad
        let badgeClass = '';
        if (curso.modalidad === 'Presencial') badgeClass = 'badge-presencial';
        else if (curso.modalidad === 'En línea') badgeClass = 'badge-online';
        else if (curso.modalidad === 'Híbrido') badgeClass = 'badge-hibrido';

        card.innerHTML = `
                    <span class="card-badge ${badgeClass}">${curso.modalidad}</span>
                    <div class="card-header">
                        <div class="curso-icon">
                            <i class="fas ${curso.icono}"></i>
                        </div>
                        <h3 class="curso-titulo">${curso.nombre}</h3>
                    </div>
                    <div class="card-body">
                        <p class="curso-descripcion">${curso.descripcion}</p>
                        <div class="curso-meta">
                            <span class="meta-item">
                                <i class="fas fa-clock"></i>
                                <span>Duración: <strong>${curso.duracion}</strong></span>
                            </span>
                        </div>
                        <div class="dirigido">
                            <i class="fas fa-users"></i>
                            <p><strong>Dirigido a:</strong> ${curso.dirigido}</p>
                        </div>
                    </div>
                    <div class="card-footer">
                        <button class="btn-curso" onclick="solicitarInfo('${curso.nombre}')">
                            <i class="fas fa-info-circle"></i> Solicitar información
                        </button>
                    </div>
                `;

        grid.appendChild(card);
    });

    resultadosSpan.textContent = cursos.length;
    document.getElementById('btnLimpiarContainer').style.display = cursos.length === cursosData.length ? 'none' : 'block';
}

// ============================================
// FILTROS
// ============================================
let modalidadActiva = '';
let textoBusqueda = '';

function aplicarFiltros() {
    let resultados = [...cursosData];

    if (modalidadActiva) {
        resultados = resultados.filter(c => c.modalidad === modalidadActiva);
    }

    if (textoBusqueda.trim() !== '') {
        const busqueda = textoBusqueda.toLowerCase().trim();
        resultados = resultados.filter(c =>
            c.nombre.toLowerCase().includes(busqueda) ||
            c.descripcion.toLowerCase().includes(busqueda) ||
            c.dirigido.toLowerCase().includes(busqueda)
        );
    }

    renderCursos(resultados);
}

function filtrosActivos() {
    return modalidadActiva !== '' || textoBusqueda !== '';
}

function limpiarFiltros() {
    modalidadActiva = '';
    textoBusqueda = '';
    document.getElementById('buscador').value = '';
    document.getElementById('modalidadFilter').value = '';
    renderCursos(cursosData);
}

// ============================================
// SOLICITAR INFORMACIÓN
// ============================================
function solicitarInfo(curso) {
    localStorage.setItem('curso_interes', curso);
    window.location.href = 'afiliacion.html';
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 600, once: true });
    }

    renderCursos();

    const buscador = document.getElementById('buscador');
    const btnBuscar = document.getElementById('btnBuscar');
    const modalidadFilter = document.getElementById('modalidadFilter');
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

    if (modalidadFilter) {
        modalidadFilter.addEventListener('change', function () {
            modalidadActiva = this.value;
            aplicarFiltros();
        });
    }

    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarFiltros);
    }
});