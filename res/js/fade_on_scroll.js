$(window).on("load", function(){


    $(window).scroll(function(){
        let windowTop = $(window).scrollTop()
        // let windowTop = $(this).scrollTop() - $(this).innerHeight()
        let windowBottom = $(this).scrollTop() + $(this).innerHeight()
        $('.fade_from_left').each(function(){
            let objectBottom = $(this).offset().top + $(this).outerHeight()
            let objectTop = $(this).offset().top
            
            // If object in window bound == we can see it
            if (objectBottom < windowBottom) {
                if ($(this).css("opacity") == 0) {
                    $(this).fadeIn(500).animate({opacity: '1', right: '0'})
                } 
            }
            // } else if (objectTop < windowTop) {
            //     $(this).fadeIn(500).animate({opacity: '1', right: '0'})
            // }
            if (windowTop >= objectBottom) {
                // console.log(`windowTop: ${windowTop}, objectTop: ${objectBottom}`)
                console.log("objectBottom above windowTop")
                // if ($(this).css("opacity") == 1) {
                //     $(this).css({opacity: '0', right: '20%'})
                //     // $(this).fadeIn(500).animate({opacity: '1', right: '0'})
                // } 
            } else {
                console.log("objectBottom under windowBottom")
                // $(this).fadeIn(500).animate({opacity: '0', right: '20%'})
            }
        })
    }).scroll()
})



    // $(window).scroll(function(){
    //     let windowBottom = $(this).scrollTop() + $(this).innerHeight()
    //     $('.fade_on_scroll').each(function(){
    //         let objectBottom = $(this).offset().top + $(this).outerHeight()

    //         // If object in window bound == we can see it
    //         if (objectBottom < windowBottom) {
    //             if ($(this).css("opacity") == 0) {
    //                 $(this).fadeTo(500,1)
    //             }
    //         } else {
    //             if ($(this).css("opacity") == 1) {
    //                 $(this).fadeTo(500, 0)
    //             }
    //         }
    //     })
    // }).scroll()