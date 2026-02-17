// ============================================
// BASE DE DATOS DE CERTIFICACIONES
// ============================================
const certificacionesData = [
    // I. Certificaciones IMCYC – OCEPER
    {
        id: 1,
        nombre: "Técnico laboratorista en ensayos de concreto fresco",
        descripcion: "Certificación oficial para realizar pruebas de concreto en estado fresco conforme a normas mexicanas NMX.",
        duracion: "40 horas",
        vigencia: "3 años",
        organizacion: "IMCYC",
        tipo: "Nacional"
    },
    {
        id: 2,
        nombre: "Técnico laboratorista en ensayos de concreto endurecido",
        descripcion: "Certificación para pruebas de concreto en estado endurecido, incluyendo resistencia a compresión y extracción de núcleos.",
        duracion: "40 horas",
        vigencia: "3 años",
        organizacion: "IMCYC",
        tipo: "Nacional"
    },
    {
        id: 3,
        nombre: "Técnico laboratorista en ensayos físicos de agregados",
        descripcion: "Certificación para realizar pruebas físicas de agregados, como granulometría, densidad, absorción e impurezas.",
        duracion: "40 horas",
        vigencia: "3 años",
        organizacion: "IMCYC",
        tipo: "Nacional"
    },
    {
        id: 4,
        nombre: "Técnico laboratorista en ensayos químicos de cemento",
        descripcion: "Certificación para realizar pruebas químicas de cemento conforme a normativas mexicanas.",
        duracion: "48 horas",
        vigencia: "3 años",
        organizacion: "IMCYC",
        tipo: "Nacional"
    },
    {
        id: 5,
        nombre: "Técnico especialista en durabilidad",
        descripcion: "Especialización en evaluación de la durabilidad del concreto, incluyendo resistencia a sulfatos, carbonatación y corrosión.",
        duracion: "60 horas",
        vigencia: "3 años",
        organizacion: "IMCYC",
        tipo: "Nacional"
    },
    {
        id: 6,
        nombre: "Técnico en uso de aditivos",
        descripcion: "Certificación especializada en el manejo, dosificación y aplicación de aditivos químicos para concreto.",
        duracion: "32 horas",
        vigencia: "3 años",
        organizacion: "IMCYC",
        tipo: "Nacional"
    },
    {
        id: 7,
        nombre: "Colocación de concreto en climas extremos",
        descripcion: "Certificación para la supervisión y colocación de concreto en condiciones climáticas adversas.",
        duracion: "24 horas",
        vigencia: "3 años",
        organizacion: "IMCYC",
        tipo: "Nacional"
    },

    // II. Certificaciones ACI (Validez Internacional)
    {
        id: 8,
        nombre: "Técnico en pruebas de campo Grado 1",
        descripcion: "Certificación internacional ACI dirigida a técnicos que realizan pruebas de concreto fresco en campo.",
        duracion: "16 horas más examen",
        vigencia: "Permanente con recertificación cada 5 años",
        organizacion: "ACI",
        tipo: "Internacional"
    },
    {
        id: 9,
        nombre: "Técnico en pruebas de resistencia",
        descripcion: "Certificación ACI para técnicos especializados en pruebas de resistencia a compresión.",
        duracion: "",
        vigencia: "Permanente con recertificación cada 5 años",
        organizacion: "ACI",
        tipo: "Internacional"
    },
    {
        id: 10,
        nombre: "Técnico en pruebas de agregados Nivel 1",
        descripcion: "Certificación ACI para la realización de ensayos en agregados finos y gruesos.",
        duracion: "",
        vigencia: "Permanente con recertificación cada 5 años",
        organizacion: "ACI",
        tipo: "Internacional"
    },
    {
        id: 11,
        nombre: "Técnico laboratorista Nivel 2",
        descripcion: "Certificación avanzada ACI que combina pruebas de campo y laboratorio.",
        duracion: "32 horas más examen",
        vigencia: "Permanente con recertificación cada 5 años",
        organizacion: "ACI",
        tipo: "Internacional"
    },
    {
        id: 12,
        nombre: "Técnico y acabador de superficies planas de concreto",
        descripcion: "Certificación ACI dirigida a acabadores especializados en pisos y superficies de concreto.",
        duracion: "",
        vigencia: "Permanente con recertificación cada 5 años",
        organizacion: "ACI",
        tipo: "Internacional"
    },
    {
        id: 13,
        nombre: "Técnico en pruebas de concreto autocompactable",
        descripcion: "Certificación especializada en pruebas para concreto autocompactable (SCC).",
        duracion: "",
        vigencia: "Permanente con recertificación cada 5 años",
        organizacion: "ACI",
        tipo: "Internacional"
    }
];

