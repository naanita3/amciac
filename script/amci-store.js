// Datos de máquinas (se puede mover a un archivo JSON externo después)
        const machines = [
            {
                id: 1,
                title: "Camión Bomba de Concreto Mack (33m) - Reparación Total",
                price: "$ Sin especificación",
                year: 2006,
                hours: "Sin uso después de reparación total.",
                condition: "Excelente estado",
                brand: "Mack",
                model: "Bomba JUNJIN",
                location: "Colima",
                category: "construccion",
                description: "Se vende camión bomba de concreto Mack, año 2006 en Manzanillo, Colima. Cuenta con una bomba marca JUNJIN de 33 metros. La unidad fue reparada totalmente, nuevo sin usar. El mantenimiento está al 100%. El camión no ha sido usado desde su reparación completa. Listo para trabajar.",
                seller: {
                    name: "EPCON Concretos",
                    location: "Colima",
                    phone: "312 311 9857",
                    whatsapp: "+523123119857"
                },
                images: [
                    "assets/img/marketplace/bomba1.jpg",
                    "assets/img/marketplace/bomba2.jpg",
                    "assets/img/marketplace/bomba3.jpg",
                    "assets/img/marketplace/bomba 4.jpg",
                    "assets/img/marketplace/bomba5.jpg"
                ]
            },
            {
                id: 2,
                title: "Camión Mack MR688S con Bomba Schwing",
                price: "$ Sin especificación",
                year: 2006,
                hours: "Sin especificación",
                condition: "Buen estado",
                brand: "Mack",
                model: "MR688S",
                location: "Colima",
                category: "construccion",
                description: "Se vende camión Mack MR688S año 2006 equipado con bomba Schwing. Cuenta con transmisión Maxitorque de 8 velocidades, funciona con combustible diésel, incluye estabilizador tipo A, brazo de 41 metros con 4 secciones en despliegue tipo X.",
                seller: {
                    name: "Sin especificación",
                    location: "Colima",
                    phone: "314 122 2914 / 314 124 0895",
                    email: "sgtorres1@hotmail.com"
                },
                images: [
                    "../assets/img/nosotros/1.jpg",
                    "../assets/img/nosotros/2.jpg",
                ]
            },
            {
                id: 3,
                title: "Camión International Paystar 5600i",
                price: "$900,000.00 MXN + IVA",
                year: 2006,
                hours: "Sin especificación",
                condition: "Buen estado",
                brand: "International",
                model: "Paystar 5600i",
                location: "Tamaulipas",
                category: "transporte",
                description: "Se vende Camión International Paystar 5600i modelo 2006, vehículo especial tipo mezclador de concreto. Diseñado para la industria de la construcción, este camión ofrece gran resistencia y desempeño.",
                seller: {
                    name: "Sin especificación",
                    location: "Tamaulipas",
                    phone: "899 122 8280",
                    whatsapp: "+528991228280"
                },
                images: [
                    "assets/img/marketplace/foto3.jpg",
                    "assets/img/marketplace/foto4.jpg"
                ]
            },
            {
                id: 4,
                title: "Camión Internacional Car 15",
                price: "$900,000.00 MXN + IVA",
                year: 2006,
                hours: "Sin especificación",
                condition: "Muy buen estado",
                brand: "International",
                model: "CAR 15",
                location: "Tamaulipas",
                category: "transporte",
                description: "Se vende Camión International CAR 15 modelo 2006, vehículo especial tipo mezclador de concreto, equipado con motor Cummins ISX 5600 de 500 HP y configuración de chasis cabina.",
                seller: {
                    name: "Sin especificación",
                    location: "Tamaulipas",
                    phone: "899 122 8280",
                    whatsapp: "+528991228280"
                },
                images: [
                    "assets/img/marketplace/foto1.jpg",
                    "assets/img/marketplace/foto2.jpg"
                ]
            },
        ];

        // Variables globales
        let currentMachine = null;

        // ===== FUNCIONES =====
        function renderMachineCards(filteredMachines = machines) {
            const grid = document.getElementById('machineGrid');
            grid.innerHTML = '';

            if (filteredMachines.length === 0) {
                grid.innerHTML = `
                    <div class="no-results" data-aos="fade-up">
                        <i class="fas fa-search"></i>
                        <h3>No se encontraron resultados</h3>
                        <p>Intenta con otros filtros o términos de búsqueda</p>
                    </div>
                `;
                return;
            }

            filteredMachines.forEach(machine => {
                const card = document.createElement('div');
                card.className = 'machine-card';
                card.setAttribute('data-aos', 'fade-up');
                card.setAttribute('data-aos-delay', (machine.id * 50).toString());
                card.innerHTML = `
                    <div class="machine-image" onclick="openModal(${machine.id})">
                        <img src="${machine.images[0]}" alt="${machine.title}">
                        <span class="image-count">${machine.images.length} ${machine.images.length === 1 ? 'imagen' : 'imágenes'}</span>
                    </div>
                    <div class="machine-info">
                        <h3 class="machine-title">${machine.title}</h3>
                        <div class="machine-specs">
                            ${machine.brand} ${machine.model} • ${machine.year}<br>
                            ${machine.condition}
                        </div>
                        <div class="machine-price">${machine.price}</div>
                        <div class="seller-info-mini">
                            <div class="seller-name">${machine.seller.name}</div>
                            <div class="seller-location">
                                <i class="fas fa-map-marker-alt"></i> ${machine.location}
                            </div>
                        </div>
                        <button onclick="openModal(${machine.id})" class="btn-store">Ver detalles</button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Filtrar máquinas
        function filterMachines() {
            const searchText = document.getElementById('searchInput').value.toLowerCase().trim();
            const cityFilter = document.getElementById('cityFilter').value.toLowerCase().trim();
            const companyFilter = document.getElementById('companyFilter').value.toLowerCase().trim();
            const categoryFilter = document.getElementById('categoryFilter').value.toLowerCase().trim();

            const filtered = machines.filter(machine => {
                // Búsqueda por texto
                let matchesSearch = true;
                if (searchText !== '') {
                    matchesSearch = 
                        machine.title.toLowerCase().includes(searchText) ||
                        machine.brand.toLowerCase().includes(searchText) ||
                        machine.model.toLowerCase().includes(searchText) ||
                        machine.description.toLowerCase().includes(searchText) ||
                        (machine.seller.name && machine.seller.name.toLowerCase().includes(searchText));
                }

                // Filtro por ciudad/estado
                let matchesCity = true;
                if (cityFilter !== '') {
                    matchesCity = machine.location.toLowerCase().includes(cityFilter);
                }

                // Filtro por empresa
                let matchesCompany = true;
                if (companyFilter !== '') {
                    matchesCompany = machine.seller.name.toLowerCase().includes(companyFilter);
                }

                // Filtro por categoría
                let matchesCategory = true;
                if (categoryFilter !== '') {
                    matchesCategory = machine.category && machine.category.toLowerCase() === categoryFilter;
                }

                return matchesSearch && matchesCity && matchesCompany && matchesCategory;
            });

            renderMachineCards(filtered);
        }

        // Abrir modal
        window.openModal = function(machineId) {
            const machine = machines.find(m => m.id === machineId);
            if (!machine) return;
            
            currentMachine = machine;
            const modal = document.getElementById('machineModal');
            
            // Llenar datos básicos
            document.getElementById('modalTitle').textContent = machine.title;
            document.getElementById('modalMachineTitle').textContent = machine.title;
            document.getElementById('modalPrice').textContent = machine.price;
            document.getElementById('modalDescription').textContent = machine.description;
            
            // Especificaciones
            document.getElementById('specYear').textContent = machine.year || 'N/E';
            document.getElementById('specHours').textContent = machine.hours || 'N/E';
            document.getElementById('specCondition').textContent = machine.condition || 'N/E';
            document.getElementById('specBrand').textContent = machine.brand || 'N/E';
            document.getElementById('specModel').textContent = machine.model || 'N/E';
            document.getElementById('specLocation').textContent = machine.location || 'N/E';
            
            // Vendedor
            document.getElementById('sellerName').textContent = machine.seller.name || 'N/E';
            document.getElementById('sellerLocation').innerHTML = `<i class="fas fa-map-marker-alt"></i> ${machine.seller.location || 'N/E'}`;
            document.getElementById('sellerPhone').innerHTML = `<i class="fas fa-phone"></i> ${machine.seller.phone || 'N/E'}`;
            
            if (machine.seller.email) {
                document.getElementById('sellerEmail').innerHTML = `<i class="fas fa-envelope"></i> ${machine.seller.email}`;
                document.getElementById('sellerEmail').style.display = 'flex';
            } else {
                document.getElementById('sellerEmail').style.display = 'none';
            }
            
            // Galería
            document.getElementById('mainImage').src = machine.images[0];
            
            const thumbnailsContainer = document.getElementById('thumbnails');
            thumbnailsContainer.innerHTML = '';
            
            machine.images.forEach((img, index) => {
                const thumb = document.createElement('div');
                thumb.className = `thumbnail ${index === 0 ? 'active' : ''}`;
                thumb.innerHTML = `<img src="${img}" alt="Thumbnail ${index + 1}">`;
                thumb.onclick = () => {
                    document.getElementById('mainImage').src = img;
                    document.querySelectorAll('.thumbnail').forEach(t => t.classList.remove('active'));
                    thumb.classList.add('active');
                };
                thumbnailsContainer.appendChild(thumb);
            });
            
            // Botones de contacto
            const contactContainer = document.getElementById('contactButtonsContainer');
            contactContainer.innerHTML = '';
            
            if (machine.seller.whatsapp) {
                const btnWhatsapp = document.createElement('button');
                btnWhatsapp.className = 'btn-contact btn-whatsapp';
                btnWhatsapp.innerHTML = '<i class="fa-brands fa-whatsapp"></i> WhatsApp';
                btnWhatsapp.onclick = () => {
                    const message = `Hola, estoy interesado en la máquina: ${machine.title}`;
                    window.open(`https://wa.me/${machine.seller.whatsapp.replace('+', '')}?text=${encodeURIComponent(message)}`, '_blank');
                };
                contactContainer.appendChild(btnWhatsapp);
            }
            
            if (machine.seller.phone) {
                const btnPhone = document.createElement('button');
                btnPhone.className = 'btn-contact btn-phone';
                btnPhone.innerHTML = '<i class="fas fa-phone"></i> Llamar';
                btnPhone.onclick = () => window.location.href = `tel:${machine.seller.phone}`;
                contactContainer.appendChild(btnPhone);
            }
            
            if (machine.seller.email) {
                const btnEmail = document.createElement('button');
                btnEmail.className = 'btn-contact btn-email';
                btnEmail.innerHTML = '<i class="fas fa-envelope"></i> Email';
                btnEmail.onclick = () => {
                    const subject = `Consulta sobre: ${machine.title}`;
                    window.location.href = `mailto:${machine.seller.email}?subject=${encodeURIComponent(subject)}`;
                };
                contactContainer.appendChild(btnEmail);
            }
            
            // Mostrar modal
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        };

        // Cerrar modal
        function closeModal() {
            const modal = document.getElementById('machineModal');
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // ===== EVENT LISTENERS =====
        document.addEventListener('DOMContentLoaded', () => {
            // Inicializar render
            renderMachineCards();
            
            // Filtros
            document.getElementById('searchInput').addEventListener('input', filterMachines);
            document.getElementById('searchButton').addEventListener('click', filterMachines);
            document.getElementById('cityFilter').addEventListener('change', filterMachines);
            document.getElementById('companyFilter').addEventListener('change', filterMachines);
            document.getElementById('categoryFilter').addEventListener('change', filterMachines);
            
            // Cerrar modal
            document.querySelector('.close-modal').addEventListener('click', closeModal);
            window.addEventListener('click', (e) => {
                if (e.target === document.getElementById('machineModal')) {
                    closeModal();
                }
            });
            
            // Tecla ESC para cerrar modal
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && document.getElementById('machineModal').style.display === 'block') {
                    closeModal();
                }
            });
        });