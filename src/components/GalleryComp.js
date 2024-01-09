import React from "react";
import "./GalleryComp.css";

function GalleryComp () {
    return(
        <>
        <div class="gallery-body">
            <div class="gallery-header">
                <h1>Gallery</h1>
                </div>
        <div class="gallery">
	<div class="column">
		<img src="https://source.unsplash.com/random/800x600/?jungle"/> 
		<img src="https://source.unsplash.com/random/600x800/?mountain"/> 
		<img src="https://source.unsplash.com/random/800x600/?beach"/> 
		<img src="https://source.unsplash.com/random/600x800/?forest"/> 
		<img src="https://source.unsplash.com/random/800x600/?desert"/>  
		<img src="https://source.unsplash.com/random/600x800/?pond"/>  
	</div>
	<div class="column">
		<img src="https://source.unsplash.com/random/600x800/?bicycle"/> 
		<img src="https://source.unsplash.com/random/800x600/?airballon"/> 
		<img src="https://source.unsplash.com/random/600x800/?skate"/> 
		<img src="https://source.unsplash.com/random/800x600/?scooter"/>  
		<img src="https://source.unsplash.com/random/600x800/?moto"/> 
		<img src="https://source.unsplash.com/random/800x600/?car"/> 
	</div>
	<div class="column">
		<img src="https://source.unsplash.com/random/800x600/?lemonade"/>  
		<img src="https://source.unsplash.com/random/600x800/?coffee"/> 
		<img src="https://source.unsplash.com/random/800x600/?water"/> 
		<img src="https://source.unsplash.com/random/600x800/?wine"/> 
		<img src="https://source.unsplash.com/random/800x600/?juice"/>
		<img src="https://source.unsplash.com/random/600x800/?beer"/>  
	</div>
	<div class="column">
		<img src="https://source.unsplash.com/random/600x800/?office"/> 
		<img src="https://source.unsplash.com/random/800x600/?bar"/> 
		<img src="https://source.unsplash.com/random/600x800/?garage"/>  
		<img src="https://source.unsplash.com/random/800x600/?house"/> 
		<img src="https://source.unsplash.com/random/600x800/?camping"/>  
		<img src="https://source.unsplash.com/random/800x600/?store"/> 
	</div>
</div>
</div>
        </>
    )
}

export default GalleryComp;