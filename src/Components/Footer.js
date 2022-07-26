import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillChrome} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {FaGooglePlay} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'
import {AiOutlineCopyrightCircle} from 'react-icons/ai'
import developer from './../Assets/developer.jpg'
import './../Styles/Footer.css'

const Footer = () => {
  return (
  <>
    <div style={{backgroundColor:"#f4f4f5"}}>
      <div className="container" style={{paddingTop:"28px",paddingBottom:"28px"}}>
        <div className='row row-cols-1 row-cols-md-3'>
          <div className='' style={{fontFamily:"serif",fontWeight:"500",marginLeft:"auto",marginRight:"auto"}}>
            <h2 > pdf <span style={{color:"#f472b6"}}> Master </span></h2>
            <div style={{fontFamily:"sans-serif"}}>
             <b><p className='text'> It is a free app by vocalslocal. Benefits you to do multiple functions at the same time in one app.  </p></b> 
            </div>
          </div>
          <div className="card" style={{backgroundColor:"#f4f4f5",color:"#404040",fontWeight:"500",height:"220px"}} >
            <img src={developer} className="card-img-top" alt="/" style={{height:"170px"}}/>
            <div className="card-body" style={{textAlign:"center"}}>
              <p className="card-text" > Developer: Om Jadhav </p>
              
            </div>
         </div>
         <div style={{padding:"35px",marginTop:"15px",textAlign:"center"}}>
          <div style={{fontWeight:"500"}}>
          <p>No ads. We don't collect any data
               We respect your privacy.</p>
               <p> Find us on:-</p>
               </div>
         <a href='https://m.facebook.com/Vocalslocal/' target='_blank' rel="noreferrer"> <BsFacebook size={25} style={{margin:"5px"}}/> </a>
         <a href='https://instagram.com/vocals_local?igshid=YmMyMTA2M2Y=' target='_blank' rel="noreferrer"> <BsInstagram size={25} style={{margin:"5px"}} /></a>
         <a href='https://vocalslocal.in/' target='_blank' rel="noreferrer"> <AiFillChrome size={25} style={{margin:"5px"}} /></a>
         <a href='https://youtube.com/channel/UCCaHc1oRU7SMQgfaYpkeb9w' target='_blank' rel="noreferrer"> <BsYoutube size={25} style={{margin:"5px"}}/></a>
         <a href='https://play.google.com/store/apps/details?id=com.vocalslocal.pdf_master' rel="noreferrer" target='_blank'> <FaGooglePlay size={25} style={{margin:"5px"}} /></a>
         <a href='mailto:vocalslocalofficial@gmail.com' target='_blank' rel="noreferrer"> <AiOutlineMail size={25} style={{margin:"5px"}}/></a>
         </div>
        </div>  
      </div>
      <hr/>
      <div className='container' style={{textAlign:"center"}}>
        <AiOutlineCopyrightCircle/> Vocalslocal-2022<br/>
        <p> All rights reserved | T&C | <span> <a href='https://github.com/omjadhav3714/privacy-policy/blob/main/privacy-policy.md' target='_blank' rel="noreferrer">Privacy Policy </a></span></p>

      </div>
    </div>
    </>
  )
}

export default Footer