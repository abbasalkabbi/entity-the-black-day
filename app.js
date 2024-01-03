const div_show_img=document.querySelector(".gallery .show-img")
const div_next=document.querySelector(".gallery .next")
const div_pref=document.querySelector(".gallery .previous")
div_show_img.style.display='none'
div_next.style.display='none'
div_pref.style.display='none'


function div_img(url,action){
    if(action=="hide"){
        div_show_img.style.display='none'
        div_next.style.display='none'
        div_pref.style.display='none'
    }
    if(action=='show'){
        div_show_img.style.backgroundImage=`url(./assets/${url})`
        div_show_img.style.display='block'
        div_next.style.display='block'
        div_pref.style.display='block'
    }
    // mext
    if(action=="next"){
        console.log(div_show_img.style.backgroundImage)
        switch (div_show_img.style.backgroundImage) {
            case 'url("./assets/main_img-1.jpg")':
                div_show_img.style.backgroundImage=`url(./assets/main_img-2.jpg)`
                break;
            
            case `url("./assets/main_img-2.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-3.jpg)`
                break;
            case `url("./assets/main_img-3.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-4.jpg)`
                break;
            case `url("./assets/main_img-4.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-5.jpg)`
                break;
            case `url("./assets/main_img-5.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-1.jpg)`
                break;
    }
    }
    // end next
    // prev
    if(action=='prev'){
        console.log(div_show_img.style.backgroundImage)
        switch (div_show_img.style.backgroundImage) {
            case 'url("./assets/main_img-1.jpg")':
                div_show_img.style.backgroundImage=`url(./assets/main_img-5.jpg)`
                break;
            
            case `url("./assets/main_img-2.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-1.jpg)`
                break;
            case `url("./assets/main_img-3.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-2.jpg)`
                break;
            case `url("./assets/main_img-4.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-3.jpg)`
                break;
            case `url("./assets/main_img-5.jpg")`:
                div_show_img.style.backgroundImage=`url(./assets/main_img-4.jpg)`
                break;
    }
    }
    // prev End
}
function show(url,action){
div_img(url,action)
}