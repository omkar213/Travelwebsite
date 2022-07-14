import React from "react";
import contectrightimage from './images/contect-image.jpg';

function Contectsection(){
    return(
        <>
            <div className="contect-section">
                <div className="contectwrapper">
                    <div className="contect-left">
                        <div className="contect-form">
                            <h2>Be updated!</h2>
                            <input type="name" className="inner-input" placeholder="First Name"/>
                            <input type="name" className="inner-input" placeholder="Last Name"/>
                            <input type="name" className="inner-input" placeholder="Email Subject"/>
                            <textarea cols="30" rows="5" className="text-massege" placeholder="Write something here..."/>
                            <a href="#" className="submit">Submit Email</a>
                        </div>
                    </div>
                    <div className="contect-right">
                        <div className="contect-right-image">
                            <img src={contectrightimage}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contectsection;