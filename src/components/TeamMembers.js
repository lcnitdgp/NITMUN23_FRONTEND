import React from 'react';
import './TeamMembers.css';
import Cards from './Cards';


function TeamCards() {
    return (
        <div>
        <h1 className="team-title">Meet the Team</h1>
        <div className="grid-container">
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 
    name="Tushar Yadav" 
    jobTitle="Director General" 
    backgroundImage="./assets/tushar.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Epshita Chakravarthy" 
    jobTitle="Secretary General" 
     backgroundImage="./assets/epshitha1.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Pushpal Ghodaskar" 
    jobTitle="Head of the Organising Committee" 
     backgroundImage="./assets/pushpal1.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Diya Sutar" 
    jobTitle="International Press Head" 
     backgroundImage="./assets/diya.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Archit Lall" 
    jobTitle="Director of Commitee Affairs" 
     backgroundImage="./assets/archit.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Sakshi Mishra" 
    jobTitle="Director of Commitee Affairs" 
     backgroundImage="./assets/sakshi2.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Soumik Biswas" 
    jobTitle="Deputy Director General" 
     backgroundImage="./assets/ayush.jpeg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Navneet Berwal" 
    jobTitle="Under Secretary General" 
     backgroundImage="./assets/navneet.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Abhishek Prusty" 
    jobTitle="Under Secretary General" 
     backgroundImage="./assets/abhishek1.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Kshitiz Chadha" 
    jobTitle="Under Secretary General" 
     backgroundImage="./assets/kshitiz.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Rishav Mishra" 
    jobTitle="Editor-in-Chief" 
     backgroundImage="./assets/rishav.jpg"
/>
            <Cards 
    facebookLink="https://facebook.com" 
    instagramLink="https://instagram.com" 

    name="Ayush Raj" 
    jobTitle="Editor-in-Chief" 
     backgroundImage="./assets/ayush.jpg"
/>
             
        </div>
        </div>
    );
}

export default TeamCards;