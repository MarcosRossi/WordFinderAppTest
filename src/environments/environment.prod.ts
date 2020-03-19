function getApiUrl() {
  return "http://localhost:5000/api/wordfinder";
}

export const environment = {
  production: true,
  apiUrl: getApiUrl()
};
