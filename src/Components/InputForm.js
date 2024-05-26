import React, { useState } from 'react';

const InputForm = ({ setTargetDate }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const target = new Date(`${date}T${time}`);
    setTargetDate(target);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="date" 
        value={date} 
        onChange={(e) => setDate(e.target.value)} 
        required 
      />
      <input 
        type="time" 
        value={time} 
        onChange={(e) => setTime(e.target.value)} 
        required 
      />
      <button type="submit">Start Timer</button>
    </form>
  );
};

export default InputForm;
