// ============================================
// BASE DE DATOS DE PROVEEDORES CON RUTAS DE LOGOS
// ============================================
const proveedoresData = [
    { 
        id: 1, 
        nombre: "Arkik", 
        logo: "assets/img/logo/proveedores/Arkiklogo.jpg",
        direccion: "Ave. Constitución 444 Pte, Monterrey, NL", 
        telefono: "(555) 123-4567", 
        email: "", 
        categorias: ["Software"], 
        destacado: false 
    },
    { 
        id: 2, 
        nombre: "BRAHER MIXERS", 
        logo: "assets/img/logo/proveedores/braher.jpg",
        direccion: "Av. Independencia 1800, Atotonilco el Alto, Jal.", 
        telefono: "39 1917 2040", 
        email: "", 
        categorias: ["Maquinaria Pesada", "Equipos Industriales"], 
        destacado: true 
    },
    { 
        id: 3, 
        nombre: "CarbonCure Technologies", 
        logo: "assets/img/logo/proveedores/carboncure.jpg",
        direccion: "42 Payzant Avenue, Nova Scotia", 
        telefono: "+52 1 56 1104 1083", 
        email: "", 
        categorias: ["Captura de carbono"], 
        destacado: true 
    },
    { 
        id: 4, 
        nombre: "Cementos Moctezuma", 
        logo: "assets/img/logo/proveedores/moctezumaverde.jpg",
        direccion: "Miguel Hidalgo, Ciudad de México", 
        telefono: "+52 555 279 5926", 
        email: "", 
        categorias: ["Materiales de construcción"], 
        destacado: false 
    },
    { 
        id: 5, 
        nombre: "Cemex", 
        logo: "assets/img/logo/proveedores/cemex.jpg",
        direccion: "Av. Constitución 444, Monterrey, N.L.", 
        telefono: "+52 818 328 3000", 
        email: "", 
        categorias: ["Materiales de construcción"], 
        destacado: true 
    },
    { 
        id: 6, 
        nombre: "Command Alkon", 
        logo: "assets/img/logo/proveedores/command_alkon.jpg",
        direccion: "1800 International Park Dr. Birmingham, AL", 
        telefono: "+01 800 563 0667", 
        email: "", 
        categorias: ["Software"], 
        destacado: false 
    },
    { 
        id: 7, 
        nombre: "Construmac", 
        logo: "assets/img/logo/proveedores/Construmac.jpg",
        direccion: "San José de los Leones No. 11, Naucalpan", 
        telefono: "+52 800 720 4010", 
        email: "", 
        categorias: ["Maquinaria Pesada"], 
        destacado: false 
    },
    { 
        id: 8, 
        nombre: "Fibra Fmax", 
        logo: "assets/img/logo/proveedores/FMAX.jpg",
        direccion: "Km. 16 carretera Mérida - Umán, Yucatán", 
        telefono: "+52 999 357 1564", 
        email: "", 
        categorias: ["Fibras"], 
        destacado: false 
    },
    { 
        id: 9, 
        nombre: "FRUMECAR", 
        logo: "assets/img/logo/proveedores/frumecar_logo.jpg",
        direccion: "", 
        telefono: "+52 556 579 6070", 
        email: "frumecar@frumecar.com", 
        categorias: ["Maquinaria Pesada"], 
        destacado: false 
    },
    { 
        id: 10, 
        nombre: "Grupo SVF", 
        logo: "assets/img/logo/proveedores/svf.jpg",
        direccion: "Ruiz Cortinez 831, Guadalupe, N.L.", 
        telefono: "01 81 2138 7171", 
        email: "", 
        categorias: ["Refacciones"], 
        destacado: false 
    },
    { 
        id: 11, 
        nombre: "MAPEI", 
        logo: "assets/img/logo/proveedores/mapei.png",
        direccion: "Av. Antea 1088, Jurica, Querétaro", 
        telefono: "+52 1 442 207 58 35", 
        email: "", 
        categorias: ["Materiales de construcción"], 
        destacado: false 
    },
    { 
        id: 12, 
        nombre: "MTM", 
        logo: "assets/img/logo/proveedores/MTM_LOGO.jpg",
        direccion: "Carretera federal México-Puebla, Km 126.5", 
        telefono: "+52 222 708 7604", 
        email: "", 
        categorias: ["Maquinaria Pesada"], 
        destacado: false 
    },
    { 
        id: 13, 
        nombre: "ODISA CONCRETE EQUIPMENT", 
        logo: "assets/img/logo/proveedores/odisa.jpg",
        direccion: "Boulevard Bicentenario, Hidalgo", 
        telefono: "+52 778 735 9750", 
        email: "", 
        categorias: ["Equipos Industriales"], 
        destacado: true 
    },
    { 
        id: 14, 
        nombre: "SCANIA", 
        logo: "assets/img/logo/proveedores/scania.jpg",
        direccion: "Carretera Estatal 431, Querétaro", 
        telefono: "+52 442 227 30 00", 
        email: "", 
        categorias: ["Maquinaria Pesada"], 
        destacado: false 
    },
    { 
        id: 15, 
        nombre: "Schwing", 
        logo: "assets/img/logo/proveedores/schwing.jpg",
        direccion: "5900 Centerville Road, St. Paul, MN", 
        telefono: "", 
        email: "vhernandez@schwing.com", 
        categorias: ["Maquinaria Pesada", "Equipos Industriales"], 
        destacado: true 
    },
    { 
        id: 16, 
        nombre: "Shacman", 
        logo: "assets/img/logo/proveedores/shacman.jpg",
        direccion: "F.C. de Cuernavaca 76, CDMX", 
        telefono: "", 
        email: "sclientes@shacman-mx.com", 
        categorias: ["Maquinaria Pesada"], 
        destacado: false 
    },
    { 
        id: 17, 
        nombre: "Sitsa", 
        logo: "assets/img/logo/proveedores/sitsa.webp",
        direccion: "Autopista México - Querétaro 3065, Tlalnepantla", 
        telefono: "800 007 48 72", 
        email: "", 
        categorias: ["Equipos Industriales"], 
        destacado: true 
    }
];

