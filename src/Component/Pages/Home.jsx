import React from 'react'
import img from '../../images/banner-right.jpg'
import travel from '../../images/travel-men.jpg'

const Home = () => {
  return (
    <>
      <section className='Banner w-100 h-100'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <div className='Banner-left'>
              <h1>Travel to
                your dream
                destination</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis modi facilis, sit voluptates ipsum, repudiandae pariatur eligendi corporis reiciendis corrupti quam tempora vitae excepturi? Molestias nostrum id nesciunt maiores!</p>
              <div className='book-ticket'>
                <button className=' btn btn-primary'>Reserve Ticket</button>
              </div>
            </div>
            <div className="Banner-right">
              <img src={img} alt="banner" />
            </div>
          </div>
        </div>
      </section>
      {/* Memory section  */}
      <section className='memory d-flex align-items-center justify-content-center m-auto text-center'>
        <div className='container'>
          <div className='memory-content'>
            <h1>Create a memory
              to remember</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit possimus ipsam pariatur, eaque voluptatum tempore aut deserunt voluptate error ratione ullam ad commodi dolor non quasi libero molestiae temporibus? Atque!</p>
            <div className='memory-btn'>
              <button className='btn btn-primary'>My Travel Logs</button>
            </div>
          </div>
        </div>
      </section>
      {/* Choose Anywhere you have never been  section */}
      <section className='choose-anywhere w-100'>
        <div className='container'>
          <div className='d-flex justify-content-between'>
            <div className='Choose-left'>
              <h1>Choose anywhere
                you’d like to be</h1>
              <div className='Choose-content'>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis modi facilis, sit voluptates ipsum, repudiandae pariatur eligendi corporis reiciendis corrupti quam tempora vitae excepturi? Molestias nostrum id nesciunt maiores!</p>
                <h3>Lorem ipsum dolor</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio debitis modi facilis, sit voluptates ipsum, repudiandae pariatur eligendi corporis reiciendis corrupti quam tempora vitae excepturi? Molestias nostrum id nesciunt maiores!</p>
              </div>
            </div>
            <div className="Choose-right">
              <img src={travel} alt="img" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home