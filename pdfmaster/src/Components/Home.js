import React from 'react'
import '../css/Home.css'
import bg from '../images/pdf_bg.png'
import phone from '../images/phone_img.png'

const Home = () => {
  return (
    <>
        <div classNameName='main-section'>
            <div className='back-img'>
                <img src={bg} alt="bg-img"></img>             
            </div>
            <div className='right-side'>
                <h1 className='heading'>Discover Now <br/> From Here</h1>

                <h2>
                    <span>EASY  TO</span>
                    <div className="message">
                        <div className="word1">Compress</div>
                        <div className="word2">use</div>
                        <div className="word3">Download</div>
                    </div>
                </h2>
                <div className='button-div'>
                    <button className='btn'> Download</button>
                </div>
            </div>
            <div className='left-side'>
                <img src={phone} alt="bg-img"></img>
            </div>





            
            
        </div>
        
    </>
  )
}

export default Home