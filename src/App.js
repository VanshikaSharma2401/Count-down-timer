import React, { useState } from 'react';
import InputForm from './Components/InputForm';
import CountdownDisplay from './Components/CountdownDisplay';
import './App.css';

const App = () => {
  const [targetDate, setTargetDate] = useState(null);

  return (
    <div className="App">
      <InputForm setTargetDate={setTargetDate} />
      {targetDate && <CountdownDisplay targetDate={targetDate} />}
    </div>
  );
};

export default App;
