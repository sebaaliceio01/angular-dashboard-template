interface ImportMeta {
  readonly env: ImportMetaEnv;
}

interface ImportMetaEnv {
  readonly NG_APP_ADMINGENERAL: string,
  readonly NG_APP_MANAGER: string,
  readonly NG_APP_ADMIN: string,
  readonly NG_APP_KEYCLOAKREALM: string,
  readonly NG_APP_KEYCLOAKURL: string,
  readonly NG_APP_KEYCLOAKCLIENTID: string,
  readonly NG_APP_ALLOWEDORIGINS: string,
  readonly NG_APP_REDIRECTURI: string
  readonly NG_APP_APIURL: string
  [key: string]: any
}

declare var process: {
  env: {
    NG_APP_ADMINGENERAL: string,
    NG_APP_MANAGER: string,
    NG_APP_ADMIN: string,
    NG_APP_KEYCLOAKREALM: string,
    NG_APP_KEYCLOAKURL: string,
    NG_APP_KEYCLOAKCLIENTID: string,
    NG_APP_ALLOWEDORIGINS: string,
    NG_APP_REDIRECTURI: string
    NG_APP_APIURL: string
    [key: string]: any;
  };
};
