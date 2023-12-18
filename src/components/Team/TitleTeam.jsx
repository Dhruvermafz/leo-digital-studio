import React from 'react'
import team from "../../assets/images/mark/mark-inner-page.jpg"

const TitleTeam = () => {
  return (
    <section className="flat-title-page inner">
    <div className="container">
        <div className="row">
            <div className="col-xl-5 col-lg-5 col-md-7">
                <div className="page-title-heading">   
                    <div className="heading-inner">
                        <div className="heading"><span>Team Member</span> </div>
                        <div className="title-inner link-style-7">
                            <h5 className="font-2"><a className="home" href="index.html">Home</a><span>Team Member</span></h5>
                        </div>
                    </div>                     
                </div>                        
            </div>
            <div className="col-xl-7 col-lg-7 col-md-5">
                   <div className="images">
                        <img className="img-item animate-new" src={team} alt=""/>
                   </div>                   
            </div>
        </div>
    </div>                    
</section> 
  )
}

export default TitleTeam
