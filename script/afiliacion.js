// ============================================
// INICIALIZACIÓN
// ============================================
document.addEventListener('DOMContentLoaded', function () {
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // Inicializar FAQ
    initFAQ();

    // Verificar si hay hash para abrir paso específico
    if (window.location.hash === '#formulario') {
        // El formulario ya tiene el id
    }
});

// ============================================
// FAQ ACORDEÓN
// ============================================
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-question');

    faqItems.forEach(item => {
        item.addEventListener('click', function () {
            const answer = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            // Cerrar todos
            document.querySelectorAll('.faq-question').forEach(q => {
                q.classList.remove('active');
            });
            document.querySelectorAll('.faq-answer').forEach(a => {
                a.classList.remove('active');
            });

            if (!isActive) {
                this.classList.add('active');
                answer.classList.add('active');
            }
        });
    });
}

// ============================================
// FORMULARIO MULTIPASO
// ============================================
let currentStep = 1;
let tipoSeleccionado = '';

function selectTipo(tipo) {
    tipoSeleccionado = tipo;
    // Marcar el radio correspondiente
    const radios = document.querySelectorAll('input[name="tipo"]');
    radios.forEach(radio => {
        if (radio.value === tipo) {
            radio.checked = true;
        }
    });

    // Hacer scroll al formulario
    document.getElementById('formulario').scrollIntoView({ behavior: 'smooth' });
}

function nextStep(step) {
    // Validar paso actual
    if (step === 1) {
        const tipo = document.querySelector('input[name="tipo"]:checked');
        if (!tipo) {
            alert('Por favor selecciona un tipo de afiliación');
            return;
        }
        tipoSeleccionado = tipo.value;
    } else if (step === 2) {
        const nombre = document.getElementById('nombre').value;
        const empresa = document.getElementById('empresa').value;
        const email = document.getElementById('email').value;
        const telefono = document.getElementById('telefono').value;
        const estado = document.getElementById('estado').value;

        if (!nombre || !empresa || !email || !telefono || !estado) {
            alert('Por favor completa todos los campos');
            return;
        }
    }

    // Cambiar paso
    document.getElementById(`step${step}`).classList.remove('active');
    document.getElementById(`step${step + 1}`).classList.add('active');

    // Actualizar indicadores
    document.getElementById(`step${step}-indicator`).classList.add('completed');
    document.getElementById(`step${step}-indicator`).classList.remove('active');
    document.getElementById(`step${step + 1}-indicator`).classList.add('active');

    currentStep = step + 1;
}

function prevStep(step) {
    document.getElementById(`step${step}`).classList.remove('active');
    document.getElementById(`step${step - 1}`).classList.add('active');

    document.getElementById(`step${step - 1}-indicator`).classList.remove('completed');
    document.getElementById(`step${step - 1}-indicator`).classList.add('active');
    document.getElementById(`step${step}-indicator`).classList.remove('active');

    currentStep = step - 1;
}

// ============================================
// CONFIGURACIÓN EMAILJS
// ============================================
(function() {
    emailjs.init("cUOH_KV2ZMrGf7_YT"); // Tu misma key
})();

// ============================================
// ENVIAR FORMULARIO CON EMAILJS
// ============================================
function submitForm() {
    // Validar aviso de privacidad
    const aviso = document.getElementById('aviso').checked;
    if (!aviso) {
        alert('Debes aceptar el aviso de privacidad');
        return;
    }

    // Validar que todos los campos estén llenos
    const tipo = document.querySelector('input[name="tipo"]:checked');
    const nombre = document.getElementById('nombre').value;
    const empresa = document.getElementById('empresa').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const estado = document.getElementById('estado').value;
    const contacto = document.querySelector('input[name="contacto"]:checked')?.value || 'email';
    const mensaje = document.getElementById('mensaje').value;

    if (!tipo || !nombre || !empresa || !email || !telefono || !estado) {
        alert('Por favor completa todos los campos requeridos');
        return;
    }

    // Preparar datos para EmailJS
    const telefonoWhatsApp = formatWhatsAppNumber(telefono);

    const templateParams = {
        tipo_afiliacion: tipo.value === 'concretero' ? 'Socio Concretero' : 'Socio Proveedor',
        nombre_completo: nombre,
        empresa: empresa,
        email: email,
        telefono: telefono,
        estado: estado,
        metodo_contacto: contacto === 'email' ? 'Correo electrónico' :
            contacto === 'whatsapp' ? 'WhatsApp' : 'Teléfono',
        mensaje_adicional: mensaje || 'Sin mensaje adicional',
        fecha_solicitud: new Date().toLocaleString('es-MX', {
            dateStyle: 'full',
            timeStyle: 'short'
        }),
        whatsapp_link: telefonoWhatsApp
    };


    console.log('Enviando datos:', templateParams); // Para depuración

    // Deshabilitar botón mientras se envía
    const btn = document.getElementById('submitBtn');
    const originalText = btn.textContent;
    btn.textContent = 'ENVIANDO...';
    btn.disabled = true;

    // Enviar usando EmailJS
    emailjs.send(
        'service_amci',           // ← TU SERVICE ID
        'template_orh1epq',     // ← TU TEMPLATE ID (nuevo)
        templateParams
    )
    .then(function(response) {
        console.log('Éxito:', response);
        alert('¡Gracias por tu interés! Hemos recibido tu solicitud y te contactaremos a la brevedad.');
        
        // Resetear formulario
        resetForm();
    })
    .catch(function(error) {
        console.error('Error:', error);
        alert('Hubo un error al enviar. Por favor intenta de nuevo o contáctanos directamente por WhatsApp.');
        
        // Restaurar botón
        btn.textContent = originalText;
        btn.disabled = false;
    });
}

function formatWhatsAppNumber(phone) {
    // Quitar todo lo que no sea número
    let cleaned = phone.replace(/\D/g, '');

    // Si empieza con 52 y tiene 12 dígitos (México correcto)
    if (cleaned.startsWith('52') && cleaned.length >= 12) {
        return cleaned;
    }

    // Si tiene 10 dígitos (número local MX)
    if (cleaned.length === 10) {
        return '521' + cleaned;
    }

    // Si tiene 12 y empieza con 521 ya está correcto
    if (cleaned.startsWith('521')) {
        return cleaned;
    }

    // Fallback
    return cleaned;
}

function resetForm() {
    // Resetear a paso 1
    document.getElementById('step3').classList.remove('active');
    document.getElementById('step2').classList.remove('active');
    document.getElementById('step1').classList.add('active');
    
    // Resetear indicadores
    document.querySelectorAll('.progress-step').forEach((step, index) => {
        step.classList.remove('active', 'completed');
        if (index === 0) step.classList.add('active');
    });
    
    // Limpiar campos
    document.querySelectorAll('input, select, textarea').forEach(field => {
        if (field.type !== 'radio' && field.type !== 'checkbox') {
            field.value = '';
        } else if (field.type === 'radio') {
            field.checked = false;
        } else if (field.type === 'checkbox') {
            field.checked = false;
        }
    });
    
    currentStep = 1;
    tipoSeleccionado = '';
}