import axios from "axios";

const API = axios.create({
  baseURL: "https://student-record-management-dtyp.vercel.app/api"
});

export default API;
