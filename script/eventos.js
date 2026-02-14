 // ============================================
        // BASE DE DATOS DE EVENTOS
        // ============================================
        const eventosData = [
            {
                id: 1,
                titulo: "1ª Reunión Anual de Concreteros – Zona Sureste 2026",
                descripcion: "El evento más importante de la industria concretera en México. Conferencias magistrales, talleres y exposición de proveedores.",
                fecha: "2026-03-11",
                fecha_fin: "2026-03-11",
                ubicacion: "Mérida, Yucatán",
                modalidad: "Presencial",
                tipo: "evento regional",
                estado: "proximo",
                destacado: true,
                flyer: "assets/img/eventos/merida.png",
                registro_url: "https://forms.gle/ctHXjbpVnDQZ4PG19",
                capacidad: "Ilimitada",
                organizador: "AMCI",
                imagen: "assets/img/eventos/merida-cut.png",
                //imagenes_momento: ["assets/img/eventos/merida.png", "assets/img/eventos/merida.png"]
            },
            {
                id: 2,
                titulo: "CONEXPO-CON/AGG",
                descripcion: "CONEXPO-CON/AGG es la feria comercial de la construcción. Asiste con la delegacion AMCI.",
                fecha: "2026-03-03",
                fecha_fin: "2026-03-07",
                ubicacion: "Centro de Convenciones de Las Vegas 3150 Paradise Rd Las Vegas NV 89109",
                modalidad: "Presencial",
                tipo: "expos",
                estado: "proximo",
                destacado: false,
                flyer: "assets/img/eventos/conexpo.webp",
                registro_url: "https://wa.me/5218118044452",
                capacidad: "Ilimitada",
                organizador: "CONEXPO-CON/AGG",
                imagen: "assets/img/eventos/conexpo.webp"
            },
            {
                id: 3,
                titulo: "WORLD OF CONCRETE",
                descripcion: "World of Concrete es la exposición y formación líder para la industria del concreto y la construcción.",
                fecha: "2026-01-19",
                fecha_fin: "2026-01-22",
                ubicacion: "Las Vegas, Nevada",
                modalidad: "Presencial",
                tipo: "expos",
                estado: "pasado",
                destacado: false,
                flyer: "assets/img/eventos/woc.webp",
                registro_url: "#",
                capacidad: "Ilimitada",
                organizador: "WOC",
                imagen: "assets/img/eventos/woc.webp"
            },
            {
                id: 4,
                titulo: "Desayuno Networking Concreteros de Zona Monterrey",
                descripcion: "Un espacio para compartir, fortalecer lazos y dialogar sobre los beneficios de formar parte de AMCI, así como el impacto que nuestra comunidad genera en la industria.",
                fecha: "2026-01-15",
                fecha_fin: "2026-01-15",
                ubicacion: "Monterrey, Nuevo León",
                modalidad: "Presencial",
                tipo: "evento regional",
                estado: "pasado",
                destacado: false,
                flyer: "assets/img/eventos/desayunomty.png",
                registro_url: "#",
                capacidad: "25",
                organizador: "AMCI",
                imagen: "assets/img/eventos/desayunomty.png",
                imagenes_momento: ["assets/img/eventos/momentos/3.png"]
            },
        ];
        
// ============================================
// FUNCIONES AUXILIARES
// ============================================
function parseLocalDate(fechaString) {
    const [year, month, day] = fechaString.split('-').map(Number);
    return new Date(year, month - 1, day);
}

