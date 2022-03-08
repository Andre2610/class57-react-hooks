// We will have a number
// We will 2 buttons - + & -
import React, { useState } from 'react';

export default function Counter() {
  const initialState = 0;
  const [banana, potato] = useState(initialState);
  const [like, setLike] = useState(false);

  const increment = () => {
    potato(banana + 1);
  };
  console.log('The new value of like', like);
  return (
    <div>
      <div>
        <button onClick={() => setLike(!like)}>
          {like ? 'Liked' : 'Like'}
        </button>
      </div>
      <div>
        <p>
          <button onClick={() => potato(banana - 1)}>-</button> Our number:{' '}
          {banana} <button onClick={increment}>+</button>
        </p>
        <button onClick={() => potato(initialState)}>Reset</button>
      </div>
    </div>
  );
}
