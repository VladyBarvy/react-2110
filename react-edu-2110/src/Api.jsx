import axios from 'axios';

// vladymiran...
// Ge-ni...

const API_KEY = 'de328b91d3e34ea5a7194003ef7589f0'; // Замените на ваш API ключ
const API_URL = 'https://openexchangerates.org/api/';

export const fetchExchangeRates = async (baseCurrency) => {
  const response = await axios.get(`${API_URL}latest.json?app_id=${API_KEY}&base=${baseCurrency}`);
  return response.data.rates;
};