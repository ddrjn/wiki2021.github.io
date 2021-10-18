let centerX = window.innerWidth/2
let back_left = document.getElementsByClassName('left')[0]
let back_right = document.getElementsByClassName('right')[0]


// $('.back-bacteria').css('background-position', `${window.innerWidth/75}px 0px`) 

$('.section-grad-parts').mousemove(function(e){
    // console.log(e.pageX, e.pageY)
    // let back = $('.back-bacteria').position()
    // if (e.clientX > centerX) {
    //     let moveX = (e.clientX*-1  / 25)
    //     let moveY = (e.clientY*-1  / 25)
    //     // $('.back-bacteria') .css('background-position', `${moveX}px ${moveY}px`)
    // } else if (e.clientX < centerX) {
    //     let moveX = (e.clientX  / 25)
    //     let moveY = (e.clientY  / 25)
    //     // $('.back-bacteria') .css('background-position', `${moveX}px ${moveY}px`)
    // }

    let moveX = ((window.innerWidth/2+window.innerWidth/3-e.clientX)  / 25)
    let moveY = ((window.innerHeight/2-e.clientY)  / 25)

    $('.back-bacteria').css('background-position', `${moveX}px ${moveY}px`)  

    // console.log(`CLient: ${e.clientX}, ${e.clientY}`)
    // console.log(`Move POS: ${moveX}, ${moveY}`)
    // console.log(`center: ${centerX}, ${back_right.style.backgroundPosition}`)
    // let rect = $(this).getBoundingClientRect()
    // console.log(e.pageX, e.pageY)
    // console.log(moveX, moveY)
    
})



// $(document).ready(function(){
//     let pixelToMove = 50

//     $('.section-grad-parts').mousemove(function(e){
//         let width = $(this).innerWidth
//         let height = $(this).innerHeight
        




//     })
// })