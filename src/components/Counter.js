// We will have a number
// We will 2 buttons - + & -
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Counter() {
  const initialState = 0;
  const [counter, setCounter] = useState(initialState);
  const [like, setLike] = useState(false);

  const increment = () => {
    setCounter(counter + 1);
  };
  // console.log('The new value of like', like);
  useEffect(() => {
    console.log('Inside the useEffect');
    setCounter(counter + 1);
  }, []);

  console.log('Outside the useEffect');

  return (
    <div>
      <div>
        <button onClick={() => setLike(!like)}>
          {like ? 'Liked' : 'Like'}
        </button>
      </div>
      <div>
        <p>
          <button onClick={() => setCounter(counter - 1)}>-</button> Our number:{' '}
          {counter} <button onClick={increment}>+</button>
        </p>
        <button onClick={() => setCounter(initialState)}>Reset</button>
      </div>
    </div>
  );
}
