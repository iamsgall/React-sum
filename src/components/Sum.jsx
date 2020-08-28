import React, {useState} from 'react';

export default function Sum() {
  let [number, setNumber] = useState(0);
  let [sum, setSum] = useState(0);

  const handleChange = e => {
    setNumber(e.target.value);
  };

  const handleSumbit = e => {
    setSum((sum += parseInt(number)));
    setNumber((number = 0));
    e.preventDefault();
  };

  const cleanSum = () => {
    setNumber((number = 0));
    setSum((sum = 0));
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
        <input
          type='text'
          placeholder='Some number...'
          onChange={handleChange}
          value={number}
          id='number'
        />
        <input type='submit' />
        <p>Sum is: {sum}</p>
      </form>
      <button onClick={cleanSum}>Clean Sum</button>
    </div>
  );
}
