import React from 'react'

const Vid = () => {
  return (
    <div style={{backgroundColor:"#fdf2f8"}}>
    <div className="container" style={{paddingTop:"100px",paddingBottom:"100px"}}>
      <div style={{textAlign:"center",padding:"40px",fontFamily:"cursive"}}>
        <h3> How it Works</h3>
      </div>
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
      <iframe src="https://www.youtube.com/embed/bixv_VwFsww" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
      </div>
      </div>
      </div>
  )
}

export default Vid