const API="http://localhost:5000";

export const getMotor=()=>fetch(API+"/motor").then(res=>res.json());
export const getKategori=()=>fetch(API+"/kategori").then(res=>res.json());
const api = {
  getKategori,
  getMotor
};

export default api;
