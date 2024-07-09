const API_URL = import.meta.env.PROD
  ? import.meta.env.VITE_API_URL || location.origin + "/api"
  : "http://localhost:3000";

const config = {
  API_URL,
};

export default config;
