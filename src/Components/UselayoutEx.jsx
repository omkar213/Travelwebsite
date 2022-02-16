import React, { useLayoutEffect, useState} from 'react'

const UselayoutEx = () => {

  const [value , setValue] = useState(0);
	useLayoutEffect(()=>{
		setValue(value)
	}, [value])
  return (
    <>
		  <div>
			    <h1>The Current value is {value}</h1>
					<button onClick={() => setValue(value => value + 1)}>Update Count</button>	
			</div> 
		</>
  )
}

export default UselayoutEx