// ============================================
// RENDERIZAR EVENTOS
// ============================================
function renderEventos(filtro = 'todos') {
    const grid = document.getElementById('eventosGrid');
    if (!grid) return;

    let eventosFiltrados = eventosData;

    if (filtro === 'proximos') {
        eventosFiltrados = eventosData.filter(e => e.estado === 'proximo');
    } else if (filtro === 'pasados') {
        eventosFiltrados = eventosData.filter(e => e.estado === 'pasado');
    } else if (filtro === 'capacitacion') {
        eventosFiltrados = eventosData.filter(e => e.tipo === 'capacitacion');
    } else if (filtro === 'evento regional') {
        eventosFiltrados = eventosData.filter(e => e.tipo === 'evento regional');
    } else if (filtro === 'expos') {
        eventosFiltrados = eventosData.filter(e => e.tipo === 'expos');
    }

    grid.innerHTML = '';

    if (eventosFiltrados.length === 0) {
        grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 60px;">No hay eventos en esta categoría</div>';
        return;
    }

    eventosFiltrados.forEach((evento, index) => {

        const fechaObj = parseLocalDate(evento.fecha);
        const dia = fechaObj.getDate();
        const mes = fechaObj.toLocaleString('es-ES', { month: 'short' }).toUpperCase();
        const año = fechaObj.getFullYear();

        let fechaFinTexto = '';
        if (evento.fecha_fin !== evento.fecha) {
            const fechaFinObj = parseLocalDate(evento.fecha_fin);
            fechaFinTexto = ' - ' + fechaFinObj.getDate() + ' ' +
                fechaFinObj.toLocaleString('es-ES', { month: 'short' }).toUpperCase();
        }

        let badgeClass = 'pasado';
        let badgeText = 'Pasado';

        if (evento.estado === 'proximo') {
            badgeClass = 'proximo';
            badgeText = 'Próximo';
        }

        if (evento.destacado) {
            badgeClass = 'destacado';
            badgeText = 'Destacado';
        }

        const card = document.createElement('div');
        card.className = 'evento-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 50).toString());

        card.innerHTML = `
            <span class="evento-badge ${badgeClass}">${badgeText}</span>
            <div class="evento-flyer" onclick="openFlyerModal('${evento.flyer}')">
                <img src="${evento.imagen}" alt="${evento.titulo}">
                <div class="evento-flyer-overlay">
                    <span class="btn-ver-flyer"><i class="fas fa-eye"></i> Ver flyer</span>
                </div>
            </div>
            <div class="evento-info">
                <div class="evento-fecha">
                    <i class="fas fa-calendar-alt"></i> ${dia} ${mes} ${año}${fechaFinTexto}
                </div>
                <h3 class="evento-titulo">${evento.titulo}</h3>
                <p class="evento-descripcion">${evento.descripcion.substring(0, 120)}...</p>
                <div class="evento-metadata">
                    <div class="evento-metadata-item">
                        <i class="fas fa-map-marker-alt"></i> ${evento.ubicacion}
                    </div>
                    <div class="evento-metadata-item">
                        <i class="fas fa-users"></i> ${evento.capacidad || 'N/A'}
                    </div>
                    <div class="evento-metadata-item">
                        <i class="fas fa-tag"></i> ${evento.modalidad}
                    </div>
                </div>
                <div class="evento-acciones">
                    ${evento.estado === 'proximo' ? 
                        `<a href="${evento.registro_url}" class="btn-evento btn-registro"><i class="fas fa-check-circle"></i> Registrarme</a>` : 
                        `<button class="btn-evento btn-pasado" disabled><i class="fas fa-check-circle"></i> Finalizado</button>`
                    }
                    <button class="btn-evento btn-detalle" onclick="openFlyerModal('${evento.flyer}')">
                        <i class="fas fa-info-circle"></i> Detalle
                    </button>
                </div>
            </div>
        `;

        grid.appendChild(card);
    });
}

// ============================================
// MOMENTOS DESTACADOS
// ============================================
function renderMomentos() {
    const grid = document.getElementById('momentosGrid');
    if (!grid) return;

    const eventosConMomentos = eventosData.filter(e => e.imagenes_momento && e.imagenes_momento.length > 0);

    let momentosHTML = '';

    if (eventosConMomentos.length > 0) {
        eventosConMomentos.slice(0, 4).forEach(evento => {

            const fecha = parseLocalDate(evento.fecha);

            const fechaFormateada = fecha.toLocaleDateString('es-ES', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            });

            momentosHTML += `
                <div class="momento-card" data-aos="zoom-in">
                    <img src="${evento.imagenes_momento[0]}" alt="${evento.titulo}" class="momento-img">
                    <div class="momento-overlay">
                        <span class="momento-fecha">
                            <i class="fas fa-calendar"></i> ${fechaFormateada}
                        </span>
                        <h4 class="momento-titulo">${evento.titulo}</h4>
                        <span class="momento-evento">${evento.ubicacion}</span>
                    </div>
                </div>
            `;
        });
    } else {
        momentosHTML = `...`; 
    }

    grid.innerHTML = momentosHTML;
}

        // ============================================
        // MODAL DE FLYER
        // ============================================
        window.openFlyerModal = function(flyerUrl) {
            const modal = document.getElementById('flyerModal');
            const modalImg = document.getElementById('flyerModalImage');
            const downloadLink = document.getElementById('flyerDownloadLink');

            if (!modal || !modalImg || !downloadLink) return;

            modalImg.src = flyerUrl;
            downloadLink.href = flyerUrl;

            modal.style.display = 'block';
            document.body.classList.add('modal-open');
        };

        function closeFlyerModal() {
            const modal = document.getElementById('flyerModal');
            if (modal) {
                modal.style.display = 'none';
                document.body.classList.remove('modal-open');
            }
        }

