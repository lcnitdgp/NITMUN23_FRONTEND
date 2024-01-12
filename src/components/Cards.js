import React from 'react';
import './Cards.css';

function Cards(props) {
    return (
      <div className="card-container">
    
    <div className="card-wrapper">
      
    <div className="card" style={{backgroundImage: `url(${props.backgroundImage})`}}>
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
        <li>
        <a href={props.twitterLink}>
            <i className="fab fa-twitter"></i>
          </a>
        </li>
        <li>
        <a href={props.dribbbleLink}>
            <i className="fab fa-dribbble"></i>
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
  </div>
  </div>
    );
}

export default Cards;