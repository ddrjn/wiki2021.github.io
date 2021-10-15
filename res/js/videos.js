let video = document.getElementById("videoElem")
let switch_buttons = document.getElementsByClassName('video-switch')
let source = document.getElementById('videoSrc')

let video_names = [
    "res/videos/Resveratrol.mp4", 
    "res/videos/interstellar.mp4"
]

$('.video-switch').click(function() {
    
    // $(this).addClass('active')
    video.pause()
    let order = parseInt($(this).data('video'))
    let src = video_names[order]
    source.setAttribute('src', src)
    video.appendChild(source)
    video.load()
    video.play()
})

for (let i=0; i < switch_buttons.length; i++) {

}





// console.log(switch_buttons)

// for (let i = 0; i < switch_buttons.length; i++) {
    
//     switch_buttons[i].addEventListener('click', function() {
//         console.log('CLIKED')
//         video.pause()
//         source.setAttribute('src', `res/videos/${video_names[i]}`)
//         video.appendChild(source)
//         video.load()
//         video.play()
//     })
// }

