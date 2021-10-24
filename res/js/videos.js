let videoElem =  document.getElementById("videoBlyat")
let sourceElem = document.getElementById("video_source")

let all_videos = {
    "videos": [
        {
            "name": "Time-lapse video",
            "thumbnail": " https://2021.igem.org/File:T--ESTONIA_TUIT--timelapseThumbnail.png",
            "source": "https://2021.igem.org/wiki/images/c/cf/T--Estonia_TUIT--timelapsefull.mp4"
        },

        {
            "name": "Wiki Tok",
            "thumbnail": "https://2021.igem.org/wiki/images/c/c7/T--ESTONIA_TUIT--WikiTokThumb.png",
            "source": "https://2021.igem.org/wiki/images/3/34/T--Estonia_TUIT--Tiktok2.MOV"
        },

        {
            "name": "IGEM Lab Olympics Video",
            "thumbnail": "https://2021.igem.org/wiki/images/a/ad/T--ESTONIA_TUIT--OlympicsThumb.png",
            "source": "https://2021.igem.org/wiki/images/c/cc/T--Estonia_TUIT--Lab_Olympics_Video1.mp4"
        },
        {
            "name": "IGEM Lab Olympics Video 2",
            "thumbnail": "https://2021.igem.org/wiki/images/a/ad/T--ESTONIA_TUIT--OlympicsThumb.png",
            "source": "https://2021.igem.org/wiki/images/5/5b/T--Estonia_TUIT--Lab_Olympics_Video2.mp4"
        },
        {
            "name": "IGEM Lab Olympics Video 3",
            "thumbnail": "https://2021.igem.org/wiki/images/a/ad/T--ESTONIA_TUIT--OlympicsThumb.png",
            "source": "https://2021.igem.org/wiki/images/c/cc/T--Estonia_TUIT--Lab_Olympics_Video3.mp4"
        },
        {
            "name": "IGEM Lab Olympics Video 4",
            "thumbnail": "https://2021.igem.org/wiki/images/a/ad/T--ESTONIA_TUIT--OlympicsThumb.png",
            "source": "https://2021.igem.org/wiki/images/c/cc/T--Estonia_TUIT--Lab_Olympics_Video4.mp4"
        },

        {
            "name": "iJet Challenge Video",
            "thumbnail": "https://2021.igem.org/wiki/images/d/da/T--ESTONIA_TUIT--iJetThumb.png",
            "source": "https://2021.igem.org/wiki/images/b/b6/T--Estonia_TUIT--iJET.mp4"
            
        },
        {
            "name": "1 Minute Video",
            "thumbnail": "https://2021.igem.org/wiki/images/6/67/T--ESTONIA_TUIT--1minvidThumb.png",
            "source": "https://2021.igem.org/wiki/images/8/87/T--Estonia_TUIT--1_Minute_Video.mp4"
            
        },
        {
            "name": "IGEMers on TikTok Video",
            "thumbnail": "https://2021.igem.org/wiki/images/6/62/T--ESTONIA_TUIT--igemersontiktokThumb.png",
            "source": "https://2021.igem.org/wiki/images/2/24/T--Estonia_TUIT--iGemers_on_tiktok.MOV"
            
        },
        {
            "name": "Dragon’s Biome Video",
            "thumbnail": "https://2021.igem.org/wiki/images/d/da/T--ESTONIA_TUIT--iJetThumb.png",
            "source": "https://2021.igem.org/wiki/images/b/b6/T--Estonia_TUIT--iJET.mp4"
            
        },
        {
            "name": "Promotional Video",
            "thumbnail": "https://2021.igem.org/wiki/images/2/2f/T--ESTONIA_TUIT--VideoPromoThumb.png",
            "source": "https://video.igem.org/videos/embed/1bb9ed21-0bac-448e-b623-d24c8d6a5d77"
            
        },

        

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
$('.thumbnail').click(function(){
    let src = $(this).data('source')
    sourceElem.setAttribute('src', src)
    videoElem.load()
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

