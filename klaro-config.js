var klaroConfig = {
    elementID: 'klaro',
    storageMethod: 'cookie',
    cookieName: 'klaro',
    cookieExpiresAfterDays: 30,
    privacyPolicy: '/datenschutz.html',
    default: false,
    mustConsent: false,

    translations: {
        de: {
            consentModal: {
                title: 'Datenschutzeinstellungen',
                description: 'Hier können Sie einsehen und anpassen, welche Information wir über Sie sammeln.',
            },
            googleMaps: {
                description: 'Anzeigen von interaktiven Karten direkt auf der Website.',
            },
            purposes: {
                media: 'Externe Medien',
            },
        },
    },

    services: [
        {
            name: 'googleMaps',
            title: 'Google Maps',
            purposes: ['media'],
            default: false,
        },
    ],
};