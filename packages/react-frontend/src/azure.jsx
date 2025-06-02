const isLocal = false;  // flip this once before deploying

export const API_BASE_URL = isLocal
  ? 'http://localhost:8000'
  : 'https://mycloset-hraqchf2h6a3gacc.westus2-01.azurewebsites.net';