// Valor Agregado IMCYC
const valorAgregadoData = [
    {
        titulo: "Librería de la construcción",
        descripcion: "Acceso a biblioteca especializada en construcción, concreto y materiales, con más de 500 títulos disponibles.",
        icono: "fa-book"
    },
    {
        titulo: "Concreto: problemas, causas y soluciones",
        descripcion: "Base de datos interactiva con problemas comunes del concreto, sus causas y soluciones técnicas.",
        icono: "fa-circle-exclamation"
    },
    {
        titulo: "Líderes de la construcción",
        descripcion: "Programa de desarrollo de liderazgo dirigido a profesionales de la industria del concreto.",
        icono: "fa-crown"
    },
    {
        titulo: "Encuentro IMCYC",
        descripcion: "Evento anual con conferencias magistrales, workshops y espacios de networking del sector.",
        icono: "fa-calendar-alt"
    },
    {
        titulo: "Acervo IMCYC",
        descripcion: "Archivo histórico y documental de la industria del concreto en México.",
        icono: "fa-archive"
    },
    {
        titulo: "Investigación y desarrollo IMCYC",
        descripcion: "Acceso a investigaciones, estudios y publicaciones técnicas desarrolladas por el IMCYC.",
        icono: "fa-flask"
    },
    {
        titulo: "Publicaciones especiales IMCYC",
        descripcion: "Guías técnicas, manuales y documentos especializados publicados por el IMCYC.",
        icono: "fa-file-lines"
    },
    {
        titulo: "Revista Construcción y Tecnología en Concreto",
        descripcion: "Revista técnica trimestral con artículos especializados, casos de estudio y novedades del sector.",
        icono: "fa-newspaper"
    }
];

