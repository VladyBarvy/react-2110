import { useState } from 'react';
import { fetchExchangeRates } from './Api.jsx';

const CurrencyConverter = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState(null);
  const [baseCurrency, setBaseCurrency] = useState('USD');

  const handleConvert = async () => {
    const [amount, from, , to] = input.split(' ');
    const rates = await fetchExchangeRates(from || baseCurrency);
    const conversionRate = rates[to];
    setResult(amount * conversionRate);
  };

  return (
    <div>
      <h1>Конвертер валют</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="15 USD in RUB"
      />
      <button onClick={handleConvert}>Конвертировать</button>
      {result && <p>Результат: {result}</p>}
    </div>
  );
};

export default CurrencyConverter;
