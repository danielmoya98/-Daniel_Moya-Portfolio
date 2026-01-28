/**
 * WhatsApp Contextual Strategy
 * Centralizes phone number and message generation logic.
 */

// CONFIGURATION
const OBSFUCATED_PHONE = '59160000000'; // REEMPLAZA CON TU NÚMERO REAL

export const WhatsAppContext = {
    /**
     * Inicializa la estrategia buscando todos los elementos con data-wa-action
     */
    init() {
        this.updateLinks();

        // Expose globally for inline HTML usage if needed
        window.openWhatsApp = this.open.bind(this);
    },

    /**
     * Genera el enlace de WhatsApp y abre la ventana
     * @param {string} action - El contexto de la acción (ej: 'hero', 'project', 'footer')
     * @param {string} [extraInfo] - Información adicional (ej: nombre del proyecto)
     */
    open(action, extraInfo = '') {
        const message = this.getMessage(action, extraInfo);
        const url = `https://wa.me/${OBSFUCATED_PHONE}?text=${encodeURIComponent(message)}`;
        window.open(url, '_blank');
    },

    /**
     * Busca enlaces con data-wa-action y les asigna el evento click
     */
    updateLinks() {
        const elements = document.querySelectorAll('[data-wa-action]');

        elements.forEach(el => {
            const action = el.getAttribute('data-wa-action');
            const info = el.getAttribute('data-wa-info') || '';

            el.onclick = (e) => {
                e.preventDefault();
                this.open(action, info);
            };

            // Optional: Update href for hover intent (accessibility)
            const message = this.getMessage(action, info);
            el.href = `https://wa.me/${OBSFUCATED_PHONE}?text=${encodeURIComponent(message)}`;
            el.target = "_blank";
        });
    },

    /**
     * Retorna el mensaje predefinido según el contexto
     */
    getMessage(action, extraInfo) {
        switch (action) {
            case 'hero':
                return "Hola Daniel, quiero iniciar un proyecto y necesito asesoría experta.";

            case 'project-detail':
                return `Hola Daniel, vi el caso de éxito "${extraInfo}" y me gustaría desarrollar un software similar para mi negocio.`;

            case 'nav-cotizar':
                return "Hola Daniel, quisiera cotizar un proyecto de software a medida.";

            case 'float-btn':
                return "Hola, tengo una consulta rápida sobre tus servicios.";

            case 'footer':
                return "Hola Daniel, estoy listo para hablar de negocios.";

            default:
                return "Hola Daniel, vengo de tu portafolio web.";
        }
    }
};

// Auto-init on load
document.addEventListener('DOMContentLoaded', () => {
    WhatsAppContext.init();
});
