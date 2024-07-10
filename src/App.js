import React, { useState, useMemo } from 'react';

const factorial = (n) => {
  if (n < 0) return -1;
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

const App = () => {
  const [number, setNumber] = useState(0);

  const factorialResult = useMemo(() => factorial(number), [number]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Calculadora de Fatorial</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
        min="0"
      />
      <h2>Fatorial de {number} é: {factorialResult}</h2>
    </div>
  );
};

export default App;
