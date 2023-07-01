import React, { useState } from 'react'
import useDebounce from './useDebounce';

const DebounceComponent = () => {
  /*
     We continously click on Increment and when we stop clicking it, after a sec, it calls api.
  */
  const [clicking, setClicking] = useState(10);  
  useDebounce(() => alert(`call the api`), 1000, [clicking]);

  return (
    <div>
      <div>{clicking}</div>
      <button onClick={() => setClicking(c => c + 1)}> Increment </button>
    </div>
  )
}

export default DebounceComponent
