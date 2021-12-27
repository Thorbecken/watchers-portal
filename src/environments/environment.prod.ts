export const environment = {
  production: true,
  apiHost: (window as { [key: string]: any })["env"]["apiHost"] || "default"
};
