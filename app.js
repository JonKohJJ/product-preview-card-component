
// hide desktop image first
var desktopImage = document.getElementsByClassName('desktop-image')[0];
desktopImage.classList.add("hide");
var mobileImage = document.getElementsByClassName('mobile-image')[0];

// display the right image depending on the screen width
function windowsResized(){
    if (window.innerWidth > 991){
        console.log("display desktop image");

        if (desktopImage.classList.contains("hide")){
            desktopImage.classList.remove("hide");
            mobileImage.classList.add("hide");
        }

    }else{
        desktopImage.classList.add("hide");
        mobileImage.classList.remove("hide");
    }
}
windowsResized();

window.addEventListener('resize', function(){
    windowsResized();
})
