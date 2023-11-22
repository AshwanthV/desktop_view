document.querySelector('.logo').addEventListener('click',function(){
    if(this.style.animationPlayState == "paused") {
        console.log("running anubis");
        this.style.animationPlayState = "running";
    }
    else {
        console.log("pausing anubis");
        this.style.animationPlayState = "paused";
    }
});