// ============================================
// GENERAR CATEGORÍAS
// ============================================
function generarCategorias() {
    const categoriasUnicas = [];
    const iconos = {
        'Software': 'fa-laptop-code',
        'Materiales de construcción': 'fa-brick',
        'Captura de carbono': 'fa-leaf',
        'Refacciones': 'fa-gear',
        'Equipos Industriales': 'fa-industry',
        'Maquinaria Pesada': 'fa-truck',
        'Fibras': 'fa-thread'
    };

    proveedoresData.forEach(prov => {
        prov.categorias.forEach(cat => {
            if (!categoriasUnicas.includes(cat)) {
                categoriasUnicas.push(cat);
            }
        });
    });

    categoriasUnicas.sort();

    const container = document.getElementById('categoriasContainer');
    if (!container) return;
    
    container.innerHTML = '';

    // Botón "Todos"
    const btnTodos = document.createElement('div');
    btnTodos.className = 'mind-map-item active';
    btnTodos.dataset.categoria = 'todos';
    btnTodos.innerHTML = '<i class="fas fa-th-large"></i> Todos';
    btnTodos.addEventListener('click', function() { filtrarPorCategoria('todos'); });
    container.appendChild(btnTodos);

    // Categorías
    categoriasUnicas.forEach(cat => {
        const chip = document.createElement('div');
        chip.className = 'mind-map-item';
        chip.dataset.categoria = cat;
        const icono = iconos[cat] || 'fa-tag';
        chip.innerHTML = `<i class="fas ${icono}"></i> ${cat}`;
        chip.addEventListener('click', function() { filtrarPorCategoria(cat); });
        container.appendChild(chip);
    });
}

