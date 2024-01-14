import React from 'react';
import './Cards.scss';

function Cards(props) {
    return (
      <>
  <div class="container">    
    
<div class="card-wrapper">
      
      <div class="card profile-two">
        
        <div class="card-image profile-img--two">
          <img src={props.backgroundImage} alt="profile two" />
        </div>

        <ul className="social-icons">
        <li>
        <a href={props.facebookLink}>
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
        <li>
        <a href={props.instagramLink}>
            <i className="fab fa-instagram"></i>
          </a>
        </li>
      </ul>

      <div className="details">
        <h2>{props.name}
          <br/>
          <span className="job-title">{props.jobTitle}</span>
        </h2>
      </div>
    </div>
 </div >
     
 </div> 
  </>
    );
}

export default Cards;