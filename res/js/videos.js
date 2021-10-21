// let videoElem =  document.getElementById("videoBlyat")
// let sourceElem = document.getElementById("video_source")
let iframe = document.getElementById("videoBlyat");
let all_videos = {
    "videos": [
        {
            "name": "Resveratrol",
            "thumbnail": "res/img/education_kolbi.svg",
            "source": "res/videos/resveratrol.mp4"
        },

        {
            "name": "Interstellar",
            "thumbnail": "res/img/education_kolbi.svg",
            "source": "res/videos/interstellar.mp4"
        },

        {
            "name": "Korabli",
            "thumbnail": "res/img/education_kolbi.svg",
            "source": "https://mdbootstrap.com/img/video/Sail-Away.mp4"
        },

        {
            "name": "Korabli",
            "thumbnail": "res/img/education_kolbi.svg",
            "source": "https://video.igem.org/static/streaming-playlists/hls/83c20668-f551-48f9-8eb0-726086d111b5/4b67afcc-a587-4ec0-93b2-142f615aec0f-1080-fragmented.mp4"
        },
        
        {
            "name": "IFRAME",
            "thumbnail": "res/img/education_kolbi.svg",
            "source": "https://video.igem.org/videos/embed/83c20668-f551-48f9-8eb0-726086d111b5"
        }

    ]
}

let videos = all_videos.videos

// Filling thumbnails depending on how much videos
let output = "";   
for (let i in videos) {
    output += `<div class="thumbnail" data-source=${videos[i].source}>`
            +    `<img src=${videos[i].thumbnail} alt="" id="thumbnail">`
            +    `<div class="thumbnail__text t-sss"> <p>${videos[i].name} </p></div>`
            + "</div>";
}
$('.video-menu').html(output)


// Switching video functionality
// $('.thumbnail').click(function(){
//     let src = $(this).data('source')
//     sourceElem.setAttribute('src', src)
//     videoElem.load()
// })

// For iframes !!
$('.thumbnail').click(function(){
    let src = $(this).data('source')
    iframe.setAttribute('src', src)
    // videoElem.load()
})










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

