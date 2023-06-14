var img1 = document.getElementById("gallery_img1");
var img2 = document.getElementById("gallery_img2");
var img3 = document.getElementById("gallery_img3");
var prev1 = document.getElementById("Left1");
var next1 = document.getElementById("Right1");
var prev2 = document.getElementById("Left2");
var next2 = document.getElementById("Right2");
var prev3 = document.getElementById("Left3");
var next3 = document.getElementById("Right3");

var images1 = ["Asteroids.jpg", "asteroids2.png"];
var images2 = ["platformer.jpg", "platformer2.jpg"];
var images3 = ["fps.jpg", "fps2.jpg"];

var currentImage1 = 0;
var currentImage2 = 0;
var currentImage3 = 0;

function changeImage(e)
{
    if(e.target.id == "Left1" || e.target.id == "Right1"){
        if(e.target.id == "Left1" && currentImage1 !== 0)
            {
                currentImage1 = currentImage1 - 1;
            }

            if(e.target.id == "Right1" && currentImage1 !== images1.length - 1)
            {
                currentImage1 = currentImage1 + 1;
            }

        img1.setAttribute("src", images1[currentImage1]);
    }

    if(e.target.id == "Left2" || e.target.id == "Right2"){
        if(e.target.id == "Left2" && currentImage2 !== 0)
            {
                currentImage2 = currentImage2 - 1;
            }

            if(e.target.id == "Right2" && currentImage2 !== images2.length - 1)
            {
                currentImage2 = currentImage2 + 1;
            }

        img2.setAttribute("src", images2[currentImage2]);
    }

    if(e.target.id == "Left3" || e.target.id == "Right3"){
        if(e.target.id == "Left3" && currentImage3 !== 0)
            {
                currentImage3 = currentImage3 - 1;
            }

            if(e.target.id == "Right3" && currentImage3 !== images3.length - 1)
            {
                currentImage3 = currentImage3 + 1;
            }

        img3.setAttribute("src", images3[currentImage3]);
    }
    
}

prev1.addEventListener("click", changeImage);
next1.addEventListener("click", changeImage);
prev2.addEventListener("click", changeImage);
next2.addEventListener("click", changeImage);
prev3.addEventListener("click", changeImage);
next3.addEventListener("click", changeImage);