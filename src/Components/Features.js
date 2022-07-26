import React from 'react'
import QR from './../Assets/QR.jpg'
import calculator from './../Assets/calculator.jpg'
import pdf from './../Assets/pdf.jpg'
import Notes from './../Assets/Notes.jpg'
import './../Styles/Features.css'

const Features = () => {
  return (
    <>
    
    <div style={{backgroundColor:"#f4f4f5"}}>
    <div className="container" style={{paddingTop:"28px",paddingBottom:"40px"}}>
      <div className="container" style={{textAlign:"center",padding:"12px",fontFamily:"cursive"}}>
        <h3> Features </h3>
      </div>
      <div className='row row-cols-1 row-cols-md-4 g-4'>
    <div className="card" style={{backgroundColor:"#f4f4f5",color:"#404040",fontWeight:"500"}} >
    <img src={QR} className="card-img-top" alt="/" style={{height:"370px"}}/>
    <div className="card-body">
        
        <p className="card-text">User can scan and decrypt QR/barcode data or can encrypt his own data in a QR code. </p>
    </div>
    </div>
    <div className="card" style={{backgroundColor:"#f4f4f5",color:"#404040",fontWeight:"500"}}>
    <img src={pdf} className="card-img-top" alt="/" style={{height:"370px"}}/>
    <div className="card-body">
        
        <p className="card-text">User can create,share and save pdf by clicking pictures from his own camera or by precaptured images. </p>
    </div>
    </div>
    <div className="card" style={{backgroundColor:"#f4f4f5",color:"#404040",fontWeight:"500"}}>
    <img src={Notes} className="card-img-top" alt="/" style={{height:"370px"}}/>
    <div className="card-body">
        
        <p className="card-text">One can add/share multiple notes. Also you can add signature using stylus or touch and can save/share it in image format. </p>
    </div>
    </div>
    <div className="card" style={{backgroundColor:"#f4f4f5",color:"#404040",fontWeight:"500"}}>
    <img src={calculator} className="card-img-top" alt="/" style={{height:"370px"}}/>
    <div className="card-body">
      <p className="card-text">Calculator function is also added in the app. It benefits you to do multiple functions at the same time in a single app. </p>
    </div>
    </div>
    </div>
    </div>
    </div>
    
    </>
  )
}

export default Features