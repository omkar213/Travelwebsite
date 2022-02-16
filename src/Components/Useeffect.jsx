import React, { useEffect, useState } from 'react'

const Useeffect = () => {

  const [value, setValue] = useState(0);
  useEffect(() => {
    setValue(value)
  }, [value])
  return (
    <>
      <div>
        <h1>The Current value is {value}</h1>
        <button onClick={() => setValue(value => value + 1) }>Update Count</button>
        
      </div>
    </>
  )
}

export default Useeffect