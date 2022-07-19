import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {AiFillChrome} from 'react-icons/ai'
import {BsYoutube} from 'react-icons/bs'
import {FaGooglePlay} from 'react-icons/fa'
import {AiOutlineMail} from 'react-icons/ai'

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
              {/* <p>No ads. We don't collect any data
               We respect your privacy.</p> */}
          </div>
          <div className="card" style={{backgroundColor:"#f4f4f5",color:"#404040",fontWeight:"500",height:"200px"}} >
            <img src=".." className="card-img-top" alt="/" style={{height:"70px"}}/>
            <div className="card-body" style={{textAlign:"center"}}>
              <p className="card-text" > Om Jadhav </p>
            </div>
         </div>
         <div>
          <BsFacebook   />
          <BsInstagram  />
          <AiFillChrome />
          <BsYoutube    />
          <FaGooglePlay />
          <AiOutlineMail />
         </div>
        </div>  
      </div>
    </div>
    </>
  )
}

export default Footer