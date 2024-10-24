import { useEffect, useState } from 'react';
import { fetchExchangeRates } from './Api.jsx';

const ExchangeRates = () => {
  const [rates, setRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');

  useEffect(() => {
    const getRates = async () => {
      const ratesData = await fetchExchangeRates(baseCurrency);
      setRates(ratesData);
    };
    getRates();
  }, [baseCurrency]);

  return (
    <div>
      <h1>Курсы валют</h1>
      <select onChange={(e) => setBaseCurrency(e.target.value)}>
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="RUB">RUB</option>
        {/* Добавьте другие валюты по желанию */}
      </select>
      <ul>
        {Object.entries(rates).map(([currency, rate]) => (
          <li key={currency}>
            1 {baseCurrency} = {rate} {currency}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExchangeRates;
