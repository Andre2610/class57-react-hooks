import { useState } from 'react';

export default function Planet(props) {
  const [planets, setPlanets] = useState(props.data);
  console.log('My props', props);
  return (
    <div>
      {planets &&
        planets.map((planet, index) => {
          return <p key={index}>{planet.name}</p>;
        })}
      <button onClick={() => setPlanets(null)}>
        {planets ? 'Hide Planets' : 'Show Planets'}
      </button>
    </div>
  );
}