// Configurar eventos
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('flyerModal');
    const closeBtn = document.querySelector('.flyer-modal-minimal-close');
    const modalImg = document.getElementById('flyerModalImage');
    const downloadBtn = document.getElementById('flyerDownloadLink');
    
    if (!modal) return;
    
    // Cerrar con botón X
    if (closeBtn) {
        closeBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            closeFlyerModal();
        });
    }
    
    // Cerrar al hacer clic fuera de la imagen
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeFlyerModal();
        }
    });
    
    // Evitar que clic en la imagen cierre el modal
    if (modalImg) {
        modalImg.addEventListener('click', function(e) {
            e.stopPropagation();
        });
    }
    
    // Evitar que clic en el botón de descarga cierre el modal
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function(e) {
            e.stopPropagation();
            // El enlace ya funciona por sí solo
        });
    }
    
    // Cerrar con tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeFlyerModal();
        }
    });
});

        // ============================================
        // FILTROS
        // ============================================
        function initFilters() {
            const filterBtns = document.querySelectorAll('.evento-filter-btn');
            
            filterBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                    
                    const filter = this.dataset.filter;
                    renderEventos(filter);
                });
            });
        }

        // ============================================
        // PARTÍCULAS PARA HERO
        // ============================================
        function createParticles() {
            const particlesContainer = document.getElementById('particles');
            if (!particlesContainer) return;
            
            for (let i = 0; i < 50; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.floor(Math.random() * 8) + 2;
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                
                particle.style.left = `${Math.random() * 100}%`;
                particle.style.top = `${Math.random() * 100}%`;
                
                const duration = Math.floor(Math.random() * 20) + 15;
                particle.style.animation = `floatParticle ${duration}s infinite linear`;
                particle.style.animationDelay = `${Math.random() * 5}s`;
                
                particlesContainer.appendChild(particle);
            }
        }

        // ============================================
        // CALENDARIO SIMULADO
        // ============================================
        let currentDate = new Date(2026, 1, 1); // Febrero 2026

        function renderCalendar() {
            const monthNames = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
            const year = currentDate.getFullYear();
            const month = currentDate.getMonth();
            
            document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;
            
            const firstDay = new Date(year, month, 1);
            const lastDay = new Date(year, month + 1, 0);
            
            let startDay = firstDay.getDay(); // 0 = Domingo, 1 = Lunes...
            // Ajustar para que Lunes sea 0
            startDay = startDay === 0 ? 6 : startDay - 1;
            
            const daysInMonth = lastDay.getDate();
            
            let calendarHTML = '';
            
            // Días vacíos al inicio
            for (let i = 0; i < startDay; i++) {
                calendarHTML += '<div class="dia"></div>';
            }
            
            // Días del mes
            for (let d = 1; d <= daysInMonth; d++) {
                const fechaStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
                
                // Verificar si hay eventos en este día
                const hayEvento = eventosData.some(e => e.fecha.startsWith(fechaStr) && e.estado === 'proximo');
                
                calendarHTML += `<div class="dia ${hayEvento ? 'evento' : ''}">${d}</div>`;
            }
            
            document.getElementById('calendarDays').innerHTML = calendarHTML;
        }

        // ============================================
        // INICIALIZACIÓN
        // ============================================
        document.addEventListener('DOMContentLoaded', function() {
            renderEventos('todos');
            renderMomentos();
            initFilters();
            createParticles();
            renderCalendar();
            
            // Navegación del calendario
            document.getElementById('prevMonth').addEventListener('click', function() {
                currentDate.setMonth(currentDate.getMonth() - 1);
                renderCalendar();
            });
            
            document.getElementById('nextMonth').addEventListener('click', function() {
                currentDate.setMonth(currentDate.getMonth() + 1);
                renderCalendar();
            });
            
            // Inicializar AOS manualmente por si acaso
            if (typeof AOS !== 'undefined') {
                AOS.init({
                    duration: 1000,
                    once: true,
                    offset: 100
                });
            }
        });