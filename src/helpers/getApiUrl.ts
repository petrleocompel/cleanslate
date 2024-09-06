import { isProduction } from './isProduction'

export const getApiUrl = () => {
  if (isProduction()) {
    // @ts-ignore window not defined
    return [`https://${window.location.hostname}/v1/graphql`, `wss://${window.location.hostname}/v1/graphql`]
  }
  return ['https://localhost/v1/graphql', 'wss://localhost/v1/graphql']
}
