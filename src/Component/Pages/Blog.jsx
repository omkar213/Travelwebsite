import React from 'react'
import blog1 from '../../images/blog1.jpg'
import blog2 from '../../images/blog2.jpg'
import travel1 from '../../images/travel1.jpg'
import travel2 from '../../images/travel2.jpg'
import travel3 from '../../images/travel-men.jpg'

const Blog = () => {
    return (
        <>
            <section className='Blog w-100'>
                <div className='container'>
                    <div className='Blog-content d-flex flex-column justify-content-center align-items-center'>
                        <div className='icon'>
                            <i class="fa-solid fa-plane-up"></i>
                        </div>
                        <h1 className=''>See places you’v<br />e<u>never</u> been before</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur.</p>
                    </div>
                    <div className=' d-flex justify-content-between gap-5'>
                        <div className='blog-left d-flex'>
                            <img className=' w-100' src={blog1} alt="blog1" />
                        </div>
                        <div className='blog-right'>
                            <img className='w-100' src={blog2} alt="blog2" />
                            <div className='blog-right-content d-flex'>
                                <div>
                                    <h1><u>
                                        Lorem ipsum
                                        dolor sit amet
                                        consectetur
                                        adipiscing elit
                                        sed do ei
                                    </u></h1>
                                </div>
                                <div className=''>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci molestias sequi! Non quibusdam perferendis reprehenderit saepe eum voluptas nihil. Veniam laboriosam delectus optio sint iusto quis, tempora magni veritatis!</p>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab adipisci molestias sequi! Non quibusdam perferendis reprehenderit saepe eum voluptas nihil. Veniam laboriosam delectus optio sint iusto quis, tempora magni veritatis!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='travel'>
                <div className='container'>
                    <div className=' d-flex justify-content-between align-items-center'>
                        <div className='box'>
                            <img src={travel1} alt="" />
                            <div className='box-content'>
                                <h1>Lorem ipsum, dolor sit </h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor enim corrupti, optio, neque nulla, aut assumenda distinctio exercitationem maiores incidunt quidem esse.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img src={travel2} alt="" />
                            <div className='box-content'>
                                <h1>Lorem ipsum, dolor sit </h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor enim corrupti, optio, neque nulla, aut assumenda distinctio exercitationem maiores incidunt quidem esse.</p>
                            </div>
                        </div>
                        <div className='box'>
                            <img src={travel3} alt="" />
                            <div className='box-content'>
                                <h1>Lorem ipsum, dolor sit </h1>
                                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor enim corrupti, optio, neque nulla, aut assumenda distinctio exercitationem maiores incidunt quidem esse.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog