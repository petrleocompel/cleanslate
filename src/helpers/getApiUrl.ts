import { isProduction } from "./isProduction";

export const getApiUrl = () => {
  if (isProduction()) {
    if (typeof window === "undefined")
      return ["https://localhost/v1/graphql", "wss://localhost/v1/graphql"];
    return [
      // @ts-ignore - window.navigator.standalone only exists on iOS
      `https://${window.location.hostname}/v1/graphql`,
      // @ts-ignore - window.navigator.standalone only exists on iOS
      `wss://${window.location.hostname}/v1/graphql`,
    ];
  }
  return ["https://localhost/v1/graphql", "wss://localhost/v1/graphql"];
};
