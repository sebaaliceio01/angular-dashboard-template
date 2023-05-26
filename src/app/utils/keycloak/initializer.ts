import { KeycloakService } from "keycloak-angular";
import { environment } from "src/environments/environment";

export function initializer(keycloak: KeycloakService): () => Promise<any> {
    return async () => {
        await keycloak.init({
            config: {
                url: environment.keycloack.keycloakUrl,
                realm: environment.keycloack.keycloakRealm,
                clientId: environment.keycloack.keycloakClientId,
            },
            initOptions: {
                checkLoginIframe: true,
                redirectUri: environment.keycloack.redirectUri,
            },
            enableBearerInterceptor: true,
        });
    };
}

export default initializer