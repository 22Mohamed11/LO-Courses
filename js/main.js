var toTop=document.querySelector('.toTop');

window.onscroll=()=>{
    console.log(scrollY);
    if(window.scrollY>=300){
        toTop.classList.add("upactive");
    }else{
        toTop.classList.remove("upactive");
    }
}
toTop.addEventListener("click",()=>{
    window.scrollTo(0,0)
})