// ============================================
// RENDERIZAR TARJETAS CON LOGOS (VERSIÓN CORREGIDA)
// ============================================
function renderProveedores(proveedores = proveedoresData) {
    const grid = document.getElementById('proveedoresGrid');
    const resultadosSpan = document.getElementById('resultadosCount');
    
    if (!grid) return;
    
    grid.innerHTML = '';
    
    if (proveedores.length === 0) {
        grid.innerHTML = `
            <div class="no-results-modern">
                <i class="fas fa-search"></i>
                <h3>No hay resultados</h3>
                <p style="color: var(--gray-500);">Intenta con otros filtros</p>
                <button class="btn-clear-modern" onclick="limpiarFiltros()">
                    <i class="fas fa-times-circle"></i> Limpiar filtros
                </button>
            </div>
        `;
        document.getElementById('btnLimpiarContainer').style.display = 'none';
        resultadosSpan.textContent = '0';
        return;
    }

    proveedores.forEach((prov, index) => {
        const card = document.createElement('div');
        card.className = 'proveedor-card';
        card.setAttribute('data-aos', 'fade-up');
        card.setAttribute('data-aos-delay', (index * 50).toString());
        
        const categoriasStr = prov.categorias.join(' ');
        card.setAttribute('data-categoria', categoriasStr);

        const inicial = prov.nombre.charAt(0);

        // Generar el contenido del logo con manejo de error corregido
        let logoHtml;
        if (prov.logo) {
            logoHtml = `<img src="${prov.logo}" alt="${prov.nombre}" style="width: 100%; height: 100%; object-fit: contain; padding: 8px;" onerror="this.onerror=null; this.style.display='none'; this.parentElement.innerHTML='${inicial}';">`;
        } else {
            logoHtml = inicial;
        }

        card.innerHTML = `
            <div class="card-inner">
                <div class="card-logo">
                    ${logoHtml}
                </div>
                <h3 class="card-title">${prov.nombre}</h3>
                <div class="card-categories">
                    ${prov.categorias.map(cat => `<span class="category-tag">${cat}</span>`).join('')}
                </div>
                <div class="card-details">
                    ${prov.direccion ? `
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <span>${prov.direccion}</span>
                    </div>
                    ` : ''}
                    ${prov.telefono ? `
                    <div class="detail-item">
                        <i class="fas fa-phone"></i>
                        <a href="tel:${prov.telefono.replace(/[^0-9+]/g, '')}">${prov.telefono}</a>
                    </div>
                    ` : ''}
                    ${prov.email ? `
                    <div class="detail-item">
                        <i class="fas fa-envelope"></i>
                        <a href="mailto:${prov.email}">${prov.email}</a>
                    </div>
                    ` : ''}
                </div>
            </div>
            <div class="card-hover-overlay">
                <h4 class="hover-title">${prov.nombre}</h4>
                <span class="hover-btn">Ver sitio web</span>
            </div>
        `;

        grid.appendChild(card);
    });

    resultadosSpan.textContent = proveedores.length;
    document.getElementById('btnLimpiarContainer').style.display = proveedores.length === proveedoresData.length ? 'none' : 'block';
}

// ============================================
// FILTROS
// ============================================
let categoriaActiva = 'todos';
let textoBusqueda = '';

function filtrarProveedores() {
    let resultados = proveedoresData;

    if (categoriaActiva !== 'todos') {
        resultados = resultados.filter(prov => 
            prov.categorias.includes(categoriaActiva)
        );
    }

    if (textoBusqueda.trim() !== '') {
        const busqueda = textoBusqueda.toLowerCase().trim();
        resultados = resultados.filter(prov => 
            prov.nombre.toLowerCase().includes(busqueda) ||
            (prov.direccion && prov.direccion.toLowerCase().includes(busqueda)) ||
            prov.categorias.some(cat => cat.toLowerCase().includes(busqueda))
        );
    }

    renderProveedores(resultados);

    document.querySelectorAll('.mind-map-item').forEach(item => {
        const cat = item.dataset.categoria;
        if (cat === categoriaActiva) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
}

function filtrarPorCategoria(categoria) {
    categoriaActiva = categoria;
    filtrarProveedores();
}

function limpiarFiltros() {
    categoriaActiva = 'todos';
    textoBusqueda = '';
    const buscador = document.getElementById('buscador');
    if (buscador) buscador.value = '';
    filtrarProveedores();
}

// ============================================
// PARTÍCULAS PARA HERO
// ============================================
function crearParticulas() {
    const container = document.getElementById('particles');
    if (!container) return;

    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 6 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 15 + 10}s infinite linear`;
        container.appendChild(particle);
    }
}

// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // Generar categorías
    generarCategorias();
    
    // Renderizar proveedores
    renderProveedores();
    
    // Crear partículas decorativas
    crearParticulas();

    // Event listeners para búsqueda
    const buscador = document.getElementById('buscador');
    const btnBuscar = document.getElementById('btnBuscar');

    if (buscador) {
        buscador.addEventListener('keyup', function(e) {
            if (e.key === 'Enter') {
                textoBusqueda = this.value;
                filtrarProveedores();
            }
        });
    }

    if (btnBuscar) {
        btnBuscar.addEventListener('click', function() {
            textoBusqueda = buscador.value;
            filtrarProveedores();
        });
    }

    // Botón limpiar filtros
    const btnLimpiar = document.getElementById('btnLimpiarFiltros');
    if (btnLimpiar) {
        btnLimpiar.addEventListener('click', limpiarFiltros);
    }
});