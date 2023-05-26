export const environment = {
    production: true,
    roles: {
        adminGeneral: process.env.NG_APP_ADMINGENERAL,
        manager: process.env.NG_APP_MANAGER,
        admin: process.env.NG_APP_ADMIN,
    },
    keycloack: {
        keycloakRealm: process.env.NG_APP_KEYCLOAKREALM,
        keycloakUrl: process.env.NG_APP_KEYCLOAKURL,
        keycloakClientId: process.env.NG_APP_KEYCLOAKCLIENTID,
        allowedOrigins: process.env.NG_APP_ALLOWEDORIGINS,
        redirectUri: process.env.NG_APP_REDIRECTURI
    },
    API_URL: process.env.NG_APP_APIURL
}
