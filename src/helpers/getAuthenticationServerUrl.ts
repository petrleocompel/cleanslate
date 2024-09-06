import { isProduction } from './isProduction'

export const getAuthenticationUrl = (): string => {  
  if (isProduction()) {
    return "/auth";
  }
  return 'https://localhost/auth'
}
