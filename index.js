function $(x){
    return document.getElementById(x)
}

// UP DOWN ROTATION

window.addEventListener('deviceorientation', function(event) {
    x = Math.floor(event.gamma)
    y = Math.floor(event.beta)

    if (x <= -76 && x >= -91 || x >= 75 && x <= 91){
        $('images').classList.remove('teammate')
        $('images').classList.remove('confidant')
        $('images').classList.add('careworker')
    }
    else if ( x <= -1 && x >= -75  ){
        $('images').classList.remove('teammate')
        $('images').classList.remove('careworker')
        $('images').classList.add('confidant')
    }
    else{
        $('images').classList.remove('careworker')
        $('images').classList.remove('confidant')
        $('images').classList.add('teammate')

    }
  });




