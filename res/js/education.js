


// function getModalCoordMap(SVGCirleElems, peModalElems) {
//     let modalCoordMap = []
//     for (let i = 0; i < SVGCirleElems.length; i++) {
//         // Check if number of Circles corresponds to number of divs for them
//         if (peModalElems.length < i+1) {
//             break
//         }
//         // console.log(`modal: ${peModalElems[i]}`)
//         let cvg_circle_y = SVGCirleElems[i].getBoundingClientRect().y
//         console.log(`Circle Y: ${cvg_circle_y}`)
    
//         let modalCoord_obj = {"obj":peModalElems[i], "y": cvg_circle_y/2.27}
//         modalCoordMap.push(modalCoord_obj)
    
//     }
//     return modalCoordMap
// }



// // Circles
// let circle_julygem = document.getElementById("testCircle")
// let circle_paide = document.getElementById("circlePaide")
// let circle_narva_14 = document.getElementById("circleNarva14")
// let circle_voru = document.getElementById("circleVoru")
// let circle_narva_28 = document.getElementById("circleNarva28")
// let circle_tartu = document.getElementById("circleTartu")
// let circle_dragon = document.getElementById("circleDragon")
// let circle_ahha = document.getElementById("circleAHHA")
// let circle_global = document.getElementById("circleGlobal")
// let circle_escape = document.getElementById("circleEscape")

// // Modals
// let pe_julygem = $("#peJulyGEM")
// let pe_paide = $("#pePaide")
// let pe_narva_14 = $("#peNarva14")
// let pe_voru = $("#peVoru")
// let pe_narva_28 = $("#peNarva28")
// let pe_tartu = $("#peTartu")
// let pe_dragon = $("#peDragon")
// let pe_ahha = $("#peAHHA")
// let pe_global = $("#peGlobal")
// let pe_escape = $("#peEscape")



var a = document.getElementById("circle1").offsetTop;
document.getElementById("workshop1").style.position="absolute;"
document.getElementById("workshop1").style.top = `${a}px;`;

// Я ЭТО ПЕРЕПИШУ, ПОТОМУ ЧТО БЛЯТЬ У МЕНЯ ГЛАЗА СЛЕЗЯТЬСЯ ОТ ТАКОГО

// $(window).on('scroll', () => {
//     let jg_coords = [circle_julygem.getBoundingClientRect().x, circle_julygem.getBoundingClientRect().y]
//     let paide_coords = [circle_paide.getBoundingClientRect().x, circle_paide.getBoundingClientRect().y]
//     let narva_14_coords = [circle_narva_14.getBoundingClientRect().x, circle_narva_14.getBoundingClientRect().y]
//     let circle_voru_coords = [circle_voru.getBoundingClientRect().x, circle_voru.getBoundingClientRect().y]
//     let circle_narva_28_coords = [circle_narva_28.getBoundingClientRect().x, circle_narva_28.getBoundingClientRect().y]
//     let circle_tartu_coords = [circle_tartu.getBoundingClientRect().x, circle_tartu.getBoundingClientRect().y]
//     let circle_dragon_coords = [circle_dragon.getBoundingClientRect().x, circle_dragon.getBoundingClientRect().y]
//     let circle_ahha_coords = [circle_ahha.getBoundingClientRect().x, circle_ahha.getBoundingClientRect().y]
//     let circle_global_coords = [circle_global.getBoundingClientRect().x, circle_global.getBoundingClientRect().y]
//     let circle_escape_coords = [circle_escape.getBoundingClientRect().x, circle_escape.getBoundingClientRect().y]

//     // let SVGCirleElems = document.getElementsByClassName('modal-circle')
//     // let peModalElems = document.getElementsByClassName('pe-modal') 
//     // let modalCoordMap = getModalCoordMap(SVGCirleElems, peModalElems)
//     // for (let i = 0; i < modalCoordMap.length; i++) {
//     //     modalCoordMap[i].obj.style.top = `${modalCoordMap[i].y}px`
//     // }

//     //  ~ 200*i + 200 + i*50 
//     pe_julygem.css('top', `${jg_coords[1]/10 + 200}px`)
//     pe_paide.css('top', `${paide_coords[1]/10 + 550}px`)
//     pe_narva_14.css('top', `${narva_14_coords[1]/10 + 1100}px`)
//     pe_voru.css('top', `${circle_voru_coords[1]/10 + 1400}px`)
//     pe_narva_28.css('top', `${circle_narva_28_coords[1]/10 + 1950}px`)
//     pe_tartu.css('top', `${circle_tartu_coords[1]/10 + 2250}px`)
//     pe_dragon.css('top', `${circle_dragon_coords[1]/10 + 2800}px`)
//     pe_ahha.css('top', `${circle_ahha_coords[1]/10 + 3060}px`)
//     pe_global.css('top', `${circle_global_coords[1]/10 + 3750}px`)
//     pe_escape.css('top', `${circle_escape_coords[1]/10 + 4000}px`)

//     // pe_julygem.css('left', `${x}px`)
//     // $("#peJulyGEM").offset({top: circle_coods[1]/2.27, left:circle_coods[0]})
    
//     // let currentScrollPos = document.documentElement.scrollTop || document.body.scrollTop
//     // console.log(`ScrollTop Pos: ${currentScrollPos}`)
//     // console.log(`SVG BCR: ${jg_coords}, (${jg_coords[1]/2.27})`)
//     // console.log(`JULYGEM Pos: ${pe_julygem.position().top}, ${pe_julygem.position().left}`)
//     // console.log(`SVG BCR: ${paide_coords}, (${paide_coords[1]/2.27})`)
//     // console.log(`PAIDE Pos: ${pe_paide.position().top}, ${pe_paide.position().left}`)
//     // console.log("OFFSET:", pe_julygem.offset())
// })



// $('.modal-circle').on('click', function() {
//     let target = $(this).data('target')
//     if (target != null && target != '') {
//         console.log(target)
//         $(`#${target}`).modal('show')
//     }
// })