// ============================================
// RENDERIZAR CERTIFICACIONES
// ============================================
function renderCertificaciones(certificaciones = certificacionesData) {
    const container = document.getElementById('certificacionesContainer');
    const resultadosSpan = document.getElementById('resultadosCount');

    if (!container) return;

    // Separar por organización
    const imcyc = certificaciones.filter(c => c.organizacion === "IMCYC");
    const aci = certificaciones.filter(c => c.organizacion === "ACI");

    let html = '';

    // Sección IMCYC
    if (imcyc.length > 0) {
        html += `
                    <h2 class="categoria-titulo" data-aos="fade-right">
                        <i class="fas fa-certificate"></i> I. Certificaciones IMCYC – OCEPER
                    </h2>
                    <div class="cert-grid">
                `;

        imcyc.forEach(cert => {
            html += `
                        <div class="cert-card" data-aos="fade-up">
                            <div class="card-header">
                                <h3>${cert.nombre}</h3>
                                <span class="badge-org">IMCYC</span>
                            </div>
                            <div class="card-body">
                                <p class="card-desc">${cert.descripcion}</p>
                                <div class="meta-grid">
                                    <div class="meta-item">
                                        <i class="fas fa-clock"></i>
                                        <span>Duración: <strong>${cert.duracion || 'N/A'}</strong></span>
                                    </div>
                                    <div class="meta-item">
                                        <i class="fas fa-calendar-check"></i>
                                        <span>Vigencia: <strong>${cert.vigencia}</strong></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn-card" onclick="solicitarInfo('${cert.nombre}')">
                                    <i class="fas fa-info-circle"></i> Solicitar información
                                </button>
                            </div>
                        </div>
                    `;
        });

        html += `</div>`;
    }

    // Sección ACI
    if (aci.length > 0) {
        html += `
                    <h2 class="categoria-titulo" data-aos="fade-right" style="margin-top: 60px;">
                        <i class="fas fa-globe-americas"></i> II. Certificaciones ACI (Validez Internacional)
                    </h2>
                    <div class="cert-grid">
                `;

        aci.forEach(cert => {
            html += `
                        <div class="cert-card" data-aos="fade-up">
                            <div class="card-header">
                                <h3>${cert.nombre}</h3>
                                <span class="badge-org internacional">ACI</span>
                            </div>
                            <div class="card-body">
                                <p class="card-desc">${cert.descripcion}</p>
                                <div class="meta-grid">
                                    ${cert.duracion ? `
                                    <div class="meta-item">
                                        <i class="fas fa-clock"></i>
                                        <span>Duración: <strong>${cert.duracion}</strong></span>
                                    </div>
                                    ` : ''}
                                    <div class="meta-item">
                                        <i class="fas fa-calendar-check"></i>
                                        <span>Vigencia: <strong>${cert.vigencia}</strong></span>
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <button class="btn-card" onclick="solicitarInfo('${cert.nombre}')">
                                    <i class="fas fa-info-circle"></i> Solicitar información
                                </button>
                            </div>
                        </div>
                    `;
        });

        html += `</div>`;
    }

    container.innerHTML = html;
    if (resultadosSpan) resultadosSpan.textContent = certificaciones.length;
}

// ============================================
// RENDERIZAR VALOR AGREGADO
// ============================================
function renderValorAgregado() {
    const grid = document.getElementById('valorGrid');
    if (!grid) return;

    let html = '';
    valorAgregadoData.forEach((item, index) => {
        html += `
                    <div class="valor-item" data-aos="fade-up" data-aos-delay="${index * 50}">
                        <div class="valor-icon">
                            <i class="fas ${item.icono}"></i>
                        </div>
                        <h4>${item.titulo}</h4>
                        <p>${item.descripcion}</p>
                    </div>
                `;
    });

    grid.innerHTML = html;
}

// ============================================
// FILTROS
// ============================================
function aplicarFiltros() {
    const texto = document.getElementById('buscador')?.value.toLowerCase() || '';
    const org = document.getElementById('orgFilter')?.value || '';

    let resultados = [...certificacionesData];

    if (org) {
        resultados = resultados.filter(c => {
            if (org === "IMCYC") return c.organizacion === "IMCYC";
            if (org === "ACI") return c.organizacion === "ACI";
            return true;
        });
    }

    if (texto) {
        resultados = resultados.filter(c =>
            c.nombre.toLowerCase().includes(texto) ||
            c.descripcion.toLowerCase().includes(texto)
        );
    }

    renderCertificaciones(resultados);
}

// ============================================
// SOLICITAR INFORMACIÓN
// ============================================
function solicitarInfo(certificacion) {
    // Guardar en localStorage para pre-llenar el formulario
    localStorage.setItem('certificacion_interes', certificacion);
    window.location.href = 'afiliacion.html';
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 600, once: true });
    }

    renderCertificaciones();
    renderValorAgregado();

    const buscador = document.getElementById('buscador');
    const btnBuscar = document.getElementById('btnBuscar');
    const orgFilter = document.getElementById('orgFilter');

    if (buscador) {
        buscador.addEventListener('keyup', function (e) {
            if (e.key === 'Enter') aplicarFiltros();
        });
    }

    if (btnBuscar) {
        btnBuscar.addEventListener('click', aplicarFiltros);
    }

    if (orgFilter) {
        orgFilter.addEventListener('change', aplicarFiltros);
    }
});