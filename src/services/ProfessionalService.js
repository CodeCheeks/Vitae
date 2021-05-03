import { create } from "./BaseService";

const http = create()

export const getProfessionalsInfo = () => {
    return http.get('/professionals')
  }
