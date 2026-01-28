export const projectsData = [
    {
        // ESTE ID DEBE COINCIDIR CON EL LINK DEL HTML (?id=biblioverso)
        id: 'biblioverso',
        title: 'Biblioverso',
        subtitle: 'App de gestión de biblioteca digital.',
        category: 'Desktop App / WPF',
        tags: ['WPF', 'C#', 'Material Design', 'Neon DB'],
        shortDescription: 'Sistema integral de gestión bibliotecaria que centraliza el control de inventario.',
        fullDescription: 'Una solución de escritorio robusta desarrollada para la Universidad Privada del Valle. Biblioverso moderniza la administración de recursos bibliográficos permitiendo un control fluido del catálogo físico y digital. La aplicación gestiona préstamos, devoluciones y penalizaciones de usuarios de forma eficiente. Su interfaz, construida con principios de Material Design, asegura una curva de aprendizaje mínima para el personal administrativo, mientras que la integración con Neon DB garantiza la integridad y disponibilidad de los datos en la nube.',
        challenges: 'El mayor reto técnico fue integrar una aplicación de escritorio (WPF) con una base de datos serverless (Neon DB) asegurando tiempos de respuesta rápidos. Se implementó una arquitectura asíncrona en C# para manejar las consultas sin bloquear el hilo de la interfaz (UI Thread), garantizando que la aplicación permanezca fluida y reactiva incluso durante operaciones intensivas de carga de datos.',
        year: '2025',
        client: 'Universidad Privada del Valle',
        liveUrl: '',
        images: [
            'img/biblioverso.jpg',
            'img/biblioverso2.jpg'
        ]
    },
    {
        // ESTE ID DEBE COINCIDIR CON EL LINK DEL HTML (?id=puntoseguro)
        id: 'puntoseguro',
        title: 'Punto Seguro',
        subtitle: 'Página Web para Transporte Privado',
        category: 'Web App / Landing Page',
        tags: ['HTML', 'CSS', 'JavaScript', 'WhatsApp API'],
        shortDescription: 'Landing page moderna optimizada para la conversión y reserva de servicios de transporte.',
        fullDescription: 'Sitio web promocional diseñado para una flota de transporte privado. El objetivo fue construir una identidad digital que transmitiera confianza y seguridad profesional. La interfaz presenta la flota de vehículos, tarifas transparentes y testimonios de clientes, integrando botones de acción (CTAs) estratégicos que redirigen a WhatsApp para una gestión de reservas inmediata y sin fricción.',
        challenges: 'El principal reto fue lograr una experiencia visual de alto impacto y animaciones fluidas sin sacrificar el rendimiento en dispositivos móviles. Al no usar frameworks pesados, se optimizó el código JavaScript y CSS manualmente, logrando tiempos de carga casi instantáneos.',
        year: '2025',
        client: 'Juan M. Gutierrez',
        liveUrl: '', // Si tienes el link real, ponlo aquí
        images: [
            'img/ps.jpg',
            'img/ps2.jpg'
        ]
    },
    {
        // ESTE ID PARA EL TERCER PROYECTO
        id: 'pos',
        title: 'POS Gastronómico',
        subtitle: 'Punto de Venta para Restaurantes',
        category: 'Desktop / Backend',
        tags: ['Go', 'NeonDB', 'WPF', 'Facturación'],
        shortDescription: 'Sistema de facturación y control de inventario adaptado a la normativa boliviana.',
        fullDescription: 'Sistema integral para "Brostería" que gestiona pedidos, inventario en tiempo real y facturación computarizada. El backend fue construido en Go para máxima velocidad y concurrencia, conectado a una base de datos NeonDB. El frontend en WPF ofrece una interfaz táctil rápida para los cajeros.',
        challenges: 'La integración con los métodos de pago QR y la sincronización en tiempo real del stock entre múltiples cajas fueron los desafíos principales resueltos con WebSockets.',
        year: '2025',
        client: 'Confidencial',
        liveUrl: '',
        images: [
            'img/placeholder.jpg' // O usa una imagen genérica si no tienes fotos aún
        ]
    }
];