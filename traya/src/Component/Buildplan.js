import React ,{useState} from 'react'
import img1 from '../images/buildyourplan.png';
import {Button} from './RoundStyles'
const Buildplan = () => {
    const letter=["Ayurveda","Nutrition","Dermatology"]
    
    const disp=letter.map((l)=>{
        console.log(l)
        return(
            
               setInterval(()=>
                <h2 className='text-green'>{l}</h2>
                
               , 1000) 
    )
         } )
        
  return (
    <>
    

      <div className="container-fluid border-0 card text-center mb-3 img-fluid" style={{width: "600px",height:"400px"}}>
  <div className="card-body">
    <h1 className="card-title"><h2 className='container text-center '>{disp} Doctors<br></br>Build Your Plan</h2></h1>
    <p className="card-text">
    <img  src={img1} className="card-img-top" alt="Card cap"/>
    <div className="card-img-overlay">
    <div className='row container'>
        <div className='col  p-4 m-0'>
        <h4 className="mt-4 mt-md-0 col-md-5 text-center text-md-left px-0 d-flex flex-row"><p className="">We are not just doctor backed, <br></br>we are doctor recommended.</p></h4>
            </div>
    </div>
    </div>
    </p>
    <br></br><br></br>
    <span className='container ml-4 align-items-center text-center mb-9 mt-3 ml-7 mr-9 object-fit-cover pb-5 mb-3'>
                        <Button className='btn btn-lg btn-secondary btn-round text-center  ' style={{width: "18rem;",height:"10000px;"}}>TAKE THE HAIR TEST<sup style={{fontSize:"10px"}}>TM</sup></Button>
                        </span>
    <br>
    </br>
    <br></br>
						</div>
                        </div>
                        
    </>
  )
}

export default Buildplan
