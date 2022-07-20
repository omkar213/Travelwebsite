import React from 'react'
import JsonData from './data.json'
import { useState } from 'react'
import './Accordion.css'

const Accordion = () => {
  const [selected, setSelected] = useState(null)

  const toggle = i => {
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  return (
    <>
      <div className='container'>
        <div className='wrapper'>
          <div className='accordion'>
            {JsonData.Accordion.map((d, i) => (
              <>
              <div className='accordion-body'>
                <div className='item' onClick={() => toggle(i)}>
                  <h2>{d.title}</h2>
                  <span>{selected === i ? '➖' : '➕'}</span>
                </div>
                <div className={selected === i ? 'content-show ' : 'content'}>
                  <p>
                    {d.details}
                  </p>
                </div>
              </div>
              </>
            ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Accordion