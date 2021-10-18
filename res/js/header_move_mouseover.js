$('.img_mouseover').css({'position': 'relative'})

$(document).mouseover(function(e){
    // let moveX = ((window.innerWidth/2+window.innerWidth/3-e.clientX)  / 25)
    // let moveY = ((window.innerHeight/2-e.clientY)  / 25)
    let moveX = ((window.innerWidth/2-e.clientX)  / 15)
    let moveY = ((window.innerHeight/2-e.clientY)  / 15)
    $('.img_mouseover').css({'left' : `${moveX}px`, 'top' : `${moveY}px`})
})