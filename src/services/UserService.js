import { create } from "./BaseService";

const http = create()

export const getUserInfo = () => {
  return http.get('/users/me')
}

export const getReports = (id) => {
  return http.get('/reports', id)
}

export const employ = (body) => {
  return http.post('/employ', body)
}